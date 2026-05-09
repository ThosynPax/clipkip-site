import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [connecting, setConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();
  const [plan, setPlan] = useState('free');

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
        // The content script will pick this up
        window.postMessage({
            type: "KARPTURE_CONNECT",
            token: session.access_token,
            user: {
                id: session.user.id,
                email: session.user.email
            }
        }, "*");

        // Listen for success message from extension (optional but good)
        setTimeout(() => {
            setConnecting(false);
            setIsConnected(true);
            localStorage.setItem('karpture_extension_connected', 'true');
        }, 1500);
    }
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
                disabled={connecting || isConnected}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${isConnected ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-white border border-dark/5 text-dark hover:bg-gray-50'}`}
             >
                {connecting ? 'Connecting...' : isConnected ? 'Extension Connected' : 'Connect Extension'}
             </button>
             <a href="/upgrade" className="bg-brand text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-brand/20 hover:scale-105 transition-all">
                Upgrade to Pro
             </a>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[2rem] border border-dark/5 shadow-sm">
            <p className="text-[10px] font-bold text-dark/30 uppercase tracking-widest mb-2">Extension Status</p>
            <p className={`text-xl font-bold flex items-center gap-2 ${isConnected ? 'text-green-500' : 'text-dark/20'}`}>
              <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-dark/10'}`} />
              {isConnected ? 'Connected' : 'Not Connected'}
            </p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-dark/5 shadow-sm">
            <p className="text-[10px] font-bold text-dark/30 uppercase tracking-widest mb-2">Storage Model</p>
            <p className="text-xl font-bold text-dark italic">Local-Only</p>
          </div>
          <div className="bg-white p-8 rounded-[2rem] border border-dark/5 shadow-sm">
            <p className="text-[10px] font-bold text-dark/30 uppercase tracking-widest mb-2">Privacy Status</p>
            <p className="text-xl font-bold text-dark">Maximum</p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-[2.5rem] border border-dark/5 shadow-sm overflow-hidden p-20 text-center">
            <div className="max-w-md mx-auto space-y-6">
                <div className="w-16 h-16 bg-brand/5 text-brand rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg width={32} height={32} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
                <h2 className="text-2xl font-extrabold text-dark">Strict Privacy Mode</h2>
                <p className="text-sm font-medium text-dark/40 leading-relaxed">
                    For your security, Karpture does not store your captures in the cloud. Your research history lives exclusively on your device within the browser extension.
                </p>
                <div className="pt-4">
                    <button 
                        onClick={handleConnectExtension}
                        className="bg-dark text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-dark/90 transition-all"
                    >
                        {isConnected ? 'View Extension' : 'Initialize Connection'}
                    </button>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
