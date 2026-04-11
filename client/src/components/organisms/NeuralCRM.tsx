import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Target, ArrowRight } from 'lucide-react';

// Molecule: Pulse Card for CRM Leads
const CRMCard = ({ name, status, value }: { name: string; status: string; value: string }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="glass-panel glass-edge p-5 flex items-center justify-between group"
  >
    <div className="flex items-center gap-4">
      {/* Real-time "Pulse" indicator  */}
      <div className="relative h-10 w-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
        <Users size={18} className="text-white/40 group-hover:text-primary-glow transition-colors" />
        <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary-glow animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
      </div>
      <div>
        <h4 className="font-accent text-sm font-bold text-white uppercase tracking-wider">{name}</h4>
        <p className="text-[10px] text-white/30 font-accent tracking-[0.1em] uppercase">{status}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="font-accent text-xs font-bold text-primary-glow">{value}</p>
      <div className="h-1 w-12 bg-white/5 rounded-full mt-2 overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          className="h-full bg-primary-glow/40"
        />
      </div>
    </div>
  </motion.div>
);

const NeuralCRM = () => {
  return (
    <section id="neural-crm" className="relative min-h-screen py-32 bg-gradient-to-b from-transparent to-primary-glow/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-4 py-1 rounded-full border border-primary-glow/20 bg-primary-glow/5 mb-6"
          >
            <Target size={14} className="text-primary-glow" />
            <span className="font-accent text-[10px] font-bold tracking-[0.2em] text-primary-glow uppercase">Lead Synchronization Active</span>
          </motion.div>
          <h2 className="font-accent text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">
            Neural <span className="text-primary-glow">Pipeline</span>
          </h2>
          <p className="mt-6 max-w-2xl text-white/40 text-lg">
            Streamline your sales trajectory with a CRM that thinks ahead. Real-time activity pulses and predictive lead scoring integrated into our Glass-Neo-Futurist interface[cite: 57, 71].
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pipeline Column 1 */}
          <div className="space-y-6">
            <h3 className="font-accent text-xs font-bold tracking-[0.3em] text-white/20 uppercase px-2">Discovery Phase</h3>
            <CRMCard name="Nexus Corp" status="Analyzing Intent" value="$42,000" />
            <CRMCard name="Aether Labs" status="Initial Sync" value="$18,500" />
          </div>

          {/* Pipeline Column 2 */}
          <div className="space-y-6">
            <h3 className="font-accent text-xs font-bold tracking-[0.3em] text-primary-glow/40 uppercase px-2">Validation</h3>
            <CRMCard name="Hyperion Sys" status="Priority Alpha" value="$120,000" />
            <div className="glass-panel border-dashed border-primary-glow/20 p-10 flex flex-col items-center justify-center text-white/10">
              <Zap size={32} className="mb-4" />
              <p className="font-accent text-[10px] tracking-widest uppercase">Auto-Sorting Active</p>
            </div>
          </div>

          {/* Pipeline Column 3 */}
          <div className="space-y-6">
            <h3 className="font-accent text-xs font-bold tracking-[0.3em] text-white/20 uppercase px-2">Closure</h3>
            <CRMCard name="Orbit Tech" status="Final Protocol" value="$65,000" />
            <button className="w-full glass-panel glass-edge py-4 font-accent text-[10px] font-bold tracking-[0.2em] text-white/40 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              EXPAND PIPELINE <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuralCRM;