export const gate12 = {
  id: "12",
  sector: "SECTOR 12 \u2014 ARCHIVE DATABASE",
  learningZone: "JS Objects",
  title: "GATE 12 \u2014 OBJECT RECONSTRUCTION",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nNEXUS shredded the agent object database. Every agent profile \u2014 their name, rank, skills, status \u2014 exists as raw scattered data. You need to reconstruct the object structure from scratch, access the data correctly, loop through its properties, and add methods that make the object do work.\n\nMISSION OBJECTIVE:\nCreate an `agent` object with:\n- `name`: \"Zero\"\n- `rank`: \"Commander\"\n- `clearance`: 5\n- `skills`: [\"Infiltration\", \"Crypto\"]\n- `isActive`: true\n- Add `missionsCompleted`: 42\n- Add method `report()` returning `\"Agent \" + this.name + \" reporting. Status: ACTIVE\"`\nReturn `agent`.",
  hints: [
  "object.property \u2014 dot notation",
  "object[\"property\"] \u2014 bracket notation (useful with variables)",
  "Add after: agent.newProp = value",
  "Method: a function stored as a property, use this.name inside",
  "for (let key in object) loops through all enumerable properties"
],
  codeHint: "____ agent = {\n  name: \"____\",\n  rank: \"____\",\n  ____: _,\n  skills: [\"____\", \"Crypto\"],\n  ____: true,\n  ____() {\n    return `Agent ${this.____} reporting. Status: ACTIVE`;\n  } // ____\n}; // ____\nagent.____ = __;\n____ agent;",
  initialCode: "const agent = {\n  // Properties here\n};\n\n// Add missionsCompleted and report method\n\nreturn agent;\n",
  validate: (code, result, logs = []) => {
    if (!result || typeof result !== 'object') return { success: false, message: 'Must return agent object.' };
    if (result.name !== 'Zero' || result.clearance !== 5) return { success: false, message: 'Agent properties (name, clearance) mismatch.' };
    if (result.missionsCompleted !== 42) return { success: false, message: 'missionsCompleted property missing or incorrect.' };
    if (typeof result.report !== 'function' || !result.report().includes('Zero')) return { success: false, message: 'agent.report() method missing or invalid.' };
    return { success: true, message: 'GATE 12 CLEARED: Agent database record reconstructed.' };
  }
};
