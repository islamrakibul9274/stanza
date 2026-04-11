import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

const LegalPortal = () => {
  return (
    <div className="min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel glass-edge p-10 md:p-16">
          <div className="flex items-center gap-4 mb-8">
            <ShieldAlert className="text-primary-glow" size={24} />
            <span className="font-accent text-[10px] font-bold tracking-[0.5em] text-primary-glow uppercase">Legal Protocol</span>
          </div>
          <h1 className="font-accent text-4xl font-bold text-white uppercase tracking-tighter mb-12">Privacy & <span className="text-primary-glow">Data Sovereignty</span></h1>
          
          <div className="prose prose-invert space-y-8 font-accent text-white/40 leading-relaxed">
            <section>
              <h3 className="text-white uppercase tracking-widest text-sm font-bold mb-4">01. Neural Data Encryption</h3>
              <p>All data transmitted through the AetherOS mesh is encrypted at the neural level. We do not store Access Keys or raw transmission data within our core nodes.</p>
            </section>
            <section>
              <h3 className="text-white uppercase tracking-widest text-sm font-bold mb-4">02. Node Sovereignty</h3>
              <p>Users retain full ownership of their instances. You have the right to de-materialize your node at any time, resulting in immediate and permanent data purging across the mesh.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPortal;
