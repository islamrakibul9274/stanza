import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Smartphone, Shield, Zap, Layers, ChevronRight } from 'lucide-react';
import GlassButton from '../atoms/GlassButton';

const AppShowcase = () => {
    // 🧬 Define your features here
    const features = [
        { icon: <Shield size={18} />, title: "Secure Handshake", desc: "Biometric-grade encrypted data transitions." },
        { icon: <Zap size={18} />, title: "Hyper-Fluid UI", desc: "Native-speed responsiveness across all viewports." }
    ];

    return (
        <section id="app-showcase" className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-t from-secondary-glow/5 to-transparent">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Content Sequence */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-primary-glow/10 border border-primary-glow/20">
                                <Smartphone className="text-primary-glow" size={20} />
                            </div>
                            <span className="font-accent text-xs font-bold tracking-[0.3em] text-primary-glow uppercase">Mobile Deployment</span>
                        </div>

                        <h2 className="font-accent text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-8">
                            Ethereal <br /> <span className="text-primary-glow">Showcase</span>
                        </h2>

                        <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-lg">
                            Propel your application into the future with our isometric glass overlays.
                            Experience the "Immortal" standard of mobile previews.
                        </p>

                        {/* ✅ FIXED: Corrected mapping logic */}
                        <div className="space-y-8 mb-12">
                            {features.map((item, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="mt-1 text-primary-glow group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-accent text-sm font-bold text-white uppercase tracking-widest mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-white/30 text-xs leading-relaxed max-w-xs uppercase tracking-tighter">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link to="/auth">
                            <GlassButton className="flex items-center gap-2">
                                LAUNCH PORTAL <ChevronRight size={16} />
                            </GlassButton>
                        </Link>
                    </motion.div>

                    {/* Right: Isometric Glass Overlays */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -25, rotateX: 15 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: -15, rotateX: 10 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative perspective-1000 hidden lg:block"
                    >
                        {/* Primary Phone Mockup */}
                        <div className="glass-panel glass-edge w-[280px] h-[580px] mx-auto relative z-20 overflow-hidden rounded-[3rem] border-4 border-white/10 shadow-[0_0_100px_rgba(16,185,129,0.15)] bg-black/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/10 to-transparent" />
                            <div className="p-8">
                                <div className="h-6 w-20 bg-white/10 rounded-full mx-auto mb-12" />
                                <div className="space-y-6">
                                    <div className="h-32 w-full glass-panel bg-white/5 rounded-2xl border-white/5" />
                                    <div className="h-4 w-3/4 bg-white/20 rounded-full" />
                                    <div className="h-4 w-1/2 bg-white/10 rounded-full" />
                                    <div className="h-24 w-full glass-panel bg-primary-glow/5 rounded-2xl border-primary-glow/10" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Glass Overlay Cards */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="glass-panel glass-edge absolute -top-10 -right-10 z-30 p-4 w-48 shadow-2xl border-white/10"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <Layers className="text-primary-glow" size={14} />
                                <span className="text-[8px] font-bold font-accent text-white/40 uppercase">Layer Protocol</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-primary-glow" />
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="glass-panel glass-edge absolute bottom-20 -left-12 z-30 p-5 w-52 shadow-2xl border-white/10"
                        >
                            <div className="h-8 w-8 rounded-full bg-primary-glow/20 flex items-center justify-center mb-3">
                                <Zap className="text-primary-glow" size={16} />
                            </div>
                            <p className="font-accent text-[10px] font-bold text-white tracking-widest uppercase">Real-Time Sync</p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AppShowcase;