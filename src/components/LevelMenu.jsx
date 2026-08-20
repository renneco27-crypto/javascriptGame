import { useState } from 'react';
import { allLevels as levels } from '../levels/index.js';

export default function LevelMenu({ currentLevelIndex, onSelectLevel }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          background: '#111',
          border: '1px solid #00ffcc',
          color: '#00ffcc',
          padding: '10px',
          cursor: 'pointer',
          borderRadius: '4px',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}
      >
        <div style={{ width: '20px', height: '2px', background: '#00ffcc' }} />
        <div style={{ width: '20px', height: '2px', background: '#00ffcc' }} />
        <div style={{ width: '20px', height: '2px', background: '#00ffcc' }} />
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '300px',
          height: '100vh',
          background: 'rgba(10, 10, 15, 0.95)',
          borderRight: '1px solid #00ffcc',
          zIndex: 999,
          padding: '80px 20px 20px 20px',
          overflowY: 'auto',
          fontFamily: 'monospace',
          boxShadow: '5px 0 15px rgba(0,0,0,0.5)'
        }}>
          <h3 style={{ color: '#00ffcc', marginTop: 0, borderBottom: '1px dashed #333', paddingBottom: '10px' }}>SYSTEM_NODES</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {levels.map((level, idx) => (
              <button
                key={level.id}
                onClick={() => {
                  onSelectLevel(idx);
                  setIsOpen(false);
                }}
                style={{
                  background: currentLevelIndex === idx ? 'rgba(0, 255, 204, 0.2)' : 'transparent',
                  border: '1px solid ' + (currentLevelIndex === idx ? '#00ffcc' : '#333'),
                  color: currentLevelIndex === idx ? '#fff' : '#aaa',
                  padding: '10px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  transition: 'all 0.2s',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <span style={{ fontSize: '10px', color: '#ff00ff' }}>{level.sector}</span>
                <span>{level.title}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
