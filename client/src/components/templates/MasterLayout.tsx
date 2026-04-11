import React, { ReactNode } from 'react';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
import MeshGradient from '../atoms/MeshGradient';
import NeuralCursor from '../atoms/NeuralCursor';
import CommandCenter from '../organisms/CommandCenter';
import MobileHUD from '../organisms/MobileHUD';

interface MasterLayoutProps {
    children: ReactNode;
}

const MasterLayout = ({ children }: MasterLayoutProps) => {
    return (
        /* 1. We use flex-col and min-h-screen to ensure the Footer is always pushed to the bottom */
        <div className="relative flex flex-col min-h-screen bg-aether-bg selection:bg-primary-glow selection:text-black overflow-x-hidden">
            
            {/* 💎 Background Layer: The Liquid Mesh (Fixed in background) */}
            <MeshGradient />

            {/* 🖱️ Global Interaction: Neural Cursor HUD */}
            <NeuralCursor />

            {/* 🛰️ Navigation Layer: Fixed at z-[60] */}
            <Navbar />

            {/* ⚡ THE FIX: 
               We add pt-32 (top padding) to prevent content from hiding under the Navbar.
               We add pb-24 (bottom padding) to prevent content from hiding under the Mobile HUD.
               We use flex-grow so this section expands to fill empty space.
            */}
            <main className="relative z-10 flex-grow pt-32 pb-32 md:pb-0">
                {children}
            </main>

            {/* 📱 Mobile Dock: Fixed at z-[70] */}
            <MobileHUD />

            {/* ⌨️ Terminal Layer: Modal overlay at z-[100] */}
            <CommandCenter />

            {/* 🏁 Footer Layer: Static at the bottom of the scroll flow */}
            <Footer />
        </div>
    );
};

export default MasterLayout;