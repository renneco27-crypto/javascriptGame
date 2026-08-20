export const gate04 = {
  id: "04",
  sector: "SECTOR 04 \u2014 SYNTAX PARSER",
  learningZone: "JS Syntax",
  title: "GATE 04 \u2014 CODE STRUCTURE",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nNEXUS injected syntax errors into the training codebase. Recruits who do not understand JS syntax fundamentals are writing broken code that silently fails. Statements end with semicolons. Code blocks use curly braces. Variables are declared before use. Identifiers are case sensitive. Master the rules before the rules master you.\n\nMISSION OBJECTIVE: Fix the broken code below. Declare two variables `x = 10` and `y = 20`, add them together into `result`, and return or log the result.",
  hints: [
  "Keywords are lowercase: let not Let",
  "Statements end with ;",
  "console.log not Console.Log",
  "Variable names are case sensitive: x and X are different variables"
],
  codeHint: "____ _ = 10;\n____ _ = 20;\nlet ______ = x + y;\nconsole.___(______);\nreturn ______;",
  initialCode: "// BROKEN CODE \u2014 fix everything wrong here:\n// Let X = 10\n// let y = 20\n// Let Result = X + y\n// Console.Log(Result)\n\n// YOUR FIXED VERSION:\n",
  solution: "let x = 10;\nlet y = 20;\nlet result = x + y;\nconsole.log(result);\nreturn result;",
  validate: (code, result, logs = []) => {
    if (code.includes('Let ') || code.includes('Console.Log')) return { success: false, message: 'Syntax error remaining: Remember JS keywords and console.log are lowercase!' };
    if (result !== 30 && !logs.some(l => l.includes('30'))) return { success: false, message: 'Incorrect result: x + y must evaluate to 30.' };
    return { success: true, message: 'GATE 04 CLEARED: Syntax corrected. Execution clean.' };
  }
};
