export const gate06 = {
  id: "06",
  sector: "SECTOR 06 \u2014 CLEARANCE CHECK",
  learningZone: "JS If Conditions",
  title: "GATE 06 \u2014 DECISION MATRIX",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nEvery agent decision in the field runs through a decision matrix \u2014 a branching logic tree that evaluates conditions and picks a path. NEXUS has no decision logic \u2014 it brute forces everything. You are smarter. Build the clearance check system that routes agents to the correct access level based on their threat score.\n\nMISSION OBJECTIVE:\n1. Write a function `evaluate(score)` that returns:\n   - \"CRITICAL THREAT\" if score is 90 or above\n   - \"HIGH THREAT\" if score is 70 or above\n   - \"MODERATE THREAT\" if score is 50 or above\n   - \"LOW THREAT\" for anything below 50\n2. Write a function `missionBriefing(code)` using a switch statement that returns:\n   - \"OPERATION OVERLORD\" for \"ALPHA\"\n   - \"OPERATION NIGHTFALL\" for \"BETA\"\n   - \"OPERATION OMEGA PROTOCOL\" for \"OMEGA\"\n   - \"UNKNOWN MISSION\" for default.",
  hints: [
  "Chain conditions with else if",
  "Order matters \u2014 check the highest value first",
  "switch uses case \"ALPHA\": with break after each block",
  "Use default: as the fallback in switch"
],
  codeHint: "____ evaluate(score) {\n  if (score >= 90) return \"________________\";\n  else if (score >= 70) return \"___________\";\n  else if (score >= 50) return \"_______________\";\n  else return \"__________\";\n} // ____\nfunction ____(code) {\n  ____ (code) {\n    case \"ALPHA\": return \"__________________\";\n    case \"BETA\": return \"___________________\";\n    case \"OMEGA\": return \"________________________\";\n    default: return \"_______________\";\n  } // ____\n} // ____",
  initialCode: "function evaluate(score) {\n  // Your code here\n}\n\nfunction missionBriefing(code) {\n  // Your code here\n}\n\nreturn { evaluate, missionBriefing };\n",
  validate: (code, result, logs = []) => {
    if (!result || typeof result.evaluate !== 'function' || typeof result.missionBriefing !== 'function') return { success: false, message: 'Must return { evaluate, missionBriefing } functions.' };
    if (result.evaluate(95) !== 'CRITICAL THREAT') return { success: false, message: 'evaluate(95) should return "CRITICAL THREAT"' };
    if (result.evaluate(75) !== 'HIGH THREAT') return { success: false, message: 'evaluate(75) should return "HIGH THREAT"' };
    if (result.evaluate(55) !== 'MODERATE THREAT') return { success: false, message: 'evaluate(55) should return "MODERATE THREAT"' };
    if (result.evaluate(30) !== 'LOW THREAT') return { success: false, message: 'evaluate(30) should return "LOW THREAT"' };
    if (!result.missionBriefing('ALPHA').includes('OVERLORD')) return { success: false, message: 'missionBriefing("ALPHA") failed.' };
    if (!result.missionBriefing('UNKNOWN').includes('UNKNOWN')) return { success: false, message: 'missionBriefing default case failed.' };
    return { success: true, message: 'GATE 06 CLEARED: Decision matrix activated.' };
  }
};
