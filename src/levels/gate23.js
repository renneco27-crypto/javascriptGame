export const gate23 = {
  id: "23",
  sector: "SECTOR 05 \u2014 TIME AND MATH",
  learningZone: "JS Math",
  title: "GATE 23 \u2014 MATH",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nNEXUS runs a math defense system. Solve every calculation or the gate stays locked.",
  hints: [
  "Math.round() nearest, Math.floor() down, Math.ceil() up",
  "Spread an array into Math.max: Math.max(...nums)",
  "Random integer between min and max: Math.floor(Math.random() * (max - min + 1)) + min",
  "Circle area formula: Math.PI * r * r"
],
  codeHint: "console.log(Math._____(7.65));\nconsole.log(Math._____(7.65));\nconsole.log(Math._____(7.65));\nlet ____ = [14, 3, 88, 42, 7];\nconsole.log(Math.___(___nums));\nconsole.log(Math.___(___nums));\nlet ____ = Math.__ * 8 * 8;\n____.log(area);",
  initialCode: "// Task 1: Round 7.65 three ways (round, floor, ceil)\n// Your code here\n\n// Task 2: Find the max and min of [14, 3, 88, 42, 7] using spread\n// Your code here\n\n// Task 3: Generate a random integer between 50 and 100\n// Your code here\n\n// Task 4: Calculate the area of a circle with radius 8 using Math.PI\n// Your code here\n",
  solution: "console.log(Math.round(7.65));\nconsole.log(Math.floor(7.65));\nconsole.log(Math.ceil(7.65));\n\nlet nums = [14, 3, 88, 42, 7];\nconsole.log(Math.max(...nums));\nconsole.log(Math.min(...nums));\n\nlet rand = Math.floor(Math.random() * 51) + 50;\nconsole.log(rand);\n\nlet area = Math.PI * 8 * 8;\nconsole.log(area);",
  validate: (code, result, logs = []) => {
    const hasRound = code.includes('Math.round(7.65)') || code.includes('Math.round(n)');
    if (!hasRound) return { success: false, message: 'Must use Math.round() on 7.65' };
    const hasSpread = code.includes('Math.max(...') && code.includes('Math.min(...');
    if (!hasSpread) return { success: false, message: 'Must use spread (...) with Math.max() and Math.min()' };
    const hasPI = code.includes('Math.PI');
    if (!hasPI) return { success: false, message: 'Must calculate circle area using Math.PI' };
    return { success: true, message: 'GATE 23 CLEARED — Math defense system bypassed.' };
  }
};
