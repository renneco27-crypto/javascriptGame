export const level03 = {
  id: "03",
  sector: "SECTOR 01 — THE MAINFRAME",
  learningZone: "Variables and Data Types",
  title: "LEVEL 03: THE NULL ZONE",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nWe're detecting ghost entries in the system — variables that exist but hold nothing. NEXUS planted these to crash our validation checks. You need to understand the difference between a value that is empty on purpose and one that was never assigned at all. Identify which is which before the validator explodes.\n\nMISSION OBJECTIVE: Create one variable set to null and one declared but never assigned. Then log the typeof each one.",
  hints: [
  "null means intentionally empty",
  "An unassigned variable holds undefined",
  "Use typeof to check: typeof myVar",
  "Notice that typeof null returns 'object' — this is a famous JS bug, remember it"
],
  initialCode: "// Your code here\n\n// Use console.log(typeof ...)",
  validate: (code, result, logs) => {
      const hasObject = logs.some(l => l.includes('object'));
      const hasUndefined = logs.some(l => l.includes('undefined'));
      if (!hasObject || !hasUndefined) return { success: false, message: "Error: Make sure you log the typeof a null variable and an unassigned variable." };
      return { success: true, message: "MISSION ACCOMPLISHED: Ghost entries identified." };
    }
};
