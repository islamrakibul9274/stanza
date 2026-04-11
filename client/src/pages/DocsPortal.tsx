import React from 'react';
import { motion } from 'framer-motion';
import { Book, Code, Terminal, Hash, ChevronRight } from 'lucide-react';

const DocsPortal = () => {
    const sidebarItems = [
        { group: "Getting Started", items: ["Installation", "Neural Sync", "Authentication"] },
        { group: "Environment Hubs", items: ["AI Workspace", "Neural CRM", "Quantum Analytics"] },
        { icon: Code, group: "Neural API", items: ["Endpoints", "Webhooks", "Rate Limits"] }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* 📚 Sidebar: Neural Navigation */}
                    <aside className="lg:w-64 shrink-0">
                        <div className="sticky top-32 space-y-8">
                            {sidebarItems.map((section) => (
                                <div key={section.group}>
                                    <h4 className="font-accent text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase mb-4 flex items-center gap-2">
                                        {section.icon && <section.icon size={12} />} {section.group}
                                    </h4>
                                    <ul className="space-y-2">
                                        {section.items.map(item => (
                                            <li key={item}>
                                                <button className="text-xs font-accent text-white/50 hover:text-primary-glow transition-colors uppercase tracking-widest flex items-center justify-between w-full group">
                                                    {item} <ChevronRight size={10} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* 📄 Main Content: The Glass Manuscript */}
                    <main className="flex-1 max-w-3xl">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-panel glass-edge p-10 md:p-16"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <Terminal className="text-primary-glow" size={24} />
                                <span className="font-accent text-[10px] font-bold tracking-[0.5em] text-primary-glow uppercase">System Documentation</span>
                            </div>
                            
                            <h1 className="font-accent text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase mb-8">
                                Neural <span className="text-primary-glow">Sync</span> Protocol
                            </h1>

                            <div className="prose prose-invert max-w-none space-y-6 font-accent">
                                <p className="text-white/40 leading-relaxed text-lg">
                                    To establish a high-fidelity connection between your local node and the AetherOS core, 
                                    you must initialize the neural handshake sequence. This ensures zero-latency data 
                                    transmission across the Integration Mesh.
                                </p>

                                <div className="bg-black/50 border border-white/10 rounded-xl p-6 font-mono text-xs text-primary-glow relative group">
                                    <div className="absolute top-4 right-4 text-white/10 group-hover:text-white/30 transition-colors">
                                        <Hash size={14} />
                                    </div>
                                    <p className="mb-2"># Initialize neural core</p>
                                    <p>npx aether-os sync --key YOUR_NEURAL_TOKEN</p>
                                </div>

                                <h3 className="text-xl font-bold text-white uppercase tracking-tight pt-6">Core Requirements</h3>
                                <ul className="space-y-3 text-white/40 text-sm">
                                    <li className="flex gap-3"><div className="h-1.5 w-1.5 rounded-full bg-primary-glow mt-1.5 shrink-0" /> Node.js v20.0.0 or higher for optimal thread handling.</li>
                                    <li className="flex gap-3"><div className="h-1.5 w-1.5 rounded-full bg-primary-glow mt-1.5 shrink-0" /> A valid biometric signature from the Secure Portal.</li>
                                </ul>
                            </div>
                        </motion.div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DocsPortal;