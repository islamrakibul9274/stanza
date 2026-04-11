import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

// Pages
import Home from './pages/Home';
import DocsPortal from './pages/DocsPortal';
import ProjectDetails from './pages/ProjectDetails';
import BlogDetails from './components/organisms/BlogDetails';
import AnalyticsPortal from './pages/AnalyticsPortal';
import LegalPortal from './pages/LegalPortal';
import ServicePortal from './pages/ServicePortal';
import SuccessPortal from './pages/SuccessPortal';
import PricingPortal from './pages/PricingPortal';
import NotFound from './pages/NotFound';

// Auth & Security
import ProtectedRoute from './components/atoms/ProtectedRoute';
import SecurePortal from './components/organisms/SecurePortal';

// Layout & Core
import MasterLayout from './components/templates/MasterLayout';
import BlogGrid from './components/organisms/BlogGrid';

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 1.02 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {/* 🔓 Public Nodes */}
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/auth" element={<PageWrapper><SecurePortal /></PageWrapper>} />
                <Route path="/pricing" element={<PageWrapper><PricingPortal /></PageWrapper>} />
                <Route path="/blog" element={<PageWrapper><BlogGrid /></PageWrapper>} />
                <Route path="/blog/:id" element={<PageWrapper><BlogDetails /></PageWrapper>} />
                <Route path="/legal" element={<PageWrapper><LegalPortal /></PageWrapper>} />
                <Route path="/project/:slug" element={<PageWrapper><ProjectDetails /></PageWrapper>} />

                {/* 🔒 Protected Neural Tiers (Requires aether_token) */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/analytics" element={<PageWrapper><AnalyticsPortal /></PageWrapper>} />
                    <Route path="/docs" element={<PageWrapper><DocsPortal /></PageWrapper>} />
                    <Route path="/service/:id" element={<PageWrapper><ServicePortal /></PageWrapper>} />
                    <Route path="/success" element={<PageWrapper><SuccessPortal /></PageWrapper>} />
                </Route>

                {/* 🚫 Catch-all fallback */}
                <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
};

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hyper-Fluid Scroll Logic
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1
        });

        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Neural Sync Delay (Reduced for speed)
        const timer = setTimeout(() => setIsLoading(false), 2000);

        return () => {
            clearTimeout(timer);
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return (
        <Router>
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loader"
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="fixed inset-0 z-[999] bg-aether-bg flex items-center justify-center"
                    >
                        <div className="relative">
                            <div className="h-16 w-16 border-2 border-primary-glow/20 rounded-full" />
                            <div className="absolute inset-0 h-16 w-16 border-t-2 border-primary-glow rounded-full animate-spin" />
                            <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-accent text-[8px] font-bold tracking-[0.5em] text-primary-glow uppercase whitespace-nowrap">
                                Neural Syncing...
                            </p>
                        </div>
                    </motion.div>
                ) : (
                    <MasterLayout>
                        <AnimatedRoutes />
                    </MasterLayout>
                )}
            </AnimatePresence>
        </Router>
    );
};

export default App;