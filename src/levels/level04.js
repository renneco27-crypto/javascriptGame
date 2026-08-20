export const level04 = {
  id: "04",
  sector: "SECTOR 01 — THE MAINFRAME",
  learningZone: "Variables and Data Types",
  title: "LEVEL 04: DATA SMUGGLER",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nNEXUS is smuggling corrupted data by disguising numbers as strings. Our parser is choking on it. You need to intercept the incoming value \"42\" — which looks like a number but is actually a string — and convert it into a real number before it poisons the calculation pipeline.\n\nMISSION OBJECTIVE: Convert the string \"42\" into a number and the number 99 into a string. Store each in a variable and return them in an array.",
  hints: [
  "Use Number('42') or parseInt('42') to convert to number",
  "Use String(99) or 99 + '' to convert to string",
  "Use typeof to confirm the conversion worked",
  "Return them like: return [numVar, strVar];"
],
  initialCode: "// Your code here\n\n// return [convertedNum, convertedStr];",
  validate: (code, result) => {
      if (!Array.isArray(result) || result.length !== 2) return { success: false, message: "Error: Return the two converted variables in an array." };
      if (result[0] !== 42 || typeof result[0] !== 'number') return { success: false, message: "Error: The first value must be the number 42." };
      if (result[1] !== "99" || typeof result[1] !== 'string') return { success: false, message: "Error: The second value must be the string '99'." };
      return { success: true, message: "MISSION ACCOMPLISHED: Data parsed successfully." };
    }
};
