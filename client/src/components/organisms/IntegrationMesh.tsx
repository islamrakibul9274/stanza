import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Share2, 
  Zap, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Shield, 
  Activity 
} from 'lucide-react';

const IntegrationLogo = ({ icon: Icon, label, isActive }: { icon: any; label: string; isActive: boolean }) => (
  <motion.div
    whileHover={{ scale: 1.1, z: 20 }}
    className={`glass-panel glass-edge p-6 flex items-center justify-center relative transition-all duration-500 ${
      isActive ? 'border-primary-glow/50 bg-primary-glow/10 shadow-[0_0_30px_rgba(16,185,129,0.2)]' : 'border-white/5'
    }`}
  >
    <Icon className={`w-8 h-8 transition-colors duration-500 ${isActive ? 'text-primary-glow' : 'text-white/20'}`} />
    <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 font-accent text-[8px] font-bold tracking-[0.2em] uppercase transition-opacity ${
      isActive ? 'opacity-100 text-primary-glow' : 'opacity-0'
    }`}>
      {label}
    </div>
  </motion.div>
);

const IntegrationMesh = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const integrations = [
    { icon: Cpu, label: 'Neural Core' },
    { icon: Database, label: 'Data Lake' },
    { icon: Globe, label: 'Global Mesh' },
    { icon: Layers, label: 'Stack Layer' },
    { icon: Shield, label: 'Security' },
    { icon: Activity, label: 'Live Pulse' },
  ];

  return (
    <section id="integration-mesh" className="relative min-h-screen py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary-glow/10 border border-primary-glow/20">
              <Share2 className="text-primary-glow" size={20} />
            </div>
            <span className="font-accent text-xs font-bold tracking-[0.3em] text-primary-glow uppercase">Neural Connectivity</span>
          </div>
          <h2 className="font-accent text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-8">
            The <span className="text-primary-glow">Ecosystem</span> Grid
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 relative z-10">
            {integrations.map((item, idx) => (
              <motion.div
                key={item.label}
                onMouseEnter={() => setActiveNode(idx)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <IntegrationLogo icon={item.icon} label={item.label} isActive={activeNode === idx} />
              </motion.div>
            ))}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
            <div className="h-24 w-24 rounded-full bg-aether-bg border border-primary-glow/30 flex items-center justify-center glass-panel">
              <Zap className="text-primary-glow animate-pulse" size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationMesh;