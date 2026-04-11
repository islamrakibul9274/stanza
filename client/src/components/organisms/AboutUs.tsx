import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Cpu } from 'lucide-react';

const TeamMember = ({ name, role, stack }: { name: string, role: string, stack: string[] }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass-panel glass-edge p-8 text-center group relative overflow-hidden"
  >
    {/* Tech Stack HUD Overlay */}
    <div className="absolute inset-0 bg-primary-glow/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 z-20">
      <p className="font-accent text-[8px] font-bold tracking-[0.3em] text-black uppercase mb-4">Neural Stack</p>
      <div className="flex flex-wrap justify-center gap-2">
        {stack.map(s => <span key={s} className="bg-black text-primary-glow text-[10px] px-2 py-1 rounded font-mono uppercase">{s}</span>)}
      </div>
    </div>

    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary-glow/20 to-secondary-glow/20 mx-auto mb-6 border border-white/10" />
    <h4 className="font-accent text-lg font-bold text-white uppercase tracking-tight mb-1">{name}</h4>
    <p className="text-[10px] text-white/40 font-accent tracking-widest uppercase">{role}</p>
  </motion.div>
);

const AboutUs = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden bg-gradient-to-b from-primary-glow/5 to-transparent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="font-accent text-6xl font-bold text-white tracking-tighter uppercase mb-8">The <span className="text-primary-glow">Mission</span></h2>
            <p className="text-white/40 text-lg leading-relaxed mb-8">
              AetherOS was forged to eliminate the boundaries between design and performance[cite: 51, 52]. We represent the **Immortal Tier** of software development, where every node is optimized for the future.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[ { icon: Shield, val: "Secure" }, { icon: Target, val: "Precise" }, { icon: Cpu, val: "Neural" } ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-4 glass-panel border-white/5">
                  <item.icon className="text-primary-glow mb-2" size={20} />
                  <span className="text-[10px] font-accent font-bold text-white/60 tracking-widest uppercase">{item.val}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass-panel glass-edge p-2 aspect-square max-w-md mx-auto relative"
          >
            <div className="absolute inset-0 bg-primary-glow/5 animate-pulse rounded-[inherit]" />
            <div className="h-full w-full bg-aether-bg/40 rounded-[inherit] flex items-center justify-center">
               <p className="font-accent text-[10px] text-white/20 tracking-widest uppercase">Visual Core Interface Placeholder</p>
            </div>
          </motion.div>
        </div>

        <h3 className="font-accent text-xs font-bold tracking-[0.4em] text-white/30 uppercase text-center mb-12">The Collective Founders</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamMember name="Alex Neural" role="Lead Architect" stack={["React 19", "Three.js", "Zustand"]} />
          <TeamMember name="Sarah Glass" role="Design Engineer" stack={["Tailwind 4", "Framer", "SCSS"]} />
          <TeamMember name="Jace Aether" role="Core Systems" stack={["Rust", "Node.js", "Vite"]} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;