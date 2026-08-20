import { useEffect, useRef } from 'react';

export default function GameWorld() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Simple retro grid / pixel background effect
    let time = 0;
    const render = () => {
      time += 0.01;
      
      // Clear with dark purple/blue
      ctx.fillStyle = '#0a0a1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw a retro grid
      ctx.strokeStyle = 'rgba(0, 255, 204, 0.2)';
      ctx.lineWidth = 2;
      
      const gridSize = 50;
      const offsetX = (time * 20) % gridSize;
      const offsetY = (time * 10) % gridSize;

      ctx.beginPath();
      // Vertical lines
      for (let x = -gridSize; x < canvas.width + gridSize; x += gridSize) {
        ctx.moveTo(x + offsetX, 0);
        ctx.lineTo(x + offsetX, canvas.height);
      }
      // Horizontal lines
      for (let y = -gridSize; y < canvas.height + gridSize; y += gridSize) {
        ctx.moveTo(0, y + offsetY);
        ctx.lineTo(canvas.width, y + offsetY);
      }
      ctx.stroke();

      // Some floating "pixels" (data packets)
      for (let i = 0; i < 20; i++) {
        const px = (Math.sin(time + i) * canvas.width * 0.5) + canvas.width * 0.5;
        const py = ((time * 50 + i * 100) % canvas.height);
        
        ctx.fillStyle = 'rgba(255, 0, 255, 0.5)';
        ctx.fillRect(px, canvas.height - py, 10, 10);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1, // Behind everything
        display: 'block'
      }}
    />
  );
}
