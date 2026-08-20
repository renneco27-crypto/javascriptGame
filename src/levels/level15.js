export const level15 = {
  id: "15",
  sector: "SECTOR 03 — THE CONTROL ROOM",
  learningZone: "Control Flow and Loops",
  title: "LEVEL 15: EMERGENCY ABORT",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nThe self-destruct sequence is cycling through a list of systems to shut down. But if it hits the 'LIFE_SUPPORT' system, it must stop immediately — we cannot shut that one down. Use a loop with a break to protect life support.\n\nMISSION OBJECTIVE: Loop through an array of system names. Log each one as 'Shutting down: X'. If the system is 'LIFE_SUPPORT', log 'ABORT: Cannot shut down LIFE_SUPPORT' and break the loop.",
  hints: [
  "Use a for loop or for...of",
  "Check with if (system === 'LIFE_SUPPORT')",
  "Use break to stop the loop immediately"
],
  codeHint: `for (let system of _______) {\n  console.log("Shutting down: " + ______);\n  if (system === "____________") {\n    console.log("ABORT: Cannot shut down ____________");\n    _____;\n  }\n}`,
  initialCode: "const systems = ['RADAR', 'COMMS', 'WEAPONS', 'LIFE_SUPPORT', 'NAVIGATION', 'POWER'];\n\n// Your code here\n",
  validate: (code, result, logs) => {
      if (!code.includes('break')) return { success: false, message: "Error: You must use the break keyword." };
      if (logs.some(l => l.includes('NAVIGATION') || l.includes('POWER'))) return { success: false, message: "Error: The loop did not break in time. Navigation/Power shut down!" };
      return { success: true, message: "MISSION ACCOMPLISHED: Life support saved." };
    }
};
