export const level12 = {
  id: "12",
  sector: "SECTOR 03 — THE CONTROL ROOM",
  learningZone: "Control Flow and Loops",
  title: "LEVEL 12: SCANNING THE PERIMETER",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nPerimeter sensors are numbered 1 through 10. NEXUS disabled the odd-numbered ones. You need to scan all sensors and log which ones are online (even) and which are offline (odd) so the repair team knows where to go.\n\nMISSION OBJECTIVE: Loop through numbers 1 to 10. For each number, log 'Sensor X: ONLINE' if even, 'Sensor X: OFFLINE' if odd.",
  hints: [
  "Use a for loop: for (let i = 1; i <= 10; i++)",
  "Check even/odd with the modulo operator: i % 2 === 0",
  "Use console.log()"
],
  codeHint: `for (let i = 1; i <= __; i++) {\n  if (i % _ === _) {\n    console.log("Sensor " + _ + ": ONLINE");\n  } else {\n    console.log("Sensor " + _ + ": _______");\n  }\n}`,
  initialCode: "// Your code here\n",
  validate: (code, result, logs) => {
      if (!code.includes('for') || !code.includes('%')) return { success: false, message: "Error: Use a for loop and the modulo operator %." };
      if (logs.length < 10) return { success: false, message: "Error: You must log all 10 sensors." };
      const hasOnline = logs.some(l => l.includes('ONLINE'));
      const hasOffline = logs.some(l => l.includes('OFFLINE'));
      if (!hasOnline || !hasOffline) return { success: false, message: "Error: Logs must say ONLINE or OFFLINE." };
      return { success: true, message: "MISSION ACCOMPLISHED: Sensors scanned." };
    }
};
