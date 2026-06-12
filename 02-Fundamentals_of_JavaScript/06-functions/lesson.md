# Lesson 07 — Functions

## What is a Function?

A **function** is a reusable block of code that you give a name to. Instead of writing the same logic over and over, you write it once inside a function — and then *call* that function whenever you need it.

Think of a function like a **recipe**. You write down the recipe once. Every time you want to make that dish, you follow the recipe — you don't rewrite it from scratch each time.

Or think of a **coffee machine**. You press a button (call the function), and it does a whole series of steps automatically. You don't think about grinding beans, boiling water, and filtering — you just press the button.

---

## Your First Function

```js
// DEFINE the function (write the recipe)
function sayHello() {
  console.log("Hello, World!");
}

// CALL the function (use the recipe)
sayHello(); // Hello, World!
sayHello(); // Hello, World! (again)
sayHello(); // Hello, World! (as many times as you want!)
```

**Defining** a function doesn't run it. You have to **call** it.

---

## Functions with Parameters

Parameters let you pass information **into** a function so it can work with different data:

```js
function greet(name) {
  console.log(`Hello, ${name}! Welcome aboard.`);
}

greet("Amara");  // Hello, Amara! Welcome aboard.
greet("Carlos"); // Hello, Carlos! Welcome aboard.
greet("Yuki");   // Hello, Yuki! Welcome aboard.
```

Here `name` is a **parameter** — a placeholder variable that takes a different value each time you call the function.

The values you pass when calling are called **arguments**:

```js
//           parameter
function greet(name) { ... }

//         argument
greet("Amara");
```

### Multiple Parameters

```js
function introduce(firstName, lastName, age) {
  console.log(`Hi! I'm ${firstName} ${lastName}, ${age} years old.`);
}

introduce("Priya", "Sharma", 24);
// Hi! I'm Priya Sharma, 24 years old.
```



## Functions that Return Values

So far our functions *do* things (print to console). But often, you want a function to *calculate* something and **give the result back**:

```js
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // 8
```

The `return` keyword:
1. Sends a value back to wherever the function was called
2. **Immediately stops the function** — nothing after `return` runs


### Early Return (Guard Clause)

You can use `return` early to stop a function when conditions aren't right:

```js
function divide(a, b) {
  if (b === 0) {
    console.log("Error: Can't divide by zero!");
    return; // Stop here — don't run the rest
  }
  return a / b;
}

console.log(divide(10, 2));  // 5
console.log(divide(10, 0));  // Error: Can't divide by zero!
```

This pattern (check for problems first, return early) is called a **guard clause** and leads to much cleaner code than deep nesting.

---

## The Three Ways to Write Functions

### 1. Function Declaration (classic)

```js
function multiply(a, b) {
  return a * b;
}

// Can be called BEFORE it's defined (hoisting)
console.log(multiply(4, 5)); // 20
```

### 2. Function Expression (assigned to a variable)

```js
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20
```

### 3. Arrow Function (modern, concise)

Arrow functions are the modern way, especially for short functions:

```js
const multiply = (a, b) => {
  return a * b;
};

// Even shorter — if just one expression, skip the braces and return
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // 20
```

Arrow function shorthand rules:
- **One line:** remove `{}` and `return`
- **One parameter:** remove the parentheses around it

```js
const double = n => n * 2;          // One param, one line
const square = n => n * n;
const greet = name => `Hello, ${name}!`;

console.log(double(7));      // 14
console.log(square(4));      // 16
console.log(greet("Laila")); // Hello, Laila!
```

---

## Scope — Where Can Variables Be Seen?

Variables created inside a function are **local** to that function — they don't exist outside it:

```js
function makeMessage() {
  let message = "I'm inside the function!"; // local variable
  console.log(message); // ✅ Works here
}

makeMessage();
console.log(message); // ❌ ReferenceError: message is not defined
```

Variables created outside all functions are **global** — visible everywhere:

```js
let appName = "MyApp"; // global

function showApp() {
  console.log(appName); // ✅ Can access global variable
}

showApp(); // MyApp
```

> 💡 **Best Practice:** Avoid globals when possible. Functions that rely only on their parameters and local variables are more predictable and easier to debug.

---


## Why Functions Matter

Functions are the backbone of programming. They enable:

- **DRY code** — Don't Repeat Yourself. Write logic once, use it anywhere.
- **Readability** — `calculateTax(price)` is much clearer than 5 lines of math
- **Testing** — Test one function at a time instead of the whole program
- **Teamwork** — Different people can work on different functions
- **Debugging** — When something breaks, you know exactly which function to look at

---

## Key Takeaways

| Concept | Meaning |
|---------|---------|
| Function | Named, reusable block of code |
| Parameter | Placeholder variable in the function definition |
| Argument | Actual value passed when calling the function |
| `return` | Sends a value back and stops the function |
| Arrow function | Shorter syntax: `(params) => expression` |
| Scope | Where a variable can be accessed |

---

## What's Next?

Next lesson we dive into **arrays** — how to store and work with *lists* of data. You'll combine arrays with loops and functions to build truly powerful programs.