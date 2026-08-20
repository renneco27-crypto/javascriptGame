import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function HintPopup({ onConfirm, onCancel }) {
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const [isRunningAway, setIsRunningAway] = useState(true);
  const btnRef = useRef(null);
  const movementTimerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // 1. Handle mouse inactivity timer
      if (movementTimerRef.current) {
        clearTimeout(movementTimerRef.current);
      }
      
      movementTimerRef.current = setTimeout(() => {
        // If mouse is still for 3 seconds, stop running away!
        setIsRunningAway(false);
        setBtnPos({ x: 0, y: 0 });
      }, 3000);

      // 2. Handle button running away
      if (isRunningAway && btnRef.current) {
        const rect = btnRef.current.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;
        
        const dx = btnCenterX - e.clientX;
        const dy = btnCenterY - e.clientY;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < 150) { // If mouse gets within 150px
          // Calculate angle away from mouse, plus a random deflection to avoid getting trapped
          let angle = Math.atan2(dy, dx);
          angle += (Math.random() - 0.5) * (Math.PI / 1.5); // Random veer

          const runDistance = 50; // Jump distance
          let targetX = btnPos.x + Math.cos(angle) * runDistance;
          let targetY = btnPos.y + Math.sin(angle) * runDistance;

          // Apply strict 200 pixel clamp in each direction
          const MAX_DIST = 200;
          targetX = Math.max(-MAX_DIST, Math.min(MAX_DIST, targetX));
          targetY = Math.max(-MAX_DIST, Math.min(MAX_DIST, targetY));

          setBtnPos({ x: targetX, y: targetY });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Start initial timer
    movementTimerRef.current = setTimeout(() => {
      setIsRunningAway(false);
      setBtnPos({ x: 0, y: 0 });
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (movementTimerRef.current) clearTimeout(movementTimerRef.current);
    };
  }, [isRunningAway, btnPos]);

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{
        backgroundColor: '#111',
        border: '2px solid #f00',
        padding: '30px',
        textAlign: 'center',
        fontFamily: 'monospace',
        color: '#fff',
        boxShadow: '0 0 20px rgba(255,0,0,0.5)',
        position: 'relative'
      }}>
        <h2 style={{ color: '#f00', marginTop: 0 }}>WARNING: INSUFFICIENT CLEARANCE</h2>
        <p>Accessing the hint database requires overriding security protocols.</p>
        <p style={{ marginBottom: '30px' }}>ARE YOU SURE YOU WANT TO PROCEED?</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', position: 'relative', minHeight: '50px', alignItems: 'center' }}>
          <button
            onClick={onCancel}
            style={{
              padding: '10px 20px',
              backgroundColor: '#333',
              color: '#fff',
              border: '1px solid #555',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              zIndex: 1
            }}
          >
            CANCEL
          </button>
          
          <button
            ref={btnRef}
            onMouseEnter={() => {
              if (isRunningAway) {
                // If mouse actually touches the button, immediately escape to opposite corner
                setBtnPos(prev => ({
                  x: prev.x >= 0 ? -200 : 200,
                  y: prev.y >= 0 ? -200 : 200
                }));
              }
            }}
            onClick={() => {
              if (!isRunningAway) onConfirm();
            }}
            style={{
              padding: '10px 20px',
              backgroundColor: '#f00',
              color: '#fff',
              border: '1px solid #ff5555',
              cursor: isRunningAway ? 'default' : 'pointer',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              transform: isRunningAway ? `translate(${btnPos.x}px, ${btnPos.y}px)` : 'none',
              transition: isRunningAway ? 'transform 0.1s ease-out' : 'transform 0.5s ease',
              zIndex: 2
            }}
          >
            YES, OVERRIDE
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
