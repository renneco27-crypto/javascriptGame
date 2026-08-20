export const gate30 = {
  id: "30",
  sector: "SECTOR 07 \u2014 ASYNC AND FINAL BREACH",
  learningZone: "JS Modules",
  title: "GATE 30 \u2014 FINAL BREACH",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nThis is the last gate. Modules let you split code across files and import only what you need. NEXUS cannot fight what it cannot find. Divide your code. Conquer the system.",
  hints: [
  "Named export: export const VERSION = \"1.0\" or export function name() {}",
  "Default export: export default function() {} \u2014 only one per file",
  "Named import: import { formatName, VERSION } from \"./utils.js\"",
  "Script tags need type=\"module\" to use ES module imports"
],
  codeHint: "// ____.js\n______ function formatName(name) {\n  return \"AGENT: \" + name.___________();\n} // ____\n______ const VERSION = \"1.0\";\n// ____.js\n______ { formatName, VERSION } ______ \"./utils.js\";\nconsole.log(____(\"zero\"));\n____.log(VERSION);",
  initialCode: "// utils.js \u2014 write the exports here\n// (simulate by writing both files as comments and the usable code below)\n\n// utils.js:\n// export function formatName(name) \u2014 returns \"AGENT: [NAME]\" uppercase\n// export const VERSION = \"1.0\"\n\n// main.js:\n// import both and use them\n\n// Runnable simulation:\n// Your code here\n",
  solution: "// utils.js\nexport function formatName(name) {\n  return \"AGENT: \" + name.toUpperCase();\n}\nexport const VERSION = \"1.0\";\n\n// main.js\nimport { formatName, VERSION } from \"./utils.js\";\nconsole.log(formatName(\"zero\"));\nconsole.log(VERSION);\n\n// Simulation (runnable without actual module system):\nfunction formatNameSim(name) {\n  return \"AGENT: \" + name.toUpperCase();\n}\nconst VERSION_SIM = \"1.0\";\nconsole.log(formatNameSim(\"zero\"));\nconsole.log(VERSION_SIM);",
  validate: (code, result, logs = []) => {
    const hasExport = code.includes('export function') || code.includes('export const');
    if (!hasExport) return { success: false, message: 'Must use export to export a function and a constant' };
    const hasImport = code.includes('import {') && code.includes('from "');
    if (!hasImport) return { success: false, message: 'Must use import { ... } from "./utils.js" syntax' };
    const hasFormatFn = code.includes('toUpperCase()') && (code.includes('AGENT:') || code.includes("AGENT:"));
    if (!hasFormatFn) return { success: false, message: 'formatName must return the name in uppercase prefixed with "AGENT: "' };
    const hasVersion = code.includes('VERSION') && code.includes('"1.0"');
    if (!hasVersion) return { success: false, message: 'Must export a VERSION constant set to "1.0"' };
    return { success: true, message: 'GATE 30 CLEARED — ALL 30 GATES BREACHED. NEXUS IS DOWN. MISSION COMPLETE.' };
  }
};
