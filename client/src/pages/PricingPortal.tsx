import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Crown, Globe } from 'lucide-react';
import GlassButton from '../components/atoms/GlassButton';

const TierCard = ({ tier, price, features, highlight = false }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`glass-panel glass-edge p-10 flex flex-col h-full relative overflow-hidden ${highlight ? 'border-primary-glow/40 shadow-[0_0_50px_rgba(16,185,129,0.1)]' : 'border-white/5'}`}
  >
    {highlight && (
      <div className="absolute top-0 right-0 bg-primary-glow text-black font-accent text-[8px] font-bold px-4 py-1 tracking-widest uppercase rotate-45 translate-x-4 translate-y-2">
        RECOMMENDED
      </div>
    )}
    <h3 className="font-accent text-xs font-bold text-primary-glow tracking-[0.3em] uppercase mb-2">{tier}</h3>
    <div className="flex items-baseline gap-1 mb-8">
      <span className="font-accent text-4xl font-bold text-white tracking-tighter">${price}</span>
      <span className="text-white/20 font-accent text-[10px] tracking-widest">/CYCLE</span>
    </div>
    
    <ul className="space-y-4 mb-12 flex-grow">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-center gap-3 text-white/40 font-accent text-[10px] uppercase tracking-widest">
          <Check size={12} className="text-primary-glow shrink-0" /> {f}
        </li>
      ))}
    </ul>

    <GlassButton className={`w-full py-4 text-[10px] tracking-[0.2em] ${highlight ? 'bg-primary-glow/10' : ''}`}>
      INITIALIZE NODE
    </GlassButton>
  </motion.div>
);

const PricingPortal = () => {
  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex p-2 rounded-lg bg-primary-glow/10 border border-primary-glow/20 mb-6">
            <Crown className="text-primary-glow" size={20} />
          </div>
          <h1 className="font-accent text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-6">
            Tier <span className="text-primary-glow">Architect</span>
          </h1>
          <p className="text-white/40 font-accent text-lg uppercase tracking-tighter">
            Select the neural capacity for your decentralized node.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TierCard 
            tier="Basic Node" 
            price="0" 
            features={["1.2 TB Throughput", "Standard Sync", "Community Nodes", "Basic Encryption"]} 
          />
          <TierCard 
            tier="Neural Plus" 
            price="49" 
            highlight={true}
            features={["12.4 TB Throughput", "Sub-ms Sync", "Dedicated Nodes", "Quantum Shielding", "API Access"]} 
          />
          <TierCard 
            tier="Immortal" 
            price="199" 
            features={["Unlimited Throughput", "Zero-Latency Handshake", "Global Mesh Dominance", "Bespoke Shaders", "24/7 Human Sync"]} 
          />
        </div>
      </div>
    </div>
  );
};

export default PricingPortal;