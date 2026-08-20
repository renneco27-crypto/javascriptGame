export const gate16 = {
  id: "16",
  sector: "SECTOR 16 \u2014 SIGNAL FILTER",
  learningZone: "JS Sets",
  title: "GATE 16 \u2014 UNIQUE SIGNATURES",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nNEXUS is flooding the system with duplicate signals \u2014 the same data repeated thousands of times to overwhelm the processors. A Set is a collection that only stores unique values. It automatically rejects duplicates. Use it to clean the signal stream and eliminate the noise.\n\nMISSION OBJECTIVE:\n1. Create a Set from `[101, 202, 101, 303, 202, 404, 101, 505]`\n2. Add `606` to the Set\n3. Delete `202` from the Set\n4. Check if `303` exists using `.has()`\n5. Convert the cleaned Set back to an array named `cleanedArray`\nReturn `{ size: signalSet.size, has303, cleanedArray }`.",
  hints: [
  "new Set(array) \u2014 creates a Set and removes duplicates instantly",
  "set.add(value) \u2014 adds a value (ignored if already exists)",
  "set.has(value) \u2014 returns true or false",
  "set.delete(value) \u2014 removes a specific value",
  "[...set] or Array.from(set) \u2014 converts back to array"
],
  codeHint: "const ____ = [101, 202, 101, 303, 202, 404, 101, 505];\nconst signalSet = new ___(rawSignals);\nsignalSet.add(___);\nsignalSet.______(202);\nconst has303 = signalSet.____(303);\nconst cleanedArray = [_______];\nreturn { size: signalSet.size, has303, ____ };",
  initialCode: "const rawSignals = [101, 202, 101, 303, 202, 404, 101, 505];\n\n// Task: Create Set, add 606, delete 202, check 303, convert to array\n\n",
  solution: "const rawSignals = [101, 202, 101, 303, 202, 404, 101, 505];\n\nconst signalSet = new Set(rawSignals);\nsignalSet.add(606);\nsignalSet.delete(202);\nconst has303 = signalSet.has(303);\nconst cleanedArray = [...signalSet];\n\nreturn { size: signalSet.size, has303, cleanedArray };",
  validate: (code, result, logs = []) => {
    if (!result || !Array.isArray(result.cleanedArray)) return { success: false, message: 'Must return { size, has303, cleanedArray }.' };
    if (result.has303 !== true) return { success: false, message: 'has303 must be true.' };
    if (result.cleanedArray.includes(202)) return { success: false, message: '202 should have been deleted.' };
    if (!result.cleanedArray.includes(606)) return { success: false, message: '606 should have been added.' };
    return { success: true, message: 'GATE 16 CLEARED: Duplicate signals purged.' };
  }
};
