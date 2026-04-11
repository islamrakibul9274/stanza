import React, { useEffect, useRef } from 'react';

const MeshGradient = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    const animate = () => {
      time += 0.005;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Create a "Liquid Emerald" Mesh
      const gradient = ctx.createRadialGradient(
        width / 2 + Math.sin(time) * 100,
        height / 2 + Math.cos(time) * 100,
        0,
        width / 2,
        height / 2,
        width
      );

      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.08)');
      gradient.addColorStop(0.5, 'rgba(6, 78, 59, 0.05)');
      gradient.addColorStop(1, 'rgba(1, 5, 2, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 -z-20 w-full h-full pointer-events-none opacity-60"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default MeshGradient;