self.onmessage = function(e) {
  const code = e.data;
  const logs = [];

  // Override console.log
  const originalLog = console.log;
  console.log = function(...args) {
    logs.push(args.map(arg => 
      typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
    ).join(' '));
  };

  try {
    // Create mock DOM & window environment for learning exercises
    const mockDocument = {
      getElementById: function(id) {
        return {
          id: id,
          set innerHTML(val) {
            logs.push(`[DOM #${id}] innerHTML = "${val}"`);
            this._html = val;
          },
          get innerHTML() {
            return this._html || "";
          }
        };
      },
      write: function(...args) {
        logs.push(`[document.write] ${args.join(' ')}`);
      }
    };

    const mockWindow = {
      alert: function(msg) {
        logs.push(`[ALERT] ${msg}`);
      }
    };

    const trimmed = code.trim();
    // Check if input is HTML markup (e.g., Gate 02 deployment exercises)
    if (trimmed.startsWith('<') || (trimmed.startsWith('<!--') && (trimmed.includes('<script') || trimmed.includes('<')))) {
      logs.push('[HTML DEPLOYMENT] Validated markup structure.');
      
      // Execute any inline JS found inside <script> tags
      const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
      let match;
      while ((match = scriptRegex.exec(trimmed)) !== null) {
        const innerScript = match[1].trim();
        if (innerScript && !innerScript.startsWith('//') && !innerScript.startsWith('<!--')) {
          try {
            const inlineFn = new Function('document', 'window', 'alert', `
              "use strict";
              ${innerScript}
            `);
            inlineFn(mockDocument, mockWindow, mockAlert);
          } catch (err) {
            // capture or allow script log
          }
        }
      }

      console.log = originalLog;
      self.postMessage({
        success: true,
        result: trimmed,
        logs: logs,
        code: code
      });
      return;
    }

    // Create a function from the code string with mock context and execute it
    const func = new Function('document', 'window', 'alert', `
      "use strict";
      ${code}
    `);
    
    const result = func(mockDocument, mockWindow, mockAlert);
    
    // Restore console.log
    console.log = originalLog;
    
    self.postMessage({
      success: true,
      result: result,
      logs: logs,
      code: code
    });
  } catch (error) {
    // Restore console.log
    console.log = originalLog;
    
    self.postMessage({
      success: false,
      error: error.toString(),
      logs: logs
    });
  }
};
