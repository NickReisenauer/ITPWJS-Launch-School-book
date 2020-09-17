1.

```js
const rlSync = require("readline-sync");
const name = rlSync.question(`What's your name? `);
console.log(`Hello, ${name}!`);
```

2.

```js
const rlSync = require("readline-sync");
const firstName = rlSync.question(`What's your first name? `);
const lastName = rlSync.question(`What's your last name? `);
console.log(`Hello, ${firstName} ${lastName}!`);
```

3.

```js
const rlSync = require("readline-sync");
const age = Number(rlSync.question("How old are you? "));
console.log(`You're ${age} years old`);
console.log(`In 10 years, you will be ${age + 10} years old`);
console.log(`In 20 years, you will be ${age + 20} years old`);
console.log(`In 30 years, you will be ${age + 30} years old`);
console.log(`In 40 years, you will be ${age + 40} years old`);
```
