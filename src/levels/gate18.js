export const gate18 = {
  id: "18",
  sector: "SECTOR 18 \u2014 STREAM PROCESSOR",
  learningZone: "JS Iterations",
  title: "GATE 18 \u2014 ITERATION PROTOCOLS",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nData never sits still in CIPHER. It gets looped, transformed, filtered, and reduced constantly. The iteration protocols are the engine that processes everything \u2014 from scanning the network to building reports. NEXUS cannot keep up with a developer who knows every iteration tool in the arsenal.\n\nMISSION OBJECTIVE:\nGiven:\n`const threatData = [{ agent: \"Zero\", score: 88 }, { agent: \"Fox\", score: 45 }, { agent: \"Rook\", score: 91 }, { agent: \"Lynx\", score: 62 }, { agent: \"Ghost\", score: 77 }];`\n1. `names`: use `map()` to extract an array of just the agent names\n2. `highThreats`: use `filter()` for agents with `score > 70`\n3. `totalScore`: use `reduce()` to sum all agent scores\n4. `topAgent`: use `find()` for the first agent with `score > 85`\nReturn `{ names, highThreats, totalScore, topAgent }`.",
  hints: [
  "map \u2014 transforms, returns new array same length",
  "filter \u2014 returns new array with only passing elements",
  "reduce \u2014 collapses to single value: (acc, curr) => acc + curr.score",
  "find \u2014 returns the first matching element (not an array)"
],
  codeHint: "const names = threatData.map(a => a._____);\nconst highThreats = threatData.______(a => a.score > 70);\nconst totalScore = threatData.______( (sum, a) => sum + a.score, _ );\nconst topAgent = threatData.____(a => a.score > 85);\nreturn { names, ____, totalScore, topAgent };",
  initialCode: "const threatData = [\n  { agent: \"Zero\", score: 88 },\n  { agent: \"Fox\", score: 45 },\n  { agent: \"Rook\", score: 91 },\n  { agent: \"Lynx\", score: 62 },\n  { agent: \"Ghost\", score: 77 }\n];\n\n// Task 1: map\n// Task 2: filter\n// Task 3: reduce\n// Task 4: find\n\n",
  validate: (code, result, logs = []) => {
    if (!result) return { success: false, message: 'Must return { names, highThreats, totalScore, topAgent }.' };
    if (!Array.isArray(result.names) || result.names.length !== 5) return { success: false, message: 'names must be mapped array of 5 agent names.' };
    if (!Array.isArray(result.highThreats) || result.highThreats.length !== 3) return { success: false, message: 'highThreats should contain 3 agents with score > 70.' };
    if (result.totalScore !== 363) return { success: false, message: 'totalScore should sum to 363 (88+45+91+62+77).' };
    if (!result.topAgent || result.topAgent.agent !== 'Zero') return { success: false, message: 'topAgent should find Zero (first with score > 85).' };
    return { success: true, message: 'GATE 18 CLEARED: Iteration protocols mastered.' };
  }
};
