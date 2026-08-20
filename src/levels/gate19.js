export const gate19 = {
  id: "19",
  sector: "SECTOR 04 \u2014 FUNCTIONS",
  learningZone: "JS Functions",
  title: "GATE 19 \u2014 FUNCTION SYNTAX",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nFunctions are reusable blocks of code. Know every way to write one.",
  hints: [
  "Function declaration: function name(params) { return value; }",
  "Arrow function: const name = (params) => value;",
  "Default parameter: function greet(name = \"Agent\") \u2014 used if no argument passed",
  "Rest parameters: function sum(...nums) collects all extra args into an array"
],
  codeHint: "function add(a, b) { return ___; }\nconst addArrow = (a, b) => ___;\nfunction greet(name = \"___\") { return \"Hello, \" + ___; }\nfunction totalScores(...scores) { return scores.______((a, b) => a + b, 0); }",
  initialCode: "// Task 1: Function declaration \u2014 sum of two numbers\n// Your code here\n\n// Task 2: Same as arrow function\n// Your code here\n\n// Task 3: Function with a default parameter\n// Your code here\n\n// Task 4: Function using rest parameters that returns the total of any number of scores\n// Your code here\n\n// Test your functions\nconsole.log(add(5, 3));\n",
  solution: "function add(a, b) {\n  return a + b;\n}\n\nconst addArrow = (a, b) => a + b;\n\nfunction greet(name = \"Agent\") {\n  return \"Hello, \" + name;\n}\n\nfunction totalScores(...scores) {\n  return scores.reduce((a, b) => a + b, 0);\n}\n\nconsole.log(add(5, 3));\nconsole.log(addArrow(5, 3));\nconsole.log(greet());\nconsole.log(greet(\"Zero\"));\nconsole.log(totalScores(80, 90, 75, 100));",
  validate: (code, result, logs = []) => {
    const hasDeclaration = code.includes('function ') && code.includes('return');
    if (!hasDeclaration) return { success: false, message: 'Must write a function declaration with a return statement' };
    const hasArrow = code.includes('=>');
    if (!hasArrow) return { success: false, message: 'Must write an arrow function using =>' };
    const hasDefault = code.match(/function \w+\(\w+ = /);
    if (!hasDefault) return { success: false, message: 'Must use a default parameter (e.g., name = "Agent")' };
    const hasRest = code.includes('...');
    if (!hasRest) return { success: false, message: 'Must use rest parameters (...args)' };
    return { success: true, message: 'GATE 19 CLEARED — All function types operational.' };
  }
};
