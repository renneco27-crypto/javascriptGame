export const level09 = {
  id: "09",
  sector: "SECTOR 02 — THE VAULT",
  learningZone: "Arrays and Objects",
  title: "LEVEL 09: PROFILE UPDATE",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nAgent ZERO just got promoted. Her rank in the system still shows 'Recruit' but she is now 'Commander'. Update the record without recreating the entire object. Also add a new field — missionsCompleted — that was not in the original profile.\n\nMISSION OBJECTIVE: Update the rank property of an existing agent object and add a new property missionsCompleted with a value of 47. Return the updated object.",
  hints: [
  "Update: agent.rank = 'Commander'",
  "Add new property: agent.missionsCompleted = 47",
  "Objects are mutable — you can change them directly"
],
  codeHint: `const agent = { name: "Agent Zero", ____: "Recruit", isActive: true };\nagent.____ = "Commander";\nagent._________________ = __;\nreturn _____;`,
  initialCode: "const agent = {\\n  name: 'Agent Zero',\\n  rank: 'Recruit',\\n  isActive: true\\n};\\n\\n// Your code here\\n\\nreturn agent;",
  validate: (code, result) => {
      if (!result || result.rank !== 'Commander' || result.missionsCompleted !== 47) return { success: false, message: "Error: The agent object was not updated correctly." };
      return { success: true, message: "MISSION ACCOMPLISHED: Profile updated." };
    }
};
