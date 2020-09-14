A runtime environment is an execution environment that lets an application program access system resources and provides the tools the application needs to operate. In other words, the runtime environment turns an application from a set of instructions into something that performs actual work.

JavaScript in the browser has two main purposes: 1) to programmatically alter web pages based on user actions; and, 2) to exchange messages with a server over a network.

Node.js is a runtime environment that turns JavaScript into a general-purpose programming language that can run applications on almost any system.

For now, it's enough to know that methods with .prototype. as part of their full name are instance methods.

A data type's property is a noun; an operation is a verb. A property says something about the value and an operation does something with that value.

The big takeaway from this section—it's worth repeating—is that you apply instance methods to a value of the type that the constructor represents.

```js
// String.prototype.concat
// Instance Method
"hello ".concat("bob");
Hello bob
```

vs

```js
// fromCharCode()
// Static Method
String.fromCharCode(97);
("a");
```

---

## Exercises

1.

```js
mkdir my_folder && cd my_folder
touch one.js && touch two.js
add console.logs
node one.js
node two.js
```

2.

```js
cd ..
rm -rf my_folder
```

3.

```js
mkdir preparations_exercises && cd preparations_exercises && touch foo.js
add code
```

4.

```js
node foo.js // output 'bar'
> let foo = "bar";
undefined
> console.log(foo);
bar
undefined
> foo;
'bar'
// Chrome
bar
'bar'
```

5.

- `substring`: String prototype
- `create`: Object static
- `fromCharCode`: String static
- `slice`: Array / String prototype

6.  index
    lazyDog
    operand2

7.  index
    lazyDog
    CatName
    operand2

8.  BIG_NUMBER

9.  snake_case
    quick_Fox
    1stCharacter
