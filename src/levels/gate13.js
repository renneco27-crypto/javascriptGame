export const gate13 = {
  id: "13",
  sector: "SECTOR 03 \u2014 DATA STRUCTURES",
  learningZone: "JS Strings",
  title: "GATE 13 \u2014 STRING SYNTAX",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nEvery intercepted message is a string. Know how to write and work with them.",
  hints: [
  "Template literals use backticks and ${variable} for embedding values",
  ".length returns the number of characters in a string",
  ".toUpperCase() converts all characters to uppercase",
  ".includes(\"word\") returns true if the string contains that word"
],
  codeHint: "let name = \"___\";\nlet rank = \"___\";\nlet sentence = `Agent ${___} holds the rank of ${___}.`;\nconsole.log(sentence.______);\nconsole.log(sentence._____________());\nconsole.log(sentence.________(\"holds\"));",
  initialCode: "// Declare an agent name and rank\n// Use a template literal to build: \"Agent [name] holds the rank of [rank].\"\n// Then: get its length, convert to uppercase, check if it includes \"holds\"\n\n// Your code here\n",
  solution: "let name = \"Zero\";\nlet rank = \"Commander\";\nlet sentence = `Agent ${name} holds the rank of ${rank}.`;\nconsole.log(sentence.length);\nconsole.log(sentence.toUpperCase());\nconsole.log(sentence.includes(\"holds\"));",
  validate: (code, result, logs = []) => {
    const hasTemplate = code.includes('`') && code.includes('${');
    if (!hasTemplate) return { success: false, message: 'Must use a template literal with ${variable} syntax' };
    const hasLength = code.includes('.length');
    if (!hasLength) return { success: false, message: 'Must get the string length using .length' };
    const hasUpper = code.includes('.toUpperCase()');
    if (!hasUpper) return { success: false, message: 'Must convert to uppercase using .toUpperCase()' };
    const hasIncludes = code.includes('.includes(');
    if (!hasIncludes) return { success: false, message: 'Must check for a substring using .includes()' };
    return { success: true, message: 'GATE 13 CLEARED — All string channels decoded.' };
  }
};
