export const gate18 = {
  id: "18",
  sector: "SECTOR 03 \u2014 DATA STRUCTURES",
  learningZone: "JS Maps",
  title: "GATE 18 \u2014 MAP SYNTAX",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nMaps store key-value pairs like objects but keys can be any type \u2014 not just strings.",
  hints: [
  "new Map() creates a Map \u2014 use .set(key, value) to add entries",
  ".get(key) retrieves a value, .has(key) checks if a key exists",
  ".delete(key) removes an entry, .size returns the count",
  "for...of with destructuring: for (let [key, value] of map)"
],
  codeHint: "let ____ = new Map();\nscores.___(\"Zero\", 88);\nscores.___(\"Fox\", 72);\nscores.___(\"Rook\", 95);\nconsole.log(scores.___(___ ));\nconsole.log(scores.___(___ ));\nscores.______(___ );\nfor (let [key, value] ___ scores) {\n  ____.log(`${key} \u2192 ${value}`);\n} // ____",
  initialCode: "// Create a Map of 3 agents and their threat scores\n// 1. Retrieve one score\n// 2. Check if an agent exists\n// 3. Delete one entry\n// 4. Loop and log all as \"name \u2192 score\"\n\n// Your code here\n",
  solution: "let scores = new Map();\nscores.set(\"Zero\", 88);\nscores.set(\"Fox\", 72);\nscores.set(\"Rook\", 95);\nconsole.log(scores.get(\"Zero\"));\nconsole.log(scores.has(\"Fox\"));\nscores.delete(\"Fox\");\nfor (let [key, value] of scores) {\n  console.log(`${key} \u2192 ${value}`);\n}",
  validate: (code, result, logs = []) => {
    const hasMap = code.includes('new Map(');
    if (!hasMap) return { success: false, message: 'Must create a Map using new Map()' };
    const hasSet = code.includes('.set(');
    if (!hasSet) return { success: false, message: 'Must add entries using .set(key, value)' };
    const hasGet = code.includes('.get(');
    if (!hasGet) return { success: false, message: 'Must retrieve a value using .get()' };
    const hasHas = code.includes('.has(');
    if (!hasHas) return { success: false, message: 'Must check existence using .has()' };
    const hasLoop = code.includes('of scores') || code.includes('of intel');
    if (!hasLoop) return { success: false, message: 'Must loop through the Map with for...of' };
    return { success: true, message: 'GATE 18 CLEARED — Intel map fully restored.' };
  }
};
