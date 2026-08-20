export const gate19 = {
  id: "19",
  sector: "SECTOR 19 \u2014 THE CORE MAINFRAME",
  learningZone: "JS Math",
  title: "GATE 19 \u2014 FINAL CALCULATION",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nThis is the final gate. NEXUS runs a mathematical defense system \u2014 a series of calculations that determines whether to open the kill switch port. You need to solve each calculation correctly using the JavaScript Math object. Get one wrong and the port locks forever. There is no margin for error. This is what you trained for.\n\nMISSION OBJECTIVE:\n1. `floorVal`: Math.floor(84.4)\n2. `ceilVal`: Math.ceil(84.5)\n3. `absVal`: Math.abs(-273)\n4. `powerVal`: Math.pow(2, 32)\n5. `sqrtVal`: Math.sqrt(1764)\n6. `minVal`: Math.min(33, 11, 78, 5, 92, 44)\n7. `piFixed`: (Math.PI).toFixed(4)\nReturn `{ floorVal, ceilVal, absVal, powerVal, sqrtVal, minVal, piFixed }`.",
  hints: [
  "Math.floor() rounds down, Math.ceil() rounds up, Math.round() rounds to nearest",
  "Math.abs(-273) returns 273",
  "Math.pow(2, 32) or 2 ** 32",
  "Math.sqrt(1764) returns 42",
  "Math.PI is the constant 3.14159...",
  "(Math.PI).toFixed(4) returns \"3.1416\""
],
  codeHint: "const floorVal = Math._____(84.4);\nconst ceilVal = Math.____(84.5);\nconst ____ = Math.__(-273);\nconst powerVal = Math.___(2, 32);\nconst sqrtVal = Math.____(1764);\nconst minVal = Math.___(33, 11, 78, 5, 92, 44);\nconst piFixed = (Math.PI)._______(4);\nreturn { ____, ceilVal, absVal, powerVal, sqrtVal, minVal, piFixed };",
  initialCode: "// Solve all calculations to unlock the kill switch:\nlet floorVal;\nlet ceilVal;\nlet absVal;\nlet powerVal;\nlet sqrtVal;\nlet minVal;\nlet piFixed;\n\nreturn { floorVal, ceilVal, absVal, powerVal, sqrtVal, minVal, piFixed };\n",
  validate: (code, result, logs = []) => {
    if (!result) return { success: false, message: 'Must return calculations object.' };
    if (result.floorVal !== 84 || result.ceilVal !== 85) return { success: false, message: 'floorVal should be 84 and ceilVal 85.' };
    if (result.absVal !== 273) return { success: false, message: 'absVal should be 273.' };
    if (result.powerVal !== 4294967296) return { success: false, message: 'powerVal should be 2^32 (4294967296).' };
    if (result.sqrtVal !== 42) return { success: false, message: 'sqrtVal should be 42.' };
    if (result.minVal !== 5) return { success: false, message: 'minVal should be 5.' };
    if (result.piFixed !== '3.1416') return { success: false, message: 'piFixed should be "3.1416".' };
    return { success: true, message: '🏆 ALL GATES CLEARED! NEXUS AI neutralized. World saved!' };
  }
};
