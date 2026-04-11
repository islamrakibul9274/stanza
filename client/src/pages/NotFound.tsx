import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SearchX, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center relative">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="relative z-10"
        >
          <SearchX size={120} className="text-white/5 mx-auto mb-8 stroke-[1px]" />
          <h1 className="font-accent text-[120px] font-bold text-white tracking-tighter leading-none opacity-10">404</h1>
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <h2 className="font-accent text-3xl font-bold text-white uppercase tracking-tighter mb-4">Node <span className="text-primary-glow">Lost</span></h2>
          <p className="text-white/40 font-accent text-[10px] tracking-[0.4em] uppercase mb-12">Transmission out of range. Recenter to core.</p>
          
          <Link to="/">
            <button className="glass-panel glass-edge px-8 py-4 font-accent text-[10px] font-bold tracking-[0.3em] text-primary-glow hover:bg-primary-glow/10 transition-all flex items-center gap-3">
              <ArrowLeft size={14} /> RECENTER NODE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;