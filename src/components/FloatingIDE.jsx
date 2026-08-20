import { useEffect, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import { EditorView, basicSetup } from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { EditorState } from '@codemirror/state';

export default function FloatingIDE({ onRunCode }) {
  const editorRef = useRef(null);
  const [view, setView] = useState(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const startState = EditorState.create({
      doc: '// Write your javascript here\n\nconsole.log("Hello, World!");\n',
      extensions: [
        basicSetup,
        javascript()
      ]
    });

    const view = new EditorView({
      state: startState,
      parent: editorRef.current
    });

    setView(view);

    return () => {
      view.destroy();
    };
  }, []);

  const handleRun = () => {
    if (view) {
      const code = view.state.doc.toString();
      onRunCode(code);
    }
  };

  return (
    <Rnd
      default={{
        x: window.innerWidth - 550,
        y: 50,
        width: 500,
        height: 400,
      }}
      minWidth={300}
      minHeight={200}
      bounds="window"
      style={{
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1e1e1e',
        border: '1px solid #333',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        color: '#fff'
      }}
      dragHandleClassName="ide-header"
    >
      <div 
        className="ide-header" 
        style={{ 
          padding: '8px 12px', 
          backgroundColor: '#2d2d2d', 
          cursor: 'grab',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #444'
        }}
      >
        <span style={{ fontSize: '14px', fontWeight: 'bold', fontFamily: 'monospace' }}>Hacker IDE</span>
        <button 
          onClick={handleRun}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '4px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontFamily: 'monospace'
          }}
        >
          RUN CODE
        </button>
      </div>
      <div 
        ref={editorRef} 
        style={{ 
          flex: 1, 
          overflow: 'auto',
          backgroundColor: '#1e1e1e' 
        }} 
      />
    </Rnd>
  );
}
