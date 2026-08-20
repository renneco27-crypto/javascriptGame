export const gate13 = {
  id: "13",
  sector: "SECTOR 13 \u2014 MEMORY ENCLAVE",
  learningZone: "JS Scope",
  title: "GATE 13 \u2014 CONTAINMENT ZONES",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nData leaks are a critical security vulnerability. A variable that leaks out of its intended scope can expose classified information to the entire program \u2014 or to NEXUS. Understand the difference between global scope, function scope, and block scope. Contain your variables. Contain your data.\n\nMISSION OBJECTIVE:\nDemonstrate scope containment. Return an object `{ globalVar, blockScopedWorks }` where:\n- `globalVar` is defined outside\n- In an `if (true)` block, `let blockVar = \"SECURE\"` cannot be leaked\n- Return `{ globalVar: \"CLASSIFIED\", blockScopedWorks: true }`.",
  hints: [
  "var is function-scoped \u2014 it leaks out of if, for, etc.",
  "let and const are block-scoped \u2014 safe inside {}",
  "Global variables are accessible from anywhere \u2014 avoid when possible",
  "Accessing a let variable outside its block throws ReferenceError"
],
  codeHint: "const globalVar = \"__________\";\nlet ____ = false;\nif (____) {\n  let blockVar = \"______\";\n  ____ = (typeof blockVar !== \"undefined\");\n} // ____\nreturn { globalVar, ____ };",
  initialCode: "const globalVar = \"CLASSIFIED\";\n\n// Show block scope with let\nlet blockScopedWorks = true;\n\nreturn { globalVar, blockScopedWorks };\n",
  validate: (code, result, logs = []) => {
    if (!result || result.globalVar !== 'CLASSIFIED' || result.blockScopedWorks !== true) return { success: false, message: 'Return { globalVar: "CLASSIFIED", blockScopedWorks: true }' };
    return { success: true, message: 'GATE 13 CLEARED: Containment zones sealed.' };
  }
};
