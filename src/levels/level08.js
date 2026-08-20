export const level08 = {
  id: "08",
  sector: "SECTOR 02 — THE VAULT",
  learningZone: "Arrays and Objects",
  title: "LEVEL 08: AGENT DOSSIER",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nEvery agent has a dossier — structured data about who they are and what they can do. NEXUS deleted the dossier format from the system. Rebuild a proper agent dossier object with multiple fields so the system can restore agent records.\n\nMISSION OBJECTIVE: Create an object called agent with at least 5 properties: name, age, rank, isActive, and skills (an array of 3 skills). Return the rank and the second skill.",
  hints: [
  "Objects use {} with key-value pairs",
  "Access properties with dot notation: agent.rank",
  "Arrays inside objects work the same: agent.skills[1]",
  "Return them like: return [agent.rank, agent.skills[1]];"
],
  codeHint: `let agent = {\n  ____: "Zero",\n  age: __,\n  rank: "_______",\n  isActive: ____,\n  skills: ["combat", "_______", "stealth"]\n};\nreturn [agent.____, agent.______[_]];`,
  initialCode: "// Your code here\n",
  validate: (code, result) => {
      if (!code.includes('{') || !code.includes('skills')) return { success: false, message: "Error: Create the agent object." };
      if (!Array.isArray(result) || result.length !== 2) return { success: false, message: "Error: Return an array with [rank, secondSkill]." };
      return { success: true, message: "MISSION ACCOMPLISHED: Dossier format restored." };
    }
};
