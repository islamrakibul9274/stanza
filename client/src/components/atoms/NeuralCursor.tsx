import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const NeuralCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200 };
    const x = useSpring(cursorX, springConfig);
    const y = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            // Check if hovering over a glass element or button
            const target = e.target as HTMLElement;
            setIsHovering(!!target.closest('.glass-panel, button, a'));
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 border border-primary-glow rounded-full pointer-events-none z-[9999] flex items-center justify-center"
            style={{ x, y, translateX: '-50%', translateY: '-50%' }}
            animate={{
                scale: isHovering ? 2.5 : 1,
                backgroundColor: isHovering ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0)',
            }}
        >
            <div className="w-1 h-1 bg-primary-glow rounded-full shadow-[0_0_10px_#10b981]" />
        </motion.div>
    );
};

export default NeuralCursor;