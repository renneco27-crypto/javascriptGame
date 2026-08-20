export const gate15 = {
  id: "15",
  sector: "SECTOR 03 \u2014 DATA STRUCTURES",
  learningZone: "JS Arrays",
  title: "GATE 15 \u2014 ARRAY SYNTAX",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nArrays store ordered lists. Every roster, every target list, every coordinate set is an array.",
  hints: [
  "Array index starts at 0: agents[0] is the first item",
  "agents[agents.length - 1] gets the last item",
  ".push() adds to the end, .unshift() adds to the beginning",
  ".pop() removes from the end, .indexOf() finds the index of an item"
],
  codeHint: "let agents = [___, ___, ___, ___, ___];\n____.log(agents[0]);\n____.log(agents[agents.length - 1]);\nagents.______(\"NewAgent\");\nagents._______(\"FirstAgent\");\nagents.___();\nconsole.log(agents._______(\"ThirdName\"));\nconsole.log(agents.______(1, 4));",
  initialCode: "// Create an array of 5 agent names\n// 1. Access the first and last\n// 2. Add one to the end and one to the beginning\n// 3. Remove the last one\n// 4. Find the index of the third name\n// 5. Slice out the middle 3\n\n// Your code here\n",
  solution: "let agents = [\"Zero\", \"Fox\", \"Rook\", \"Lynx\", \"Echo\"];\nconsole.log(agents[0]);\nconsole.log(agents[agents.length - 1]);\nagents.push(\"Wolf\");\nagents.unshift(\"Kite\");\nagents.pop();\nconsole.log(agents.indexOf(\"Rook\"));\nconsole.log(agents.slice(1, 4));",
  validate: (code, result, logs = []) => {
    const hasPush = code.includes('.push(');
    if (!hasPush) return { success: false, message: 'Must use .push() to add to the end of the array' };
    const hasUnshift = code.includes('.unshift(');
    if (!hasUnshift) return { success: false, message: 'Must use .unshift() to add to the beginning' };
    const hasPop = code.includes('.pop()');
    if (!hasPop) return { success: false, message: 'Must use .pop() to remove the last item' };
    const hasIndexOf = code.includes('.indexOf(');
    if (!hasIndexOf) return { success: false, message: 'Must use .indexOf() to find an item' };
    const hasSlice = code.includes('.slice(');
    if (!hasSlice) return { success: false, message: 'Must use .slice() to extract a portion of the array' };
    return { success: true, message: 'GATE 15 CLEARED — All roster data retrieved.' };
  }
};
