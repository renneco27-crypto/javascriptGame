export const level13 = {
  id: "13",
  sector: "SECTOR 03 — THE CONTROL ROOM",
  learningZone: "Control Flow and Loops",
  title: "LEVEL 13: AGENT ROSTER SCAN",
  description: "[INCOMING TRANSMISSION — CIPHER HQ]\n\nWe have a list of agents but need to display each one with their position number for the briefing screen. Loop through the roster and print each agent with their number, starting from 1.\n\nMISSION OBJECTIVE: Given an array of agent names, loop through it and log each one as '1. Agent Zero', '2. Agent Fox', etc.",
  hints: [
  "Use a for loop with index i starting at 0",
  "Display position as i + 1 to start from 1",
  "Use a template literal: `${i + 1}. ${roster[i]}`"
],
  initialCode: "const roster = ['Agent Zero', 'Agent Fox', 'Agent Rook', 'Agent Vex', 'Agent Lynx'];\n\n// Your code here\n",
  validate: (code, result, logs) => {
      if (logs.length < 5) return { success: false, message: "Error: You must log all 5 agents." };
      if (!logs[0].includes('1. Agent Zero')) return { success: false, message: "Error: Format must be exactly '1. Agent Zero' etc." };
      return { success: true, message: "MISSION ACCOMPLISHED: Roster displayed." };
    }
};
