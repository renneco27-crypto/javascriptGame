export const gate05 = {
  id: "05",
  sector: "SECTOR 05 \u2014 TARGETING COMPUTER",
  learningZone: "JS Operators",
  title: "GATE 05 \u2014 CALCULATION ENGINE",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nThe CIPHER targeting system runs on math. Distance calculations, threat scoring, signal strength \u2014 all of it uses operators. NEXUS corrupted the operator logic causing every calculation to return wrong results. Rebuild the calculation engine using arithmetic, assignment, and comparison operators correctly.\n\nMISSION OBJECTIVE:\n1. Calculate the remainder of `20 % 6` and store in `remainder`.\n2. Start with `let score = 100`, then use `+= 50` and `*= 2` to update it.\n3. Check if `threatLevel === 73` and `threatLevel > 50`, returning `isHighThreat` boolean.",
  hints: [
  "% is modulo \u2014 gives the remainder: 20 % 6 returns 2",
  "** is exponentiation: 2 ** 8 returns 256",
  "=== is strict equality \u2014 checks value AND type, always prefer over =="
],
  codeHint: "const _________ = 20 % 6;\nlet ____ = 100;\n____ += __;\n____ *= _;\nconst ____ = 73 > __;\nreturn { remainder: _________, score, isHighThreat };",
  initialCode: "const a = 20;\nconst b = 6;\nconst threatLevel = 73;\n\n// Task 1: Remainder of a % b\nlet remainder;\n\n// Task 2: Update score using += and *=\nlet score = 100;\n\n// Task 3: Comparison\nlet isHighThreat;\n\nreturn { remainder, score, isHighThreat };\n",
  validate: (code, result, logs = []) => {
    if (!result || typeof result !== 'object') return { success: false, message: 'Must return an object with { remainder, score, isHighThreat }.' };
    if (result.remainder !== 2) return { success: false, message: 'Task 1: remainder of 20 % 6 should be 2.' };
    if (result.score !== 300) return { success: false, message: 'Task 2: score (100 += 50 -> 150 *= 2) should equal 300.' };
    if (result.isHighThreat !== true) return { success: false, message: 'Task 3: isHighThreat should be true.' };
    return { success: true, message: 'GATE 05 CLEARED: Calculation engine recalibrated.' };
  }
};
