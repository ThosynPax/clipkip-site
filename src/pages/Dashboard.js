import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [connecting, setConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [extensionStats, setExtensionStats] = useState({ itemCount: 0, activeSession: false });
  const navigate = useNavigate();
  const [plan, setPlan] = useState('free');

  useEffect(() => {
    const handleExtensionMessages = (event) => {
      if (event.data && event.data.type === "KARPTURE_STATUS_RESPONSE") {
        setIsConnected(event.data.connected);
        setExtensionStats({
          itemCount: event.data.itemCount,
          activeSession: event.data.activeSession
        });
        if (event.data.connected) {
          localStorage.setItem('karpture_extension_connected', 'true');
        } else {
          localStorage.removeItem('karpture_extension_connected');
        }
      }
    };

    window.addEventListener("message", handleExtensionMessages);

    // Initial check query
    const checkTimer = setTimeout(() => {
      window.postMessage({ type: "KARPTURE_GET_STATUS" }, "*");
    }, 600);

    return () => {
      window.removeEventListener("message", handleExtensionMessages);
      clearTimeout(checkTimer);
    };
  }, []);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
      } else {
        setUser(session.user);
        
        // Provision / Check Profile
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
            setPlan(sub.plan);
        }

        const connected = localStorage.getItem('karpture_extension_connected') === 'true';
        setIsConnected(connected);

        // Auto-push connection event to the extension if session is active
        window.postMessage({
            type: "KARPTURE_CONNECT",
            token: session.access_token,
            user: {
                id: session.user.id,
                email: session.user.email
            }
        }, "*");
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

  const handleConnectExtension = async () => {
    setConnecting(true);
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session) {
        // Send message to extension via window.postMessage
        window.postMessage({
            type: "KARPTURE_CONNECT",
            token: session.access_token,
            user: {
                id: session.user.id,
                email: session.user.email
            }
        }, "*");

        // Re-query extension status immediately after connecting
        setTimeout(() => {
            window.postMessage({ type: "KARPTURE_GET_STATUS" }, "*");
            setConnecting(false);
        }, 1500);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Visual feedback handled by extension content script tooltip
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-light">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-dark/5 p-8 flex flex-col">
        <div className="text-2xl font-black text-dark mb-12">Karpture</div>
        
        <nav className="flex-1 space-y-2">
          <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-brand/5 text-brand rounded-xl font-bold text-xs uppercase tracking-widest">
            Overview
          </a>
          <a href="/upgrade" className="flex items-center gap-3 px-4 py-3 text-dark/40 hover:bg-gray-50 rounded-xl font-bold text-xs uppercase tracking-widest transition-all">
            Billing
          </a>
        </nav>

        <div className="pt-8 border-t border-dark/5">
          <div className="bg-brand-light p-4 rounded-2xl mb-6">
            <p className="text-[10px] font-bold text-brand uppercase tracking-widest mb-1">{plan} Plan</p>
            <p className="text-xs font-medium text-dark/60">
                {plan === 'pro' ? 'Unlimited history active.' : 'Local storage is active.'}
            </p>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-xs font-bold text-red-500 hover:bg-red-50 rounded-lg transition-all"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-extrabold text-dark">Welcome, {user?.email?.split('@')[0]}</h1>
            <p className="text-sm font-medium text-dark/40">Manage your second brain and extension settings.</p>
          </div>
          <div className="flex items-center gap-4">
             <button 
                onClick={handleConnectExtension}
                disabled={connecting}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${isConnected ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-white border border-dark/5 text-dark hover:bg-gray-50'}`}
             >
                {connecting ? 'Connecting...' : isConnected ? '✓ Sync Connected' : 'Connect Extension'}
             </button>
             <a href="/upgrade" className="bg-brand text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-brand/20 hover:scale-105 transition-all">
                Upgrade to Pro
              </a>
          </div>
        </header>

        {/* Dashboard Metrics */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[2rem] border border-dark/5 shadow-sm">
            <p className="text-[10px] font-bold text-dark/30 uppercase tracking-widest mb-2">Extension Status</p>
            <p className={`text-xl font-bold flex items-center gap-2 ${isConnected ? 'text-green-500' : 'text-dark/20'}`}>
              <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-dark/10'}`} />
              {isConnected ? 'Connected' : 'Not Connected'}
            </p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-dark/5 shadow-sm">
            <p className="text-[10px] font-bold text-dark/30 uppercase tracking-widest mb-2">Captured Memories</p>
            <p className="text-xl font-bold text-dark">{extensionStats.itemCount} clips</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-dark/5 shadow-sm">
            <p className="text-[10px] font-bold text-dark/30 uppercase tracking-widest mb-2">Privacy & Security</p>
            <p className="text-xl font-bold text-dark flex items-center gap-2">
              <svg width="18" height="18" fill="none" stroke="currentColor" className="text-brand" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Maximum
            </p>
          </div>
        </div>

        {/* Dynamic Interactive Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          
          {/* Column 1: Interactive Playroom */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-dark/5 shadow-sm space-y-6">
            <div>
              <span className="bg-brand/10 text-brand px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Playground</span>
              <h2 className="text-2xl font-extrabold text-dark mt-3">Interactive Capture Lab</h2>
              <p className="text-xs font-medium text-dark/40 mt-1">Highlight and copy any segment below to test the Karpture popup in real-time!</p>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-brand-light rounded-2xl relative group border border-brand/5">
                <p className="text-sm font-medium text-dark leading-relaxed pr-10">
                  "Building a startup is 10% original idea and 90% scaling, learning rapidly, and documenting every breakthrough along the journey."
                </p>
                <button 
                  onClick={() => copyToClipboard("Building a startup is 10% original idea and 90% scaling, learning rapidly, and documenting every breakthrough along the journey.")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2.5 rounded-xl border border-dark/5 text-dark/40 hover:text-brand hover:scale-105 active:scale-95 transition-all shadow-sm"
                  title="One-click Copy"
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                </button>
              </div>

              <div className="p-5 bg-brand-light rounded-2xl relative group border border-brand/5">
                <p className="text-sm font-medium text-dark leading-relaxed pr-10">
                  "The future of productivity is local-first, privacy-respecting AI search tools that live alongside your current web browsing workflows."
                </p>
                <button 
                  onClick={() => copyToClipboard("The future of productivity is local-first, privacy-respecting AI search tools that live alongside your current web browsing workflows.")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2.5 rounded-xl border border-dark/5 text-dark/40 hover:text-brand hover:scale-105 active:scale-95 transition-all shadow-sm"
                  title="One-click Copy"
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                </button>
              </div>

              <div className="p-5 bg-brand-light rounded-2xl relative group border border-brand/5">
                <p className="text-sm font-medium text-dark leading-relaxed pr-10">
                  "Sensitive credential found: password_hash = sk-proj-aB89cDEfg1234. (Security check: blurs auto-detected secure hashes for safety)."
                </p>
                <button 
                  onClick={() => copyToClipboard("Sensitive credential found: password_hash = sk-proj-aB89cDEfg1234.")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2.5 rounded-xl border border-dark/5 text-dark/40 hover:text-brand hover:scale-105 active:scale-95 transition-all shadow-sm"
                  title="One-click Copy"
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Memory Health & Stats */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-dark/5 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <span className="bg-green-50 text-green-600 border border-green-100 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Second Brain Stats</span>
              <h2 className="text-2xl font-extrabold text-dark mt-3">Active Brain Index</h2>
              <p className="text-xs font-medium text-dark/40 mt-1">High-fidelity metrics calculated securely from your extension's local storage.</p>
            </div>

            <div className="space-y-6 my-auto">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-dark">
                  <span className="uppercase tracking-widest text-dark/40">Free Storage Limit</span>
                  <span>{extensionStats.itemCount} / 1000 Memories</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-brand transition-all duration-500 rounded-full" 
                    style={{ width: `${Math.min(100, (extensionStats.itemCount / 1000) * 100)}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-2xl border border-dark/5">
                  <p className="text-[10px] font-bold text-dark/30 uppercase tracking-widest mb-1">Active Recording</p>
                  <p className="text-sm font-bold text-dark flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${extensionStats.activeSession ? 'bg-red-500 animate-pulse' : 'bg-dark/10'}`} />
                    {extensionStats.activeSession ? '🔴 In Session' : 'Idle'}
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-dark/5">
                  <p className="text-[10px] font-bold text-dark/30 uppercase tracking-widest mb-1">Local Index Size</p>
                  <p className="text-sm font-bold text-dark italic">~{(extensionStats.itemCount * 0.15).toFixed(2)} KB</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-dark/5">
              <p className="text-[11px] font-medium text-dark/50 leading-relaxed bg-brand-light p-4 rounded-xl border border-brand/5">
                💡 <strong>Privacy First Model</strong>: Your memories never leave your browser. They are held on your device within your secure local sandboxed database and synced seamlessly with this browser page.
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
