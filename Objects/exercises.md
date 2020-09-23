1.

```js
let person = {
  name: "Bob",
  occupation: "web developer",
  hobbies: "painting",
};
person.name;
person["name"];
```

2.

They will all work because the object will coerce all the options into strings anyways.

3.

```js
let myArray = {
  0: "Hello",
  1: "World",
  2: "Array like object!",
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
```

4.

```js
let obj = {
  b: 2,
  a: 1,
  c: 3,
};
const uppercaseKeys = (obj) => {
  const keys = Object.keys(obj).map((key) => key.toUpperCase());
};
```

5.

```js
let myProtoObj = {
  foo: 1,
  bar: 2,
};
const newObj = Object.create(myProtoObj);
```

6.

```js
let myProtoObj = {
  foo: 1,
  bar: 2,
};
const newObj = Object.create(myProtoObj);
newObj["qux"] = 3;
```

No, because for in loops access the keys inherited from the prototype and the forEach doesn't access the prototyped keys.

7.

```js
const objToCopy = {
  foo: 1,
  bar: 2,
};
const copyObj = (obj, keys) => {
  if (!keys) return Object.assign({}, obj);

  const newObj = {};
  keys.forEach((key) => (newObj[key] = obj[key]));
  return newObj;
};
```

8.

hi
hello
