import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Terminal, Cpu, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-aether-bg pt-20 pb-10 overflow-hidden">
      {/* 🌌 Background Mesh Gradient [cite: 60] */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-glow/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="font-accent text-2xl font-bold tracking-tighter text-white mb-6">
              AETHER<span className="text-primary-glow">OS</span>
            </div>
            <p className="text-white/30 text-xs font-accent tracking-widest leading-relaxed uppercase">
              Engineering the immortal standard of digital ecosystems[cite: 1, 2]. Built for 2026 and beyond[cite: 5].
            </p>
          </div>

          {[
            { title: 'Platform', links: ['Ecosystem', 'Portals', 'Nexus', 'Security'] },
            { title: 'Resources', links: ['Documentation', 'Neural API', 'Changelog', 'Status'] },
            { title: 'Company', links: ['The Collective', 'Vision', 'Careers', 'Contact'] }
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-accent text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-white/20 hover:text-primary-glow transition-colors font-accent uppercase tracking-widest flex items-center gap-1 group">
                      {link} <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-accent text-white/20 uppercase tracking-[0.2em]">
            © 2026 AETHER OS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            {/* 🛠️ Using stable, high-tech icon exports  */}
            {[Globe, Terminal, Cpu].map((Icon, idx) => (
              <a key={idx} href="#" className="text-white/20 hover:text-primary-glow transition-all transform hover:-translate-y-1">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;