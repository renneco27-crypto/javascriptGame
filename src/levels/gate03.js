export const gate03 = {
  id: "03",
  sector: "SECTOR 01 \u2014 CIPHER GATEWAY",
  learningZone: "JS Output",
  title: "GATE 03 \u2014 BROADCAST",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nNEXUS jammed three of our four output channels. Prove all four still work.",
  hints: [
  "console.log(\"message\") outputs to the developer console",
  "document.getElementById(\"id\").innerHTML = \"text\" updates HTML content",
  "alert(\"message\") shows a browser popup dialog",
  "document.write(\"message\") writes directly to the page (testing only)"
],
  codeHint: "console.___(____);\ndocument.____________(\"demo\")._________ = \"message\";\n________(\"message\");\ndocument._____(\"message\");",
  initialCode: "// Task: Use all four output methods, each with a different message\n// 1. console.log\n// Your code here\n\n// 2. document.getElementById innerHTML\n// Your code here\n\n// 3. alert\n// Your code here\n\n// 4. document.write\n// Your code here\n",
  solution: "console.log(\"CHANNEL 1 ACTIVE\");\ndocument.getElementById(\"demo\").innerHTML = \"CHANNEL 2 ACTIVE\";\nalert(\"CHANNEL 3 ACTIVE\");\ndocument.write(\"CHANNEL 4 ACTIVE\");",
  validate: (code, result, logs = []) => {
    const hasConsole = logs.some(l => l.length > 0);
    if (!hasConsole) return { success: false, message: 'Must use console.log with a message' };
    const hasInnerHTML = code.includes('.innerHTML');
    if (!hasInnerHTML) return { success: false, message: 'Must use innerHTML to update an HTML element' };
    const hasAlert = code.includes('alert(');
    if (!hasAlert) return { success: false, message: 'Must use alert()' };
    const hasWrite = code.includes('document.write(');
    if (!hasWrite) return { success: false, message: 'Must use document.write()' };
    return { success: true, message: 'GATE 03 CLEARED — All four output channels restored.' };
  }
};
