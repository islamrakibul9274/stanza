import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, ShieldCheck, ArrowRight } from 'lucide-react';
import GlassButton from '../atoms/GlassButton';

const SecurePortal = () => {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [accessKey, setAccessKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // 🌐 Unified API routing
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const endpoint = authMode === 'login' ? 'handshake' : 'register';
    const payload = authMode === 'login'
      ? { email, accessKey }
      : { email, accessKey, neuralId: "AETHER_NODE_01", tier: "IMMORTAL" };

    try {
      // 🛡️ Fixed: Dynamic routing via Vercel Environment Variables
      const response = await fetch(`${API_URL}/api/auth/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('aether_token', data.token);
        console.log("🟢 AUTH_SUCCESS:", data.msg);
        // Warp immediately—no biometric waiting room
        navigate('/');
      } else {
        alert(`DATA_SYNC_ERROR: ${data.msg}`);
      }
    } catch (error) {
      console.error("NEURAL_LINK_CRITICAL_FAILURE", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="secure-portal" className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden px-6">
      {/* 🌌 Background Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-glow/5 rounded-full blur-[150px] -z-10 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel glass-edge w-full max-w-md p-10 relative overflow-hidden shadow-[0_0_100px_rgba(16,185,129,0.1)]"
      >
        {/* 🏛️ Portal Header */}
        <div className="text-center mb-10">
          <div className="inline-flex p-3 rounded-2xl bg-primary-glow/10 border border-primary-glow/20 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <ShieldCheck className="text-primary-glow" size={24} />
          </div>
          <h2 className="font-accent text-3xl font-bold text-white tracking-tighter uppercase leading-none">
            {authMode === 'login' ? 'Access' : 'Initialize'} <span className="text-primary-glow">Portal</span>
          </h2>
          <p className="mt-3 text-white/30 text-[9px] font-accent tracking-[0.3em] uppercase">
            AetherOS Security Protocol v4.2.0
          </p>
        </div>

        {/* ⌨️ Input Fields */}
        <form onSubmit={handleAuth} className="space-y-6">
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary-glow transition-colors">
              <Mail size={16} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="NEURAL_ID@AETHER.OS"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 font-accent text-[10px] text-white outline-none focus:border-primary-glow/50 focus:bg-primary-glow/5 transition-all placeholder:text-white/10 uppercase tracking-[0.2em]"
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary-glow transition-colors">
              <Lock size={16} />
            </div>
            <input
              type="password"
              value={accessKey}
              onChange={(e) => setAccessKey(e.target.value)}
              placeholder="ACCESS_KEY"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 font-accent text-[10px] text-white outline-none focus:border-primary-glow/50 focus:bg-primary-glow/5 transition-all placeholder:text-white/10 uppercase tracking-[0.2em]"
              required
            />
          </div>

          <GlassButton 
            className="w-full flex items-center justify-center gap-3 py-4 text-[11px] tracking-[0.2em] disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'SYNCING...' : authMode === 'login' ? 'ESTABLISH LINK' : 'CREATE CORE'} 
            {!isLoading && <ArrowRight size={14} />}
          </GlassButton>
        </form>

        <div className="mt-10 text-center">
          <button
            onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
            className="font-accent text-[9px] font-bold tracking-[0.2em] text-white/20 hover:text-primary-glow transition-all uppercase"
          >
            {authMode === 'login'
              ? "New Neural Signature? Initialize Here"
              : "Existing Node Detected? Access Portal"}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default SecurePortal;