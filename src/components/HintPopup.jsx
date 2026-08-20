import { useState, useEffect, useRef } from 'react';

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
        
        // Calculate distance from mouse to button center
        const dist = Math.sqrt(
          Math.pow(e.clientX - btnCenterX, 2) + Math.pow(e.clientY - btnCenterY, 2)
        );

        if (dist < 100) { // If mouse gets within 100px
          // Move button to a random position within a 300px radius
          const angle = Math.random() * Math.PI * 2;
          const distance = 100 + Math.random() * 150;
          setBtnPos(prev => ({
            x: prev.x + Math.cos(angle) * distance,
            y: prev.y + Math.sin(angle) * distance
          }));
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
  }, [isRunningAway]);

  return (
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
      zIndex: 2000
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
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', position: 'relative', minHeight: '50px' }}>
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
              position: isRunningAway ? 'absolute' : 'static',
              transform: isRunningAway ? `translate(${btnPos.x}px, ${btnPos.y}px)` : 'none',
              transition: isRunningAway ? 'transform 0.1s ease-out' : 'transform 0.5s ease',
              zIndex: 2
            }}
          >
            YES, OVERRIDE
          </button>
        </div>
      </div>
    </div>
  );
}
