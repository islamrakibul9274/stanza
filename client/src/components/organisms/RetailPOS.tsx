import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Package, CreditCard, History, Plus, Search } from 'lucide-react';

// Molecule: Inventory Item with Magnetic Interaction
const InventoryItem = ({ name, price, stock }: { name: string; price: string; stock: number }) => (
  <motion.div 
    whileHover={{ scale: 1.02, backgroundColor: "rgba(16, 185, 129, 0.08)" }}
    className="glass-panel glass-edge p-4 flex items-center justify-between group cursor-pointer"
  >
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary-glow/50 transition-colors">
        <Package size={20} className="text-white/20 group-hover:text-primary-glow" />
      </div>
      <div>
        <h4 className="font-accent text-sm font-bold text-white uppercase tracking-wider">{name}</h4>
        <p className="text-[10px] text-white/30 font-accent uppercase tracking-widest">{stock} IN STOCK</p>
      </div>
    </div>
    <div className="text-right">
      <p className="font-accent text-sm font-bold text-primary-glow">{price}</p>
      <button className="mt-1 text-[8px] font-bold text-white/20 group-hover:text-white transition-colors">ADD TO BUNDLE +</button>
    </div>
  </motion.div>
);

const RetailPOS = () => {
  return (
    <section id="retail-pos" className="relative min-h-screen py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          
          {/* Left: Inventory Control (The Warehouse) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-8"
          >
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-glow/10 border border-primary-glow/20">
                    <ShoppingCart className="text-primary-glow" size={20} />
                  </div>
                  <span className="font-accent text-xs font-bold tracking-[0.3em] text-primary-glow uppercase">Retail Protocol Active</span>
                </div>
                <h2 className="font-accent text-5xl font-bold text-white tracking-tighter uppercase">
                  Emerald <span className="text-primary-glow">Ledger</span>
                </h2>
              </div>
              <div className="hidden md:flex items-center glass-panel px-4 py-2 border-white/5 bg-white/5">
                <Search size={16} className="text-white/20 mr-3" />
                <input placeholder="SEARCH INVENTORY..." className="bg-transparent font-accent text-[10px] text-white outline-none placeholder:text-white/10 w-48" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Neural Link v4", price: "Ξ 2.40", stock: 12 },
                { name: "Aether Mesh Core", price: "Ξ 0.85", stock: 45 },
                { name: "Glass-Neo Display", price: "Ξ 1.12", stock: 8 },
                { name: "Quantum Cell", price: "Ξ 4.50", stock: 3 }
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <InventoryItem {...item} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Checkout Terminal (The Holographic Receipt) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-4"
          >
            <div className="glass-panel glass-edge p-8 h-full flex flex-col shadow-[0_0_80px_rgba(16,185,129,0.1)]">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <History size={16} className="text-primary-glow" />
                  <span className="font-accent text-[10px] font-bold tracking-widest text-white uppercase">Current Session</span>
                </div>
                <span className="text-[10px] font-mono text-white/30">#TX-8829</span>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                <div className="flex justify-between items-center text-white/60">
                  <span className="font-accent text-xs">Neural Link v4</span>
                  <span className="font-mono text-xs">Ξ 2.40</span>
                </div>
                <div className="flex justify-between items-center text-white/60">
                  <span className="font-accent text-xs">Aether Mesh Core x2</span>
                  <span className="font-mono text-xs">Ξ 1.70</span>
                </div>
                <div className="h-px bg-white/5 my-4" />
                <div className="flex justify-between items-center">
                  <span className="font-accent text-sm font-bold text-white uppercase">Subtotal</span>
                  <span className="font-mono text-sm font-bold text-primary-glow">Ξ 4.10</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full glass-panel glass-edge py-4 bg-primary-glow/10 hover:bg-primary-glow/20 transition-all flex items-center justify-center gap-3">
                  <CreditCard size={18} className="text-primary-glow" />
                  <span className="font-accent text-xs font-bold tracking-[0.2em] text-white">INITIALIZE PAYMENT</span>
                </button>
                <button className="w-full py-4 border border-dashed border-white/10 rounded-xl font-accent text-[10px] font-bold tracking-widest text-white/20 hover:text-white transition-colors">
                  SAVE DRAFT LEDGER
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Background Decor: Mesh Pulse */}
      <div className="absolute top-[20%] right-[-10%] h-[50%] w-[50%] rounded-full bg-primary-glow/5 blur-[150px] -z-10" />
    </section>
  );
};

export default RetailPOS;