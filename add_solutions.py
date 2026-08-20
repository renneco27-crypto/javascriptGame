import json

solutions = {
    "01": """console.log("CIPHER ONLINE");
document.getElementById("status").innerHTML = "SYSTEMS ACTIVE";""",

    "02": """const externalScriptTag = '<script src="cipher.js"></script>';
const inlineScriptTag = '<body><h1>CIPHER</h1><script>console.log("READY");</script></body>';""",

    "03": """console.log("TRANSMITTING");
document.getElementById("output").innerHTML = "TRANSMITTING";
window.alert("TRANSMITTING");
document.write("TRANSMITTING");""",

    "04": """let x = 10;
let y = 20;
let result = x + y;
console.log(result);
return result;""",

    "05": """const a = 20;
const b = 6;
const threatLevel = 73;

let remainder = a % b;
let score = 100;
score += 50;
score *= 2;
let isHighThreat = threatLevel > 50;

return { remainder, score, isHighThreat };""",

    "06": """function evaluate(score) {
  if (score >= 90) return "CRITICAL THREAT";
  else if (score >= 70) return "HIGH THREAT";
  else if (score >= 50) return "MODERATE THREAT";
  else return "LOW THREAT";
}

function missionBriefing(code) {
  switch (code) {
    case "ALPHA": return "OPERATION OVERLORD";
    case "BETA": return "OPERATION NIGHTFALL";
    case "OMEGA": return "OPERATION OMEGA PROTOCOL";
    default: return "UNKNOWN MISSION";
  }
}

return { evaluate, missionBriefing };""",

    "07": """function scanNodes() {
  const results = [];
  for (let i = 1; i <= 10; i++) {
    if (i === 4) continue;
    if (i === 7) break;
    results.push(i);
  }
  return results;
}

return scanNodes();""",

    "08": """const transmission = "  NEXUS WILL STRIKE AT MIDNIGHT ON FRIDAY  ";

const clean = transmission.trim();
const target = clean.replace("NEXUS", "TARGET");
const hasFriday = clean.includes("FRIDAY");
const words = clean.split(" ");

return { clean, target, hasFriday, words };""",

    "09": """const rounded = (47.6892).toFixed(2);
const numSum = Number("99.5") + 0.5;
const maxThreat = Math.max(44, 91, 13, 78, 55);
const isNexusNaN = isNaN(Number("NEXUS"));

return { rounded, numSum, maxThreat, isNexusNaN };""",

    "10": """function greetAgent(name) {
  return `Welcome back, Agent ${name}`;
}

const calcSignal = (power, distance) => power / distance;

function setAlert(level = "MEDIUM") {
  return level;
}

function createMultiplier(factor) {
  return (n) => n * factor;
}

return { greetAgent, calcSignal, setAlert, createMultiplier };""",

    "11": """function runCountdown(callback) {
  const timer = setTimeout(() => {
    callback("DETONATION DISARMED");
    clearTimeout(timer);
  }, 10);
}

return runCountdown;""",

    "12": """const agent = {
  name: "Zero",
  rank: "Commander",
  clearance: 5,
  skills: ["Infiltration", "Crypto"],
  isActive: true,
  report() {
    return `Agent ${this.name} reporting. Status: ACTIVE`;
  }
};

agent.missionsCompleted = 42;

return agent;""",

    "13": """const globalVar = "CLASSIFIED";

let blockScopedWorks = false;
if (true) {
  let blockVar = "SECURE";
  blockScopedWorks = (typeof blockVar !== "undefined");
}

return { globalVar, blockScopedWorks };""",

    "14": """const missionStart = new Date(2047, 0, 15, 6, 0);
const year = missionStart.getFullYear();
const month = missionStart.getMonth();
const day = missionStart.getDate();

return { missionStart, year, month, day };""",

    "15": """let agents = ["Zero", "Fox", "Rook", "Lynx", "Ghost"];

agents.push("Viper");
agents.unshift("Echo");
const rookIndex = agents.indexOf("Rook");
agents.sort();
const hasGhost = agents.includes("Ghost");

return { agents, rookIndex, hasGhost };""",

    "16": """const rawSignals = [101, 202, 101, 303, 202, 404, 101, 505];

const signalSet = new Set(rawSignals);
signalSet.add(606);
signalSet.delete(202);
const has303 = signalSet.has(303);
const cleanedArray = [...signalSet];

return { size: signalSet.size, has303, cleanedArray };""",

    "17": """const intelMap = new Map();

intelMap.set("Zero", 88);
intelMap.set("Fox", 45);
intelMap.set("Rook", 91);
intelMap.set(1007, "SUPER AGENT");

const zeroScore = intelMap.get("Zero");

return { zeroScore, hasBadge1007: intelMap.has(1007), mapSize: intelMap.size };""",

    "18": """const threatData = [
  { agent: "Zero", score: 88 },
  { agent: "Fox", score: 45 },
  { agent: "Rook", score: 91 },
  { agent: "Lynx", score: 62 },
  { agent: "Ghost", score: 77 }
];

const names = threatData.map(a => a.agent);
const highThreats = threatData.filter(a => a.score > 70);
const totalScore = threatData.reduce((sum, a) => sum + a.score, 0);
const topAgent = threatData.find(a => a.score > 85);

return { names, highThreats, totalScore, topAgent };""",

    "19": """const floorVal = Math.floor(84.4);
const ceilVal = Math.ceil(84.5);
const absVal = Math.abs(-273);
const powerVal = Math.pow(2, 32);
const sqrtVal = Math.sqrt(1764);
const minVal = Math.min(33, 11, 78, 5, 92, 44);
const piFixed = (Math.PI).toFixed(4);

return { floorVal, ceilVal, absVal, powerVal, sqrtVal, minVal, piFixed };"""
}

with open('levels_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for lvl in data.get('levels', []):
    lvl_id = lvl.get('id')
    if lvl_id in solutions:
        lvl['solution'] = solutions[lvl_id]

with open('levels_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print("Updated levels_data.json with all solutions!")
