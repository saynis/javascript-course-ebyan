# Lesson 02 — Variables

## What is a Variable?

Think about your phone's contacts list. When you save someone's number, you give it a name: *"Mom — 555-1234"*. Later, you don't need to remember the number — you just search "Mom" and the phone looks it up for you.

A **variable** works the same way. It's a **named container** that stores a piece of information. Instead of writing the same value over and over, you give it a name and use that name anywhere you need it.

```js
let userName = "Alex";
console.log(userName); // Alex
```

Now whenever you need the user's name, you write `userName` — not `"Alex"` every time. And if the name changes? You update it in one place.

---

## The Three Ways to Create a Variable

JavaScript has three keywords for creating variables: `let`, `const`, and `var`.

### 1. `let` —  Block-scoped, can be updated but not re-declared.

```js
let age = 25;
age = 26; // Birthday! We can update it.
console.log(age); // 26
```

Use `let` when you expect the value to change over time.

### 2. `const` — Block-scoped, cannot be updated or re-declared.

```js
const birthYear = 1999;
birthYear = 2000; // ❌ ERROR! You can't change a const.
```

`const` stands for **constant** — it's locked. Use it for things like:
- The name of a country
- Math values like Pi
- API keys or settings that shouldn't change

> 💡 **Best Practice:** Always start with `const`. Only switch to `let` if you realize the value needs to change. This prevents accidental bugs.

### 3. `var` — The old way Function-scoped, can be re-declared and updated.


```js
var score = 100; // Works, but outdated
```

`var` was used before 2015. It has some quirky, confusing behaviors. Modern JavaScript uses `let` and `const`. You'll still see `var` in old code, but don't write new code with it.

---

## Naming Your Variables

Variable names are like labels on boxes — they should clearly describe what's inside.

### Rules (must follow):
- Must start with a letter, `$`, or `_` — not a number
- No spaces allowed
- No special characters like `@`, `%`, `#`
- Cannot be a reserved word (`let`, `const`, `if`, etc.)

```js
let 1name = "Alex";  // ❌ Cannot start with a number
let my age = 25;     // ❌ No spaces
let let = "hello";   // ❌ 'let' is a reserved word
```

### Conventions (good habits):
JavaScript uses **camelCase** — start with lowercase, capitalize each new word:

```js
let firstName = "Alex";       // ✅ camelCase
let totalPrice = 99.99;       // ✅ camelCase
let isLoggedIn = true;        // ✅ camelCase

let FirstName = "Alex";       // ⚠️ Works but not conventional
let first_name = "Alex";      // ⚠️ Works, but camelCase is preferred in JS
```

### Make names descriptive:
```js
// 😕 Bad — what does 'x' mean?
let x = 24;

// 😊 Good — clear and readable
let customerAge = 24;
```

---

## Declaring vs. Assigning

**Declaring** means creating the variable. **Assigning** means giving it a value.

```js
let score;           // Declared, but no value yet
score = 100;         // Now assigned a value
console.log(score);  // 100
```

You can also do both at once (most common):

```js
let score = 100;     // Declared AND assigned in one line
```

---

## What Happens Before You Assign?

If you declare a variable but don't give it a value, it holds a special value called `undefined`:

```js
let myVariable;
console.log(myVariable); // undefined
```

`undefined` means "this variable exists, but it has no value yet."

---

## Real-World Example

Imagine you're building a simple user profile:

```js
const userName = "Fatima";
const joinYear = 2023;
let points = 0;
let isSubscribed = false;

// The user earns points
points = 150;

// The user subscribes
isSubscribed = true;

console.log(userName, "joined in", joinYear);
console.log("Points:", points);
console.log("Subscribed:", isSubscribed);
```

- `userName` and `joinYear` use `const` because they don't change.
- `points` and `isSubscribed` use `let` because they can change.

---

## Key Takeaways

| Keyword | Can change? | When to use |
|---------|-------------|-------------|
| `const` | ❌ No | Default choice — fixed values |
| `let` | ✅ Yes | Values that will be updated |
| `var` | ✅ Yes | Old code only — avoid |

---

## What's Next?

Now that we know how to store information in variables, the next lesson covers the different **types** of data JavaScript can hold — numbers, text, true/false, and more.