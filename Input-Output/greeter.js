const rlSync = require("readline-sync");
const firstName = rlSync.question(`What's your first name? `);
const lastName = rlSync.question(`What's your last name? `);
console.log(`Hello, ${firstName} ${lastName}!`);
