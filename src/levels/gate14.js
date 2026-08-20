export const gate14 = {
  id: "14",
  sector: "SECTOR 03 \u2014 DATA STRUCTURES",
  learningZone: "JS Numbers",
  title: "GATE 14 \u2014 NUMBER SYNTAX",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nAll numbers in JavaScript are the same type. But they behave in ways that will surprise you.",
  hints: [
  "Math.round() rounds to nearest, Math.floor() always down, Math.ceil() always up",
  "Math.floor(Math.random() * max) + 1 generates a random integer",
  "isNaN() checks if a value is Not a Number",
  "NaN is returned when a math operation fails, like Number(\"NEXUS\")"
],
  codeHint: "let n = 3.____;\nconsole.log(Math.______(n));\nconsole.log(Math.______(n));\nconsole.log(Math.______(n));\nlet rand = Math._____(Math.______() * 50) + 1;\n____.log(isNaN(Number(\"NEXUS\")));",
  initialCode: "// Task 1: Declare 3.99821 and round it, floor it, and ceil it\n// Your code here\n\n// Task 2: Generate a random integer between 1 and 50\n// Your code here\n\n// Task 3: Check if \"NEXUS\" converted to a number is NaN\n// Your code here\n",
  solution: "let n = 3.99821;\nconsole.log(Math.round(n));\nconsole.log(Math.floor(n));\nconsole.log(Math.ceil(n));\nlet rand = Math.floor(Math.random() * 50) + 1;\nconsole.log(rand);\nconsole.log(isNaN(Number(\"NEXUS\")));",
  validate: (code, result, logs = []) => {
    const hasRound = code.includes('Math.round(');
    if (!hasRound) return { success: false, message: 'Must use Math.round()' };
    const hasFloor = code.includes('Math.floor(');
    if (!hasFloor) return { success: false, message: 'Must use Math.floor()' };
    const hasCeil = code.includes('Math.ceil(');
    if (!hasCeil) return { success: false, message: 'Must use Math.ceil()' };
    const hasRandom = code.includes('Math.random()');
    if (!hasRandom) return { success: false, message: 'Must generate a random number using Math.random()' };
    const hasIsNaN = code.includes('isNaN(');
    if (!hasIsNaN) return { success: false, message: 'Must check for NaN using isNaN()' };
    return { success: true, message: 'GATE 14 CLEARED — Number systems restored.' };
  }
};
