export const gate11 = {
  id: "11",
  sector: "SECTOR 11 \u2014 TIME DISTORTION",
  learningZone: "JS Timers",
  title: "GATE 11 \u2014 TIMED OPERATIONS",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nField operations run on precise timing. The detonator countdown, the repeated status ping to HQ, the auto-logout after inactivity \u2014 all of it runs on JavaScript timers. NEXUS disrupted the timing system and now everything fires at the wrong moment. Restore the timers.\n\nMISSION OBJECTIVE:\nWrite a function `runCountdown(callback)` that simulates an emergency timer: it should call `setTimeout` or `setInterval` and invoke `callback(\"DETONATION DISARMED\")`.",
  hints: [
  "setTimeout(fn, ms) runs once after delay",
  "setInterval(fn, ms) runs repeatedly",
  "Store the interval: const timer = setInterval(...)",
  "Stop it: clearInterval(timer)"
],
  codeHint: "function ____(callback) {\n  const timer = ____(() => {\n    callback(\"DETONATION __________\");\n    clearTimeout(_____);\n  }, ____);\n} // ____\nreturn ____;",
  initialCode: "function runCountdown(callback) {\n  // Trigger callback after delay\n}\n\nreturn runCountdown;\n",
  validate: (code, result, logs = []) => {
    if (typeof result !== 'function') return { success: false, message: 'Must return runCountdown function.' };
    if (!code.includes('setTimeout') && !code.includes('setInterval')) return { success: false, message: 'Must use setTimeout or setInterval in your timer implementation.' };
    return { success: true, message: 'GATE 11 CLEARED: Precision timers synchronized.' };
  }
};
