export const gate09 = {
  id: "09",
  sector: "SECTOR 09 \u2014 SENSOR CALIBRATION",
  learningZone: "JS Numbers",
  title: "GATE 09 \u2014 THREAT CALCULATION",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nThe threat scoring system runs entirely on numbers. But numbers in JavaScript are tricky \u2014 they are all floating point, they have precision limits, and operations can produce Infinity or NaN without warning. The calculation unit needs to handle edge cases or the threat scores will be wrong and agents will be sent into danger.\n\nMISSION OBJECTIVE:\n1. `rounded`: Round `47.6892` to 2 decimal places (as string or number)\n2. `numSum`: Convert the string `\"99.5\"` to a number and add `0.5`\n3. `maxThreat`: Find the maximum value in `44, 91, 13, 78, 55`\n4. `isNexusNaN`: Check if `Number(\"NEXUS\")` is NaN using `isNaN()`\nReturn `{ rounded, numSum, maxThreat, isNexusNaN }`.",
  hints: [
  "toFixed(2) rounds to 2 decimal places \u2014 returns a string",
  "Number(\"99.5\") or parseFloat(\"99.5\") converts strings to numbers",
  "Math.max(44, 91, 13, 78, 55) returns the highest",
  "isNaN(Number(\"NEXUS\")) returns true"
],
  codeHint: "const rounded = (47.6892)._______(2);\nconst numSum = Number(\"99.5\") + ___;\nconst maxThreat = Math.___(44, 91, 13, 78, 55);\nconst isNexusNaN = _____(Number(\"NEXUS\"));\nreturn { rounded, numSum, maxThreat, ____ };",
  initialCode: "// Task 1: Round 47.6892 to 2 decimal places\nlet rounded;\n\n// Task 2: Convert \"99.5\" and add 0.5\nlet numSum;\n\n// Task 3: Max value in 44, 91, 13, 78, 55\nlet maxThreat;\n\n// Task 4: Check if Number(\"NEXUS\") is NaN\nlet isNexusNaN;\n\nreturn { rounded, numSum, maxThreat, isNexusNaN };\n",
  solution: "const rounded = (47.6892).toFixed(2);\nconst numSum = Number(\"99.5\") + 0.5;\nconst maxThreat = Math.max(44, 91, 13, 78, 55);\nconst isNexusNaN = isNaN(Number(\"NEXUS\"));\n\nreturn { rounded, numSum, maxThreat, isNexusNaN };",
  validate: (code, result, logs = []) => {
    if (!result || typeof result !== 'object') return { success: false, message: 'Must return { rounded, numSum, maxThreat, isNexusNaN }.' };
    if (result.rounded !== '47.69' && result.rounded !== 47.69) return { success: false, message: 'rounded should equal 47.69.' };
    if (result.numSum !== 100) return { success: false, message: 'numSum should equal 100 (99.5 + 0.5).' };
    if (result.maxThreat !== 91) return { success: false, message: 'maxThreat should be 91.' };
    if (result.isNexusNaN !== true) return { success: false, message: 'isNexusNaN should be true.' };
    return { success: true, message: 'GATE 09 CLEARED: Precision numbers verified.' };
  }
};
