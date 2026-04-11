import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Activity, PieChart, TrendingUp, Globe } from 'lucide-react';

// Molecule: Analytics Stat Card
const StatCard = ({ label, value, trend }: { label: string; value: string; trend: string }) => (
  <motion.div 
    whileHover={{ scale: 1.05, rotateX: 5 }}
    className="glass-panel glass-edge p-6 flex flex-col gap-2"
  >
    <div className="flex justify-between items-start">
      <span className="font-accent text-[10px] tracking-[0.2em] text-white/30 uppercase">{label}</span>
      <Activity size={14} className="text-primary-glow animate-pulse" />
    </div>
    <h3 className="font-accent text-3xl font-bold text-white tracking-tighter">{value}</h3>
    <div className="flex items-center gap-2 text-primary-glow/60 font-accent text-[10px] font-bold">
      <TrendingUp size={12} />
      <span>{trend} INCREASE</span>
    </div>
  </motion.div>
);

const QuantumAnalytics = () => {
  return (
    <section id="quantum-analytics" className="relative min-h-screen py-32 overflow-hidden">
      {/* Mesh Liquid Background Element  */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary-glow/5 rounded-full blur-[180px] -z-10 animate-pulse" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          
          {/* Left: Hub Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary-glow/10 border border-primary-glow/20">
                <Globe className="text-primary-glow" size={20} />
              </div>
              <span className="font-accent text-xs font-bold tracking-[0.3em] text-primary-glow uppercase">Real-Time Intelligence</span>
            </div>
            <h2 className="font-accent text-5xl font-bold text-white tracking-tighter uppercase mb-6 leading-none">
              Quantum <br /> <span className="text-primary-glow">Analytics</span>
            </h2>
            <p className="text-white/40 text-lg mb-8">
              Convert raw data streams into decision-ready insights. Our neural visualization engine maps multi-dimensional metrics onto a unified glass canvas. 
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <StatCard label="Total Nodes" value="12.4k" trend="+14%" />
              <StatCard label="Throughput" value="850mb/s" trend="+2.4%" />
            </div>
          </motion.div>

          {/* Right: Master Analytics Dashboard (The "Glass Canvas") [cite: 14] */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="xl:col-span-8 glass-panel glass-edge p-1 bg-white/5"
          >
            <div className="bg-aether-bg/40 rounded-[inherit] p-8">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                  <PieChart className="text-primary-glow" size={24} />
                  <h4 className="font-accent text-sm font-bold tracking-widest text-white uppercase">Neural Data Stream</h4>
                </div>
                <div className="flex gap-2">
                  {['1H', '24H', '7D', 'ALL'].map((time) => (
                    <button key={time} className="px-3 py-1 rounded-md text-[10px] font-bold font-accent border border-white/5 text-white/30 hover:text-primary-glow hover:border-primary-glow/30 transition-all">
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulated Glass Chart Visualization  */}
              <div className="h-80 w-full relative flex items-end justify-between gap-2 px-4">
                {[40, 70, 45, 90, 65, 80, 55, 95, 75, 50, 85, 60].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ delay: i * 0.05, duration: 1, ease: "circOut" }}
                    className="flex-1 min-w-[12px] bg-gradient-to-t from-primary-glow/10 to-primary-glow/40 rounded-t-sm border-t border-x border-primary-glow/30 relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary-glow text-black font-bold text-[8px] px-1.5 py-0.5 rounded-sm">
                      {height}%
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex justify-between border-t border-white/5 pt-6">
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary-glow" />
                    <span className="text-[10px] font-accent text-white/40 uppercase">Active Nodes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-secondary-glow" />
                    <span className="text-[10px] font-accent text-white/40 uppercase">Latency Peak</span>
                  </div>
                </div>
                <button className="text-[10px] font-accent font-bold text-primary-glow flex items-center gap-2 hover:gap-3 transition-all">
                  EXPORT DATA <BarChart3 size={14} />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default QuantumAnalytics;
