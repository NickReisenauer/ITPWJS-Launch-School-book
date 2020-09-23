1.

- array1: 4
- array2: 5
- array3: 0
- array4: 3
- array5: 101

2.

```js
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
const even = myArray.filter((x) => x % 2 === 0);
```

3.

```js
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
myArray.forEach((array) =>
  array.forEach((num) => {
    if (num % 2 === 0) console.log(num);
  })
);
```

4.

```js
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
myArray.map((x) => (x % 2 === 0 ? "Even" : "Odd"));
```

5.

```js
let array = [1, "a", "1", 3, NaN, 3.1415, -4, null, false];
const removeNonInteger = (arr) => arr.filter((el) => Number.isInteger(el));
```

6.

```js
let arr = ["a", "abcd", "abcde", "abc", "ab"];
const oddLengths = (arr) => {
  return arr.map((el) => el.length).filter((el) => el % 2 === 1);
};
```

7.

```js
let numbers = [3, 5, 7];
const sumOfSquares = (arr) => {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue * currentValue,
    0
  );
};
sumOfSquares(numbers);
```

8.

```js
let arr = ["a", "abcd", "abcde", "abc", "ab"];
const oddLengths = (arr) => {
  return arr.reduce((accumulatorArray, current) => {
    if (current.length % 2 === 1) {
      accumulatorArray.push(current.length);
    }
    return accumulatorArray;
  }, []);
};
```

9.

```js
numbers1.includes(3);
numbers2.includes(3);
numbers3.includes(3);
```

10.

```js
let arr = [
  ["test", "hello", "world"],
  ["example", 6, "mem", null],
  [4, 8, 12],
];
const mem = arr[1][2];
console.log(mem);
```
