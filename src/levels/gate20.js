export const gate20 = {
  id: "20",
  sector: "SECTOR 04 \u2014 FUNCTIONS",
  learningZone: "JS Scope",
  title: "GATE 20 \u2014 SCOPE",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nScope determines where a variable can be accessed. Understand it or your data will leak.",
  hints: [
  "Global variables are accessible everywhere in the file",
  "let and const are block-scoped \u2014 they only exist inside the {} they were declared in",
  "var ignores block scope and leaks out of if/for blocks",
  "Inner functions can access outer variables (scope chain)"
],
  codeHint: "let ____ = \"Zero\";\n____ mission() {\n  let secretCode = \"___\";\n  console.log(____); // accessible\n  console.log(____); // accessible\n} // ____\nif (____) {\n  var ____ = \"I escape\";\n  let ____ = \"I stay\";\n} // ____\n____.log(leaked);  // works\n// ____.log(blocked); // ERROR",
  initialCode: "// Demonstrate:\n// 1. A global variable accessible inside a function\n// 2. A function-scoped variable (not accessible outside)\n// 3. A block-scoped let variable (not accessible outside if block)\n// 4. A var variable that leaks out of an if block\n\n// Your code here\n",
  solution: "let globalAgent = \"Zero\";\n\nfunction mission() {\n  let secretCode = \"OMEGA7\";\n  console.log(globalAgent); // works \u2014 global is accessible\n  console.log(secretCode);  // works \u2014 inside the function\n}\n\nmission();\n// console.log(secretCode); // ERROR \u2014 secretCode not accessible here\n\nif (true) {\n  var leaked = \"I escape blocks\";\n  let blocked = \"I stay inside\";\n}\n\nconsole.log(leaked);  // works \u2014 var leaks out\n// console.log(blocked); // ERROR \u2014 let does not leak",
  validate: (code, result, logs = []) => {
    const hasGlobal = code.match(/^let \w+/m) || code.match(/^const \w+/m);
    if (!hasGlobal) return { success: false, message: 'Must declare a global variable outside all functions' };
    const hasFunction = code.includes('function ');
    if (!hasFunction) return { success: false, message: 'Must declare a function to demonstrate function scope' };
    const hasVar = code.includes('var ');
    if (!hasVar) return { success: false, message: 'Must demonstrate var leaking out of a block' };
    const hasBlock = code.includes('if (') && code.includes('let ');
    if (!hasBlock) return { success: false, message: 'Must demonstrate let inside an if block' };
    return { success: true, message: 'GATE 20 CLEARED — Scope boundaries secured.' };
  }
};
