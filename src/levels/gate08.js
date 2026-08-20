export const gate08 = {
  id: "08",
  sector: "SECTOR 08 \u2014 CIPHER DECRYPTION",
  learningZone: "JS Strings",
  title: "GATE 08 \u2014 DECRYPTION STRINGS",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nEvery intercepted NEXUS transmission is a string. To decode them you need to slice them, search them, replace words, change case, and extract characters. The decryption unit is offline. Rebuild it using JavaScript string methods.\n\nMISSION OBJECTIVE:\nGiven `const transmission = \"  NEXUS WILL STRIKE AT MIDNIGHT ON FRIDAY  \";`:\n1. `clean`: remove whitespace from both ends using `trim()`\n2. `target`: replace \"NEXUS\" with \"TARGET\"\n3. `hasFriday`: check if the string includes \"FRIDAY\"\n4. `words`: split the trimmed message into an array of words\nReturn `{ clean, target, hasFriday, words }`.",
  hints: [
  "trim() removes leading and trailing whitespace",
  "toLowerCase() / toUpperCase() change case",
  "replace(\"old\", \"new\") swaps text",
  "includes(\"word\") returns true or false",
  "split(\" \") breaks a string into an array by the separator"
],
  codeHint: "const clean = transmission.______();\nconst target = clean._______(\"NEXUS\", \"TARGET\");\nconst hasFriday = clean.________(\"FRIDAY\");\nconst words = clean._____(\" \");\nreturn { clean, target, ____, words };",
  initialCode: "const transmission = \"  NEXUS WILL STRIKE AT MIDNIGHT ON FRIDAY  \";\n\n// Task 1: Trim\nlet clean;\n\n// Task 2: Replace\nlet target;\n\n// Task 3: Includes check\nlet hasFriday;\n\n// Task 4: Split into array\nlet words;\n\nreturn { clean, target, hasFriday, words };\n",
  validate: (code, result, logs = []) => {
    if (!result || typeof result !== 'object') return { success: false, message: 'Must return an object with { clean, target, hasFriday, words }.' };
    if (result.clean !== 'NEXUS WILL STRIKE AT MIDNIGHT ON FRIDAY') return { success: false, message: 'clean must be trimmed of outside whitespace.' };
    if (!result.target.includes('TARGET')) return { success: false, message: 'target must have replaced NEXUS with TARGET.' };
    if (result.hasFriday !== true) return { success: false, message: 'hasFriday must be true.' };
    if (!Array.isArray(result.words) || result.words.length !== 7) return { success: false, message: 'words must be an array of 7 individual words.' };
    return { success: true, message: 'GATE 08 CLEARED: Transmission decrypted.' };
  }
};
