export const gate02 = {
  id: "02",
  sector: "SECTOR 02 \u2014 DEPLOYMENT ZONE",
  learningZone: "JS Where To",
  title: "GATE 02 \u2014 DEPLOYMENT POINT",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nYour code needs to be deployed correctly or it will never execute. NEXUS is counting on you placing your script in the wrong location so it runs before the page loads \u2014 crashing on empty elements. There are three places JavaScript can live: inside a <script> tag in the head, inside a <script> tag at the bottom of body, or in an external .js file. Know the difference. Deploy correctly.\n\nMISSION OBJECTIVE:\n1. Create a variable `externalScriptTag` containing the HTML string that links an external JavaScript file called \"cipher.js\".\n2. Create a variable `inlineScriptTag` containing a script tag placed at the bottom of a body element.",
  hints: [
  "External file: <script src=\"cipher.js\"></script>",
  "Place scripts at the bottom of <body> so HTML loads first",
  "External files keep your HTML clean and the JS reusable"
],
  codeHint: "const _________________ = '<script ___=\"cipher.js\"></script>';\nconst _______________ = '<body>...<script>______();</script></body>';",
  initialCode: "// Task 1: Link external JS file\nconst externalScriptTag = \"\";\n\n// Task 2: Inline script in correct position\nconst inlineScriptTag = \"\";\n",
  validate: (code, result, logs = []) => {
    if (!code.includes('cipher.js')) return { success: false, message: 'Task 1 incomplete: Must link external file "cipher.js".' };
    if (!code.includes('<script') || !code.includes('</script>')) return { success: false, message: 'Task 2 incomplete: Must define script tags.' };
    return { success: true, message: 'GATE 02 CLEARED: Deployment architecture verified.' };
  }
};
