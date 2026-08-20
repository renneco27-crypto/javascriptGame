export const gate29 = {
  id: "29",
  sector: "SECTOR 07 \u2014 ASYNC AND FINAL BREACH",
  learningZone: "JS Classes",
  title: "GATE 29 \u2014 CLASSES",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nClasses are blueprints. Build one and stamp out as many agents as needed.",
  hints: [
  "constructor(params) sets up the object when you call new ClassName()",
  "this.property refers to the instance's own data",
  "extends lets a subclass inherit from a parent class",
  "super(args) calls the parent constructor from inside a subclass"
],
  codeHint: "____ Agent {\n  ____(name, rank) {\n    this.___ = name;\n    this.___ = rank;\n    this.____ = 0;\n  } // ____\n  introduce() { return `I am ${this.___}...`; }\n  completeMission() { this.missions___; }\n} // ____\nclass Hacker _______ Agent {\n  ____(name, rank, specialty) {\n    _____(name, rank);\n    this.____ = specialty;\n  } // ____\n  ____(target) { return `${this.name} hacking ${target}`; }\n} // ____",
  initialCode: "// Task 1: Write an Agent class with name, rank, missions (0)\n//   - introduce() method\n//   - completeMission() method (increments missions)\n// Create two instances\n// Your code here\n\n// Task 2: Write a Hacker subclass with exploit(target) method\n// Your code here\n",
  solution: "class Agent {\n  constructor(name, rank) {\n    this.name = name;\n    this.rank = rank;\n    this.missions = 0;\n  }\n\n  introduce() {\n    return `I am ${this.name}, rank ${this.rank}.`;\n  }\n\n  completeMission() {\n    this.missions++;\n  }\n}\n\nconst zero = new Agent(\"Zero\", \"Commander\");\nconst fox = new Agent(\"Fox\", \"Lieutenant\");\nconsole.log(zero.introduce());\nzero.completeMission();\nconsole.log(zero.missions);\n\nclass Hacker extends Agent {\n  constructor(name, rank, specialty) {\n    super(name, rank);\n    this.specialty = specialty;\n  }\n\n  exploit(target) {\n    return `${this.name} is hacking ${target}`;\n  }\n}\n\nconst ghost = new Hacker(\"Ghost\", \"Elite\", \"cryptography\");\nconsole.log(ghost.introduce());\nconsole.log(ghost.exploit(\"NEXUS\"));",
  validate: (code, result, logs = []) => {
    const hasClass = code.includes('class Agent');
    if (!hasClass) return { success: false, message: 'Must define an Agent class' };
    const hasConstructor = code.includes('constructor(');
    if (!hasConstructor) return { success: false, message: 'Must include a constructor' };
    const hasIntroduce = code.includes('introduce()');
    if (!hasIntroduce) return { success: false, message: 'Must add an introduce() method' };
    const hasExtends = code.includes('extends Agent');
    if (!hasExtends) return { success: false, message: 'Must write a Hacker subclass using extends Agent' };
    const hasSuper = code.includes('super(');
    if (!hasSuper) return { success: false, message: 'Must call super() in the Hacker constructor' };
    const hasExploit = code.includes('exploit(');
    if (!hasExploit) return { success: false, message: 'Must add an exploit() method to the Hacker class' };
    return { success: true, message: 'GATE 29 CLEARED — Agent blueprints activated.' };
  }
};
