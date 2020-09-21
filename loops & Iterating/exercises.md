1.

```js
const rlSync = require("readline-sync");
const age = Number(rlSync.question("How old are you? "));
console.log(`You're ${age} years old`);
for (let i = 10; i >= 40; i += 10) {
  console.log(`In ${i} years, you will be ${age + i} years old.`);
}
```

2.

```js
const factorial = (num) => {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};
```

3.

Because we are assigning the counter to be 1 on line 3 no matter what the original value of counter is. This means that the while loop while keep running indefinitely because it's always going to be truthy.

4.

This code doesn't produce any errors because the 3 parameters of the for loop are optional and we are iterating over our conditional number so that this won't create an infinite loop.

5.

```js
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log(
  "It took " + String(tries) + " tries to get a number greater than 2"
);
```

6.

```js
const factorial = (num) => {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};
console.log(factorial(8));
```
