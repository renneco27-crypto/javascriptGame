export const level17 = {
  id: "17",
  sector: "SECTOR 04 — THE LAB",
  learningZone: "Functions and Scope",
  title: "LEVEL 17: REUSABLE DETONATOR",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nThe field team needs a reusable countdown function. They call it before every controlled demolition. It should accept a starting number and count down to zero, returning an array of the countdown sequence so it can be displayed on the timer screen.\n\nMISSION OBJECTIVE: Write a function countdown(start) that returns an array counting down from start to 0. Call it and return the result.",
  hints: [
  "Create an empty array inside the function",
  "Use a for loop counting down: for (let i = start; i >= 0; i--)",
  "Push each value into the array and return it"
],
  initialCode: "// Your code here\n\n// return countdown(5);",
  validate: (code, result) => {
      if (!Array.isArray(result) || result[result.length - 1] !== 0) return { success: false, message: "Error: Function must return the countdown array." };
      return { success: true, message: "MISSION ACCOMPLISHED: Detonator prepped." };
    }
};
