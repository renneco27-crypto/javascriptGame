import { useEffect, useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { basicSetup } from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { linter, lintGutter } from '@codemirror/lint';
import HintPopup from './HintPopup';

const customTheme = EditorView.theme({
  "&": {
    fontSize: "18px",
    height: "100%",
  },
  ".cm-scroller": {
    overflow: "auto",
    fontFamily: "monospace"
  },
  ".cm-lintRange-error": {
    backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='3'%3E%3Cpath d='m0 2.5 l3 -2 l3 2' stroke='%23ff3333' fill='none' stroke-width='1.2'/%3E%3C/svg%3E")`,
    backgroundPosition: "bottom left",
    backgroundRepeat: "repeat-x",
    paddingBottom: "2px"
  },
  ".cm-lint-marker-error": {
    content: '"●"',
    color: '#ff3333'
  }
});

const jsLinter = linter((view) => {
  const code = view.state.doc.toString();
  const diagnostics = [];
  const trimmed = code.trim();

  // If empty or HTML markup (e.g. Gate 02), skip JS syntax linting
  if (!trimmed || trimmed.startsWith('<') || trimmed.startsWith('<!--')) {
    return diagnostics;
  }

  try {
    new Function('document', 'window', 'alert', `"use strict";\n${code}`);
  } catch (e) {
    let from = 0;
    let to = Math.min(view.state.doc.length, 20);

    // Try to find the line where error occurred
    const lineMatch = e.stack?.match(/<anonymous>:(\d+):(\d+)/);
    if (lineMatch) {
      const lineNum = Math.max(1, parseInt(lineMatch[1]) - 1);
      if (lineNum <= view.state.doc.lines) {
        const line = view.state.doc.line(lineNum);
        from = line.from;
        to = line.to;
      }
    } else {
      // Highlight the first non-empty line or full document
      const firstLine = view.state.doc.line(1);
      from = firstLine.from;
      to = firstLine.to || view.state.doc.length;
    }

    diagnostics.push({
      from: from,
      to: Math.max(from + 1, to),
      severity: "error",
      message: e.message
    });
  }

  return diagnostics;
});

export default function FloatingIDE({ onRunCode, initialCode, codeHint }) {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const onRunCodeRef = useRef(onRunCode);
  const [showPopup, setShowPopup] = useState(false);
  const [showCodeHint, setShowCodeHint] = useState(false);

  // Keep ref updated so keymap closure always calls the latest
  useEffect(() => {
    onRunCodeRef.current = onRunCode;
  }, [onRunCode]);

  useEffect(() => {
    setShowCodeHint(false);
    setShowPopup(false);
  }, [initialCode]);

  useEffect(() => {
    if (!editorRef.current) return;

    const runCodeKeymap = keymap.of([
      {
        key: "Shift-Enter",
        run: (view) => {
          onRunCodeRef.current(view.state.doc.toString());
          return true; // prevent default
        },
        preventDefault: true
      }
    ]);

    const startState = EditorState.create({
      doc: initialCode,
      extensions: [
        runCodeKeymap, // Put this before basicSetup so it takes precedence
        basicSetup,
        lintGutter(),
        jsLinter,
        javascript(),
        oneDark,
        customTheme
      ]
    });

    const view = new EditorView({
      state: startState,
      parent: editorRef.current
    });

    viewRef.current = view;

    return () => view.destroy();
  }, []);

  // Update editor content when initialCode changes (e.g. level change)
  useEffect(() => {
    if (viewRef.current && initialCode) {
      viewRef.current.dispatch({
        changes: {
          from: 0,
          to: viewRef.current.state.doc.length,
          insert: initialCode
        }
      });
    }
  }, [initialCode]);

  const handleRun = () => {
    if (viewRef.current) {
      const code = viewRef.current.state.doc.toString();
      onRunCode(code);
    }
  };

  return (
    <Rnd
      default={{
        x: window.innerWidth > 800 ? window.innerWidth - 750 : 50,
        y: 50,
        width: 700,
        height: 500,
      }}
      minWidth={400}
      minHeight={300}
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
          RUN (Shift+Enter)
        </button>
      </div>
      
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div ref={editorRef} style={{ flex: 1, overflow: 'auto', backgroundColor: '#1e1e1e' }} />
        
        {codeHint && !showCodeHint && (
          <button 
            onClick={() => setShowPopup(true)}
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              background: '#f00',
              border: '2px solid #a00',
              color: '#fff',
              padding: '6px 12px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              boxShadow: '0 0 10px rgba(255,0,0,0.5)',
              zIndex: 10
            }}
          >
            HINT
          </button>
        )}
        
        {showCodeHint && (
          <div style={{ 
            backgroundColor: '#000', 
            borderTop: '1px solid #00ffcc',
            padding: '10px',
            maxHeight: '150px',
            overflowY: 'auto',
            position: 'relative'
          }}>
            <button 
              onClick={() => setShowCodeHint(false)}
              style={{
                position: 'absolute',
                top: '5px',
                right: '10px',
                background: 'none',
                border: 'none',
                color: '#f00',
                cursor: 'pointer',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                fontSize: '12px'
              }}
            >
              [X] HIDE
            </button>
            <pre style={{ margin: 0, marginTop: '15px', color: '#fff', fontFamily: 'monospace', fontSize: '13px' }}>
              {codeHint}
            </pre>
          </div>
        )}
      </div>

      {showPopup && (
        <HintPopup 
          onConfirm={() => {
            setShowPopup(false);
            setShowCodeHint(true);
          }} 
          onCancel={() => setShowPopup(false)} 
        />
      )}
    </Rnd>
  );
}
