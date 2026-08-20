export const level01 = {
  id: "01",
  sector: "SECTOR 01 — THE MAINFRAME",
  learningZone: "Variables and Data Types",
  title: "LEVEL 01: TEMPERATURE ANOMALY",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nThe mainframe servers are overheating. NEXUS has disabled the cooling systems and corrupted the temperature sensors — they're outputting raw Fahrenheit data, but the cooling calibration system only reads Celsius. Every second counts. Convert the sensor data before the servers melt down.\n\nMISSION OBJECTIVE: Create a variable named celsius that converts 100 degrees Fahrenheit to Celsius.",
  hints: [
  "Use 'let' or 'const' to declare a variable.",
  "The formula is (100 - 32) * 5 / 9.",
  "Return the variable at the end: return celsius;"
],
  codeHint: `let _______ = (100 - 32) * 5 / 9;\nreturn _______;`,
  initialCode: "// Formula: (F - 32) * 5 / 9\n// Your code here\n\n",
  validate: (code, result) => {
      if (!code.includes('celsius')) return { success: false, message: "Error: You need to declare a variable named 'celsius'." };
      if (result !== (100 - 32) * 5 / 9) return { success: false, message: "Error: The calculation is incorrect, or you forgot to 'return celsius;'." };
      return { success: true, message: "MISSION ACCOMPLISHED: Temperature anomaly resolved." };
    }
};
