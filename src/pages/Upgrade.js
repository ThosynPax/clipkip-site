import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';

const Upgrade = () => {
    const navigate = useNavigate();

    const features = [
        "Cloud Sync & Web Dashboard",
        "AI Topic Clustering & Smart Grouping",
        "Full search across all time",
        "Unlimited memory history",
        "Focus Mode & Ignore Sources",
        "Export all memories (HTML/JSON)",
        "Priority support"
    ];

    return (
        <div className="min-h-screen bg-brand-light flex items-center justify-center p-6">
            <div className="max-w-xl w-full bg-white rounded-[3rem] shadow-2xl shadow-brand/10 p-12 border border-dark/5 relative overflow-hidden">
                {/* Back Button */}
                <button 
                    onClick={() => navigate('/dashboard')}
                    className="absolute top-8 left-8 text-dark/30 hover:text-brand transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                >
                    <ArrowLeft size={16} /> Back to Dashboard
                </button>

                <div className="text-center mt-8 mb-12">
                    <div className="inline-block px-4 py-1.5 bg-brand/5 text-brand text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">
                        Premium Access
                    </div>
                    <h1 className="text-4xl font-black text-dark mb-4 tracking-tight">Karpture Pro</h1>
                    <div className="flex items-baseline justify-center gap-1">
                        <span className="text-2xl font-bold text-dark/20">$</span>
                        <span className="text-6xl font-black text-dark tracking-tighter">5</span>
                        <span className="text-sm font-bold text-dark/30 uppercase tracking-widest">/ month</span>
                    </div>
                </div>

                <div className="space-y-4 mb-12">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-dark/5">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                                <Check size={14} className="text-brand" strokeWidth={3} />
                            </div>
                            <span className="text-sm font-bold text-dark/70">{feature}</span>
                        </div>
                    ))}
                </div>

                <a 
                    href="https://buy.polar.sh/polar_cl_HDV1vjg1vzsYsGx6F1Unl0ucGs33BxHonQcOx4WeBfO"
                    className="w-full bg-brand text-white py-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 active:scale-95 flex items-center justify-center gap-3"
                >
                    Upgrade to Pro — $5/mo
                </a>

                <p className="text-center mt-8 text-[10px] font-bold text-dark/20 uppercase tracking-widest">
                    Secure checkout powered by Polar.sh
                </p>
            </div>
        </div>
    );
};

export default Upgrade;
