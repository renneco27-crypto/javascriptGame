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
    // Create a function from the code string and execute it
    const func = new Function(`
      "use strict";
      ${code}
    `);
    
    const result = func();
    
    // Restore console.log
    console.log = originalLog;
    
    self.postMessage({
      success: true,
      result: result,
      logs: logs
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
