import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, Share2, MessageSquare, Tag } from 'lucide-react';

// Mock Data Store - In a real app, this would be an API call
const BLOG_DATA: Record<string, any> = {
  "neural-rise": {
    title: "The Rise of Neural Architectures",
    category: "Engineering",
    date: "April 08, 2026",
    readTime: "12 MIN",
    content: "The barrier to entry for SaaS is non-existent, yet the competition for neural attention is at an all-time high. AetherOS addresses this by utilizing a Modular 'Neural' Architecture..."
  },
  "glass-shaders": {
    title: "Mastering Glassmorphism 2.0 Shaders",
    category: "Design",
    date: "April 05, 2026",
    readTime: "8 MIN",
    content: "Glassmorphism isn't just about blur; it's about the interplay of light, noise, and depth. To reach the Immortal Tier, we must treat our UI like physical material..."
  },
  "zero-latency": {
    title: "Scaling Zero-Latency Data Streams",
    category: "Performance",
    date: "April 02, 2026",
    readTime: "15 MIN",
    content: "Zero-latency isn't a luxury; it's a requirement for the next generation of neural synchronization. We explore how AetherOS manages edge-node processing..."
  }
};

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate API fetch delay
    if (id && BLOG_DATA[id]) {
      setPost(BLOG_DATA[id]);
    }
    window.scrollTo(0, 0); // Reset scroll on entry
  }, [id]);

  if (!post) return (
    <div className="min-h-screen flex items-center justify-center font-accent text-primary-glow animate-pulse uppercase tracking-[0.5em]">
      Searching Neural Records...
    </div>
  );

  return (
    <div className="relative min-h-screen pt-40 pb-20 overflow-hidden">
      {/* 🚀 Reading Progress HUD */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary-glow z-[100] origin-left shadow-[0_0_15px_rgba(16,185,129,0.8)]"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-6 max-w-4xl">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-white/30 hover:text-primary-glow font-accent text-[10px] font-bold tracking-widest uppercase mb-12 transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Protocols
        </Link>

        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-primary-glow/10 border border-primary-glow/20 text-primary-glow px-3 py-1 rounded-full text-[10px] font-bold font-accent tracking-widest uppercase">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-white/20 text-[10px] font-accent uppercase tracking-widest">
              <Clock size={12} /> {post.readTime} READ
            </div>
          </div>
          <h1 className="font-accent text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-8">
            {post.title.split(' ').map((word: string, i: number) => 
              word.toLowerCase() === 'neural' ? <span key={i} className="text-primary-glow">{word} </span> : word + ' '
            )}
          </h1>
          <p className="text-white/20 font-accent text-xs tracking-widest uppercase">Transmitted on {post.date}</p>
        </motion.header>

        {/* 💎 Glassmorphism 2.0 Article Canvas */}
        <motion.article 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-panel glass-edge p-10 md:p-16 relative"
        >
          <div className="prose prose-invert max-w-none space-y-8 font-accent">
            <p className="text-xl text-white/60 leading-relaxed italic border-l-2 border-primary-glow pl-6">
              "To reach Immortal status, we must architect digital experiences that feel like living, breathing organisms."
            </p>
            <p className="text-white/40 text-lg leading-relaxed">
              {post.content}
            </p>
            <div className="h-64 w-full bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center">
                <p className="text-[10px] text-white/10 uppercase tracking-[0.4em]">Visual Data Stream Placeholder</p>
            </div>
            <p className="text-white/40 text-lg leading-relaxed">
              Further exploration into the AetherOS core reveals that our state management strategy is the true hero of the zero-latency experience. By utilizing decentralized nodes, we ensure that the interface remains fluid regardless of global traffic spikes.
            </p>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex items-center justify-between">
            <div className="flex gap-6">
              <button className="flex items-center gap-2 text-[10px] font-bold text-white/20 hover:text-white transition-colors uppercase tracking-widest">
                <Share2 size={14} /> Share Protocol
              </button>
              <button className="flex items-center gap-2 text-[10px] font-bold text-white/20 hover:text-white transition-colors uppercase tracking-widest">
                <MessageSquare size={14} /> 12 Transmission Logs
              </button>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogDetails;