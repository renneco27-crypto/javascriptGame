export const gate10 = {
  id: "10",
  sector: "SECTOR 10 \u2014 MODULAR LOGIC",
  learningZone: "JS Functions",
  title: "GATE 10 \u2014 FUNCTION FACTORY",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nCIPHER's entire operation runs on reusable functions. Without them, every agent would have to reinvent the wheel on every mission. Functions take input, process it, and return output. They are the backbone of every program ever written. Build the function factory that powers the field team.\n\nMISSION OBJECTIVE:\n1. `greetAgent(name)`: Function returning `\"Welcome back, Agent \" + name`\n2. `calcSignal(power, distance)`: Arrow function returning `power / distance`\n3. `setAlert(level = \"MEDIUM\")`: Function with default parameter returning level\n4. `createMultiplier(factor)`: Closure returning a function `(n) => n * factor`\nReturn `{ greetAgent, calcSignal, setAlert, createMultiplier }`.",
  hints: [
  "Declaration: function name(params) { return value; }",
  "Arrow: const fn = (a, b) => a / b",
  "Default param: function alert(level = \"MEDIUM\") {}",
  "Closure: outer function returns (x) => x * multiplier"
],
  codeHint: "function greetAgent(name) { return `Welcome back, Agent ${____}`; }\nconst calcSignal = (power, distance) => _____ / ________;\nfunction setAlert(level = \"______\") { return level; }\nfunction createMultiplier(factor) { return (n) => n * ______; }\nreturn { greetAgent, calcSignal, setAlert, ____ };",
  initialCode: "// Task 1: greetAgent declaration\n\n// Task 2: calcSignal arrow function\n\n// Task 3: setAlert with default parameter \"MEDIUM\"\n\n// Task 4: createMultiplier closure\n\nreturn { greetAgent, calcSignal, setAlert, createMultiplier };\n",
  validate: (code, result, logs = []) => {
    if (!result) return { success: false, message: 'Must return the function factory object.' };
    if (result.greetAgent('Zero') !== 'Welcome back, Agent Zero') return { success: false, message: 'greetAgent("Zero") failed.' };
    if (result.calcSignal(100, 20) !== 5) return { success: false, message: 'calcSignal(100, 20) should return 5.' };
    if (result.setAlert() !== 'MEDIUM') return { success: false, message: 'setAlert() should default to "MEDIUM".' };
    const times3 = result.createMultiplier(3);
    if (typeof times3 !== 'function' || times3(10) !== 30) return { success: false, message: 'createMultiplier(3)(10) should return 30.' };
    return { success: true, message: 'GATE 10 CLEARED: Function factory online.' };
  }
};
