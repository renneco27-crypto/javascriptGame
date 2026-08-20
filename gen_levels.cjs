const fs = require('fs');
const path = require('path');

const levelsDir = path.join(__dirname, 'src', 'levels');
if (!fs.existsSync(levelsDir)) {
  fs.mkdirSync(levelsDir, { recursive: true });
}

const levels = [
  {
    id: "01",
    sector: "SECTOR 01 — THE MAINFRAME",
    learningZone: "Variables and Data Types",
    title: "LEVEL 01: TEMPERATURE ANOMALY",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nThe mainframe servers are overheating. NEXUS has disabled the cooling systems and corrupted the temperature sensors — they're outputting raw Fahrenheit data, but the cooling calibration system only reads Celsius. Every second counts. Convert the sensor data before the servers melt down.\n\nMISSION OBJECTIVE: Create a variable named celsius that converts 100 degrees Fahrenheit to Celsius.",
    hints: ["Use 'let' or 'const' to declare a variable.", "The formula is (100 - 32) * 5 / 9.", "Return the variable at the end: return celsius;"],
    initialCode: "// Formula: (F - 32) * 5 / 9\n// Your code here\n\n",
    validate: `(code, result) => {
      if (!code.includes('celsius')) return { success: false, message: "Error: You need to declare a variable named 'celsius'." };
      if (result !== (100 - 32) * 5 / 9) return { success: false, message: "Error: The calculation is incorrect, or you forgot to 'return celsius;'." };
      return { success: true, message: "MISSION ACCOMPLISHED: Temperature anomaly resolved." };
    }`
  },
  {
    id: "02",
    sector: "SECTOR 01 — THE MAINFRAME",
    learningZone: "Variables and Data Types",
    title: "LEVEL 02: IDENTITY PROTOCOL",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nGood work on the cooling system. But NEXUS has scrambled the agent identity database. The system no longer knows who is logged in. We need you to reconstruct the agent profile so access credentials can be restored. Store your agent data — name, badge number, and clearance level — so the system can verify your identity.\n\nMISSION OBJECTIVE: Create three variables: agentName (string), badgeNumber (number), and isCleared (boolean set to true).",
    hints: ["Strings go in quotes: \"Agent Zero\"", "Numbers have no quotes: 4821", "Booleans are either true or false", "Return all three variables in an array: return [agentName, badgeNumber, isCleared];"],
    initialCode: "// Your code here\n\n// Return them as an array so the system can verify\n// return [agentName, badgeNumber, isCleared];",
    validate: `(code, result) => {
      if (!code.includes('agentName') || !code.includes('badgeNumber') || !code.includes('isCleared')) return { success: false, message: "Error: Make sure you declared all 3 variables." };
      if (!Array.isArray(result) || result.length !== 3) return { success: false, message: "Error: Return the three variables in an array." };
      if (typeof result[0] !== 'string') return { success: false, message: "Error: agentName should be a string." };
      if (typeof result[1] !== 'number') return { success: false, message: "Error: badgeNumber should be a number." };
      if (result[2] !== true) return { success: false, message: "Error: isCleared should be true." };
      return { success: true, message: "MISSION ACCOMPLISHED: Identity restored." };
    }`
  },
  {
    id: "03",
    sector: "SECTOR 01 — THE MAINFRAME",
    learningZone: "Variables and Data Types",
    title: "LEVEL 03: THE NULL ZONE",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nWe're detecting ghost entries in the system — variables that exist but hold nothing. NEXUS planted these to crash our validation checks. You need to understand the difference between a value that is empty on purpose and one that was never assigned at all. Identify which is which before the validator explodes.\n\nMISSION OBJECTIVE: Create one variable set to null and one declared but never assigned. Then log the typeof each one.",
    hints: ["null means intentionally empty", "An unassigned variable holds undefined", "Use typeof to check: typeof myVar", "Notice that typeof null returns 'object' — this is a famous JS bug, remember it"],
    initialCode: "// Your code here\n\n// Use console.log(typeof ...)",
    validate: `(code, result, logs) => {
      const hasObject = logs.some(l => l.includes('object'));
      const hasUndefined = logs.some(l => l.includes('undefined'));
      if (!hasObject || !hasUndefined) return { success: false, message: "Error: Make sure you log the typeof a null variable and an unassigned variable." };
      return { success: true, message: "MISSION ACCOMPLISHED: Ghost entries identified." };
    }`
  },
  {
    id: "04",
    sector: "SECTOR 01 — THE MAINFRAME",
    learningZone: "Variables and Data Types",
    title: "LEVEL 04: DATA SMUGGLER",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nNEXUS is smuggling corrupted data by disguising numbers as strings. Our parser is choking on it. You need to intercept the incoming value \"42\" — which looks like a number but is actually a string — and convert it into a real number before it poisons the calculation pipeline.\n\nMISSION OBJECTIVE: Convert the string \"42\" into a number and the number 99 into a string. Store each in a variable and return them in an array.",
    hints: ["Use Number('42') or parseInt('42') to convert to number", "Use String(99) or 99 + '' to convert to string", "Use typeof to confirm the conversion worked", "Return them like: return [numVar, strVar];"],
    initialCode: "// Your code here\n\n// return [convertedNum, convertedStr];",
    validate: `(code, result) => {
      if (!Array.isArray(result) || result.length !== 2) return { success: false, message: "Error: Return the two converted variables in an array." };
      if (result[0] !== 42 || typeof result[0] !== 'number') return { success: false, message: "Error: The first value must be the number 42." };
      if (result[1] !== "99" || typeof result[1] !== 'string') return { success: false, message: "Error: The second value must be the string '99'." };
      return { success: true, message: "MISSION ACCOMPLISHED: Data parsed successfully." };
    }`
  },
  {
    id: "05",
    sector: "SECTOR 01 — THE MAINFRAME",
    learningZone: "Variables and Data Types",
    title: "LEVEL 05: THE BROKEN CALCULATOR",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nThe field calculator used by agents in the field has been corrupted. Agents are receiving NaN back when they try to run calculations. You need to figure out where NaN comes from, how to detect it, and protect the calculator from producing it silently.\n\nMISSION OBJECTIVE: Perform a calculation that produces NaN. Then use isNaN() to detect it and return the string 'CORRUPTED' if it is NaN.",
    hints: ["NaN appears when math goes wrong: 'hello' * 5", "isNaN(value) returns true if the value is NaN", "Use an if statement to return 'CORRUPTED'"],
    initialCode: "// Your code here\n",
    validate: `(code, result) => {
      if (result !== 'CORRUPTED') return { success: false, message: "Error: You need to return 'CORRUPTED' when NaN is detected." };
      if (!code.includes('isNaN')) return { success: false, message: "Error: You must use the isNaN() function." };
      return { success: true, message: "MISSION ACCOMPLISHED: Calculator protected." };
    }`
  },
  {
    id: "06",
    sector: "SECTOR 02 — THE VAULT",
    learningZone: "Arrays and Objects",
    title: "LEVEL 06: STOLEN INVENTORY",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nNEXUS raided our equipment vault. We have a partial list of stolen items recovered from the corrupted logs. Store the list and retrieve the third item — that is the one our field agent urgently needs replaced before the next mission.\n\nMISSION OBJECTIVE: Create an array of 5 stolen items. Access and return the third item using its index.",
    hints: ["Arrays start at index 0", "The third item is at index 2", "myArray[2] accesses the third element"],
    initialCode: "// Your code here\n",
    validate: `(code, result) => {
      if (!code.includes('[')) return { success: false, message: "Error: You must create an array." };
      if (!result || typeof result !== 'string') return { success: false, message: "Error: Return the third item from your array (should be a string)." };
      return { success: true, message: "MISSION ACCOMPLISHED: Target item identified." };
    }`
  },
  {
    id: "07",
    sector: "SECTOR 02 — THE VAULT",
    learningZone: "Arrays and Objects",
    title: "LEVEL 07: REINFORCEMENTS",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nTwo new agents just cleared background checks and need to be added to the active roster immediately. The roster is an array. Add them to the end without rewriting the whole list. Then confirm the current size of the roster.\n\nMISSION OBJECTIVE: Start with an array of 3 agent names. Add 2 more using push(). Return the final array and its length in an array.",
    hints: ["push() adds to the end of an array", "myArray.length returns the number of items", "Return both like: return [myArray, myArray.length];"],
    initialCode: "// Your code here\n",
    validate: `(code, result) => {
      if (!code.includes('.push(')) return { success: false, message: "Error: You must use the push() method." };
      if (!Array.isArray(result) || result.length !== 2 || !Array.isArray(result[0]) || result[0].length !== 5 || result[1] !== 5) {
        return { success: false, message: "Error: Return [array, length]. The array should have 5 items." };
      }
      return { success: true, message: "MISSION ACCOMPLISHED: Roster updated." };
    }`
  },
  {
    id: "08",
    sector: "SECTOR 02 — THE VAULT",
    learningZone: "Arrays and Objects",
    title: "LEVEL 08: AGENT DOSSIER",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nEvery agent has a dossier — structured data about who they are and what they can do. NEXUS deleted the dossier format from the system. Rebuild a proper agent dossier object with multiple fields so the system can restore agent records.\n\nMISSION OBJECTIVE: Create an object called agent with at least 5 properties: name, age, rank, isActive, and skills (an array of 3 skills). Return the rank and the second skill.",
    hints: ["Objects use {} with key-value pairs", "Access properties with dot notation: agent.rank", "Arrays inside objects work the same: agent.skills[1]", "Return them like: return [agent.rank, agent.skills[1]];"],
    initialCode: "// Your code here\n",
    validate: `(code, result) => {
      if (!code.includes('{') || !code.includes('skills')) return { success: false, message: "Error: Create the agent object." };
      if (!Array.isArray(result) || result.length !== 2) return { success: false, message: "Error: Return an array with [rank, secondSkill]." };
      return { success: true, message: "MISSION ACCOMPLISHED: Dossier format restored." };
    }`
  },
  {
    id: "09",
    sector: "SECTOR 02 — THE VAULT",
    learningZone: "Arrays and Objects",
    title: "LEVEL 09: PROFILE UPDATE",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nAgent ZERO just got promoted. Her rank in the system still shows 'Recruit' but she is now 'Commander'. Update the record without recreating the entire object. Also add a new field — missionsCompleted — that was not in the original profile.\n\nMISSION OBJECTIVE: Update the rank property of an existing agent object and add a new property missionsCompleted with a value of 47. Return the updated object.",
    hints: ["Update: agent.rank = 'Commander'", "Add new property: agent.missionsCompleted = 47", "Objects are mutable — you can change them directly"],
    initialCode: "const agent = {\\n  name: 'Agent Zero',\\n  rank: 'Recruit',\\n  isActive: true\\n};\\n\\n// Your code here\\n\\nreturn agent;",
    validate: `(code, result) => {
      if (!result || result.rank !== 'Commander' || result.missionsCompleted !== 47) return { success: false, message: "Error: The agent object was not updated correctly." };
      return { success: true, message: "MISSION ACCOMPLISHED: Profile updated." };
    }`
  },
  {
    id: "10",
    sector: "SECTOR 02 — THE VAULT",
    learningZone: "Arrays and Objects",
    title: "LEVEL 10: NESTED INTELLIGENCE",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nThe intelligence report came in but the data is deeply nested — a file inside a folder inside a cabinet. NEXUS is counting on you not being able to reach it. Dig into the nested structure and extract the target's name from three levels deep.\n\nMISSION OBJECTIVE: Create a nested object that represents a cabinet containing a folder containing a file containing a targetName. Access and return the targetName.",
    hints: ["Nest objects inside objects: { folder: { file: { targetName: '...' } } }", "Chain dot notation: cabinet.folder.file.targetName", "You can also use bracket notation"],
    initialCode: "// Your code here\n",
    validate: `(code, result) => {
      if (!code.includes('targetName')) return { success: false, message: "Error: Create the nested object with targetName." };
      if (typeof result !== 'string' || result === '') return { success: false, message: "Error: You must return the targetName string." };
      return { success: true, message: "MISSION ACCOMPLISHED: Target acquired." };
    }`
  },
  {
    id: "11",
    sector: "SECTOR 03 — THE CONTROL ROOM",
    learningZone: "Control Flow and Loops",
    title: "LEVEL 11: CLEARANCE CHECK",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nThe control room door runs a clearance check before granting access. NEXUS bypassed it by feeding in fake clearance levels. Rebuild the check. Clearance level 1 gets 'RESTRICTED', level 2 gets 'CONFIDENTIAL', level 3 gets 'TOP SECRET'. Anything else gets 'DENIED'.\n\nMISSION OBJECTIVE: Write a function clearanceCheck(level) that returns the correct access label using a switch statement. Call it with level 2 and return the result.",
    hints: ["Use switch(level) with case 1:, case 2:, case 3:", "Add a default: for anything else", "Don't forget break after each case", "Test it: return clearanceCheck(2);"],
    initialCode: "function clearanceCheck(level) {\n  // Your switch statement here\n}\n\nreturn clearanceCheck(2);",
    validate: `(code, result) => {
      if (!code.includes('switch')) return { success: false, message: "Error: You must use a switch statement." };
      if (result !== 'CONFIDENTIAL') return { success: false, message: "Error: clearanceCheck(2) should return 'CONFIDENTIAL'." };
      return { success: true, message: "MISSION ACCOMPLISHED: Door secured." };
    }`
  },
  {
    id: "12",
    sector: "SECTOR 03 — THE CONTROL ROOM",
    learningZone: "Control Flow and Loops",
    title: "LEVEL 12: SCANNING THE PERIMETER",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nPerimeter sensors are numbered 1 through 10. NEXUS disabled the odd-numbered ones. You need to scan all sensors and log which ones are online (even) and which are offline (odd) so the repair team knows where to go.\n\nMISSION OBJECTIVE: Loop through numbers 1 to 10. For each number, log 'Sensor X: ONLINE' if even, 'Sensor X: OFFLINE' if odd.",
    hints: ["Use a for loop: for (let i = 1; i <= 10; i++)", "Check even/odd with the modulo operator: i % 2 === 0", "Use console.log()"],
    initialCode: "// Your code here\n",
    validate: `(code, result, logs) => {
      if (!code.includes('for') || !code.includes('%')) return { success: false, message: "Error: Use a for loop and the modulo operator %." };
      if (logs.length < 10) return { success: false, message: "Error: You must log all 10 sensors." };
      const hasOnline = logs.some(l => l.includes('ONLINE'));
      const hasOffline = logs.some(l => l.includes('OFFLINE'));
      if (!hasOnline || !hasOffline) return { success: false, message: "Error: Logs must say ONLINE or OFFLINE." };
      return { success: true, message: "MISSION ACCOMPLISHED: Sensors scanned." };
    }`
  },
  {
    id: "13",
    sector: "SECTOR 03 — THE CONTROL ROOM",
    learningZone: "Control Flow and Loops",
    title: "LEVEL 13: AGENT ROSTER SCAN",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nWe have a list of agents but need to display each one with their position number for the briefing screen. Loop through the roster and print each agent with their number, starting from 1.\n\nMISSION OBJECTIVE: Given an array of agent names, loop through it and log each one as '1. Agent Zero', '2. Agent Fox', etc.",
    hints: ["Use a for loop with index i starting at 0", "Display position as i + 1 to start from 1", "Use a template literal: \`\${i + 1}. \${roster[i]}\`"],
    initialCode: "const roster = ['Agent Zero', 'Agent Fox', 'Agent Rook', 'Agent Vex', 'Agent Lynx'];\n\n// Your code here\n",
    validate: `(code, result, logs) => {
      if (logs.length < 5) return { success: false, message: "Error: You must log all 5 agents." };
      if (!logs[0].includes('1. Agent Zero')) return { success: false, message: "Error: Format must be exactly '1. Agent Zero' etc." };
      return { success: true, message: "MISSION ACCOMPLISHED: Roster displayed." };
    }`
  },
  {
    id: "14",
    sector: "SECTOR 03 — THE CONTROL ROOM",
    learningZone: "Control Flow and Loops",
    title: "LEVEL 14: INFINITE THREAT DETECTED",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nNEXUS launched a brute force loop — it keeps hammering the firewall until it breaks through. You need to simulate a while loop that runs until a threat counter reaches zero, decrementing it each cycle and logging the countdown.\n\nMISSION OBJECTIVE: Write a while loop that starts at threatLevel = 10, logs the level each iteration, and stops when it reaches 0. Log 'THREAT NEUTRALIZED' when done.",
    hints: ["Declare let threatLevel = 10 before the loop", "Condition: while (threatLevel > 0)", "Decrement inside the loop: threatLevel--"],
    initialCode: "// Your code here\n",
    validate: `(code, result, logs) => {
      if (!code.includes('while')) return { success: false, message: "Error: You must use a while loop." };
      if (logs.length < 11 || !logs.some(l => l.includes('NEUTRALIZED'))) return { success: false, message: "Error: Must log countdown and THREAT NEUTRALIZED." };
      return { success: true, message: "MISSION ACCOMPLISHED: Threat mitigated." };
    }`
  },
  {
    id: "15",
    sector: "SECTOR 03 — THE CONTROL ROOM",
    learningZone: "Control Flow and Loops",
    title: "LEVEL 15: EMERGENCY ABORT",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nThe self-destruct sequence is cycling through a list of systems to shut down. But if it hits the 'LIFE_SUPPORT' system, it must stop immediately — we cannot shut that one down. Use a loop with a break to protect life support.\n\nMISSION OBJECTIVE: Loop through an array of system names. Log each one as 'Shutting down: X'. If the system is 'LIFE_SUPPORT', log 'ABORT: Cannot shut down LIFE_SUPPORT' and break the loop.",
    hints: ["Use a for loop or for...of", "Check with if (system === 'LIFE_SUPPORT')", "Use break to stop the loop immediately"],
    initialCode: "const systems = ['RADAR', 'COMMS', 'WEAPONS', 'LIFE_SUPPORT', 'NAVIGATION', 'POWER'];\n\n// Your code here\n",
    validate: `(code, result, logs) => {
      if (!code.includes('break')) return { success: false, message: "Error: You must use the break keyword." };
      if (logs.some(l => l.includes('NAVIGATION') || l.includes('POWER'))) return { success: false, message: "Error: The loop did not break in time. Navigation/Power shut down!" };
      return { success: true, message: "MISSION ACCOMPLISHED: Life support saved." };
    }`
  },
  {
    id: "16",
    sector: "SECTOR 04 — THE LAB",
    learningZone: "Functions and Scope",
    title: "LEVEL 16: ENCRYPTION MACHINE",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nEvery message sent by CIPHER agents is encrypted. The encryption machine is down. Build a function that takes a message and a shift number and returns a simple encoded version by adding the shift to the message length — a placeholder cipher until the real one is restored.\n\nMISSION OBJECTIVE: Write a function encrypt(message, shift) that returns the message length plus the shift. Call it and return the result.",
    hints: ["Declare with function encrypt(message, shift) {}", "Use message.length + shift as the encoded value", "Return the result"],
    initialCode: "// Your code here\n\n// return encrypt('hello', 3);",
    validate: `(code, result) => {
      if (!code.includes('function encrypt')) return { success: false, message: "Error: Define the function encrypt." };
      if (typeof result !== 'number') return { success: false, message: "Error: Call the function and return the result." };
      return { success: true, message: "MISSION ACCOMPLISHED: Cipher online." };
    }`
  },
  {
    id: "17",
    sector: "SECTOR 04 — THE LAB",
    learningZone: "Functions and Scope",
    title: "LEVEL 17: REUSABLE DETONATOR",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nThe field team needs a reusable countdown function. They call it before every controlled demolition. It should accept a starting number and count down to zero, returning an array of the countdown sequence so it can be displayed on the timer screen.\n\nMISSION OBJECTIVE: Write a function countdown(start) that returns an array counting down from start to 0. Call it and return the result.",
    hints: ["Create an empty array inside the function", "Use a for loop counting down: for (let i = start; i >= 0; i--)", "Push each value into the array and return it"],
    initialCode: "// Your code here\n\n// return countdown(5);",
    validate: `(code, result) => {
      if (!Array.isArray(result) || result[result.length - 1] !== 0) return { success: false, message: "Error: Function must return the countdown array." };
      return { success: true, message: "MISSION ACCOMPLISHED: Detonator prepped." };
    }`
  },
  {
    id: "18",
    sector: "SECTOR 04 — THE LAB",
    learningZone: "Functions and Scope",
    title: "LEVEL 18: GHOST VARIABLE",
    description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nA variable declared inside a mission function is leaking data into the global scope — or so NEXUS wants you to think. Prove that variables declared with let inside a function cannot be accessed outside it. Understanding this scope boundary is critical to preventing data leaks.\n\nMISSION OBJECTIVE: Declare a variable inside a function. Try to access it outside and handle the error using try / catch. Return 'CAUGHT' if the error is caught.",
    hints: ["Variables declared with let inside {} are block-scoped", "Accessing them outside throws a ReferenceError", "Use try / catch to handle the error gracefully", "return 'CAUGHT' in the catch block"],
    initialCode: "function testScope() {\n  let secretData = 'classified';\n}\n\n// Your try/catch code here\n",
    validate: `(code, result) => {
      if (!code.includes('try') || !code.includes('catch')) return { success: false, message: "Error: Use a try/catch block." };
      if (result !== 'CAUGHT') return { success: false, message: "Error: Return 'CAUGHT' from the catch block." };
      return { success: true, message: "MISSION ACCOMPLISHED: Scope leak proven false." };
    }`
  }
];

let indexContent = '';

levels.forEach(l => {
  const fileContent = `export const level${l.id} = {
  id: "${l.id}",
  sector: "${l.sector}",
  learningZone: "${l.learningZone}",
  title: "${l.title}",
  description: ${JSON.stringify(l.description)},
  hints: ${JSON.stringify(l.hints, null, 2)},
  initialCode: ${JSON.stringify(l.initialCode)},
  validate: ${l.validate}
};
`;
  fs.writeFileSync(path.join(levelsDir, `level${l.id}.js`), fileContent);
  indexContent += `import { level${l.id} } from './level${l.id}.js';\n`;
});

indexContent += `\nexport const allLevels = [\n`;
levels.forEach(l => {
  indexContent += `  level${l.id},\n`;
});
indexContent += `];\n`;

fs.writeFileSync(path.join(levelsDir, 'index.js'), indexContent);
console.log('Levels generated successfully!');
