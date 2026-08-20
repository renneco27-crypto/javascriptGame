export const level05 = {
  id: "05",
  sector: "SECTOR 01 — THE MAINFRAME",
  learningZone: "Variables and Data Types",
  title: "LEVEL 05: THE BROKEN CALCULATOR",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nThe field calculator used by agents in the field has been corrupted. Agents are receiving NaN back when they try to run calculations. You need to figure out where NaN comes from, how to detect it, and protect the calculator from producing it silently.\n\nMISSION OBJECTIVE: Perform a calculation that produces NaN. Then use isNaN() to detect it and return the string 'CORRUPTED' if it is NaN.",
  hints: [
  "NaN appears when math goes wrong: 'hello' * 5",
  "isNaN(value) returns true if the value is NaN",
  "Use an if statement to return 'CORRUPTED'"
],
  codeHint: `let badMath = "hello" * 5;\nif (_____(badMath)) {\n  return "_________";\n}`,
  initialCode: "// Your code here\n",
  validate: (code, result) => {
      if (result !== 'CORRUPTED') return { success: false, message: "Error: You need to return 'CORRUPTED' when NaN is detected." };
      if (!code.includes('isNaN')) return { success: false, message: "Error: You must use the isNaN() function." };
      return { success: true, message: "MISSION ACCOMPLISHED: Calculator protected." };
    }
};
