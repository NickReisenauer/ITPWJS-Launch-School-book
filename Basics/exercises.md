1.

```js
"John " + "Doe";
```

2.

```js
let num = 4936;

let ones = num % 10;

num = (num - ones) / 10;
let tens = num % 10;

num = (num - tens) / 10;
let hundreds = num % 10;

num = (num - hundreds) / 10;
let thousands = num % 10;
```

3.

string
boolean
number
number
undefined
object

4.

statement
expression
expression

5.

Because of implicit type coercion. JavaScript will convert the 10 to a string and the two strings together make `510`.

6.

```js
Number("5") + 10;
```

7.

```js
`The value of 5 + 10 is ${Number("5") + 10}.`;
```

8.

undefined

9.

```js
let names = ["asta", "butterscotch", "pudding", "neptune", "darwin"];
```

10.

```js
let pets = {
  asta: "dog",
  butterscotch: "cat",
  pudding: "cat",
  neptune: "fish",
  darwin: "lizard",
};
```

11.

False, because they are not truly equal. JavaScript can determine the difference in capital or not.

12.

3 because parseInt stops when it gets to anything other than a number, even a .

13.

true, because it goes from left to right so '1' < '9'
