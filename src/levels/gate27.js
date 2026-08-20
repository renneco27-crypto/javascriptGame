export const gate27 = {
  id: "27",
  sector: "SECTOR 07 \u2014 ASYNC AND FINAL BREACH",
  learningZone: "JS Spread and Rest",
  title: "GATE 27 \u2014 SPREAD AND REST",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nSpread expands. Rest collects. Same syntax ... \u2014 opposite purposes.",
  hints: [
  "Spread copies: const copy = [...original] \u2014 new array, not a reference",
  "Spread merges: const merged = [...a, ...b]",
  "Spread into function: Math.min(...nums)",
  "Rest in function params: function total(...nums) collects all args into an array"
],
  codeHint: "const ____ = [1, 2, 3];\nconst copy = [___original];\n____ a = [\"Zero\", \"Fox\"];\n____ b = [\"Rook\", \"Lynx\"];\nconst merged = [___a, ___b];\n____ nums = [3, 1, 4, 1, 5];\nMath.min(___nums);\nconst agent = { name: \"Zero\", rank: \"____\" };\nconst updated = { ___agent, rank: \"Director\" };\nfunction sumAll(first, second, ___others) {\n  ____ others.reduce((a, b) => a + b, first + second);\n} // ____",
  initialCode: "// Task 1: Copy an array without reference\n// Your code here\n\n// Task 2: Merge two agent name arrays\n// Your code here\n\n// Task 3: Spread an array into Math.min()\n// Your code here\n\n// Task 4: Copy an object and override one property\n// Your code here\n\n// Task 5: Write a function using rest parameters that sums any number of arguments\n// Your code here\n",
  solution: "const original = [1, 2, 3];\nconst copy = [...original];\nconsole.log(copy);\n\nconst a = [\"Zero\", \"Fox\"];\nconst b = [\"Rook\", \"Lynx\"];\nconst merged = [...a, ...b];\nconsole.log(merged);\n\nconst nums = [3, 1, 4, 1, 5];\nconsole.log(Math.min(...nums));\n\nconst agent = { name: \"Zero\", rank: \"Commander\" };\nconst updated = { ...agent, rank: \"Director\" };\nconsole.log(updated);\n\nfunction sumAll(...args) {\n  return args.reduce((a, b) => a + b, 0);\n}\nconsole.log(sumAll(1, 2, 3, 4, 5));",
  validate: (code, result, logs = []) => {
    const hasSpreadArray = code.match(/\[\.\.\.\w+\]/);
    if (!hasSpreadArray) return { success: false, message: 'Must spread an array into a new array [...array]' };
    const hasMerge = (code.match(/\.\.\.\w+/g) || []).length >= 2;
    if (!hasMerge) return { success: false, message: 'Must merge two arrays using spread [...a, ...b]' };
    const hasSpreadFn = code.match(/Math\.\w+\(\.\.\./);
    if (!hasSpreadFn) return { success: false, message: 'Must spread an array into a function like Math.min(...nums)' };
    const hasObjectSpread = code.match(/\{\.\.\.\w+/);
    if (!hasObjectSpread) return { success: false, message: 'Must spread an object using {...obj}' };
    const hasRest = code.match(/function \w+\(\.\.\./) || code.match(/=> \w+\.reduce/) || code.includes('...args');
    if (!hasRest) return { success: false, message: 'Must use rest parameters in a function (...args)' };
    return { success: true, message: 'GATE 27 CLEARED — Spread and rest mastered.' };
  }
};
