export const gate28 = {
  id: "28",
  sector: "SECTOR 07 \u2014 ASYNC AND FINAL BREACH",
  learningZone: "JS Errors",
  title: "GATE 28 \u2014 ERROR HANDLING",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nUnhandled errors crash the system. NEXUS is counting on it. Catch every error.",
  hints: [
  "try { ... } catch (error) { ... } catches runtime errors gracefully",
  "finally { ... } always runs whether or not an error occurred",
  "throw new Error(\"message\") lets you throw your own errors",
  "error.message gives the error description"
],
  codeHint: "function ____(a, b) {\n  if (b === 0) _____ new Error(\"Cannot divide by zero\");\n  ____ a / b;\n} // ____\n____ {\n  console.log(____(10, 2));\n  console.log(____(10, 0));\n} _____ (error) {\n  console.log(\"Error:\", error._______);\n} _______ {\n  console.log(\"____ COMPLETE\");\n} // ____",
  initialCode: "// Write safeDivide(a, b) that throws an Error if b is 0\n// Call it in a try/catch with both valid and invalid case\n// Add a finally block logging \"CALCULATION COMPLETE\"\n\n// Your code here\n",
  solution: "function safeDivide(a, b) {\n  if (b === 0) throw new Error(\"Cannot divide by zero\");\n  return a / b;\n}\n\ntry {\n  console.log(safeDivide(10, 2));\n  console.log(safeDivide(10, 0));\n} catch (error) {\n  console.log(\"Error:\", error.message);\n} finally {\n  console.log(\"CALCULATION COMPLETE\");\n}",
  validate: (code, result, logs = []) => {
    const hasThrow = code.includes('throw new Error(');
    if (!hasThrow) return { success: false, message: 'Must throw an Error using throw new Error()' };
    const hasTry = code.includes('try {');
    if (!hasTry) return { success: false, message: 'Must wrap the call in a try block' };
    const hasCatch = code.includes('catch (');
    if (!hasCatch) return { success: false, message: 'Must include a catch block to handle the error' };
    const hasFinally = code.includes('finally {');
    if (!hasFinally) return { success: false, message: 'Must include a finally block' };
    const hasLog = logs.some(l => l.includes('CALCULATION COMPLETE'));
    if (!hasLog) return { success: false, message: 'The finally block must log "CALCULATION COMPLETE"' };
    return { success: true, message: 'GATE 28 CLEARED — All errors handled. System stable.' };
  }
};
