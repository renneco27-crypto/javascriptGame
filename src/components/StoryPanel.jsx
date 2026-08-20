import { Rnd } from 'react-rnd';
import { useState, useEffect } from 'react';

function BootSequence({ onComplete }) {
  const [step, setStep] = useState(0);

  const logs = [
    { text: "> Fetching mission_data.pkg...", color: "#888" },
    { text: "> Resolving dependencies...", color: "#00aaff" },
    { text: "> Downloading [████████████████████] 100%", color: "#ff00ff" },
    { text: "> DECRYPTION SUCCESSFUL.", color: "#0f0" }
  ];

  useEffect(() => {
    if (step < logs.length) {
      const timer = setTimeout(() => {
        setStep(prev => prev + 1);
      }, 600); // delay between boot lines
      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 500);
    }
  }, [step]);

  return (
    <div style={{ marginBottom: '20px', fontFamily: 'monospace', fontSize: '13px' }}>
      {logs.slice(0, step).map((log, i) => (
        <div key={i} style={{ color: log.color, margin: '4px 0' }}>{log.text}</div>
      ))}
      {step < logs.length && <span className="blinking-cursor">█</span>}
    </div>
  );
}

function TypewriterText({ text, onComplete }) {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, index));
      index++;
      if (index > text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, 30); // typing speed
    
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
}

export default function StoryPanel({ title, description, hints, output, resultStatus, onNextLevel, isLastLevel, sector, learningZone }) {
  const [booted, setBooted] = useState(false);
  const [descriptionTyped, setDescriptionTyped] = useState(false);

  // Reset state when title/level changes
  useEffect(() => {
    setBooted(false);
    setDescriptionTyped(false);
  }, [title]);

  return (
    <Rnd
      default={{
        x: 50,
        y: 50,
        width: 450,
        height: 550,
      }}
      minWidth={300}
      minHeight={200}
      bounds="window"
      style={{
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(10, 10, 15, 0.95)',
        border: '1px solid #444',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
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
          color: '#fff',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <span>MISSION_BRIEFING.exe</span>
        <span style={{ color: '#555' }}>v1.0.4</span>
      </div>
      
      <div style={{ flex: 1, overflow: 'auto', padding: '16px' }}>
        
        {!booted ? (
          <BootSequence onComplete={() => setBooted(true)} />
        ) : (
          <>
            {(sector || learningZone) && (
              <div style={{ marginBottom: '12px', fontSize: '12px', color: '#ff00ff', borderBottom: '1px dashed #333', paddingBottom: '8px' }}>
                {sector && <div>{sector}</div>}
                {learningZone && <div>Learning Zone: {learningZone}</div>}
              </div>
            )}
            <h2 style={{ marginTop: 0, color: '#00ffcc', borderBottom: '1px solid #333', paddingBottom: '8px' }}>
              {title}
            </h2>
            
            <p style={{ lineHeight: '1.6', fontSize: '14px', color: '#ddd' }}>
              <TypewriterText 
                text={description} 
                onComplete={() => setDescriptionTyped(true)} 
              />
              {!descriptionTyped && <span className="blinking-cursor">█</span>}
            </p>
            
            {descriptionTyped && (
              <div style={{ animation: 'fadeIn 1s ease-in' }}>
                {hints && hints.length > 0 && (
                  <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(0, 255, 204, 0.05)', borderLeft: '3px solid #00ffcc' }}>
                    <h4 style={{ margin: '0 0 8px 0', color: '#00ffcc' }}>SYS_HINTS:</h4>
                    <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#bbb' }}>
                      {hints.map((hint, i) => <li key={i} style={{ marginBottom: '6px' }}>{hint}</li>)}
                    </ul>
                  </div>
                )}

                <div style={{ marginTop: '30px', borderTop: '1px dashed #444', paddingTop: '16px' }}>
                  <h4 style={{ margin: '0 0 8px 0', color: '#fff' }}>EXECUTION_LOG:</h4>
                  
                  {output && output.length > 0 ? (
                    <div style={{ 
                      backgroundColor: '#000', 
                      padding: '10px', 
                      borderRadius: '4px',
                      minHeight: '60px',
                      color: '#ddd',
                      border: '1px solid #333'
                    }}>
                      {output.map((line, i) => <div key={i}>&gt; {line}</div>)}
                    </div>
                  ) : (
                    <div style={{ color: '#666', fontStyle: 'italic' }}>Awaiting code execution...</div>
                  )}

                  {resultStatus && (
                    <div style={{ 
                      marginTop: '10px', 
                      padding: '8px', 
                      backgroundColor: resultStatus.success ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                      color: resultStatus.success ? '#0f0' : '#f00',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      borderRadius: '4px',
                      border: `1px solid ${resultStatus.success ? '#0f0' : '#f00'}`
                    }}>
                      {resultStatus.message}
                      
                      {resultStatus.success && !isLastLevel && (
                        <button 
                          onClick={onNextLevel}
                          style={{
                            display: 'block',
                            width: '100%',
                            marginTop: '10px',
                            padding: '8px',
                            backgroundColor: '#0f0',
                            color: '#000',
                            border: 'none',
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                            cursor: 'pointer'
                          }}
                        >
                          PROCEED TO NEXT NODE &gt;&gt;
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .blinking-cursor {
          animation: blink 1s step-end infinite;
          color: #0f0;
          margin-left: 4px;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </Rnd>
  );
}
