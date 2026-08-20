export const gate02 = {
  id: "02",
  sector: "SECTOR 01 \u2014 CIPHER GATEWAY",
  learningZone: "JS Where To",
  title: "GATE 02 \u2014 DEPLOYMENT",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nCode placed in the wrong location runs before the page loads and crashes. Know where to put your scripts.",
  hints: [
  "Place <script src=\"file.js\"></script> at the bottom of <body> so HTML loads first",
  "An external script uses the src attribute: <script src=\"mission.js\"></script>",
  "An inline <script> block can run code directly in the HTML"
],
  codeHint: "<script ___ = \"mission.js\"></script>\n<____>\n  // ____ code here\n</____>",
  initialCode: "<!-- Task 1: Link external file mission.js -->\n<!-- Your code here -->\n\n<!-- Task 2: Write an inline <script> block -->\n<!-- Your code here -->\n",
  solution: "<script src=\"mission.js\"></script>\n<script>\n  console.log(\"INLINE SCRIPT ACTIVE\");\n</script>",
  validate: (code, result, logs = []) => {
    const hasSrc = code.includes('src') && (code.includes('mission.js') || code.includes('cipher.js') || code.includes('.js'));
    if (!hasSrc) return { success: false, message: 'Must link an external JS file using <script src="mission.js"></script>' };
    const hasScript = code.includes('<script') && code.includes('</script>');
    if (!hasScript) return { success: false, message: 'Must include script tags' };
    return { success: true, message: 'GATE 02 CLEARED — Scripts deployed correctly.' };
  }
};
