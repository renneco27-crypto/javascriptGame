export const level11 = {
  id: "11",
  sector: "SECTOR 03 — THE CONTROL ROOM",
  learningZone: "Control Flow and Loops",
  title: "LEVEL 11: CLEARANCE CHECK",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nThe control room door runs a clearance check before granting access. NEXUS bypassed it by feeding in fake clearance levels. Rebuild the check. Clearance level 1 gets 'RESTRICTED', level 2 gets 'CONFIDENTIAL', level 3 gets 'TOP SECRET'. Anything else gets 'DENIED'.\n\nMISSION OBJECTIVE: Write a function clearanceCheck(level) that returns the correct access label using a switch statement. Call it with level 2 and return the result.",
  hints: [
  "Use switch(level) with case 1:, case 2:, case 3:",
  "Add a default: for anything else",
  "Don't forget break after each case",
  "Test it: return clearanceCheck(2);"
],
  codeHint: `function clearanceCheck(level) {\n  switch (_____) {\n    case 1:\n      return "RESTRICTED";\n    case _: \n      return "CONFIDENTIAL";\n    case 3:\n      return "TOP SECRET";\n    _______:\n      return "DENIED";\n  }\n}\nreturn clearanceCheck(2);`,
  initialCode: "function clearanceCheck(level) {\n  // Your switch statement here\n}\n\nreturn clearanceCheck(2);",
  validate: (code, result) => {
      if (!code.includes('switch')) return { success: false, message: "Error: You must use a switch statement." };
      if (result !== 'CONFIDENTIAL') return { success: false, message: "Error: clearanceCheck(2) should return 'CONFIDENTIAL'." };
      return { success: true, message: "MISSION ACCOMPLISHED: Door secured." };
    }
};
