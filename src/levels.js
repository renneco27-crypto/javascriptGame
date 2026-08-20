export const levels = [
  {
    title: "LEVEL 01: TEMPERATURE ANOMALY",
    description: "The mainframe servers are overheating. We need to convert the raw Fahrenheit sensor data into Celsius to calibrate the cooling systems. Can you create a variable named 'celsius' that converts 100 degrees Fahrenheit to Celsius? (Formula: (F - 32) * 5/9)",
    hints: [
      "Use 'let' or 'const' to declare a variable.",
      "The formula is (100 - 32) * 5 / 9.",
      "Return the variable at the end so the system can verify it, e.g., 'return celsius;'"
    ],
    validate: (code, result) => {
      if (!code.includes('celsius')) {
        return { success: false, message: "Error: You need to declare a variable named 'celsius'." };
      }
      
      const expected = (100 - 32) * 5 / 9;
      if (result !== expected) {
        return { success: false, message: "Error: The calculation is incorrect, or you forgot to 'return celsius;' at the end." };
      }

      return { success: true, message: "MISSION ACCOMPLISHED: Temperature anomaly resolved." };
    }
  },
  {
    title: "LEVEL 02: SECURITY BREACH",
    description: "Incoming ping from an unauthorized IP. The firewall requires an array of allowed ports to let the admin back in. Create an array called 'allowedPorts' containing the numbers 80, 443, and 22, and return it.",
    hints: [
      "Arrays in JavaScript use square brackets: [1, 2, 3]",
      "Don't forget to 'return allowedPorts;' at the end."
    ],
    validate: (code, result) => {
      if (!code.includes('allowedPorts')) {
        return { success: false, message: "Error: You need to declare 'allowedPorts'." };
      }
      
      if (!Array.isArray(result) || result.length !== 3 || !result.includes(80) || !result.includes(443) || !result.includes(22)) {
        return { success: false, message: "Error: The array must contain exactly 80, 443, and 22." };
      }

      return { success: true, message: "MISSION ACCOMPLISHED: Firewall updated." };
    }
  }
];
