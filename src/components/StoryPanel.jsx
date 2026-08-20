import { Rnd } from 'react-rnd';

export default function StoryPanel({ title, description, hints, output, resultStatus }) {
  return (
    <Rnd
      default={{
        x: 50,
        y: 50,
        width: 400,
        height: 500,
      }}
      minWidth={300}
      minHeight={200}
      bounds="window"
      style={{
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(20, 20, 25, 0.95)',
        border: '1px solid #444',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        color: '#0f0',
        fontFamily: 'monospace'
      }}
      dragHandleClassName="story-header"
    >
      <div 
        className="story-header" 
        style={{ 
          padding: '8px 12px', 
          backgroundColor: '#111', 
          cursor: 'grab',
          borderBottom: '1px solid #333',
          fontWeight: 'bold',
          color: '#fff'
        }}
      >
        MISSION_BRIEFING.txt
      </div>
      
      <div style={{ flex: 1, overflow: 'auto', padding: '16px' }}>
        <h2 style={{ marginTop: 0, color: '#00ffcc' }}>{title}</h2>
        <p style={{ lineHeight: '1.5', fontSize: '14px' }}>{description}</p>
        
        {hints && hints.length > 0 && (
          <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'rgba(0, 255, 204, 0.1)', borderRadius: '4px' }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#00ffcc' }}>HINTS:</h4>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px' }}>
              {hints.map((hint, i) => <li key={i}>{hint}</li>)}
            </ul>
          </div>
        )}

        <div style={{ marginTop: '30px', borderTop: '1px dashed #444', paddingTop: '16px' }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#fff' }}>SYSTEM OUTPUT:</h4>
          
          {output && output.length > 0 ? (
            <div style={{ 
              backgroundColor: '#000', 
              padding: '10px', 
              borderRadius: '4px',
              minHeight: '60px',
              color: '#ddd'
            }}>
              {output.map((line, i) => <div key={i}>&gt; {line}</div>)}
            </div>
          ) : (
            <div style={{ color: '#666', fontStyle: 'italic' }}>Waiting for execution...</div>
          )}

          {resultStatus && (
            <div style={{ 
              marginTop: '10px', 
              padding: '8px', 
              backgroundColor: resultStatus.success ? 'rgba(0, 255, 0, 0.2)' : 'rgba(255, 0, 0, 0.2)',
              color: resultStatus.success ? '#0f0' : '#f00',
              fontWeight: 'bold',
              textAlign: 'center',
              borderRadius: '4px'
            }}>
              {resultStatus.message}
            </div>
          )}
        </div>
      </div>
    </Rnd>
  );
}
