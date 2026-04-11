import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, Share2, MessageSquare } from 'lucide-react';

const BlogDetails = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* 🚀 Phase 3: Reading Progress HUD */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary-glow z-[70] origin-left shadow-[0_0_15px_rgba(16,185,129,0.8)]"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-white/30 hover:text-primary-glow font-accent text-[10px] font-bold tracking-widest uppercase mb-12 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Protocols
        </motion.button>

        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-primary-glow/10 border border-primary-glow/20 text-primary-glow px-3 py-1 rounded-full text-[10px] font-bold font-accent tracking-widest uppercase">
              Engineering
            </span>
            <div className="flex items-center gap-2 text-white/20 text-[10px] font-accent uppercase tracking-widest">
              <Clock size={12} /> 12 MIN READ
            </div>
          </div>
          <h1 className="font-accent text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-8">
            The Rise of <span className="text-primary-glow">Neural</span> Architectures
          </h1>
        </motion.header>

        {/* 💎 Glassmorphism 2.0 Article Canvas */}
        <motion.article 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-panel glass-edge p-10 md:p-16 relative"
        >
          <div className="prose prose-invert max-w-none space-y-8 font-accent">
            <p className="text-xl text-white/60 leading-relaxed italic border-l-2 border-primary-glow pl-6">
              "To reach Immortal status, we must architect digital experiences that feel like living, breathing organisms." [cite: 2]
            </p>
            <p className="text-white/40 text-lg leading-relaxed">
              In the year 2026, the barrier to entry for SaaS is non-existent, yet the competition for neural attention is at an all-time high. AetherOS addresses this by utilizing a Modular "Neural" Architecture that prioritizes peak performance and extreme customization[cite: 3].
            </p>
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight pt-8">The Z-Axis Revolution</h2>
            <p className="text-white/40 text-lg leading-relaxed">
              By implementing "insane" opening animations where sections fly in from the Z-axis, we establish immediate engagement[cite: 23, 65]. This isn't just decoration; it's a statement of capability.
            </p>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex items-center justify-between">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-[10px] font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest">
                <Share2 size={14} /> Share Protocol
              </button>
              <button className="flex items-center gap-2 text-[10px] font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest">
                <MessageSquare size={14} /> 12 Transmission Logs
              </button>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogDetails;