export const level14 = {
  id: "14",
  sector: "SECTOR 03 — THE CONTROL ROOM",
  learningZone: "Control Flow and Loops",
  title: "LEVEL 14: INFINITE THREAT DETECTED",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nNEXUS launched a brute force loop — it keeps hammering the firewall until it breaks through. You need to simulate a while loop that runs until a threat counter reaches zero, decrementing it each cycle and logging the countdown.\n\nMISSION OBJECTIVE: Write a while loop that starts at threatLevel = 10, logs the level each iteration, and stops when it reaches 0. Log 'THREAT NEUTRALIZED' when done.",
  hints: [
  "Declare let threatLevel = 10 before the loop",
  "Condition: while (threatLevel > 0)",
  "Decrement inside the loop: threatLevel--"
],
  codeHint: `let threatLevel = __;\nwhile (___________ > _) {\n  console.log(___________);\n  threatLevel__;\n}\nconsole.log("______ ____________");`,
  initialCode: "// Your code here\n",
  validate: (code, result, logs) => {
      if (!code.includes('while')) return { success: false, message: "Error: You must use a while loop." };
      if (logs.length < 11 || !logs.some(l => l.includes('NEUTRALIZED'))) return { success: false, message: "Error: Must log countdown and THREAT NEUTRALIZED." };
      return { success: true, message: "MISSION ACCOMPLISHED: Threat mitigated." };
    }
};
