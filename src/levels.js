import { level01 } from './levels/level01.js';

// We'll keep the mock Level 2 here temporarily until you provide the real one
const level02 = {
  id: "02",
  sector: "SECTOR 01 — THE MAINFRAME",
  learningZone: "Arrays",
  title: "LEVEL 02: SECURITY BREACH",
  description: "Incoming ping from an unauthorized IP. The firewall requires an array of allowed ports to let the admin back in. Create an array called 'allowedPorts' containing the numbers 80, 443, and 22, and return it.",
  hints: [
    "Arrays in JavaScript use square brackets: [1, 2, 3]",
    "Don't forget to 'return allowedPorts;' at the end."
  ],
  initialCode: "// Allowed ports: 80, 443, 22\n// Your code here\n\n",
  validate: (code, result) => {
    if (!code.includes('allowedPorts')) {
      return { success: false, message: "Error: You need to declare 'allowedPorts'." };
    }
    
    if (!Array.isArray(result) || result.length !== 3 || !result.includes(80) || !result.includes(443) || !result.includes(22)) {
      return { success: false, message: "Error: The array must contain exactly 80, 443, and 22." };
    }

    return { success: true, message: "MISSION ACCOMPLISHED: Firewall updated." };
  }
};

export const levels = [
  level01,
  level02
];
