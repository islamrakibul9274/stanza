import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Tag, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
}

const BlogCard = ({ id, title, category, date, image }: BlogCardProps) => (
  <Link to={`/blog/${id}`} className="block h-full">
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass-panel glass-edge group flex flex-col h-full cursor-pointer"
    >
      {/* Visual Placeholder for Blog Image */}
      <div className="h-48 w-full bg-gradient-to-br from-primary-glow/10 to-secondary-glow/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-aether-bg/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <BookOpen className="text-primary-glow" size={32} />
        </div>
        {/* Subtle animated mesh behind the icon */}
        <div className="absolute inset-0 bg-primary-glow/5 animate-pulse" />
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <Tag size={12} className="text-primary-glow" />
          <span className="font-accent text-[10px] font-bold tracking-[0.2em] text-primary-glow uppercase">
            {category}
          </span>
        </div>
        
        <h3 className="font-accent text-xl font-bold text-white uppercase tracking-tight mb-6 group-hover:text-primary-glow transition-colors leading-tight">
          {title}
        </h3>
        
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/30 text-[10px] font-accent uppercase tracking-widest">
            <Clock size={12} />
            <span>{date}</span>
          </div>
          <div className="text-white/20 group-hover:text-primary-glow transition-all transform group-hover:translate-x-1">
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </motion.div>
  </Link>
);

const BlogGrid = () => {
  // Enhanced data array with unique IDs for routing
  const posts = [
    { 
      id: "neural-rise", 
      title: "The Rise of Neural Architectures", 
      category: "Engineering", 
      date: "April 08, 2026", 
      image: "" 
    },
    { 
      id: "glass-shaders", 
      title: "Mastering Glassmorphism 2.0 Shaders", 
      category: "Design", 
      date: "April 05, 2026", 
      image: "" 
    },
    { 
      id: "zero-latency", 
      title: "Scaling Zero-Latency Data Streams", 
      category: "Performance", 
      date: "April 02, 2026", 
      image: "" 
    }
  ];

  return (
    <section id="blog" className="relative py-32 overflow-hidden bg-gradient-to-t from-primary-glow/5 to-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-accent text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none">
              Neural <span className="text-primary-glow">Insights</span>
            </h2>
            <p className="mt-6 text-white/40 text-lg max-w-xl">
              Exploring the frontiers of the Immortal Tier. Deep dives into neural scaling, 
              aesthetic engineering, and the future of AetherOS.
            </p>
          </motion.div>
          
          <Link to="/blog">
            <button className="glass-panel glass-edge px-8 py-3 font-accent text-[10px] font-bold tracking-[0.2em] text-white/60 hover:text-white transition-all hover:bg-white/5">
              VIEW ALL PROTOCOLS
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;