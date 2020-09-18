1.

```js
false || (true && false); // false
true || 1 + 2; // true
1 + 2 || true; // 3
true && 1 + 2; // 3
false && 1 + 2; // false
1 + 2 && true; // true
32 * 4 >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === "847"); // true
false === (847 == "847"); // false
!true || !(100 / 5) === 20 || 328 / 4 === 82 || false; // true
```

2.

```js
const evenOrOdd = (x) => (x % 2 === 0 ? "even" : "odd");
```

3.

```js
const evenOrOdd = (x) => {
  if (typeof x === "number") return x % 2 === 0 ? "even" : "odd";
  return "Sorry, please implement a number";
};
evenOrOdd(3);
```

4.

```js
// No break statements so its a fall-through
product2
product3
product not found
```

5.

```js
if (foo()) return "bar";
return qux();
```

6.

```js
"Not Empty";
// Because an empty array is not a falsy value so the first if statement will execute.

```

7.

```js
const caps = (str) => {
  if (str.length >= 10) return str.toUpperCase();
  return str;
};
// 1 line
const caps = (str) => (str.length >= 10 ? str.toUpperCase() : str);
```

8.

```js
const numberRange = (x) => {
  if (x >= 0 && x <= 50) return `${x} is between 0 and 50`;
  else if (x >= 51 && x <= 100) return `${x} is between 51 and 100`;
  else if (x > 100) return `${x} is greater than 100`;
  else return `${x} is less than 0`;
};
```
