import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Cpu, Globe, Shield } from 'lucide-react';

const ProjectDetails = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-2 text-white/30 hover:text-primary-glow font-accent text-[10px] font-bold tracking-widest uppercase mb-12 transition-colors group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Nexus
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left: Project Stats */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <h1 className="font-accent text-5xl font-bold text-white tracking-tighter uppercase leading-none">
              Project <span className="text-primary-glow">{slug?.replace('-', ' ')}</span>
            </h1>
            <div className="space-y-4">
              {[
                { icon: Cpu, label: "Core Technology", val: "React 19 / Rust" },
                { icon: Globe, label: "Deployment", val: "Edge Network" },
                { icon: Shield, label: "Security", val: "Quantum Auth" }
              ].map((stat, i) => (
                <div key={i} className="glass-panel glass-edge p-4 flex items-center gap-4">
                  <stat.icon size={18} className="text-primary-glow" />
                  <div>
                    <p className="text-[8px] font-accent text-white/20 uppercase tracking-widest">{stat.label}</p>
                    <p className="text-xs font-accent text-white uppercase">{stat.val}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full glass-panel glass-edge py-4 font-accent text-[10px] font-bold tracking-[0.3em] text-primary-glow hover:bg-primary-glow/10 transition-all flex items-center justify-center gap-2">
              LIVE PREVIEW <ExternalLink size={14} />
            </button>
          </motion.div>

          {/* Right: Content Canvas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="lg:col-span-2 glass-panel glass-edge p-8 md:p-12"
          >
            <div className="aspect-video bg-white/5 rounded-2xl mb-12 flex items-center justify-center border border-white/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/10 to-transparent" />
              <p className="font-accent text-[10px] text-white/20 tracking-[0.5em] uppercase z-10">High-Fidelity Render Placeholder</p>
            </div>
            <div className="prose prose-invert max-w-none space-y-6 font-accent">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">The Architectural Vision</h2>
              <p className="text-white/40 leading-relaxed text-lg">
                This project represents a fusion of zero-latency state management and physical-layer glass shaders. 
                The goal was to create a digital environment that responds to the user's neural intent with sub-5ms delay.
              </p>
              <div className="h-px w-full bg-white/5" />
              <h3 className="text-lg font-bold text-white uppercase tracking-widest">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/30 text-xs">
                <li className="flex gap-2"><div className="h-1 w-1 rounded-full bg-primary-glow mt-1.5" /> Real-time state synchronization</li>
                <li className="flex gap-2"><div className="h-1 w-1 rounded-full bg-primary-glow mt-1.5" /> Adaptive noise glass shaders</li>
                <li className="flex gap-2"><div className="h-1 w-1 rounded-full bg-primary-glow mt-1.5" /> Biometric-ready auth nodes</li>
                <li className="flex gap-2"><div className="h-1 w-1 rounded-full bg-primary-glow mt-1.5" /> Multi-dimensional grid layouts</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;