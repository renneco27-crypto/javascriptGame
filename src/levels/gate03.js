export const gate03 = {
  id: "03",
  sector: "SECTOR 03 \u2014 BROADCAST ARRAY",
  learningZone: "JS Output",
  title: "GATE 03 \u2014 SIGNAL BROADCAST",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nCIPHER needs to broadcast data to four different output channels simultaneously \u2014 the console, the page, a popup alert, and directly written into the document. NEXUS has jammed three of the four. Your job is to demonstrate all four output methods so the backup systems know which channel is still alive.\n\nMISSION OBJECTIVE: Write JavaScript that uses all four output methods:\n1. console.log(\"TRANSMITTING\")\n2. document.getElementById(\"output\").innerHTML = \"TRANSMITTING\"\n3. window.alert(\"TRANSMITTING\")\n4. document.write(\"TRANSMITTING\")",
  hints: [
  "console.log() \u2014 developer console only",
  "document.getElementById(\"demo\").innerHTML = \"text\" \u2014 updates the page",
  "window.alert(\"text\") \u2014 popup box (use sparingly)",
  "document.write() \u2014 overwrites the whole page if called after load, testing only"
],
  codeHint: "console.___(____);\ndocument.____________(\"output\").innerHTML = \"TRANSMITTING\";\nwindow._____(____);\ndocument._____(____);",
  initialCode: "// Channel 1: Console\n// Your code here\n\n// Channel 2: HTML element\n// Your code here\n\n// Channel 3: Alert popup\n// Your code here\n\n// Channel 4: Document write (testing only)\n// Your code here\n",
  validate: (code, result, logs = []) => {
    if (!code.includes('console.log')) return { success: false, message: 'Missing console.log channel.' };
    if (!code.includes('getElementById') || !code.includes('innerHTML')) return { success: false, message: 'Missing document.getElementById().innerHTML channel.' };
    if (!code.includes('alert')) return { success: false, message: 'Missing window.alert channel.' };
    if (!code.includes('document.write')) return { success: false, message: 'Missing document.write channel.' };
    return { success: true, message: 'GATE 03 CLEARED: All 4 broadcast channels operational.' };
  }
};
