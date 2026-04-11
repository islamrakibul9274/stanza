import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, Book, Layers, Cpu, Search } from 'lucide-react';

const MobileHUD = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, path: '/', label: 'HOME' },
    { icon: Cpu, path: '/workspace', label: 'AI' },
    { icon: Search, action: 'toggle-command-center', label: 'CMD' },
    { icon: Book, path: '/docs', label: 'DOCS' },
    { icon: Layers, path: '/auth', label: 'AUTH' }
  ];

  const handleAction = (item: any) => {
    if (item.action === 'toggle-command-center') {
      window.dispatchEvent(new CustomEvent('toggle-command-center'));
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 z-[70] w-[90%] -translate-x-1/2 md:hidden">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-panel glass-edge flex items-center justify-around p-3 bg-white/5 backdrop-blur-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
      >
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          const content = (
            <div className={`flex flex-col items-center gap-1 transition-all ${isActive ? 'text-primary-glow scale-110' : 'text-white/30'}`}>
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="font-accent text-[8px] font-bold tracking-widest">{item.label}</span>
            </div>
          );

          return item.path ? (
            <Link key={idx} to={item.path}>
              {content}
            </Link>
          ) : (
            <button key={idx} onClick={() => handleAction(item)}>
              {content}
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

export default MobileHUD;