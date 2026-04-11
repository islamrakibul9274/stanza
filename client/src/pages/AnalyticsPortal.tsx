import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart3, Globe, Shield, Zap, Loader2 } from 'lucide-react';
// Note: Ensure this import path is correct for your project structure
import { AnalyticsCanvas } from '../components/atoms/DataSphere';

const StatCard = ({ icon: Icon, label, value, trend, loading }: any) => (
  <div className="glass-panel glass-edge p-6 flex flex-col gap-4">
    <div className="flex justify-between items-start">
      <div className="p-2 rounded-lg bg-primary-glow/10 border border-primary-glow/20 text-primary-glow">
        <Icon size={18} />
      </div>
      <span className="font-accent text-[8px] text-primary-glow font-bold tracking-widest">{trend}</span>
    </div>
    <div>
      <p className="font-accent text-[10px] text-white/30 uppercase tracking-[0.2em] mb-1">{label}</p>
      {loading ? (
        <Loader2 className="animate-spin text-white/10" size={20} />
      ) : (
        <p className="font-accent text-2xl font-bold text-white tracking-tighter">{value}</p>
      )}
    </div>
  </div>
);

const AnalyticsPortal = () => {
  const [stats, setStats] = useState({
    totalTasks: 0,
    syncIntegrity: 0,
    dailyLoad: 0,
    completedTasks: 0
  });
  const [loading, setLoading] = useState(true);

  // 🌐 Unified API routing
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem('aether_token');
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        // 🛡️ Fixed: Dynamic API_URL instead of hardcoded localhost
        const response = await fetch(`${API_URL}/api/tasks/stats/metrics`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (!response.ok) {
           throw new Error('Neural transmission failed');
        }

        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("METRICS_SYNC_FAILURE", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [API_URL]); // Added API_URL to dependency array

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* 🛸 3D Visual Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-primary-glow" size={20} />
              <span className="font-accent text-xs font-bold tracking-[0.3em] text-primary-glow uppercase">Real-Time Pulse</span>
            </div>
            <h1 className="font-accent text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-tight mb-8">
              Quantum <br /> <span className="text-primary-glow">Analytics</span>
            </h1>
            <p className="text-white/40 text-lg max-w-lg font-accent">
              Monitor neural synchronization and data throughput across your entire ecosystem mesh with sub-millisecond precision.
            </p>
          </motion.div>
          <div className="h-[400px] glass-panel glass-edge overflow-hidden bg-black/20 relative">
            {/* Added fallback text in case the 3D canvas fails to mount immediately */}
             <div className="absolute inset-0 flex items-center justify-center -z-10 text-white/10 font-accent text-[10px] tracking-widest uppercase">
                Initializing 3D Matrix...
             </div>
             <AnalyticsCanvas />
          </div>
        </div>

        {/* 📈 Metrics Grid: Connected to MongoDB */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard 
            icon={Zap} 
            label="Neural Load (24h)" 
            value={stats.dailyLoad} 
            trend="TASKS" 
            loading={loading}
          />
          <StatCard 
            icon={Globe} 
            label="Total Objectives" 
            value={stats.totalTasks} 
            trend="SYNCED" 
            loading={loading}
          />
          <StatCard 
            icon={BarChart3} 
            label="Throughput" 
            value={`${(stats.totalTasks * 1.2).toFixed(1)} KB/s`} 
            trend="LIVE" 
            loading={loading}
          />
          <StatCard 
            icon={Shield} 
            label="Sync Integrity" 
            value={`${stats.syncIntegrity}%`} 
            trend={stats.syncIntegrity >= 80 ? "STABLE" : "DEGRADED"} 
            loading={loading}
          />
        </div>

        {/* 🌊 Activity Stream */}
        <div className="glass-panel glass-edge p-8">
          <h3 className="font-accent text-xs font-bold text-white/60 tracking-[0.4em] uppercase mb-8">System Transmission Log</h3>
          <div className="space-y-4 font-mono text-[10px] text-white/30">
            <div className="flex gap-4 border-b border-white/5 pb-3 italic">
              <span className="text-primary-glow">[HANDSHAKE_ESTABLISHED]</span>
              <span className="text-white/60">DB_STATUS:</span>
              <span className="text-white/90">CONNECTED_TO_AETHER_CORE</span>
            </div>
            {/* Safe check for rendering log entries */}
            {[...Array(4)].map((_, i) => (
              <div key={`log-${i}`} className="flex gap-4 border-b border-white/5 pb-3">
                <span className="text-primary-glow">[{new Date().toLocaleTimeString()}]</span>
                <span className="text-white/60">NODE_SYNC_SUCCESS:</span>
                <span className="text-white/90">DATA_BLOCK_{Math.random().toString(16).slice(2, 10).toUpperCase()} VERIFIED</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPortal;