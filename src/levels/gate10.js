export const gate10 = {
  id: "10",
  sector: "SECTOR 02 \u2014 LOGIC ENGINE",
  learningZone: "JS Type Conversion",
  title: "GATE 10 \u2014 TYPE CONVERSION",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nNEXUS smuggles corrupted data disguised as the wrong type. Convert everything correctly.",
  hints: [
  "Number(\"99\") converts the string \"99\" to the number 99",
  "String(42) converts the number 42 to the string \"42\"",
  "Boolean(0) returns false \u2014 0 is a falsy value",
  "Use typeof after conversion to confirm the new type"
],
  codeHint: "let asNumber = _______(\"99\");\nlet asString = _______(42);\nlet asBool = _______(0);\nconsole.log(____, typeof asNumber);\nconsole.log(____, typeof asString);\n____.log(asBool, typeof asBool);",
  initialCode: "// Task: Convert \"99\" to a number, 42 to a string, and 0 to a boolean\n// Use typeof to confirm each conversion worked\n\n// Your code here\n",
  solution: "let asNumber = Number(\"99\");\nlet asString = String(42);\nlet asBool = Boolean(0);\nconsole.log(asNumber, typeof asNumber);\nconsole.log(asString, typeof asString);\nconsole.log(asBool, typeof asBool);",
  validate: (code, result, logs = []) => {
    const hasNumber = code.includes('Number(') || code.includes('parseInt(') || code.includes('parseFloat(');
    if (!hasNumber) return { success: false, message: 'Must convert a string to a number using Number(), parseInt(), or parseFloat()' };
    const hasString = code.includes('String(') || code.includes('.toString()');
    if (!hasString) return { success: false, message: 'Must convert a number to a string using String() or .toString()' };
    const hasBoolean = code.includes('Boolean(');
    if (!hasBoolean) return { success: false, message: 'Must convert a value to boolean using Boolean()' };
    const hasTypeOf = code.includes('typeof');
    if (!hasTypeOf) return { success: false, message: 'Must confirm types using typeof' };
    return { success: true, message: 'GATE 10 CLEARED — All data types verified.' };
  }
};
