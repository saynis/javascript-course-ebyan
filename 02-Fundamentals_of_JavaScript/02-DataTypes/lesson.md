# Lesson 03 — Data Types

## Why Do Data Types Matter?

When you put something in a box, the type of box matters. You wouldn't ship a pizza in an envelope or mail a letter in a pizza box. JavaScript works the same way — different kinds of data behave differently, and knowing *what kind of data* you're working with helps you avoid bugs and write better code.

JavaScript has **7 primitive data types**. We'll focus on the 5 most important ones for beginners.

---

## 1. String — Text

A **string** is any text wrapped in quotes. You can use single quotes, double quotes, or backticks.

```js
let name = "Amina";
let city = 'Nairobi';
let greeting = `Hello, World!`;
```


Backticks are special — they let you **embed variables directly inside a string** using `${}`. This is called a **template literal** and it's incredibly useful:

```js
let name = "Kwame";
let age = 28;

// Old way (messy):
console.log("My name is " + name + " and I am " + age + " years old.");

// New way (clean):
console.log(`My name is ${name} and I am ${age} years old.`);
```

Both print the same thing, but backticks are much easier to read and write. Always prefer them when mixing variables and text.

### Useful String Operations:

```js
let message = "Hello, World!";

console.log(message.length);        // 13 — how many characters
console.log(message.toUpperCase()); // HELLO, WORLD!
console.log(message.toLowerCase()); // hello, world!
console.log(message.includes("World")); // true
```

---

## 2. Number — Numeric Values

JavaScript has just **one type** for all numbers — integers AND decimals:

```js
let age = 25;          // whole number (integer)
let price = 9.99;      // decimal (float)
let temperature = -5;  // negative number
let big = 1_000_000;   // underscores for readability (JS ignores them)
```


## 3. Boolean — True or False

A **boolean** is the simplest type — it's either `true` or `false`. Nothing else.

```js
let isOnline = true;
let hasDiscount = false;

```

Booleans are everywhere in programming — they power every decision in your code. We'll use them heavily when we get to conditions (Lesson 05).

---

## 4. Undefined — No Value Yet

When you create a variable but don't assign a value, it automatically gets `undefined`:

```js
let userInput;
console.log(userInput); // undefined
```

Think of `undefined` as an empty box — the box exists, but nothing's inside yet.

---

## 5. Null — Intentionally Empty

`null` is similar to `undefined`, but with a key difference: you **deliberately set** something to `null` to say "this is intentionally empty."

```js
let selectedItem = null; // No item selected yet — intentional
```

Think of `null` as a box with a "EMPTY" label on it — you put that label there on purpose.

### `undefined` vs `null` — The Difference:

| | `undefined` | `null` |
|---|---|---|
| Set by | JavaScript (automatically) | You (deliberately) |
| Meaning | "This has no value yet" | "I'm intentionally leaving this empty" |

---

## Checking the Type of a Value

Use `typeof` to find out what type a value is:

```js
console.log(typeof "Hello");     // string
console.log(typeof 42);          // number
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object  ← famous JS quirk! (it's actually null)
```

> 🐛 **Famous JavaScript Bug:** `typeof null` returns `"object"` — this is a well-known quirk from 1995 that was never fixed to avoid breaking old websites. Just remember it!

---

## Type Conversion — Changing Types

Sometimes you need to convert data from one type to another.

### String → Number:
```js
let input = "42";         // This is text, not a number
let num = Number(input);  // Convert to number
console.log(num + 8);     // 50 (math works now!)

// Also works:
let num2 = parseInt("42px");  // 42 — grabs the number part
let num3 = parseFloat("3.14 meters"); // 3.14
```

### Number → String:
```js
let score = 100;
let message = String(score);      // "100"
let message2 = score.toString();  // "100"
```

### Any Type → Boolean:
```js
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("hello")); // true
console.log(Boolean(""));      // false (empty string is false!)
console.log(Boolean(null));    // false
```

####  `parseInt()`**
Converts a string to an integer. It stops parsing when it encounters a non-numeric character.

- **Example:**
  ```javascript
  let int = parseInt("123.45");
  console.log(int); // Output: 123

  let int2 = parseInt("123abc");
  console.log(int2); // Output: 123
  ```

#### `parseFloat()`**
Converts a string to a floating-point number.

- **Example:**
  ```javascript
  let float = parseFloat("123.45");
  console.log(float); // Output: 123.45
  ```

### Falsy Values — Things That Behave Like `false`:
These 6 values are **falsy** — they act like `false` in conditions:
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is **truthy** — it acts like `true`. This will matter a lot when we learn about conditions!

---

## The Danger of Automatic Type Conversion

JavaScript sometimes converts types automatically (called **coercion**) — and it can surprise you:

```js
console.log("5" + 3);    // "53"  ← JS treats 3 as a string and combines them!
console.log("5" - 3);    // 2    ← JS converts "5" to a number here
console.log("5" * "2");  // 10   ← Both convert to numbers
```

The `+` operator is special — if either side is a string, it combines them. All other math operators convert strings to numbers.

> 💡 **Tip:** To avoid confusion, always make sure you're working with the right type before doing math. If a number came from user input (it's a string!), convert it first with `Number()`.

---

## Key Takeaways

| Type | Example | Used For |
|------|---------|----------|
| String | `"Hello"` | Text |
| Number | `42`, `3.14` | Math, quantities |
| Boolean | `true`, `false` | Yes/No decisions |
| Undefined | `undefined` | Not yet assigned |
| Null | `null` | Intentionally empty |

---

## What's Next?

Now that we understand the building blocks of data, the next lesson covers **operators** — the tools we use to work with and compare that data.