export const gate22 = {
  id: "22",
  sector: "SECTOR 05 \u2014 TIME AND MATH",
  learningZone: "JS Dates",
  title: "GATE 22 \u2014 DATES",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nEvery mission needs a timestamp. Restore the date system.",
  hints: [
  "new Date() creates the current date and time",
  ".getFullYear() returns the year, .getMonth() returns 0\u201311 (January = 0)",
  ".getDate() returns the day of the month (1\u201331)",
  "Date difference in days: (end - start) / (1000 * 60 * 60 * 24)"
],
  codeHint: "let ____ = new Date();\nconsole.log(today.___________);\nconsole.log(today.________());\nconsole.log(today.______());\nlet mission = new Date(2047, ___, ___, ___, ___);\nlet ____ = new Date(2047, 0, 1);\nlet diff = (____ - start) / (1000 * 60 * 60 * 24);\n____.log(diff);",
  initialCode: "// Task 1: Create today's date, extract and log year, month, day\n// Your code here\n\n// Task 2: Create a mission date: March 10, 2047 at 08:00\n// Your code here\n\n// Task 3: Calculate days between Jan 1, 2047 and March 10, 2047\n// Your code here\n",
  solution: "let today = new Date();\nconsole.log(today.getFullYear());\nconsole.log(today.getMonth());\nconsole.log(today.getDate());\n\nlet mission = new Date(2047, 2, 10, 8, 0);\nconsole.log(mission.toDateString());\n\nlet start = new Date(2047, 0, 1);\nlet diffMs = mission - start;\nlet diffDays = diffMs / (1000 * 60 * 60 * 24);\nconsole.log(diffDays);",
  validate: (code, result, logs = []) => {
    const hasNewDate = code.includes('new Date()');
    if (!hasNewDate) return { success: false, message: 'Must create today\'s date using new Date()' };
    const hasGetYear = code.includes('.getFullYear()');
    if (!hasGetYear) return { success: false, message: 'Must extract the year using .getFullYear()' };
    const hasMission = code.includes('new Date(2047');
    if (!hasMission) return { success: false, message: 'Must create a specific mission date for 2047' };
    const hasDiff = code.includes('1000 * 60 * 60 * 24') || code.includes('86400000');
    if (!hasDiff) return { success: false, message: 'Must calculate the difference in days' };
    return { success: true, message: 'GATE 22 CLEARED — Mission timestamp confirmed.' };
  }
};
