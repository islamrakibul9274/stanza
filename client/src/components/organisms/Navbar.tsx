import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { LucideCommand, LucideLayers, LogOut, ShieldCheck, User as UserIcon } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const token = localStorage.getItem('aether_token');

  // 📡 Profile Handshake: Fetch identity on mount
  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) return;

      try {
        const response = await fetch('http://localhost:5001/api/auth/me', {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
          // Optional: Store tier globally for UI gating
          localStorage.setItem('user_tier', data.tier);
        } else {
          // Token might be expired or invalid
          terminateSession();
        }
      } catch (error) {
        console.error("IDENTITY_SYNC_FAILURE", error);
      }
    };

    fetchProfile();
  }, [token]);

  const terminateSession = () => {
    localStorage.clear();
    navigate('/auth');
    window.location.reload();
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="glass-panel fixed top-6 left-1/2 z-[60] flex w-[90%] -translate-x-1/2 items-center justify-between px-8 py-4 glass-edge shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
    >
      {/* 🔮 Brand */}
      <Link to="/" className="flex items-center gap-2 group">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-glow to-secondary-glow shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:rotate-90 transition-all duration-500" />
        <span className="font-accent text-xl font-bold tracking-tighter text-white">
          AETHER<span className="text-primary-glow">OS</span>
        </span>
      </Link>

      {/* 🚥 Navigation */}
      <div className="hidden items-center gap-8 md:flex">
        {['Home', 'Analytics', 'Pricing', 'Docs', 'Blog'].map((name) => (
          <NavLink 
            key={name} 
            to={name === 'Home' ? '/' : `/${name.toLowerCase()}`} 
            className={({ isActive }) => 
              `font-accent text-[9px] font-bold tracking-[0.3em] transition-all hover:text-primary-glow ${
                isActive ? 'text-primary-glow' : 'text-white/40'
              }`
            }
          >
            {name.toUpperCase()}
          </NavLink>
        ))}
      </div>

      {/* 🔐 Auth & Identity Controls */}
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4">
             {/* 🎖️ Identity Badge */}
            <div className="hidden lg:flex flex-col items-end">
              <span className="font-accent text-[8px] font-black text-white/60 tracking-widest uppercase">
                {user.neuralId || 'NODE_SYNCED'}
              </span>
              <span className="font-accent text-[7px] font-bold text-primary-glow tracking-[0.2em] uppercase">
                {user.tier} TIER
              </span>
            </div>

            <button 
              onClick={terminateSession}
              className="flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/20 p-2 text-red-500 transition-all hover:bg-red-500 hover:text-white group"
            >
              <LogOut size={16} />
            </button>
          </div>
        ) : (
          <Link 
            to="/auth" 
            className="flex items-center gap-2 rounded-full bg-primary-glow p-2 text-black transition-all hover:scale-110"
          >
            <ShieldCheck size={16} />
          </Link>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;