export const level02 = {
  id: "02",
  sector: "SECTOR 01 — THE MAINFRAME",
  learningZone: "Variables and Data Types",
  title: "LEVEL 02: IDENTITY PROTOCOL",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nGood work on the cooling system. But NEXUS has scrambled the agent identity database. The system no longer knows who is logged in. We need you to reconstruct the agent profile so access credentials can be restored. Store your agent data — name, badge number, and clearance level — so the system can verify your identity.\n\nMISSION OBJECTIVE: Create three variables: agentName (string), badgeNumber (number), and isCleared (boolean set to true).",
  hints: [
  "Strings go in quotes: \"Agent Zero\"",
  "Numbers have no quotes: 4821",
  "Booleans are either true or false",
  "Return all three variables in an array: return [agentName, badgeNumber, isCleared];"
],
  codeHint: `const agentName = "_____ ____";\nconst ___________ = 4821;\nconst isCleared = ______;\nreturn [_________, badgeNumber, isCleared];`,
  initialCode: "// Your code here\n\n// Return them as an array so the system can verify\n// return [agentName, badgeNumber, isCleared];",
  validate: (code, result) => {
      if (!code.includes('agentName') || !code.includes('badgeNumber') || !code.includes('isCleared')) return { success: false, message: "Error: Make sure you declared all 3 variables." };
      if (!Array.isArray(result) || result.length !== 3) return { success: false, message: "Error: Return the three variables in an array." };
      if (typeof result[0] !== 'string') return { success: false, message: "Error: agentName should be a string." };
      if (typeof result[1] !== 'number') return { success: false, message: "Error: badgeNumber should be a number." };
      if (result[2] !== true) return { success: false, message: "Error: isCleared should be true." };
      return { success: true, message: "MISSION ACCOMPLISHED: Identity restored." };
    }
};
