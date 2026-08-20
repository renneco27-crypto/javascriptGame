export const gate25 = {
  id: "25",
  sector: "SECTOR 07 \u2014 ASYNC AND FINAL BREACH",
  learningZone: "JS Async / Promises / Fetch",
  title: "GATE 25 \u2014 ASYNC SYNTAX",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nReal apps wait for data. Async syntax lets your code wait without freezing. This is the final sector before the kill switch.",
  hints: [
  "new Promise((resolve, reject) => { resolve(value) }) creates a Promise",
  ".then(value => ...) handles a resolved Promise",
  "async function with await pauses until a Promise resolves",
  "try/catch inside async functions handles errors from awaited Promises"
],
  codeHint: "function ____() {\n  return new _______((_______) => {\n    setTimeout(() => _______(\"SIGNAL ACQUIRED\"), 1000);\n  }); // ____\n} // ____\ngetSignal().______(value => console.log(value));\nasync function ____() {\n  ____ {\n    const signal = _____ getSignal();\n    ____.log(signal);\n  } catch (err) { ____.log(err); }\n} // ____",
  initialCode: "// Task 1: A function returning a Promise that resolves with \"SIGNAL ACQUIRED\" after 1 second\n// Handle it with .then()\n// Your code here\n\n// Task 2: Rewrite it as an async/await function with try/catch\n// Your code here\n",
  solution: "function getSignal() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(\"SIGNAL ACQUIRED\"), 1000);\n  });\n}\n\ngetSignal().then(value => console.log(value));\n\nasync function runMission() {\n  try {\n    const signal = await getSignal();\n    console.log(signal);\n  } catch (err) {\n    console.log(\"Error:\", err);\n  }\n}\n\nrunMission();",
  validate: (code, result, logs = []) => {
    const hasPromise = code.includes('new Promise(');
    if (!hasPromise) return { success: false, message: 'Must create a Promise using new Promise()' };
    const hasThen = code.includes('.then(');
    if (!hasThen) return { success: false, message: 'Must handle the Promise with .then()' };
    const hasAsync = code.includes('async function') || code.includes('async (');
    if (!hasAsync) return { success: false, message: 'Must write an async function' };
    const hasAwait = code.includes('await ');
    if (!hasAwait) return { success: false, message: 'Must use await inside the async function' };
    const hasTryCatch = code.includes('try {') && code.includes('catch (');
    if (!hasTryCatch) return { success: false, message: 'Must include try/catch inside the async function' };
    return { success: true, message: 'GATE 25 CLEARED — Signal acquired. Async comms restored.' };
  }
};
