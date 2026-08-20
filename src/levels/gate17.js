export const gate17 = {
  id: "17",
  sector: "SECTOR 17 \u2014 THREAT INDEX",
  learningZone: "JS Maps",
  title: "GATE 17 \u2014 INTELLIGENCE MAP",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nThe intelligence database needs to store key-value pairs where the keys are not simple strings \u2014 sometimes they are objects, sometimes numbers, sometimes other complex data. A regular JS object cannot handle this. A Map can. Build the intelligence Map that stores and retrieves agent data with any key type.\n\nMISSION OBJECTIVE:\n1. Create a `new Map()`\n2. Set string keys `\"Zero\" -> 88`, `\"Fox\" -> 45`, `\"Rook\" -> 91`\n3. Set numeric badge key `1007 -> \"SUPER AGENT\"`\n4. Get score for `\"Zero\"` into `zeroScore`\n5. Check if badge `1007` exists using `.has(1007)`\nReturn `{ zeroScore, hasBadge1007: intelMap.has(1007), mapSize: intelMap.size }`.",
  hints: [
  "new Map() \u2014 creates an empty Map",
  "map.set(key, value) \u2014 adds or updates an entry",
  "map.get(key) \u2014 retrieves value by key",
  "map.has(key) \u2014 returns true or false",
  "map.size \u2014 total number of entries (not .length)"
],
  codeHint: "const intelMap = new ___();\n____.set(\"Zero\", __);\n____.set(\"Fox\", 45);\n____.set(\"Rook\", 91);\nintelMap.set(1007, \"___________\");\nconst zeroScore = intelMap.get(\"____\");\nreturn { zeroScore, ____: intelMap.has(1007), mapSize: intelMap.size };",
  initialCode: "const intelMap = new Map();\n\n// Task: Store entries, numeric keys, retrieve values\n\n",
  solution: "const intelMap = new Map();\n\nintelMap.set(\"Zero\", 88);\nintelMap.set(\"Fox\", 45);\nintelMap.set(\"Rook\", 91);\nintelMap.set(1007, \"SUPER AGENT\");\n\nconst zeroScore = intelMap.get(\"Zero\");\n\nreturn { zeroScore, hasBadge1007: intelMap.has(1007), mapSize: intelMap.size };",
  validate: (code, result, logs = []) => {
    if (!result || result.zeroScore !== 88) return { success: false, message: 'zeroScore should be 88.' };
    if (result.hasBadge1007 !== true) return { success: false, message: 'hasBadge1007 must be true.' };
    if (result.mapSize !== 4) return { success: false, message: 'Map should contain exactly 4 entries.' };
    return { success: true, message: 'GATE 17 CLEARED: Intelligence Map online.' };
  }
};
