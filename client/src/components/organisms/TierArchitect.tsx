import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Crown, ShieldCheck } from 'lucide-react';
import GlassButton from '../atoms/GlassButton';

const TierArchitect = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const tiers = [
    {
      name: "Neural Core",
      price: billingCycle === 'monthly' ? 0 : 0,
      icon: <Zap size={20} />,
      features: ["5 Neural Portals", "Quantum Analytics (Basic)", "Aether Trail UI"],
      highlight: false
    },
    {
      name: "Alpha Architect",
      price: billingCycle === 'monthly' ? 49 : 39,
      icon: <Crown size={20} />,
      features: ["Unlimited Portals", "Advanced Neural CRM", "Nexus Tasker Pro", "CMD+K God Mode"],
      highlight: true
    },
    {
      name: "Immortal Tier",
      price: billingCycle === 'monthly' ? 149 : 119,
      icon: <ShieldCheck size={20} />,
      features: ["Full Ecosystem Mesh", "Custom Glass Shaders", "Biometric Secure Portal", "24/7 Priority Sync"],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-b from-secondary-glow/5 to-transparent">
      <div className="container mx-auto px-6">
        
        {/* Header Sequence */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-accent text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase"
          >
            Tier <span className="text-primary-glow">Architect</span>
          </motion.h2>
          
          {/* Monthly/Yearly Toggle Engine */}
          <div className="mt-10 flex items-center gap-6 glass-panel p-2 rounded-full border-white/5 bg-white/5">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-accent text-[10px] font-bold tracking-widest transition-all ${billingCycle === 'monthly' ? 'bg-primary-glow text-black' : 'text-white/40 hover:text-white'}`}
            >
              MONTHLY
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full font-accent text-[10px] font-bold tracking-widest transition-all ${billingCycle === 'yearly' ? 'bg-primary-glow text-black' : 'text-white/40 hover:text-white'}`}
            >
              YEARLY — SAVE 20%
            </button>
          </div>
        </div>

        {/* Pricing Mesh Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40, z: -50 }}
              whileInView={{ opacity: 1, y: 0, z: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className={`glass-panel glass-edge flex flex-col p-10 relative overflow-hidden ${tier.highlight ? 'border-primary-glow/40 bg-primary-glow/5 shadow-[0_0_80px_rgba(16,185,129,0.1)]' : 'border-white/10'}`}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 bg-primary-glow text-black font-accent text-[8px] font-bold px-4 py-1 tracking-widest uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10 text-primary-glow">{tier.icon}</div>
              <h3 className="font-accent text-xl font-bold text-white uppercase tracking-tighter mb-4">{tier.name}</h3>
              
              <div className="flex items-baseline gap-2 mb-10">
                <span className="font-accent text-5xl font-bold text-white tracking-tighter transition-all">
                  ${tier.price}
                </span>
                <span className="text-white/20 font-accent text-xs uppercase tracking-widest">/ month</span>
              </div>

              <ul className="flex-1 space-y-5 mb-12">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/50 font-accent tracking-wide">
                    <Check size={14} className="text-primary-glow" />
                    {feature}
                  </li>
                ))}
              </ul>

              <GlassButton className="w-full">
                SELECT PROTOCOL
              </GlassButton>
            </motion.div>
          ))}
        </div>

        {/* Projected Savings HUD Detail */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 glass-panel glass-edge p-6 max-w-2xl mx-auto border-dashed border-primary-glow/20 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-primary-glow/10 flex items-center justify-center border border-primary-glow/30">
              <Zap className="text-primary-glow animate-pulse" size={18} />
            </div>
            <div>
              <p className="font-accent text-[10px] font-bold text-white/40 uppercase tracking-widest">Projected Annual Savings</p>
              <p className="font-accent text-lg font-bold text-white">UP TO $360.00 / YEAR</p>
            </div>
          </div>
          <button className="text-primary-glow font-accent text-[10px] font-bold tracking-widest hover:underline">CALCULATE ROI —</button>
        </motion.div>
      </div>
    </section>
  );
};

export default TierArchitect;