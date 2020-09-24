1.

```js
[1, 4, 3];
```

2.

That the variable `greeting` is not defined in our anonymous function on line 13 named `hello` and our undefined variable call is on line 4 character 15.

3.

```js
Math.sqrt(37);
```

4.

```js
Math.max(1, 6, 3, 2); // 6
```

5.

```js
const doSomething = (string) => {
  return string
    .split(" ")
    .reverse()
    .map((value) => value.length);
};
```

This will take a string, split it at every space and put it into an array, reverse the array, and return an array containing the length of each of the words.

6.

```js
const allMatches = (words, regex) => words.filter((word) => regex.test(word));
```

7.

Exception handling is when we use a try catch block to catch an exception in our program and the problem / benefit is that it will continue running the program even if it encounters a problem. It will just catch the error and do something with the error but continue running.

8.

```js
const isNotANumber = (value) => value !== value;
```

9.

```js
const isNegativeZero = (value) => (1 / value === -Infinity ? true : false);
```

10.

```js
5;
```

This is because JS will coerce this value into a number, and then it gets turned into 6. The return value of ++ is the original value thus it returns 5.
