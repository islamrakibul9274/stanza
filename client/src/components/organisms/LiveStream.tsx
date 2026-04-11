import React from 'react';
import { motion } from 'framer-motion';
import { Play, Mic, Video, Users, Share2, Settings, Maximize } from 'lucide-react';

// Molecule: Frosted Control Button
const ControlButton = ({ icon: Icon, active = false }: { icon: any; active?: boolean }) => (
  <button className={`p-3 rounded-xl backdrop-blur-md transition-all duration-300 border ${
    active 
    ? 'bg-primary-glow/20 border-primary-glow/40 text-primary-glow shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
    : 'bg-white/5 border-white/10 text-white/40 hover:text-white hover:bg-white/10'
  }`}>
    <Icon size={20} />
  </button>
);

const LiveStream = () => {
  return (
    <section id="live-stream" className="relative min-h-screen py-32 overflow-hidden">
      {/* Background Mesh Gradient: Liquid Emerald [cite: 60] */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-secondary-glow/10 rounded-full blur-[150px] -z-10 animate-pulse" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Broadcast Information [cite: 61] */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                <div className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
              </div>
              <span className="font-accent text-xs font-bold tracking-[0.3em] text-red-400 uppercase">Live Transmission</span>
            </div>
            <h2 className="font-accent text-5xl font-bold text-white tracking-tighter uppercase mb-6 leading-none">
              Frosted <br /> <span className="text-primary-glow">Broadcast</span>
            </h2>
            <p className="text-white/40 text-lg mb-10">
              Synchronize your global presence through our neural streaming engine. 
              High-fidelity audio-visual processing meets Glass-Neo-Futurist aesthetics[cite: 57].
            </p>

            <div className="glass-panel glass-edge p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-primary-glow" />
                  <span className="font-accent text-[10px] font-bold text-white uppercase tracking-widest">Active Viewers</span>
                </div>
                <span className="font-mono text-sm text-primary-glow">12,402</span>
              </div>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-aether-bg bg-gradient-to-br from-primary-glow/30 to-secondary-glow/30" />
                ))}
                <div className="h-8 w-8 rounded-full border-2 border-aether-bg bg-white/5 flex items-center justify-center text-[10px] font-bold text-white/40">
                  +12k
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Video Interface with Frosted Controls  */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, z: -50 }}
            whileInView={{ opacity: 1, scale: 1, z: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-8 relative group"
          >
            {/* Main Video Canvas [cite: 18, 19] */}
            <div className="glass-panel glass-edge aspect-video relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_80px_rgba(16,185,129,0.1)]">
              {/* Simulated Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/5 to-secondary-glow/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="h-20 w-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm"
                >
                  <Play size={32} className="text-white ml-1 fill-white" />
                </motion.div>
              </div>

              {/* Frosted HUD Overlay [cite: 40, 59] */}
              <div className="absolute bottom-0 inset-x-0 p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="glass-panel glass-edge bg-black/40 backdrop-blur-xl p-4 flex items-center justify-between rounded-2xl">
                  <div className="flex items-center gap-4">
                    <ControlButton icon={Mic} active />
                    <ControlButton icon={Video} active />
                    <div className="h-8 w-px bg-white/10 mx-2" />
                    <ControlButton icon={Share2} />
                  </div>
                  <div className="flex items-center gap-4">
                    <ControlButton icon={Settings} />
                    <ControlButton icon={Maximize} />
                    <button className="bg-red-500 hover:bg-red-600 text-white font-accent text-[10px] font-bold tracking-widest px-6 py-3 rounded-xl transition-colors uppercase">
                      End Stream
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LiveStream;