export const gate01 = {
  id: "01",
  sector: "SECTOR 01 \u2014 CIPHER GATEWAY",
  learningZone: "JS Introduction",
  title: "GATE 01 \u2014 FIRST CONTACT",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nNEXUS is running in every browser on the planet. So is JavaScript. Before you fight it, understand what JavaScript is and where it lives.",
  hints: [
  "JavaScript runs in the browser \u2014 no installation needed",
  "console.log(\"message\") outputs to the browser console",
  "document.getElementById(\"id\").innerHTML = \"text\" changes page content"
],
  codeHint: "console.___(____);\ndocument.____________(\"status\")._________ = \"SYSTEMS ACTIVE\";",
  initialCode: "// Task 1: Output \"CIPHER ONLINE\" to the console\n// Your code here\n\n// Task 2: Change HTML element with id \"status\" to \"SYSTEMS ACTIVE\"\n// Your code here\n",
  solution: "console.log(\"CIPHER ONLINE\");\ndocument.getElementById(\"status\").innerHTML = \"SYSTEMS ACTIVE\";",
  validate: (code, result, logs = []) => {
    const hasLog = logs.some(l => l.includes('CIPHER ONLINE'));
    if (!hasLog) return { success: false, message: 'Must log "CIPHER ONLINE" to the console' };
    const el = document.getElementById('status');
    if (!el || el.innerHTML !== 'SYSTEMS ACTIVE') return { success: false, message: 'Element #status must say "SYSTEMS ACTIVE"' };
    return { success: true, message: 'GATE 01 CLEARED — First contact established.' };
  }
};
