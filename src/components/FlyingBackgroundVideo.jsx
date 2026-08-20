import React, { useState, useEffect, useRef } from 'react';

export default function FlyingBackgroundVideo() {
  const [flight, setFlight] = useState(null);
  const animFrameRef = useRef(null);

  const startFlight = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const cx = w / 2;
    const cy = h / 2;
    const r = Math.sqrt(cx * cx + cy * cy) + 250;

    // Pick a random starting angle
    const angle = Math.random() * Math.PI * 2;
    const startX = cx + r * Math.cos(angle);
    const startY = cy + r * Math.sin(angle);

    // Opposite direction with a slight random variation
    const jitter = (Math.random() - 0.5) * 0.5;
    const endX = cx - r * Math.cos(angle + jitter);
    const endY = cy - r * Math.sin(angle + jitter);

    // Calculate facing angle in degrees
    const travelAngle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);

    const duration = 12000; // 12 seconds flight time across screen
    const startTime = performance.now();

    setFlight({
      startX,
      startY,
      endX,
      endY,
      x: startX,
      y: startY,
      angle: travelAngle,
      startTime,
      duration
    });
  };

  useEffect(() => {
    // Initial flight after 4 seconds for instant preview
    const initialTimer = setTimeout(() => {
      startFlight();
    }, 4000);

    // Repeat every 60 seconds (1 minute)
    const interval = setInterval(() => {
      startFlight();
    }, 60000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (!flight) return;

    const update = (now) => {
      const elapsed = now - flight.startTime;
      const progress = elapsed / flight.duration;

      if (progress >= 1) {
        setFlight(null); // Finished crossing screen and disappears
        return;
      }

      const currentX = flight.startX + (flight.endX - flight.startX) * progress;
      const currentY = flight.startY + (flight.endY - flight.startY) * progress;

      setFlight(prev => prev ? { ...prev, x: currentX, y: currentY } : null);
      animFrameRef.current = requestAnimationFrame(update);
    };

    animFrameRef.current = requestAnimationFrame(update);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [flight?.startTime]);

  if (!flight) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        transform: `translate(${flight.x}px, ${flight.y}px) translate(-50%, -50%)`,
        zIndex: 1, // Above Canvas (zIndex: 0), behind UI (zIndex: 10)
        pointerEvents: 'none',
        transition: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <video
        src="/i_want_you_to_make_like_a_fram.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '260px',
          height: 'auto',
          borderRadius: '12px',
          border: '1px solid rgba(0, 255, 204, 0.6)',
          boxShadow: '0 0 30px rgba(0, 255, 204, 0.4), 0 0 15px rgba(255, 0, 255, 0.3)',
          opacity: 0.85,
          filter: 'drop-shadow(0 0 10px rgba(0, 255, 204, 0.8))'
        }}
      />
    </div>
  );
}
