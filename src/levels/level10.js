export const level10 = {
  id: "10",
  sector: "SECTOR 02 — THE VAULT",
  learningZone: "Arrays and Objects",
  title: "LEVEL 10: NESTED INTELLIGENCE",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nThe intelligence report came in but the data is deeply nested — a file inside a folder inside a cabinet. NEXUS is counting on you not being able to reach it. Dig into the nested structure and extract the target's name from three levels deep.\n\nMISSION OBJECTIVE: Create a nested object that represents a cabinet containing a folder containing a file containing a targetName. Access and return the targetName.",
  hints: [
  "Nest objects inside objects: { folder: { file: { targetName: '...' } } }",
  "Chain dot notation: cabinet.folder.file.targetName",
  "You can also use bracket notation"
],
  codeHint: `let cabinet = { folder: { file: { __________: "NEXUS_LEADER" } } };\nreturn cabinet.______.____.__________;`,
  initialCode: "// Your code here\n",
  validate: (code, result) => {
      if (!code.includes('targetName')) return { success: false, message: "Error: Create the nested object with targetName." };
      if (typeof result !== 'string' || result === '') return { success: false, message: "Error: You must return the targetName string." };
      return { success: true, message: "MISSION ACCOMPLISHED: Target acquired." };
    }
};
