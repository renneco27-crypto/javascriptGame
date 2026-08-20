export const gate12 = {
  id: "12",
  sector: "SECTOR 02 \u2014 LOGIC ENGINE",
  learningZone: "JS Loops",
  title: "GATE 12 \u2014 SWEEP PROTOCOL",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nLoops repeat an action. Know every loop type and when to use each.",
  hints: [
  "for loop: for (let i = 0; i < 10; i++) \u2014 good when you know the count",
  "while loop: while (condition) \u2014 runs as long as condition is true",
  "for...of \u2014 iterates over array values directly",
  "break exits a loop; continue skips to the next iteration"
],
  codeHint: "for (let i = ___; i <= ___; i++) {\n  ____.log(i);\n} // ____\nlet count = ___;\nwhile (count >= ___) {\n  ____.log(count);\n  count___;\n} // ____\nconst cities = [___, ___, ___, ___];\nfor (let city ___ cities) {\n  ____.log(city);\n} // ____",
  initialCode: "// Task 1: for loop logging numbers 1 to 10\n// Your code here\n\n// Task 2: while loop counting down from 5 to 0\n// Your code here\n\n// Task 3: for...of loop over an array of 4 city names\n// Your code here\n",
  solution: "for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}\n\nlet count = 5;\nwhile (count >= 0) {\n  console.log(count);\n  count--;\n}\n\nconst cities = [\"London\", \"Tokyo\", \"Berlin\", \"Cairo\"];\nfor (let city of cities) {\n  console.log(city);\n}",
  validate: (code, result, logs = []) => {
    const hasFor = code.includes('for (') || code.includes('for(');
    if (!hasFor) return { success: false, message: 'Must include a for loop' };
    const hasWhile = code.includes('while (') || code.includes('while(');
    if (!hasWhile) return { success: false, message: 'Must include a while loop' };
    const hasForOf = code.includes('of ');
    if (!hasForOf) return { success: false, message: 'Must include a for...of loop' };
    return { success: true, message: 'GATE 12 CLEARED — Sweep protocol complete.' };
  }
};
