export const gate05 = {
  id: "05",
  sector: "SECTOR 01 \u2014 CIPHER GATEWAY",
  learningZone: "JS Variables",
  title: "GATE 05 \u2014 STORAGE UNITS",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nVariables store data. Three ways to declare them. Each behaves differently.",
  hints: [
  "const cannot be reassigned after declaration",
  "let can be reassigned and is block-scoped",
  "var is function-scoped and is the old way \u2014 prefer let in modern code",
  "Variable names cannot start with a number or contain hyphens"
],
  codeHint: "_____ MISSION_CODE = \"ALPHA\";\n___ score = 0;\n____ = 100;\n___ legacyVar = \"avoid this\";",
  initialCode: "// Task 1: Declare a mission code using const\n// Your code here\n\n// Task 2: Declare a score using let and then reassign it\n// Your code here\n\n// Task 3: Declare a variable using var and explain why let is better (in a comment)\n// Your code here\n",
  solution: "const MISSION_CODE = \"ALPHA-7\";\nlet score = 0;\nscore = 100;\nvar legacyVar = \"old style\"; // let is better because var ignores block scope",
  validate: (code, result, logs = []) => {
    const hasConst = code.includes('const ');
    if (!hasConst) return { success: false, message: 'Must use const for at least one variable' };
    const hasLet = code.includes('let ');
    if (!hasLet) return { success: false, message: 'Must use let for at least one variable' };
    const hasVar = code.includes('var ');
    if (!hasVar) return { success: false, message: 'Must demonstrate var as well' };
    return { success: true, message: 'GATE 05 CLEARED — All three storage units operational.' };
  }
};
