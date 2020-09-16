1. Write a program named `greeter.js` that greets `'Victor'` three times. Your program should use a variable and not hard code the string value `'Victor'` in each greeting. Here's an example run of the program:

```js
// greeter.js
let name = "Victor";
console.log(`Good Morning, ${name}`);
console.log(`Good Afternoon, ${name}`);
console.log(`Good Evening, ${name}`);
```

2. Write a program named `age.js` that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

```js
// age.js
let age = 18;
console.log(`You're ${age} years old`);
console.log(`In 10 years, you will be ${age + 10} years old`);
console.log(`In 20 years, you will be ${age + 20} years old`);
console.log(`In 30 years, you will be ${age + 30} years old`);
console.log(`In 40 years, you will be ${age + 40} years old`);
```

3. What happens when you run the following program? Why do we get that result?

We get an error because that variable was declared in block scope and it isn't accessible outside of the block in which it was declared.

4. What happens when you run the following code? Why?

It runs the first 3 console.logs and then we get an error because we are trying to reassign a constant variable.

5. What does this program log to the console? Why?

This will log 'bar' to the console because we are defining a new foo variable in both global scope as well as block scope and they have their own values. The console.log is in the global scope where the 'bar' was declared.

6. Will this program produce an error when run? Why or why not?

No error, because one declaration is in global scope and one is in block scope. console.log will be 'bar'.
