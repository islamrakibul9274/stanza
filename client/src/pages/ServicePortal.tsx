import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, Activity, Zap, Box } from 'lucide-react';

const ServicePortal = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen pt-40 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-2 text-white/30 hover:text-primary-glow font-accent text-[10px] font-bold tracking-widest uppercase mb-12 transition-colors group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Core
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary-glow/10 border border-primary-glow/20">
                <Box className="text-primary-glow" size={20} />
              </div>
              <span className="font-accent text-xs font-bold tracking-[0.3em] text-primary-glow uppercase">Protocol {id?.toUpperCase()}</span>
            </div>
            <h1 className="font-accent text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-8">
              Neural <span className="text-primary-glow">Fabrication</span>
            </h1>
            <p className="text-white/40 text-lg mb-10 leading-relaxed font-accent">
              Our fabrication process utilizes decentralized GPU clusters to render your assets with zero-latency synchronization. We call this the "Immortal Handshake."
            </p>
            <div className="flex flex-wrap gap-4">
              {['VULKAN', 'RTX-SYNC', 'NEURAL-MAPPING'].map(tech => (
                <span key={tech} className="glass-panel px-4 py-2 text-[8px] font-bold text-white/60 tracking-widest uppercase border-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Isometric Visual Artifact */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            className="glass-panel glass-edge aspect-square flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary-glow/5 animate-pulse" />
            <Cpu size={120} className="text-primary-glow/20 drop-shadow-[0_0_30px_#10b981]" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80%] h-[80%] border border-dashed border-primary-glow/10 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicePortal;