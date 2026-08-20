export const gate01 = {
  id: "01",
  sector: "SECTOR 01 \u2014 CIPHER GATEWAY",
  learningZone: "JS Introduction",
  title: "GATE 01 \u2014 FIRST CONTACT",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nWelcome, recruit. Before you can fight NEXUS, you need to understand your weapon. JavaScript runs in every browser on the planet \u2014 it is the only language that needs no installation, no compiler, and no setup. It just runs. NEXUS knows this. So do we. Prove you understand what JavaScript is and what it can do.\n\nMISSION OBJECTIVE:\n1. Write a JavaScript statement that displays the message \"CIPHER ONLINE\" in the browser console.\n2. Write one that changes the text of an HTML element with the id \"status\" to \"SYSTEMS ACTIVE\".",
  hints: [
  "console.log(\"message\") outputs to the browser console",
  "document.getElementById(\"id\").innerHTML = \"text\" changes page content",
  "JavaScript is case sensitive \u2014 Console.log will not work"
],
  codeHint: "console.___(____);\ndocument.____________(\"status\")._________ = \"SYSTEMS ACTIVE\";",
  initialCode: "// Task 1: Output to console\n// Your code here\n\n// Task 2: Change HTML content\n// Your code here\n",
  solution: "console.log(\"CIPHER ONLINE\");\ndocument.getElementById(\"status\").innerHTML = \"SYSTEMS ACTIVE\";",
  validate: (code, result, logs = []) => {
    const hasLog = logs.some(l => l.includes('CIPHER ONLINE'));
    if (!hasLog) return { success: false, message: 'Task 1 incomplete: Must output "CIPHER ONLINE" to the console.' };
    const hasDom = logs.some(l => l.includes('#status') && l.includes('SYSTEMS ACTIVE')) || (code.includes('getElementById') && code.includes('status') && code.includes('SYSTEMS ACTIVE'));
    if (!hasDom) return { success: false, message: 'Task 2 incomplete: Must set document.getElementById("status").innerHTML = "SYSTEMS ACTIVE"' };
    return { success: true, message: 'GATE 01 CLEARED: Connection established. Welcome to CIPHER.' };
  }
};
