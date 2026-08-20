export const gate04 = {
  id: "04",
  sector: "SECTOR 01 \u2014 CIPHER GATEWAY",
  learningZone: "JS Syntax",
  title: "GATE 04 \u2014 CODE STRUCTURE",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nBroken syntax means broken code. Know the rules exactly.",
  hints: [
  "JavaScript is case-sensitive: let agentName and let AgentName are different variables",
  "let and const must be lowercase \u2014 Let is not valid",
  "console.log is lowercase \u2014 Console.Log will throw an error",
  "Variable names should follow camelCase convention"
],
  codeHint: "___ name = \"agent zero\";\n___ score = 100;\nconsole.___(name + score);",
  initialCode: "// Fix all mistakes in this broken code and rewrite it cleanly:\n\n// BROKEN:\n// Let Name = \"agent zero\"\n// let Score = 100\n// Console.Log(name + score)\n\n// YOUR FIXED VERSION:\n// Your code here\n",
  solution: "let name = \"agent zero\";\nlet score = 100;\nconsole.log(name + score);",
  validate: (code, result, logs = []) => {
    const cleanCode = code.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
    if (cleanCode.includes('Let ') || cleanCode.includes('Console.Log') || cleanCode.includes('let Name') || cleanCode.includes('let Score')) return { success: false, message: 'JavaScript is case-sensitive — fix the capitalisation errors' };
    const hasLog = logs.some(l => l.includes('agent zero') || l.includes('100') || l.length > 0);
    if (!hasLog) return { success: false, message: 'Must log the result using console.log' };
    return { success: true, message: 'GATE 04 CLEARED — Code structure is clean.' };
  }
};
