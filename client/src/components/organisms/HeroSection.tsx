import React from 'react';
import { motion } from 'framer-motion';
import GlassButton from '../atoms/GlassButton';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
      {/* Phase 2: The Layout Pop & Z-Axis Flight */}
      <motion.div
        initial={{ opacity: 0, z: -100, scale: 0.9 }}
        animate={{ opacity: 1, z: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="container relative z-10 mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="inline-block rounded-full border border-primary-glow/30 bg-primary-glow/10 px-4 py-1.5 font-accent text-[10px] tracking-[0.3em] text-primary-glow uppercase">
            AetherOS Neural Interface v1.0
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-8 font-accent text-6xl font-bold leading-none tracking-tighter text-white md:text-9xl"
        >
          THE FUTURE IS <br />
          <span className="bg-gradient-to-r from-primary-glow to-secondary-glow bg-clip-text text-transparent">
            IMMORTAL
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/40 md:text-xl"
        >
          Experience a digital ecosystem engineered for peak performance and infinite scalability. 
          Built with a Modular "Neural" Architecture for the next generation of SaaS[cite: 3].
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <GlassButton>INITIALIZE SYSTEM</GlassButton>
          <button className="font-accent text-xs font-bold tracking-[0.2em] text-white/50 transition-colors hover:text-white">
            VIEW DOCUMENTATION —
          </button>
        </motion.div>
      </motion.div>

      {/* Background Mesh Gradient Soul */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-primary-glow/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-secondary-glow/20 blur-[120px]" />
      </div>
    </section>
  );
};

export default HeroSection;