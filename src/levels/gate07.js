export const gate07 = {
  id: "07",
  sector: "SECTOR 01 \u2014 CIPHER GATEWAY",
  learningZone: "JS Comments",
  title: "GATE 07 \u2014 ANNOTATION PROTOCOL",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nComments are notes inside code that JavaScript ignores. Use them to explain your logic.",
  hints: [
  "Single line comment: // this is ignored by JavaScript",
  "Multi-line comment: /* this spans multiple lines */",
  "Comments can appear at the end of a line of code too",
  "Use comments to document mission headers and explain each step"
],
  codeHint: "/* // ____\n  ___: ___\n  ___: ___\n*/ // ____\n// single line ____\nlet x = 5; // end of line ____",
  initialCode: "// Task: Add a multi-line mission header comment at the top,\n// then write 3 variables each with a single-line comment above explaining it.\n// Also add a console.log with an end-of-line comment.\n\n// Your code here\n",
  solution: "/*\n  MISSION: Secure the perimeter\n  AUTHOR: Agent Zero\n  DATE: 2047-01-15\n*/\n\n// Agent codename\nlet codename = \"Zero\";\n\n// Current threat level (0-100)\nlet threatLevel = 75;\n\n// Mission status flag\nlet isActive = true;\n\nconsole.log(codename + \" - threat: \" + threatLevel); // output mission summary",
  validate: (code, result, logs = []) => {
    const hasMultiLine = code.includes('/*') && code.includes('*/');
    if (!hasMultiLine) return { success: false, message: 'Must include a multi-line comment /* ... */' };
    const hasSingleLine = (code.match(/\/\//g) || []).length >= 2;
    if (!hasSingleLine) return { success: false, message: 'Must include at least two single-line comments //' };
    const hasLog = logs.some(l => l.length > 0);
    if (!hasLog) return { success: false, message: 'Must include a console.log statement' };
    return { success: true, message: 'GATE 07 CLEARED — Annotation protocol established.' };
  }
};
