import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Monitor, Cpu, Terminal, Zap } from 'lucide-react';
import { useCommandCenter } from '../../store/useCommandCenter';
import { Link, useNavigate } from 'react-router-dom';

const CommandCenter = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 🧠 Connect to our Global State (Zustand)
    const { isProcessing, setBlur, simulateAITask } = useCommandCenter();

    useEffect(() => {
        const handleToggle = () => setIsOpen(!isOpen);
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen(!isOpen);
            }
        };
        window.addEventListener('toggle-command-center', handleToggle);
        window.addEventListener('keydown', handleKey);
        return () => {
            window.removeEventListener('toggle-command-center', handleToggle);
            window.removeEventListener('keydown', handleKey);
        };
    }, [isOpen]);

    // ⚡ Logic for the "Neural Simulation" button
    const handleAction = async (task: string) => {
        const result = await simulateAITask(task);
        console.log(result); // This will eventually show up in a HUD console
    };
    const navigate = useNavigate();

    const portals = [
        { name: 'AI Writing Assistant', icon: <Cpu size={18} />, path: '/workspace' },
        { name: 'Quantum Analytics', icon: <Zap size={18} />, path: '/analytics' },
        { name: 'Neural CRM', icon: <Monitor size={18} />, path: '/crm' },
        { name: 'Secure Portal', icon: <Terminal size={18} />, path: '/auth' }
    ];

    const handleNavigate = (path: string) => {
        navigate(path);
        setIsOpen(false); // Close the HUD after jumping
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        exit={{ opacity: 0, scale: 0.9, rotateX: -20 }}
                        className="glass-panel w-full max-w-2xl p-2 shadow-[0_0_100px_rgba(16,185,129,0.2)] glass-edge"
                    >
                        {/* 1. Search Bar */}
                        <div className="flex items-center border-b border-white/10 p-4">
                            <Search className="mr-3 text-primary-glow" size={20} />
                            <input
                                autoFocus
                                placeholder="Access Neural Portals..."
                                className="w-full bg-transparent font-accent text-lg text-white outline-none placeholder:text-white/20"
                            />
                        </div>

                        {/* 2. Portal List */}
                        <div className="grid grid-cols-1 p-4 gap-2">
                            <p className="px-2 pb-2 font-accent text-[10px] tracking-widest text-white/30 uppercase">Neural Portals</p>
                            {portals.map((portal) => (
                                <button
                                    key={portal.name}
                                    onClick={() => handleNavigate(portal.path)}
                                    className="flex items-center gap-4 rounded-xl p-3 text-white/60 transition-all hover:bg-primary-glow/10 hover:text-primary-glow text-left"
                                >
                                    {portal.icon}
                                    <span className="font-accent text-sm font-medium">{portal.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* 🛠️ NEW: System Calibration Section */}
                        <div className="grid grid-cols-1 p-4 gap-6 border-t border-white/10">
                            <div className="space-y-4">
                                <p className="px-2 font-accent text-[8px] tracking-[0.4em] text-white/20 uppercase">System Calibration</p>
                                <div className="flex items-center justify-between glass-panel p-4 bg-white/5 border-white/5">
                                    <span className="text-xs font-accent text-white/60">GLASS_BLUR_INTENSITY</span>
                                    <input
                                        type="range" min="0" max="40"
                                        onChange={(e) => setBlur(`${e.target.value}px`)}
                                        className="accent-primary-glow"
                                    />
                                </div>
                            </div>

                            {/* 🛠️ NEW: Neural Simulation Section */}
                            <div className="space-y-2">
                                <p className="px-2 font-accent text-[8px] tracking-[0.4em] text-white/20 uppercase">Neural Simulation</p>
                                <button
                                    onClick={() => handleAction("SYNC_DATABASE")}
                                    className="w-full text-left p-4 rounded-xl hover:bg-primary-glow/10 text-white/40 hover:text-primary-glow transition-all flex items-center justify-between group"
                                >
                                    <span className="font-accent text-xs">
                                        {isProcessing ? "PROCESSING PROTOCOL..." : "> EXECUTE_DATABASE_SYNC"}
                                    </span>
                                    <Zap size={14} className={isProcessing ? "animate-spin" : "opacity-0 group-hover:opacity-100"} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandCenter;