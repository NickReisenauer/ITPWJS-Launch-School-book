// 1
"Nick " + "Reisenauer";

// 2
let num = 4936;

let ones = num % 10;

num = (num - ones) / 10;
let tens = num % 10;

num = (num - tens) / 10;
let hundreds = num % 10;

num = (num - hundreds) / 10;
let thousands = num % 10;

// 3
("true"); // String
false; // Boolean
1.5; // Number
2; // Number
undefined; // Undefined
{
  foo: "bar";
} // Object

// 4
// Statement
// Expression
// Expression

// 5
// Because JavaScript will turn the 10 into a string and concatenate it to the string 5. This is known as Implicit Type Coercion

// 6
console.log(Number("5") + 10);

// 7
console.log(`The value of 5 + 10 is ${Number("5") + 10}`);

// 8
// Results in undefined, not an error

// 9
const names = ["Asta", "Butterscotch", "Pudding", "Neptune", "Darwin"];

// 10
const pets = {
  asta: "Dog",
  butterscotch: "Cat",
  pudding: "Cat",
  neptune: "Fish",
  darwin: "Lizard",
};

// 11
false; // Because they are not identical the triple equals will find a difference.

// 12
3; // parseInt will stop at the .

// 13
false; // Because going from left to right, 1 < 9
