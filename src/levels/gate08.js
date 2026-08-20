export const gate08 = {
  id: "08",
  sector: "SECTOR 02 \u2014 LOGIC ENGINE",
  learningZone: "JS Booleans",
  title: "GATE 08 \u2014 BOOLEANS",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nEvery decision CIPHER makes comes down to true or false. Booleans are the foundation of all logic.",
  hints: [
  "Boolean values are true or false \u2014 no quotes",
  "Falsy values: false, 0, \"\", null, undefined, NaN",
  "Everything else is truthy, including [] and {}",
  "Boolean() converts any value to its boolean equivalent"
],
  codeHint: "let ____ = 85;\nlet isAbove70 = threatLevel ___ 70;\nlet isBelow100 = threatLevel ___ 100;\nlet isExactly85 = threatLevel ___ 85;\nconsole.log(____, typeof isAbove70);",
  initialCode: "// Declare threatLevel = 85\n// Write boolean expressions:\n// 1. Is it above 70?\n// 2. Is it below 100?\n// 3. Is it exactly 85?\n// Log each result and its type\n\n// Your code here\n",
  solution: "let threatLevel = 85;\nlet isAbove70 = threatLevel > 70;\nlet isBelow100 = threatLevel < 100;\nlet isExactly85 = threatLevel === 85;\nconsole.log(isAbove70, typeof isAbove70);\nconsole.log(isBelow100, typeof isBelow100);\nconsole.log(isExactly85, typeof isExactly85);",
  validate: (code, result, logs = []) => {
    const hasTrue = logs.some(l => l.includes('true'));
    if (!hasTrue) return { success: false, message: 'At least one boolean result should be true' };
    const hasTypeOf = code.includes('typeof');
    if (!hasTypeOf) return { success: false, message: 'Must log the type using typeof' };
    const hasComparisons = code.includes('>') || code.includes('<') || code.includes('===');
    if (!hasComparisons) return { success: false, message: 'Must use comparison operators to create booleans' };
    return { success: true, message: 'GATE 08 CLEARED — Boolean logic confirmed.' };
  }
};
