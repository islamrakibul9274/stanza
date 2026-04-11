import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Send, Command } from 'lucide-react';
import GlassButton from '../atoms/GlassButton';

const AIWorkspace = () => {
  return (
    <section id="ai-workspace" className="relative min-h-screen py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: 3D "Brain" & Messaging */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-primary-glow/10 border border-primary-glow/20">
                <Brain className="text-primary-glow animate-pulse" size={32} />
              </div>
              <h2 className="font-accent text-4xl font-bold tracking-tight text-white uppercase">
                Neural <span className="text-primary-glow">Architect</span>
              </h2>
            </div>
            
            <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-lg">
              Forge high-precision content with our custom prompt-engine. Leveraging the Z-axis flight of our Neural Architecture, your ideas materialize in real-time[cite: 23, 34].
            </p>

            <ul className="space-y-4">
              {['Context-Aware Generation', 'Neural Style Transfer', 'Zero-Latency Processing'].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-white/70 font-accent text-sm tracking-wide">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary-glow shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Custom Prompt-Engine UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="glass-panel glass-edge p-8 shadow-[0_0_80px_rgba(16,185,129,0.1)]"
          >
            {/* Holographic Text Area */}
            <div className="relative mb-6">
              <textarea 
                placeholder="Initialize prompt sequence..."
                className="w-full h-40 bg-white/5 rounded-xl border border-white/10 p-5 font-accent text-white outline-none focus:border-primary-glow/50 transition-all placeholder:text-white/20 resize-none"
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="p-2 rounded-lg bg-white/5 text-white/40 hover:text-white transition-colors">
                  <Command size={18} />
                </button>
              </div>
            </div>

            {/* Simulated AI Output Area */}
            <div className="glass-panel bg-primary-glow/5 border-dashed border-primary-glow/20 p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={14} className="text-primary-glow" />
                <span className="text-[10px] font-bold tracking-widest text-primary-glow uppercase">Generated Result</span>
              </div>
              <p className="text-sm text-white/60 font-mono leading-relaxed">
                {">"} System initialized. Neural style transfer applied to current workspace. AetherOS is ready for deployment...
              </p>
            </div>

            <GlassButton className="w-full flex justify-center items-center gap-3">
              GENERATE <Send size={16} />
            </GlassButton>
          </motion.div>
        </div>
      </div>

      {/* Background Decor: Mesh Silk */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-glow/5 rounded-full blur-[150px] -z-10" />
    </section>
  );
};

export default AIWorkspace;