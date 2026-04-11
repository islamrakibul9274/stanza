import { create } from 'zustand';

interface CommandState {
    isProcessing: boolean;
    activeTheme: 'Emerald' | 'Ruby' | 'Cobalt';
    glassBlur: string;
    simulateAITask: (task: string) => Promise<string>;
    setTheme: (theme: 'Emerald' | 'Ruby' | 'Cobalt') => void;
    setBlur: (blur: string) => void;
}

export const useCommandCenter = create<CommandState>((set) => ({
    isProcessing: false,
    activeTheme: 'Emerald',
    glassBlur: '18px',

    executePortalJump: async (path: string, navigate: any) => {
        set({ isProcessing: true });
        // Cinematic delay for the "Warp" effect
        await new Promise(resolve => setTimeout(resolve, 800));
        navigate(path);
        set({ isProcessing: false });
    },

    simulateAITask: async (task) => {
        set({ isProcessing: true });
        // Simulated Neural Processing delay [cite: 3]
        await new Promise(resolve => setTimeout(resolve, 2000));
        set({ isProcessing: false });
        return `Protocol executed: ${task} has been synchronized with the Aether core.`;
    },

    setTheme: (theme) => set({ activeTheme: theme }),
    setBlur: (blur) => {
        set({ glassBlur: blur });
        // Dynamically update CSS variable in index.css [cite: 14]
        document.documentElement.style.setProperty('--blur-aether', blur);
    }
}));