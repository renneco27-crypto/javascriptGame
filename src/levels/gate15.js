export const gate15 = {
  id: "15",
  sector: "SECTOR 15 \u2014 DATA MATRICES",
  learningZone: "JS Arrays",
  title: "GATE 15 \u2014 ARRAY ARSENAL",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nThe agent roster, the target list, the equipment inventory, the intercepted coordinates \u2014 everything in CIPHER is stored in arrays. Arrays are ordered lists that let you add, remove, find, sort, and transform collections of data. Master the array arsenal and you control the data.\n\nMISSION OBJECTIVE:\nGiven `let agents = [\"Zero\", \"Fox\", \"Rook\", \"Lynx\", \"Ghost\"];`:\n1. Push `\"Viper\"` to the end, unshift `\"Echo\"` to the beginning\n2. Find the index of `\"Rook\"`\n3. Sort the array alphabetically\n4. Check if `\"Ghost\"` is included\nReturn `{ agents, rookIndex, hasGhost }`.",
  hints: [
  "push() adds to end, unshift() adds to beginning",
  "pop() removes from end, shift() removes from beginning",
  "indexOf(\"Rook\") returns the position",
  "sort() sorts array elements in place",
  "includes(\"Ghost\") returns true or false"
],
  codeHint: "const ____ = [\"Zero\", \"Fox\", \"Rook\", \"Lynx\", \"Ghost\"];\nagents.____(\"Viper\");\nagents._______(\"Echo\");\nconst rookIndex = agents._______(\"Rook\");\nagents.____();\nconst hasGhost = agents.________(\"Ghost\");\nreturn { agents, ____, hasGhost };",
  initialCode: "let agents = [\"Zero\", \"Fox\", \"Rook\", \"Lynx\", \"Ghost\"];\n\n// Perform operations\nlet rookIndex;\nlet hasGhost;\n\nreturn { agents, rookIndex, hasGhost };\n",
  solution: "let agents = [\"Zero\", \"Fox\", \"Rook\", \"Lynx\", \"Ghost\"];\n\nagents.push(\"Viper\");\nagents.unshift(\"Echo\");\nconst rookIndex = agents.indexOf(\"Rook\");\nagents.sort();\nconst hasGhost = agents.includes(\"Ghost\");\n\nreturn { agents, rookIndex, hasGhost };",
  validate: (code, result, logs = []) => {
    if (!result || !Array.isArray(result.agents)) return { success: false, message: 'Must return { agents, rookIndex, hasGhost }.' };
    if (!result.agents.includes('Viper') || !result.agents.includes('Echo')) return { success: false, message: 'Must push Viper and unshift Echo.' };
    if (result.hasGhost !== true) return { success: false, message: 'hasGhost must be true.' };
    return { success: true, message: 'GATE 15 CLEARED: Array arsenal equipped.' };
  }
};
