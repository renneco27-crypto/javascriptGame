export const gate16 = {
  id: "16",
  sector: "SECTOR 03 \u2014 DATA STRUCTURES",
  learningZone: "JS Objects",
  title: "GATE 16 \u2014 OBJECT SYNTAX",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nObjects store structured data as key-value pairs. Every agent profile is an object.",
  hints: [
  "Dot notation: agent.name \u2014 Bracket notation: agent[\"name\"]",
  "Nested access: profile.agent.base.city",
  "Object methods are functions stored as property values",
  "for...in loops through all keys of an object"
],
  codeHint: "let ____ = {\n  name: \"___\",\n  rank: \"___\",\n  base: { city: \"___\", floor: ___ },\n  ____() {\n    return `${this.___} at ${this.base.___}`;\n  } // ____\n}; // ____\n____.log(agent.base.city);\nfor (let key ___ agent) { console.log(key); }",
  initialCode: "// Create an agent object with 5 properties including nested base object (city + floor)\n// Add a report() method\n// Access the city using chained dot notation\n// Loop through all keys and log them\n\n// Your code here\n",
  solution: "let agent = {\n  name: \"Zero\",\n  rank: \"Commander\",\n  age: 34,\n  isActive: true,\n  base: { city: \"London\", floor: 7 },\n  report() {\n    return `${this.name} stationed at ${this.base.city}`;\n  }\n};\nconsole.log(agent.base.city);\nconsole.log(agent.report());\nfor (let key in agent) {\n  console.log(key);\n}",
  validate: (code, result, logs = []) => {
    const hasNested = code.includes('base') && (code.includes('city') || code.includes('floor'));
    if (!hasNested) return { success: false, message: 'Must include a nested object for base with city and floor' };
    const hasMethod = code.includes('report') && code.includes('this.');
    if (!hasMethod) return { success: false, message: 'Must add a report() method that uses this' };
    const hasChained = code.match(/\.\w+\.\w+/);
    if (!hasChained) return { success: false, message: 'Must access nested property using chained dot notation' };
    const hasForIn = code.includes('for') && code.includes('in ');
    if (!hasForIn) return { success: false, message: 'Must use for...in to loop through object keys' };
    return { success: true, message: 'GATE 16 CLEARED — Agent profile fully loaded.' };
  }
};
