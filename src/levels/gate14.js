export const gate14 = {
  id: "14",
  sector: "SECTOR 14 \u2014 CHRONOS LOG",
  learningZone: "JS Dates",
  title: "GATE 14 \u2014 MISSION TIMESTAMPS",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nEvery mission is logged with timestamps \u2014 when it started, when it ended, how long it lasted. The timestamp system is down. NEXUS is exploiting the gap in logs to hide its activity. Restore the date system so every operation is timestamped and traceable.\n\nMISSION OBJECTIVE:\n1. `missionStart`: Create a Date object for `January 15, 2047 06:00:00`\n2. `year`: Get the full year from missionStart\n3. `month`: Get the month index (0-based) from missionStart\n4. `day`: Get the day date from missionStart\nReturn `{ missionStart, year, month, day }`.",
  hints: [
  "new Date() \u2014 current date and time",
  "new Date(2047, 0, 15, 6, 0) \u2014 month is 0-indexed (Jan = 0)",
  "getFullYear(), getMonth(), getDate(), getHours(), getMinutes()",
  "toDateString() gives a readable format"
],
  codeHint: "const missionStart = new Date(____, _, 15, 6, 0);\nconst year = missionStart.___________();\nconst month = missionStart.________();\nconst day = missionStart._______();\nreturn { ____, year, month, day };",
  initialCode: "// Task: Create Date for Jan 15, 2047 and extract components\nconst missionStart = new Date(2047, 0, 15, 6, 0);\nlet year;\nlet month;\nlet day;\n\nreturn { missionStart, year, month, day };\n",
  validate: (code, result, logs = []) => {
    if (!result || !result.missionStart) return { success: false, message: 'Must return { missionStart, year, month, day }.' };
    if (result.year !== 2047 || result.month !== 0 || result.day !== 15) return { success: false, message: 'Ensure year=2047, month=0 (January), day=15.' };
    return { success: true, message: 'GATE 14 CLEARED: Mission timestamps verified.' };
  }
};
