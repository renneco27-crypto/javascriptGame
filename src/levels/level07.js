export const level07 = {
  id: "07",
  sector: "SECTOR 02 — THE VAULT",
  learningZone: "Arrays and Objects",
  title: "LEVEL 07: REINFORCEMENTS",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nTwo new agents just cleared background checks and need to be added to the active roster immediately. The roster is an array. Add them to the end without rewriting the whole list. Then confirm the current size of the roster.\n\nMISSION OBJECTIVE: Start with an array of 3 agent names. Add 2 more using push(). Return the final array and its length in an array.",
  hints: [
  "push() adds to the end of an array",
  "myArray.length returns the number of items",
  "Return both like: return [myArray, myArray.length];"
],
  codeHint: `let roster = ["Agent Zero", "Agent Fox", "Agent Rook"];\nroster.____("Agent Vex", "Agent Lynx");\nreturn [roster, roster.______];`,
  initialCode: "// Your code here\n",
  validate: (code, result) => {
      if (!code.includes('.push(')) return { success: false, message: "Error: You must use the push() method." };
      if (!Array.isArray(result) || result.length !== 2 || !Array.isArray(result[0]) || result[0].length !== 5 || result[1] !== 5) {
        return { success: false, message: "Error: Return [array, length]. The array should have 5 items." };
      }
      return { success: true, message: "MISSION ACCOMPLISHED: Roster updated." };
    }
};
