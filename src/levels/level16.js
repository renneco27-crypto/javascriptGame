export const level16 = {
  id: "16",
  sector: "SECTOR 04 — THE LAB",
  learningZone: "Functions and Scope",
  title: "LEVEL 16: ENCRYPTION MACHINE",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nEvery message sent by CIPHER agents is encrypted. The encryption machine is down. Build a function that takes a message and a shift number and returns a simple encoded version by adding the shift to the message length — a placeholder cipher until the real one is restored.\n\nMISSION OBJECTIVE: Write a function encrypt(message, shift) that returns the message length plus the shift. Call it and return the result.",
  hints: [
  "Declare with function encrypt(message, shift) {}",
  "Use message.length + shift as the encoded value",
  "Return the result"
],
  codeHint: `function _______(message, shift) {\n  return message.______ + _____;\n}\nreturn _______("hello", _);`,
  initialCode: "// Your code here\n\n// return encrypt('hello', 3);",
  validate: (code, result) => {
      if (!code.includes('function encrypt')) return { success: false, message: "Error: Define the function encrypt." };
      if (typeof result !== 'number') return { success: false, message: "Error: Call the function and return the result." };
      return { success: true, message: "MISSION ACCOMPLISHED: Cipher online." };
    }
};
