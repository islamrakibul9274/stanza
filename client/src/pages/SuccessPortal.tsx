import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassButton from '../components/atoms/GlassButton';

const SuccessPortal = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, z: -50 }}
        animate={{ opacity: 1, scale: 1, z: 0 }}
        className="glass-panel glass-edge max-w-xl w-full p-12 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-glow to-transparent shadow-[0_0_15px_#10b981]" />
        
        <div className="relative mb-8 inline-block">
          <ShieldCheck size={80} className="text-primary-glow mx-auto" />
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-primary-glow rounded-full blur-2xl"
          />
        </div>

        <h1 className="font-accent text-4xl font-bold text-white uppercase tracking-tighter mb-4">Sync <span className="text-primary-glow">Established</span></h1>
        <p className="text-white/40 text-sm font-accent tracking-widest uppercase mb-12">Protocol successfully integrated into the Aether Mesh.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="glass-panel p-4 border-white/5 text-left">
            <p className="text-[8px] text-white/20 font-bold tracking-[0.3em] uppercase mb-1">TX_ID</p>
            <p className="text-[10px] text-primary-glow font-mono">0X_AETHER_4299_SYNC</p>
          </div>
          <div className="glass-panel p-4 border-white/5 text-left">
            <p className="text-[8px] text-white/20 font-bold tracking-[0.3em] uppercase mb-1">STATUS</p>
            <p className="text-[10px] text-white font-accent">IMMORTAL_TIER_ACTIVE</p>
          </div>
        </div>

        <Link to="/workspace">
          <GlassButton className="w-full flex items-center justify-center gap-3">
            ENTER WORKSPACE <ArrowRight size={16} />
          </GlassButton>
        </Link>
      </motion.div>
    </div>
  );
};

export default SuccessPortal;