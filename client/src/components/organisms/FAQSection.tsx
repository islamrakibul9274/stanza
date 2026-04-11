import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggle }: { question: string, answer: string, isOpen: boolean, toggle: () => void }) => (
  <div className="glass-panel glass-edge mb-4 overflow-hidden transition-all duration-500">
    <button 
      onClick={toggle}
      className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
    >
      <span className="font-accent text-sm font-bold text-white uppercase tracking-widest">{question}</span>
      <div className="text-primary-glow">
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-6 pb-6"
        >
          <p className="text-white/40 text-sm leading-relaxed font-accent border-t border-white/5 pt-4">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    { question: "How does the Neural Architecture scale?", answer: "Our system utilizes a modular state-management layer that dynamically allocates resources based on real-time traffic pulses." },
    { question: "Can I customize the Glassmorphism intensity?", answer: "Yes, via the Nexus Command Center (CMD+K), you can live-edit blur, noise, and glow levels globally[cite: 29, 74]." },
    { question: "Is the AetherOS-Emerald theme accessible?", answer: "Every element is calibrated for WCAG compliance while maintaining high-end futuristic contrast ratios." }
  ];

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-2 rounded-lg bg-primary-glow/10 border border-primary-glow/20 mb-6">
            <HelpCircle className="text-primary-glow" size={20} />
          </div>
          <h2 className="font-accent text-5xl font-bold text-white tracking-tighter uppercase mb-4">Neural <span className="text-primary-glow">FAQ</span></h2>
        </motion.div>

        <div className="perspective-1000">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateX: -10, y: 20 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <FAQItem 
                {...faq} 
                isOpen={activeIndex === i} 
                toggle={() => setActiveIndex(activeIndex === i ? null : i)} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;