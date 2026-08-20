export const gate11 = {
  id: "11",
  sector: "SECTOR 02 \u2014 LOGIC ENGINE",
  learningZone: "JS If Conditions",
  title: "GATE 11 \u2014 DECISION POINT",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nEvery field decision runs through a condition check. Write every form of conditional correctly.",
  hints: [
  "if / else if / else checks conditions in order and runs the first match",
  "Ternary: condition ? valueIfTrue : valueIfFalse",
  "switch uses case labels and requires break to avoid fall-through",
  "You can nest ternaries but keep it readable"
],
  codeHint: "if (____ >= 90) {\n  ___\n} else if (____ >= 70) {\n  ___\n} ____ {\n  ___\n} // ____\nlet label = threatLevel > 70 ___ \"HIGH\" ___ \"LOW\";",
  initialCode: "// Use threatLevel = 75\n// Task 1: Write if/else if/else classifying into CRITICAL / HIGH / MODERATE / LOW\n// Task 2: Rewrite as a ternary for just HIGH or LOW\n\nlet threatLevel = 75;\n// Your if/else if/else here\n\n// Your ternary here\n",
  solution: "let threatLevel = 75;\n\nif (threatLevel >= 90) {\n  console.log(\"CRITICAL\");\n} else if (threatLevel >= 70) {\n  console.log(\"HIGH\");\n} else if (threatLevel >= 50) {\n  console.log(\"MODERATE\");\n} else {\n  console.log(\"LOW\");\n}\n\nlet label = threatLevel > 70 ? \"HIGH\" : \"LOW\";\nconsole.log(label);",
  validate: (code, result, logs = []) => {
    const hasIfElse = code.includes('if') && code.includes('else');
    if (!hasIfElse) return { success: false, message: 'Must use if / else if / else structure' };
    const hasTernary = code.includes('?') && code.includes(':');
    if (!hasTernary) return { success: false, message: 'Must include a ternary operator (condition ? a : b)' };
    const hasLog = logs.some(l => l.length > 0);
    if (!hasLog) return { success: false, message: 'Must log at least one result' };
    return { success: true, message: 'GATE 11 CLEARED — Decision logic is live.' };
  }
};
