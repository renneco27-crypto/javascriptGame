export const gate09 = {
  id: "09",
  sector: "SECTOR 02 \u2014 LOGIC ENGINE",
  learningZone: "JS Operators",
  title: "GATE 09 \u2014 CALCULATIONS",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nThe targeting system runs on operators. Master all types.",
  hints: [
  "Arithmetic: + - * / % ** (modulo is remainder, exponentiation is **)",
  "Assignment shortcuts: x += 5 is the same as x = x + 5",
  "Strict equality === checks both value and type",
  "% gives the remainder: 20 % 6 = 2"
],
  codeHint: "____ a = 15, b = 4;\n____.log(a + b);\nconsole.log(a ___ b); // subtraction\nconsole.log(a ___ b); // multiplication\nconsole.log(a ___ b); // division\nconsole.log(a ___ b); // modulo\nconsole.log(a ___ b); // exponentiation",
  initialCode: "// Use a = 15 and b = 4\n// Write one example of every arithmetic operator\n// Then use three assignment operators to update a score starting at 100\n\nlet a = 15, b = 4;\n// Your arithmetic code here\n\nlet score = 100;\n// Your assignment operator code here\n",
  solution: "let a = 15, b = 4;\nconsole.log(a + b);  // 19\nconsole.log(a - b);  // 11\nconsole.log(a * b);  // 60\nconsole.log(a / b);  // 3.75\nconsole.log(a % b);  // 3\nconsole.log(a ** b); // 50625\n\nlet score = 100;\nscore += 50;\nconsole.log(score); // 150\nscore -= 20;\nconsole.log(score); // 130\nscore *= 2;\nconsole.log(score); // 260",
  validate: (code, result, logs = []) => {
    const hasArithmetic = code.includes('+') && code.includes('-') && code.includes('*') && code.includes('/');
    if (!hasArithmetic) return { success: false, message: 'Must use + - * / arithmetic operators' };
    const hasModulo = code.includes('%');
    if (!hasModulo) return { success: false, message: 'Must use the modulo operator %' };
    const hasAssignment = code.includes('+=') || code.includes('-=') || code.includes('*=');
    if (!hasAssignment) return { success: false, message: 'Must use at least one assignment operator like += -= *=' };
    return { success: true, message: 'GATE 09 CLEARED — Targeting system calibrated.' };
  }
};
