export const level06 = {
  id: "06",
  sector: "SECTOR 02 — THE VAULT",
  learningZone: "Arrays and Objects",
  title: "LEVEL 06: STOLEN INVENTORY",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nNEXUS raided our equipment vault. We have a partial list of stolen items recovered from the corrupted logs. Store the list and retrieve the third item — that is the one our field agent urgently needs replaced before the next mission.\n\nMISSION OBJECTIVE: Create an array of 5 stolen items. Access and return the third item using its index.",
  hints: [
  "Arrays start at index 0",
  "The third item is at index 2",
  "myArray[2] accesses the third element"
],
  codeHint: `let stolenItems = ["laptop", "_____", "gun", "key", "_____"];\nreturn stolenItems[___];`,
  initialCode: "// Your code here\n",
  validate: (code, result) => {
      if (!code.includes('[')) return { success: false, message: "Error: You must create an array." };
      if (!result || typeof result !== 'string') return { success: false, message: "Error: Return the third item from your array (should be a string)." };
      return { success: true, message: "MISSION ACCOMPLISHED: Target item identified." };
    }
};
