import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// 🛡️ Added Trash2 to the imports
import { Plus, Zap, CheckCircle2, Circle, Trash2, Loader2 } from 'lucide-react';

const NexusTasker = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);
  const token = localStorage.getItem('aether_token');

  // 📡 Fetch Tasks from MongoDB
  const fetchNeuralTasks = useCallback(async () => {
    if (!token) return;
    try {
      const response = await fetch('http://localhost:5001/api/tasks', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      if (Array.isArray(data)) setTasks(data);
    } catch (error) {
      console.error("NEURAL_FETCH_FAILED", error);
    }
  }, [token]);

  useEffect(() => {
    fetchNeuralTasks();
  }, [fetchNeuralTasks]);

  // 📥 Inject New Objective
  const addNeuralTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    setIsSyncing(true);
    try {
      const response = await fetch('http://localhost:5001/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title: newTaskTitle, priority: 'MEDIUM' }),
      });

      if (response.ok) {
        setNewTaskTitle('');
        fetchNeuralTasks();
      }
    } catch (error) {
      console.error("INJECTION_FAILED", error);
    } finally {
      setIsSyncing(false);
    }
  };

  // 🗑️ Purge Protocol
  const purgeTask = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5001/api/tasks/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) fetchNeuralTasks();
    } catch (error) {
      console.error("PURGE_ERROR", error);
    }
  };

  // 🔄 Status Toggle
  const toggleStatus = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5001/api/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) fetchNeuralTasks();
    } catch (error) {
      console.error("TOGGLE_ERROR", error);
    }
  };

  return (
    <div className="glass-panel glass-edge p-8 h-full flex flex-col min-h-[500px]">
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col">
          <h3 className="font-accent text-xs font-bold text-white tracking-[0.4em] uppercase">Neural Objectives</h3>
          <span className="text-[8px] text-white/20 font-accent mt-1 uppercase tracking-widest">Active Links: {tasks.length}</span>
        </div>
        <Zap size={14} className={isSyncing ? "text-primary-glow animate-pulse" : "text-white/20"} />
      </div>

      <form onSubmit={addNeuralTask} className="mb-6 flex gap-2">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="ENTER_NEW_OBJECTIVE..."
          className="flex-grow bg-white/5 border border-white/10 rounded-lg px-4 py-2 font-accent text-[10px] text-white outline-none focus:border-primary-glow/50 transition-all placeholder:text-white/10"
        />
        <button 
            type="submit" 
            disabled={isSyncing}
            className="p-2 bg-primary-glow/10 border border-primary-glow/20 rounded-lg text-primary-glow hover:bg-primary-glow/20 transition-all disabled:opacity-50"
        >
          {isSyncing ? <Loader2 size={18} className="animate-spin" /> : <Plus size={18} />}
        </button>
      </form>

      <div className="space-y-3 overflow-y-auto custom-scrollbar pr-2 flex-grow">
        <AnimatePresence mode='popLayout'>
          {tasks.map((task: any) => (
            <motion.div
              key={task._id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all group"
            >
              <button
                onClick={() => toggleStatus(task._id)}
                className={`transition-all duration-500 ${task.status === 'SYNCED' ? 'text-primary-glow' : 'text-white/20 hover:text-white/40'}`}
              >
                {task.status === 'SYNCED' ? <CheckCircle2 size={16} /> : <Circle size={16} />}
              </button>

              <span className={`font-accent text-[10px] tracking-widest uppercase flex-grow transition-all duration-500 ${
                task.status === 'SYNCED' ? 'text-white/10 line-through scale-[0.98]' : 'text-white/60'
              }`}>
                {task.title}
              </span>

              <button
                onClick={() => purgeTask(task._id)}
                className="opacity-0 group-hover:opacity-100 text-white/10 hover:text-red-500 transition-all p-1"
              >
                <Trash2 size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {tasks.length === 0 && !isSyncing && (
          <div className="h-40 flex items-center justify-center border border-dashed border-white/5 rounded-2xl">
            <p className="font-accent text-[8px] text-white/10 uppercase tracking-[0.4em]">No active objectives</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NexusTasker;