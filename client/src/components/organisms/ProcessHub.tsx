import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, ShieldCheck, Cpu } from 'lucide-react';

const ProcessHub = () => {
  const steps = [
    { icon: Cpu, title: "Initialize Core", desc: "Setting up the Neural Architecture and state-management layers." },
    { icon: Target, title: "Target Sync", desc: "Connecting your specific data streams to our processing nodes." },
    { icon: Zap, title: "Neural Forge", desc: "Executing high-speed generation and analytics through the Mesh." },
    { icon: ShieldCheck, title: "Secure Deployment", desc: "Final verification and biometrically-encrypted output." }
  ];

  return (
    <section id="process" className="relative py-32 bg-gradient-to-b from-transparent to-primary-glow/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-accent text-5xl font-bold text-white tracking-tighter uppercase">Neural <span className="text-primary-glow">Process</span></h2>
          <p className="mt-6 text-white/40 font-accent text-[10px] tracking-[0.4em] uppercase">How AetherOS Manifests Reality</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="glass-panel glass-edge p-8 group hover:bg-primary-glow/5 transition-all"
            >
              <div className="text-primary-glow mb-6 group-hover:scale-110 transition-transform duration-500">
                <step.icon size={32} />
              </div>
              <h3 className="font-accent text-lg font-bold text-white uppercase tracking-tight mb-4">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              <div className="mt-8 text-[8px] font-bold text-primary-glow/40 tracking-[0.3em] uppercase">Step 0{idx + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessHub;