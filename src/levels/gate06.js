export const gate06 = {
  id: "06",
  sector: "SECTOR 01 \u2014 CIPHER GATEWAY",
  learningZone: "JS Data Types",
  title: "GATE 06 \u2014 DATA TYPES",
  description: "[INCOMING TRANSMISSION \u2014 CIPHER HQ]\n\nJavaScript has 8 data types. Know each one and how to write it.",
  hints: [
  "typeof checks the type of a value: typeof \"hello\" returns \"string\"",
  "null returns \"object\" from typeof \u2014 this is a famous JavaScript bug",
  "BigInt is written with an n suffix: 9007199254740991n",
  "undefined means declared but not assigned a value"
],
  codeHint: "let str = ___;\nlet num = ___;\nlet bool = ___;\nlet ____;\nlet nothing = ___;\nlet obj = { ___ };\n____.log(typeof str);",
  initialCode: "// Declare one variable of each type and use typeof to log each\n// string\n// Your code here\n\n// number\n// Your code here\n\n// boolean\n// Your code here\n\n// undefined\n// Your code here\n\n// null\n// Your code here\n\n// object\n// Your code here\n",
  solution: "let str = \"Agent Zero\";\nlet num = 100;\nlet bool = true;\nlet undef;\nlet nothing = null;\nlet obj = { name: \"Zero\" };\nconsole.log(typeof str);\nconsole.log(typeof num);\nconsole.log(typeof bool);\nconsole.log(typeof undef);\nconsole.log(typeof nothing);\nconsole.log(typeof obj);",
  validate: (code, result, logs = []) => {
    const hasString = code.includes('typeof');
    if (!hasString) return { success: false, message: 'Must use typeof to check at least one type' };
    const hasNull = code.includes('null');
    if (!hasNull) return { success: false, message: 'Must declare a null variable' };
    const hasUndef = code.match(/let \w+;/) || code.includes('undefined');
    if (!hasUndef) return { success: false, message: 'Must demonstrate undefined (declare without assigning)' };
    return { success: true, message: 'GATE 06 CLEARED — All data types identified.' };
  }
};
