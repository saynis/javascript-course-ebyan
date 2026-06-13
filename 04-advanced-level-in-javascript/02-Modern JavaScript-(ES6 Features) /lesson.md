# Lesson 02 — Modern JavaScript (ES6 Features) ✨

> A long lesson, but an easy one. Take it section by section. None of this is hard once you see it.

---

## What is ES6?

In 2015, JavaScript got a big update called **ES6** (also written as ES2015). It added a bunch of new ways to write code that are shorter, cleaner, and easier to read.

You've already met some of these without knowing it. Arrow functions? That's ES6. Template literals with backticks? Also ES6. `let` and `const`? ES6 too.

This lesson collects the most useful ES6 features in one place. These are the features you'll see in every React tutorial, every modern codebase, every job. Learn them now and the rest of your journey gets much smoother.

We'll cover six things:

1. Template literals
2. Destructuring
3. The spread operator
5. Arrow functions (a proper deep dive)
6. Default parameters and optional chaining

Let's go one at a time.

---

## 1. Template Literals

You already use these, but let's make sure you really understand them.

Before ES6, joining text and variables looked like this:

```js
const name = "Sofia";
const age = 28;
const message = "Hi, I'm " + name + " and I'm " + age + " years old.";
```

All those `+` signs and quotes are easy to get wrong. ES6 gave us **template literals**, which use backticks (`` ` ``) and `${}` to drop variables straight into the text:

```js
const name = "Sofia";
const age = 28;
const message = `Hi, I'm ${name} and I'm ${age} years old.`;
```

Much easier to read. Inside `${}` you can put any JavaScript:

```js
const price = 50;
const quantity = 3;
console.log(`Total: $${price * quantity}`); // Total: $150

const hour = 14;
console.log(`Good ${hour < 12 ? "morning" : "afternoon"}!`); // Good afternoon!
```

Template literals also let you write text across multiple lines without tricks:

```js
const email = `Hi Sofia,

Thanks for signing up.

The Team`;
```

That's it for template literals. You'll use them constantly.

---

## 2. Destructuring

Destructuring is a short way to pull values out of arrays and objects. It looks strange the first time, but it saves a lot of typing.

### Destructuring arrays

Say you have an array and you want the first two items in their own variables. The old way:

```js
const colors = ["red", "green", "blue"];
const first = colors[0];
const second = colors[1];
```

The destructuring way:

```js
const colors = ["red", "green", "blue"];
const [first, second] = colors;

console.log(first);  // "red"
console.log(second); // "green"
```

The variable names on the left grab the values from the array in order. You can skip items with an empty comma slot:

```js
const [first, , third] = colors;
console.log(third); // "blue"
```

### Destructuring objects

This is the one you'll use most. Instead of typing `user.name`, `user.age` over and over:

```js
const user = { name: "Sofia", age: 28, city: "Madrid" };

// Old way
const name = user.name;
const age = user.age;

// Destructuring way
const { name, age } = user;
console.log(name); // "Sofia"
console.log(age);  // 28
```

With objects, the names inside `{}` must match the property names. Order doesn't matter, names do.

You can rename a value while you grab it using a colon:

```js
const user = { name: "Sofia", age: 28 };
const { name: userName } = user;
console.log(userName); // "Sofia"
```

And you can set a default in case the property is missing:

```js
const user = { name: "Sofia" };
const { city = "Unknown" } = user;
console.log(city); // "Unknown"
```


---

## 3. The Spread Operator (...)

The spread operator is three dots `...`. It "spreads out" the items of an array or the properties of an object.

### Spreading arrays

Want to copy an array? Spread it into a new one:

```js
const original = [1, 2, 3];
const copy = [...original];

copy.push(4);
console.log(original); // [1, 2, 3]  (unchanged!)
console.log(copy);     // [1, 2, 3, 4]
```

This matters a lot. If you just write `const copy = original`, both names point to the same array, and changing one changes the other. Spread makes a real, separate copy.

Want to combine two arrays? Spread both:

```js
const fruits = ["apple", "banana"];
const veggies = ["carrot", "pea"];
const food = [...fruits, ...veggies];
console.log(food); // ["apple", "banana", "carrot", "pea"]
```

### Spreading objects

Same idea with objects. Copy one, or merge several:

```js
const user = { name: "Sofia", age: 28 };

// Copy and add a property
const updatedUser = { ...user, age: 29 };
console.log(updatedUser); // { name: "Sofia", age: 29 }
console.log(user);        // { name: "Sofia", age: 28 }  (unchanged!)
```

Notice that listing `age` again after the spread overwrites it. This is the standard way to update one field of an object without changing the original. React uses this pattern constantly for updating state.



---

## 5. Arrow Functions (Deep Dive)

You've seen arrow functions already. Now let's really understand them.

A regular function:

```js
function add(a, b) {
  return a + b;
}
```

The same thing as an arrow function:

```js
const add = (a, b) => {
  return a + b;
};
```

### The short forms

Arrow functions have handy shortcuts that make them shorter.

If the function body is just one `return`, drop the braces and the `return` word:

```js
const add = (a, b) => a + b;
```

If there's exactly one parameter, you can drop the parentheses too:

```js
const double = n => n * 2;
const greet = name => `Hello, ${name}!`;
```

If there are no parameters, you need empty parentheses:

```js
const sayHi = () => console.log("Hi!");
```

---

## 6. Default Parameters

Default parameters let you set a fallback value for a function argument, in case the caller doesn't provide one.

Before ES6, you had to check manually:

```js
function greet(name) {
  if (name === undefined) {
    name = "Guest";
  }
  console.log(`Hello, ${name}!`);
}
```

With default parameters, you set the fallback right in the parameter list:

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("Sofia"); // Hello, Sofia!
greet();        // Hello, Guest!
```

You can give defaults to as many parameters as you like:

```js
function createButton(text = "Click me", color = "blue", size = "medium") {
  console.log(`A ${size} ${color} button that says "${text}"`);
}

createButton();                    // A medium blue button that says "Click me"
createButton("Submit", "green");   // A medium green button that says "Submit"
```

---


## Key Takeaways

| Feature | What it does | Example |
|---------|--------------|---------|
| Template literal | Put variables in text | `` `Hi ${name}` `` |
| Array destructuring | Pull items into variables | `const [a, b] = arr` |
| Object destructuring | Pull properties into variables | `const { name } = user` |
| Spread | Unpack an array or object | `[...arr]`, `{ ...obj }` |
| Arrow function | Shorter function syntax | `n => n * 2` |
| Default parameter | Fallback for missing arguments | `function f(x = 10) {}` |

---

## What's Next?

These features will feel automatic after a bit of practice. Do the assignment, write them with your own hands, and they'll stick.

