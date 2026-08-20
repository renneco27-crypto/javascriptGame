export const gate21 = {
  id: "21",
  sector: "SECTOR 05 \u2014 TIME AND MATH",
  learningZone: "JS Timers",
  title: "GATE 21 \u2014 TIMERS",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nField operations run on timing. Detonators, pings, auto-logouts \u2014 all timers.",
  hints: [
  "setTimeout(fn, ms) runs ONCE after a delay in milliseconds",
  "setInterval(fn, ms) runs REPEATEDLY every ms milliseconds",
  "clearInterval(id) stops a running interval",
  "1000 milliseconds = 1 second"
],
  codeHint: "____(() => {\n  console.log(\"___\");\n}, ___);\nlet ____ = 0;\nconst ping = ____(() => {\n  ____++;\n  console.log(\"___\");\n  if (count === ___) clearInterval(ping);\n}, ____);",
  initialCode: "// Task 1: setTimeout that logs \"MISSION START\" after 3 seconds\n// Your code here\n\n// Task 2: setInterval that logs \"STATUS CHECK\" every second, stops after 5 checks\n// Your code here\n",
  solution: "setTimeout(() => {\n  console.log(\"MISSION START\");\n}, 3000);\n\nlet count = 0;\nconst ping = setInterval(() => {\n  count++;\n  console.log(\"STATUS CHECK\");\n  if (count === 5) clearInterval(ping);\n}, 1000);",
  validate: (code, result, logs = []) => {
    const hasTimeout = code.includes('setTimeout(');
    if (!hasTimeout) return { success: false, message: 'Must use setTimeout()' };
    const hasInterval = code.includes('setInterval(');
    if (!hasInterval) return { success: false, message: 'Must use setInterval()' };
    const hasClear = code.includes('clearInterval(');
    if (!hasClear) return { success: false, message: 'Must stop the interval using clearInterval()' };
    return { success: true, message: 'GATE 21 CLEARED — Timer systems online.' };
  }
};
