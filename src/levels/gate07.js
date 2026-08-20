export const gate07 = {
  id: "07",
  sector: "SECTOR 07 \u2014 PERIMETER SCAN",
  learningZone: "JS Loops",
  title: "GATE 07 \u2014 SWEEP PROTOCOL",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nThe perimeter sweep scans every node in the network one by one. Without loops, you would have to write a line of code for every single node \u2014 NEXUS has 10,000 of them. Loops let you write the logic once and repeat it as many times as needed. Automate the sweep.\n\nMISSION OBJECTIVE:\n1. Write a function `scanNodes()` that loops through numbers 1 to 10.\n2. It should skip node 4 using `continue`.\n3. It should stop completely when it reaches node 7 using `break`.\n4. Return the scanned nodes as an array: `[1, 2, 3, 5, 6]`.",
  hints: [
  "for (let i = 1; i <= 10; i++) \u2014 classic counter loop",
  "while (i <= 10) \u2014 runs as long as condition is true, increment manually",
  "for...of iterates array values directly",
  "break exits the loop, continue skips to the next iteration"
],
  codeHint: "function ____() {\n  const ____ = [];\n  ____ (let i = 1; i <= 10; i++) {\n    if (i === 4) ________;\n    if (i === 7) _____;\n    ____.push(i);\n  } // ____\n  return _______;\n} // ____\nreturn ____();",
  initialCode: "function scanNodes() {\n  const results = [];\n  // Write loop with continue (skip 4) and break (stop at 7)\n  \n  return results;\n}\n\nreturn scanNodes();\n",
  solution: "function scanNodes() {\n  const results = [];\n  for (let i = 1; i <= 10; i++) {\n    if (i === 4) continue;\n    if (i === 7) break;\n    results.push(i);\n  }\n  return results;\n}\n\nreturn scanNodes();",
  validate: (code, result, logs = []) => {
    if (!Array.isArray(result)) return { success: false, message: 'Must return an array of scanned node numbers.' };
    const expected = [1, 2, 3, 5, 6];
    if (JSON.stringify(result) !== JSON.stringify(expected)) return { success: false, message: `Expected [1, 2, 3, 5, 6] (skipping 4, breaking at 7) but received ${JSON.stringify(result)}.` };
    return { success: true, message: 'GATE 07 CLEARED: Sweep protocol completed.' };
  }
};
