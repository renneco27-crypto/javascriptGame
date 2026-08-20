export const gate26 = {
  id: "26",
  sector: "SECTOR 07 \u2014 ASYNC AND FINAL BREACH",
  learningZone: "JS Destructuring",
  title: "GATE 26 \u2014 DESTRUCTURING",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nDestructuring extracts data from arrays and objects into clean variables in one line.",
  hints: [
  "Array destructuring: const [first, , third] = array \u2014 use commas to skip items",
  "Rest in destructuring: const [first, ...rest] = array",
  "Object destructuring: const { name, rank } = agent",
  "Rename while destructuring: const { rank: title } = agent"
],
  codeHint: "____ [first, , third, ...rest] = [90, 55, 78, 63];\nconst agent = { name: \"Zero\", rank: \"____\", score: 88 };\nconst { name, rank: ___ } = agent;\n____.log(first, third, rest);\n____.log(name, title);",
  initialCode: "// Task 1: Destructure [90, 55, 78, 63]\n//   - get the first, skip the second, get the third, collect the rest\n// Your code here\n\n// Task 2: Destructure an agent object to get name and rank\n//   - rename rank to title\n// Your code here\n",
  solution: "const scores = [90, 55, 78, 63];\nconst [first, , third, ...rest] = scores;\nconsole.log(first);  // 90\nconsole.log(third);  // 78\nconsole.log(rest);   // [63]\n\nconst agent = { name: \"Zero\", rank: \"Commander\", score: 88 };\nconst { name, rank: title } = agent;\nconsole.log(name);   // \"Zero\"\nconsole.log(title);  // \"Commander\"",
  validate: (code, result, logs = []) => {
    const hasArrayDestructure = code.match(/const \[.*\]/);
    if (!hasArrayDestructure) return { success: false, message: 'Must use array destructuring with const [...]' };
    const hasSkip = code.match(/\[\w+, ,/) || code.match(/\[\w+,,/);
    if (!hasSkip) return { success: false, message: 'Must skip an element using a blank comma: [first, , third]' };
    const hasObjectDestructure = code.match(/const \{.*\}/);
    if (!hasObjectDestructure) return { success: false, message: 'Must use object destructuring with const {...}' };
    const hasRename = code.includes(': title') || code.match(/\w+: \w+/);
    if (!hasRename) return { success: false, message: 'Must rename a property during object destructuring (e.g., rank: title)' };
    return { success: true, message: 'GATE 26 CLEARED — Data extracted cleanly.' };
  }
};
