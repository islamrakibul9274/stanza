import React from 'react';
import { motion } from 'framer-motion';

interface GlassButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlassButton = ({ children, className = "", onClick }: GlassButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`glass-panel glass-edge group relative px-8 py-3 transition-all duration-300 ${className}`}
    >
      {/* Magnetic Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-primary-glow/0 opacity-0 blur-xl transition-all duration-500 group-hover:bg-primary-glow/20 group-hover:opacity-100" />
      
      <span className="relative z-10 font-accent text-sm font-bold tracking-widest text-white transition-colors group-hover:text-primary-glow">
        {children}
      </span>
    </motion.button>
  );
};

export default GlassButton;