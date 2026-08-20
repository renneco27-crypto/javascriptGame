export const level18 = {
  id: "18",
  sector: "SECTOR 04 — THE LAB",
  learningZone: "Functions and Scope",
  title: "LEVEL 18: GHOST VARIABLE",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nA variable declared inside a mission function is leaking data into the global scope — or so NEXUS wants you to think. Prove that variables declared with let inside a function cannot be accessed outside it. Understanding this scope boundary is critical to preventing data leaks.\n\nMISSION OBJECTIVE: Declare a variable inside a function. Try to access it outside and handle the error using try / catch. Return 'CAUGHT' if the error is caught.",
  hints: [
  "Variables declared with let inside {} are block-scoped",
  "Accessing them outside throws a ReferenceError",
  "Use try / catch to handle the error gracefully",
  "return 'CAUGHT' in the catch block"
],
  codeHint: `function testScope() {\n  let secretData = '__________';\n}\n___ {\n  console.log(__________);\n} _____ (error) {\n  return "______";\n}`,
  initialCode: "function testScope() {\n  let secretData = 'classified';\n}\n\n// Your try/catch code here\n",
  validate: (code, result) => {
      if (!code.includes('try') || !code.includes('catch')) return { success: false, message: "Error: Use a try/catch block." };
      if (result !== 'CAUGHT') return { success: false, message: "Error: Return 'CAUGHT' from the catch block." };
      return { success: true, message: "MISSION ACCOMPLISHED: Scope leak proven false." };
    }
};
