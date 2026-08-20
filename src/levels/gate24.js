export const gate24 = {
  id: "24",
  sector: "SECTOR 06 \u2014 ITERATION METHODS",
  learningZone: "JS Iterations",
  title: "GATE 24 \u2014 ARRAY ITERATIONS",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nThe iteration toolkit transforms, filters, and reduces data. These are the most used array tools in real apps.",
  hints: [
  ".map() transforms every item and returns a new array of the same length",
  ".filter() returns only items that pass a condition test",
  ".reduce() collapses the array into a single value",
  ".find() returns the first item that matches (not an array)"
],
  codeHint: "____ nums = [12, 45, 7, 88, 33];\nconst doubled = nums.____(n => n * ___);\nconst above20 = nums.______(n => n > ___);\nconst total = nums.______((___, n) => ___ + n, 0);\nconst first = nums.____(n => n > ___);\n____.log(doubled, above20, total, first);",
  initialCode: "// Given: [12, 45, 7, 88, 33]\n// 1. map \u2014 double each number\n// 2. filter \u2014 keep only those above 20\n// 3. reduce \u2014 get the total sum\n// 4. find \u2014 get the first one above 40\n\nconst nums = [12, 45, 7, 88, 33];\n// Your code here\n",
  solution: "const nums = [12, 45, 7, 88, 33];\nconst doubled = nums.map(n => n * 2);\nconst above20 = nums.filter(n => n > 20);\nconst total = nums.reduce((sum, n) => sum + n, 0);\nconst first = nums.find(n => n > 40);\nconsole.log(doubled);\nconsole.log(above20);\nconsole.log(total);\nconsole.log(first);",
  validate: (code, result, logs = []) => {
    const hasMap = code.includes('.map(');
    if (!hasMap) return { success: false, message: 'Must use .map() to transform the array' };
    const hasFilter = code.includes('.filter(');
    if (!hasFilter) return { success: false, message: 'Must use .filter() to keep items above 20' };
    const hasReduce = code.includes('.reduce(');
    if (!hasReduce) return { success: false, message: 'Must use .reduce() to sum the values' };
    const hasFind = code.includes('.find(');
    if (!hasFind) return { success: false, message: 'Must use .find() to get the first match' };
    return { success: true, message: 'GATE 24 CLEARED — Data pipeline fully operational.' };
  }
};
