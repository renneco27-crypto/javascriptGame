export const gate17 = {
  id: "17",
  sector: "SECTOR 03 \u2014 DATA STRUCTURES",
  learningZone: "JS Sets",
  title: "GATE 17 \u2014 SET SYNTAX",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nA Set only stores unique values. Duplicates are automatically rejected.",
  hints: [
  "new Set([array]) creates a Set and removes duplicates automatically",
  ".add() adds a value, .has() checks existence, .delete() removes",
  ".size (not .length) returns the number of unique values",
  "[...mySet] or Array.from(mySet) converts a Set back to an array"
],
  codeHint: "let ____ = new Set([5, 3, 5, 8, 3, 9, 8, 1]);\nconsole.log(signals.______);\nsignals.___(___);\nconsole.log(signals.___(3));\nsignals.______(___);\nlet arr = [...____];",
  initialCode: "// Create a Set from: [5, 3, 5, 8, 3, 9, 8, 1]\n// 1. Log its size\n// 2. Add a new value\n// 3. Check if 3 exists\n// 4. Delete 8\n// 5. Convert it back to an array and log it\n\n// Your code here\n",
  solution: "let signals = new Set([5, 3, 5, 8, 3, 9, 8, 1]);\nconsole.log(signals.size);\nsignals.add(100);\nconsole.log(signals.has(3));\nsignals.delete(8);\nlet arr = [...signals];\nconsole.log(arr);",
  validate: (code, result, logs = []) => {
    const hasSet = code.includes('new Set(');
    if (!hasSet) return { success: false, message: 'Must create a Set using new Set()' };
    const hasSize = code.includes('.size');
    if (!hasSize) return { success: false, message: 'Must log the size using .size' };
    const hasAdd = code.includes('.add(');
    if (!hasAdd) return { success: false, message: 'Must add a value using .add()' };
    const hasHas = code.includes('.has(');
    if (!hasHas) return { success: false, message: 'Must check existence using .has()' };
    const hasDelete = code.includes('.delete(');
    if (!hasDelete) return { success: false, message: 'Must remove a value using .delete()' };
    return { success: true, message: 'GATE 17 CLEARED — Duplicate signals eliminated.' };
  }
};
