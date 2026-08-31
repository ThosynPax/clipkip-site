import React, { useEffect, useState, useMemo } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import LogoWhite from '../assets/img/logo-white.png';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  Sparkles, 
  Lock, 
  ArrowRight, 
  LogOut, 
  Globe 
} from 'lucide-react';

const CLUSTER_COLORS = [
  '#3b82f6', // blue
  '#22c55e', // green
  '#eab308', // yellow
  '#a855f7', // purple
  '#ec4899', // pink
  '#06b6d4', // cyan
];

// Fallback demo clips to demonstrate clustering when local storage has fewer clips
const DEMO_CLIPS = [
  {
    id: 'demo-1',
    text: "Building a startup is 10% original idea and 90% scaling, learning rapidly, and documenting every breakthrough along the journey.",
    date: new Date(Date.now() - 2 * 3600000).toISOString(),
    url: "https://news.ycombinator.com",
    title: "Hacker News - Startup Scaling",
    topic: "Startup scaling advice"
  },
  {
    id: 'demo-2',
    text: "Product-market fit isn't a single milestone, it's a moving target where customer retention tells the real story.",
    date: new Date(Date.now() - 5 * 3600000).toISOString(),
    url: "https://substack.com",
    title: "SaaS Playbook",
    topic: "Startup scaling advice"
  },
  {
    id: 'demo-3',
    text: "The future of productivity is local-first, privacy-respecting AI tools that live alongside your workflows.",
    date: new Date(Date.now() - 24 * 3600000).toISOString(),
    url: "https://wired.com",
    title: "Wired - Local-First Software",
    topic: "Privacy-first tools"
  },
  {
    id: 'demo-4',
    text: "Zero-knowledge encryption guarantees that server operators and third parties can never inspect user clipboard data.",
    date: new Date(Date.now() - 48 * 3600000).toISOString(),
    url: "https://github.com",
    title: "Security Best Practices",
    topic: "Privacy-first tools"
  },
  {
    id: 'demo-5',
    text: "Always sanitize authorization headers and enforce token expiration on serverless proxy endpoints.",
    date: new Date(Date.now() - 36 * 3600000).toISOString(),
    url: "https://owasp.org",
    title: "OWASP API Security",
    topic: "Security snippets"
  }
];

function assignTopic(item) {
  if (item.topic) return item.topic;
  const text = (item.text || item.title || '').toLowerCase();
  const url = (item.url || '').toLowerCase();

  if (text.includes('startup') || text.includes('scale') || text.includes('growth') || text.includes('saas') || text.includes('product') || url.includes('news.ycombinator') || url.includes('sub')) {
    return 'Startup scaling advice';
  }
  if (text.includes('privacy') || text.includes('local') || text.includes('storage') || text.includes('encrypt') || text.includes('cookie') || text.includes('chrome')) {
    return 'Privacy-first tools';
  }
  if (text.includes('security') || text.includes('auth') || text.includes('token') || text.includes('jwt') || text.includes('api') || text.includes('key') || text.includes('sql') || text.includes('code')) {
    return 'Security snippets';
  }
  if (text.includes('ai') || text.includes('model') || text.includes('prompt') || text.includes('agent') || text.includes('llm')) {
    return 'AI & Intelligence';
  }
  return 'Productivity & Research';
}

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [plan, setPlan] = useState('free');
  const [, setIsConnected] = useState(false);
  const [clips, setClips] = useState([]);
  const [recentCount, setRecentCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCluster, setSelectedCluster] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const navigate = useNavigate();

  // 1. Listen for extension connection responses
  useEffect(() => {
    const handleExtensionMessages = (event) => {
      if (event.data && event.data.type === "KARPTURE_STATUS_RESPONSE") {
        const hasConnection = event.data.connected;
        setIsConnected(hasConnection);
        if (hasConnection) {
          localStorage.setItem('karpture_extension_connected', 'true');
        }

        if (event.data.clips && event.data.clips.length > 0) {
          setClips(event.data.clips);
          localStorage.setItem('karpture_cached_clips', JSON.stringify(event.data.clips));
        }

        if (typeof event.data.recentCount === 'number') {
          setRecentCount(event.data.recentCount);
        }
      }
    };

    window.addEventListener("message", handleExtensionMessages);

    // Initial check query
    const checkTimer = setTimeout(() => {
      window.postMessage({ type: "KARPTURE_GET_STATUS" }, "*");
    }, 400);

    return () => {
      window.removeEventListener("message", handleExtensionMessages);
      clearTimeout(checkTimer);
    };
  }, []);

  // 2. Load Auth session and Subscription Status
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
        return;
      }

      setUser(session.user);

      // Check / Sync Profile & Subscription from Supabase
      const { data: sub, error: subError } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', session.user.id)
        .single();

      if (subError && subError.code === 'PGRST116') {
        // Profile doesn't exist, create it (Free Plan)
        await supabase.from('subscriptions').insert([{
          user_id: session.user.id,
          plan: 'free',
          status: 'active'
        }]);
        setPlan('free');
      } else if (sub) {
        setPlan(sub.plan || 'free');
      }

      // Load cached clips from local storage if available
      try {
        const cached = localStorage.getItem('karpture_cached_clips');
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setClips(parsed);
          }
        }
      } catch (e) {
        // ignore parse error
      }

      // Automatically connect extension if user has active Pro session
      window.postMessage({
        type: "KARPTURE_CONNECT",
        token: session.access_token,
        user: {
          id: session.user.id,
          email: session.user.email
        }
      }, "*");

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'dashboard_viewed', {
          plan: sub?.plan || 'free'
        });
      }

      setLoading(false);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/login');
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('karpture_extension_connected');
    navigate('/login');
  };

  const handleCopy = (clip) => {
    navigator.clipboard.writeText(clip.text || '');
    setCopiedId(clip.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Combine real clips with demo fallback to ensure topics and richness are visible
  const activeClips = useMemo(() => {
    if (clips.length >= 5) return clips;
    const combined = [...clips];
    DEMO_CLIPS.forEach(demo => {
      if (!combined.some(c => c.text === demo.text)) {
        combined.push(demo);
      }
    });
    return combined;
  }, [clips]);

  // Compute clusters / topics dynamically
  const clusters = useMemo(() => {
    const map = {};
    activeClips.forEach(item => {
      const topic = assignTopic(item);
      if (!map[topic]) {
        map[topic] = { name: topic, clips: [] };
      }
      map[topic].clips.push(item);
    });

    return Object.values(map).sort((a, b) => b.clips.length - a.clips.length);
  }, [activeClips]);

  // Filter clips based on Search Query and Selected Cluster
  const filteredClips = useMemo(() => {
    return activeClips.filter(clip => {
      const matchesCluster = selectedCluster ? assignTopic(clip) === selectedCluster : true;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCluster;

      const text = (clip.text || '').toLowerCase();
      const title = (clip.title || '').toLowerCase();
      const url = (clip.url || '').toLowerCase();
      const topic = assignTopic(clip).toLowerCase();

      const matchesSearch = text.includes(query) || title.includes(query) || url.includes(query) || topic.includes(query);
      return matchesCluster && matchesSearch;
    });
  }, [activeClips, searchQuery, selectedCluster]);

  const username = user?.email ? user.email.split('@')[0] : 'User';
  const displayRecentCount = recentCount > 0 ? recentCount : Math.min(3, activeClips.length);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d0d0f]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand"></div>
      </div>
    );
  }

  // ─────────────────────────────────────────────
  // Free User Gated Dashboard Screen
  // ─────────────────────────────────────────────
  if (plan !== 'pro') {
    return (
      <div className="min-h-screen bg-[#0d0d0f] text-white flex flex-col justify-between p-6 md:p-12 relative overflow-hidden font-sans">
        {/* Background glow accents */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Navbar */}
        <header className="flex items-center justify-between z-10 max-w-5xl mx-auto w-full">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={LogoWhite} alt="Karpture" className="h-8 w-auto" />
          </a>

          <div className="flex items-center gap-4">
            <span className="text-xs text-white/50 hidden sm:inline">{user?.email}</span>
            <button 
              onClick={handleLogout}
              className="text-xs font-bold text-white/40 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        </header>

        {/* Main Gated Content */}
        <main className="max-w-2xl mx-auto w-full text-center my-auto z-10 py-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/30 text-brand text-[11px] font-black uppercase tracking-widest mb-6">
            <Lock size={12} /> Pro Cloud Access Required
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            Unlock Your Cloud Dashboard & AI Topic Clusters
          </h1>

          <p className="text-sm md:text-base text-white/60 mb-10 max-w-lg mx-auto leading-relaxed">
            Connecting your account unlocks dual storage (Local + Cloud Database), real-time search across all history, and automatic topic grouping.
          </p>

          {/* Value Preview Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
            <div className="bg-[#18181b] p-5 rounded-2xl border border-white/5 shadow-xl">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                <Globe size={16} />
              </div>
              <p className="text-xs font-bold text-white mb-1">Dual Cloud Storage</p>
              <p className="text-[11px] text-white/40 leading-relaxed">Never lose a memory even if you switch browsers or devices.</p>
            </div>

            <div className="bg-[#18181b] p-5 rounded-2xl border border-white/5 shadow-xl">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center mb-3">
                <Sparkles size={16} />
              </div>
              <p className="text-xs font-bold text-white mb-1">AI Topic Clustering</p>
              <p className="text-[11px] text-white/40 leading-relaxed">Automatically organizes your raw snippets into smart topics.</p>
            </div>

            <div className="bg-[#18181b] p-5 rounded-2xl border border-white/5 shadow-xl">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
                <Search size={16} />
              </div>
              <p className="text-xs font-bold text-white mb-1">Search Across Time</p>
              <p className="text-[11px] text-white/40 leading-relaxed">Instant search through months of captures with zero latency.</p>
            </div>
          </div>

          <a 
            href="https://buy.polar.sh/polar_cl_HDV1vjg1vzsYsGx6F1Unl0ucGs33BxHonQcOx4WeBfO"
            onClick={() => {
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'upgrade_clicked', { source: 'dashboard_gated_cta' });
              }
            }}
            className="inline-flex items-center justify-center gap-3 bg-brand text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand/25"
          >
            Upgrade to Pro — $5/month <ArrowRight size={16} />
          </a>

          <p className="mt-4 text-[11px] font-bold text-white/30 uppercase tracking-widest">
            Secure checkout powered by Polar.sh • Cancel anytime
          </p>
        </main>

        <footer className="text-center text-xs text-white/30 z-10">
          Karpture • Privacy First Architecture
        </footer>
      </div>
    );
  }

  // ─────────────────────────────────────────────
  // Pro Active Dashboard (Matching Second Screenshot)
  // ─────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#111113] text-white p-6 md:p-12 font-sans selection:bg-brand/30 selection:text-white">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Brand Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/5">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={LogoWhite} alt="Karpture" className="h-7 w-auto" />
          </a>
          <div className="flex items-center gap-4">
            <span className="text-xs text-white/50 hidden sm:inline">{user?.email}</span>
            <button 
              onClick={handleLogout}
              className="text-xs font-bold text-white/40 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>

        {/* Top Greeting Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Welcome back, {username}
            </h1>
            <p className="text-sm font-medium text-white/50 mt-1">
              {displayRecentCount} new captures since your last visit
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Pro Active
            </span>
          </div>
        </header>

        {/* Top 3 Stat Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Metric 1 */}
          <div>
            <p className="text-xs font-medium text-white/40 mb-1.5">Captured memories</p>
            <p className="text-3xl md:text-4xl font-black text-white tracking-tight">
              {activeClips.length} clips
            </p>
          </div>

          {/* Metric 2 */}
          <div>
            <p className="text-xs font-medium text-white/40 mb-1.5">Clusters found</p>
            <p className="text-3xl md:text-4xl font-black text-white tracking-tight">
              {clusters.length} topics
            </p>
          </div>

          {/* Metric 3 */}
          <div>
            <p className="text-xs font-medium text-white/40 mb-1.5">This week</p>
            <p className="text-3xl md:text-4xl font-black text-white tracking-tight">
              +{displayRecentCount} saved
            </p>
          </div>
        </div>

        {/* Search Input Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/30">
            <Search size={18} />
          </div>
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search everything you've saved"
            className="w-full bg-[#18181b] border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all shadow-inner"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-bold text-white/40 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Your Clusters (Auto-grouped) Container */}
        <div className="bg-[#18181b] rounded-3xl border border-white/10 p-6 md:p-8 shadow-2xl relative">
          
          {/* Card Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/5">
            <h2 className="text-base font-bold text-white tracking-tight">
              Your clusters
            </h2>
            <span className="text-xs font-medium text-white/40">
              Auto-grouped
            </span>
          </div>

          {/* Cluster Rows */}
          <div className="divide-y divide-white/5">
            {clusters.map((cluster, idx) => {
              const dotColor = CLUSTER_COLORS[idx % CLUSTER_COLORS.length];
              const isSelected = selectedCluster === cluster.name;

              return (
                <div 
                  key={cluster.name}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedCluster(null);
                    } else {
                      setSelectedCluster(cluster.name);
                      setIsExpanded(true);
                      if (typeof window.gtag === 'function') {
                        window.gtag('event', 'cluster_clicked', { cluster_name: cluster.name });
                      }
                    }
                  }}
                  className={`flex items-center justify-between py-5 px-3 rounded-xl cursor-pointer transition-all ${isSelected ? 'bg-white/10' : 'hover:bg-white/5'}`}
                >
                  <div className="flex items-center gap-3.5">
                    <span 
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: dotColor }}
                    />
                    <span className="text-sm font-semibold text-white/90">
                      {cluster.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-white/50">
                      {cluster.clips.length} clips
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Expand / Collapse Toggle Arrow */}
          <div className="pt-6 flex justify-center border-t border-white/5">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white flex items-center justify-center transition-all"
              title={isExpanded ? "Collapse clips list" : "Expand clips list"}
            >
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>

          {/* Expanded Clips Explorer */}
          {isExpanded && (
            <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs text-white/40 mb-2">
                <span>
                  {selectedCluster ? `Showing clips in "${selectedCluster}"` : `All captures (${filteredClips.length})`}
                </span>
                {selectedCluster && (
                  <button 
                    onClick={() => setSelectedCluster(null)}
                    className="text-brand hover:underline font-bold"
                  >
                    View all clusters
                  </button>
                )}
              </div>

              {filteredClips.length === 0 ? (
                <p className="text-center py-8 text-xs text-white/40">
                  No memories match your search query.
                </p>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  {filteredClips.map((clip) => (
                    <div 
                      key={clip.id}
                      className="p-4 bg-[#202024] rounded-2xl border border-white/5 hover:border-white/15 transition-all group relative"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-sm text-white/80 leading-relaxed font-normal">
                          {clip.text}
                        </p>
                        <button 
                          onClick={() => handleCopy(clip)}
                          className="p-2 rounded-lg bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
                          title="Copy text"
                        >
                          {copiedId === clip.id ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                        </button>
                      </div>

                      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/5 text-[11px] text-white/40">
                        {clip.url && (
                          <a 
                            href={clip.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-brand transition-colors flex items-center gap-1 truncate max-w-xs"
                          >
                            <Globe size={11} /> {clip.url.replace(/^https?:\/\//, '')}
                          </a>
                        )}
                        <span className="ml-auto">
                          {clip.date ? new Date(clip.date).toLocaleDateString() : 'Recent'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
