1.

This will log 1 to the console because we're defining a bar variable in the global scope and defining another bar variable in the local scope inside of the function.

2.

```js
const rlSync = require("readline-sync");
const first = () => rlSync.question(`What's your first name? `);
const last = () => rlSync.question(`What's your last name? `);
console.log(`Hello, ${first()} ${last()}`);
```

3.

```js
const rlSync = require("readline-sync");
const first = () => rlSync.question(`Enter the first number: `);
const firstNum = first();
const second = () => rlSync.question(`Enter the second number: `);
const secondNum = second();
console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
```

4.

```js
function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}
const one = times(1, 1);
const two = times(2, one);
const three = times(3, two);
const four = times(4, three);
const five = times(5, four);
```

5.

The code won't log anything to the console because we put the return statement before the console.log.

6.

It doesn't actually log anything because there's no console.log statement just a return statement. The return value of the function will be `Yipeee!!!!`.
