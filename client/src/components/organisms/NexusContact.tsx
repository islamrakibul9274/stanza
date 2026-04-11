import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Globe, CheckCircle2, Zap } from 'lucide-react';
import GlassButton from '../atoms/GlassButton';

const NexusContact = () => {
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('transmitting');
    
    // Simulate Neural Uplink delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    setStatus('success');
    
    // Reset after a few seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left: Info Grid */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="font-accent text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-8">
              Nexus <span className="text-primary-glow">Contact</span>
            </h2>
            <p className="text-white/40 text-lg mb-12 font-accent leading-relaxed">
              Establish a secure neural link with our collective. Our response nodes are active 24/7.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/60 font-accent text-xs uppercase tracking-widest hover:text-primary-glow transition-colors cursor-pointer">
                <Mail size={16} className="text-primary-glow" /> neural-link@aether.os
              </div>
              <div className="flex items-center gap-4 text-white/60 font-accent text-xs uppercase tracking-widest hover:text-primary-glow transition-colors cursor-pointer">
                <Globe size={16} className="text-primary-glow" /> Neo-Tokyo Sector 7
              </div>
            </div>
          </motion.div>

          {/* Right: The Holographic Form */}
          <motion.div className="glass-panel glass-edge p-8 md:p-12 relative min-h-[450px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="text-center space-y-6"
                >
                  <div className="relative inline-block">
                    <CheckCircle2 size={64} className="text-primary-glow mx-auto" />
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-primary-glow/20 rounded-full blur-xl"
                    />
                  </div>
                  <h3 className="font-accent text-2xl font-bold text-white uppercase tracking-tighter">Transmission Complete</h3>
                  <p className="text-white/40 text-[10px] font-accent tracking-[0.3em] uppercase">Your data has been synced with the Aether Core.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <input 
                      disabled={status === 'transmitting'}
                      placeholder="IDENTIFIER" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 font-accent text-[10px] text-white outline-none focus:border-primary-glow/50 focus:bg-primary-glow/5 transition-all placeholder:text-white/10 uppercase tracking-widest"
                      required
                    />
                    <textarea 
                      disabled={status === 'transmitting'}
                      placeholder="DATA TRANSMISSION..." 
                      className="w-full h-32 bg-white/5 border border-white/10 rounded-xl py-4 px-6 font-accent text-[10px] text-white outline-none focus:border-primary-glow/50 focus:bg-primary-glow/5 transition-all placeholder:text-white/10 uppercase tracking-widest resize-none"
                      required
                    />
                  </div>
                  <GlassButton 
                    className="w-full py-4 flex items-center justify-center gap-3 overflow-hidden"
                    disabled={status === 'transmitting'}
                  >
                    {status === 'transmitting' ? (
                      <>UPLINKING... <Zap size={16} className="animate-spin text-primary-glow" /></>
                    ) : (
                      <>SEND TRANSMISSION <Send size={16} /></>
                    )}
                  </GlassButton>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default NexusContact;