# Lesson 05 — Conditions (if / else /)

## What is a Condition?

Every day you make decisions based on conditions:

- *"If it's raining, I'll take an umbrella. Otherwise, I'll leave it home."*
- *"If I have enough money, I'll buy coffee. If not, I'll drink water."*
- *"If the light is green, go. If it's yellow, slow down. If it's red, stop."*

Programs need to make decisions too. **Conditions** let your code run different instructions depending on whether something is true or false.

This is where programming starts feeling *alive* — your code can react to different situations.

---

## The `if` Statement

The simplest form: run some code **only if** a condition is true.

```js
if (condition) {
  // This code runs ONLY if condition is true
}
```

```js
let temperature = 35;

if (temperature > 30) {
  console.log("It's hot! Drink water.");
}
// Output: It's hot! Drink water.
```

If the condition is false, the block is skipped entirely:

```js
let temperature = 20;

if (temperature > 30) {
  console.log("It's hot!"); // ← SKIPPED, condition is false
}

console.log("This always runs."); // ← Always runs
```

---

## The `if / else` Statement

Provide a fallback when the condition is false:

```js
if (condition) {
  // runs when condition is TRUE
} else {
  // runs when condition is FALSE
}
```

```js
let age = 16;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You're too young to vote.");
}
// Output: You're too young to vote.
```

Think of it as: *"Do this. If not that, do this other thing."*

---

## The `if / else if / else` Chain

For when you have more than two possibilities:

```js
let score = 72;

if (score >= 90) {
  console.log("Grade: A — Excellent!");
} else if (score >= 80) {
  console.log("Grade: B — Great job!");
} else if (score >= 70) {
  console.log("Grade: C — Good.");
} else if (score >= 60) {
  console.log("Grade: D — Needs improvement.");
} else {
  console.log("Grade: F — Please retry.");
}
// Output: Grade: C — Good.
```

### How it works:
JavaScript checks each condition **top to bottom** and stops at the **first one that is true**. The others are never checked. Order matters!

```js
// ❌ Wrong order — will always hit the first condition first
let score2 = 95;
if (score2 >= 60) {
  console.log("D"); // This runs even for a 95!
} else if (score2 >= 90) {
  console.log("A"); // Never reached
}

// ✅ Correct — check the highest threshold first
if (score2 >= 90) {
  console.log("A"); // Correct
} else if (score2 >= 60) {
  console.log("D");
}
```

---

## Truthy and Falsy in Conditions

Remember from Lesson 03? You don't have to compare to `true` explicitly. JavaScript evaluates any value as truthy or falsy:

```js
let username = "";

if (username) {
  console.log("welcome:" , username);
} else {
  console.log("Please enter your name."); // Empty string is falsy
}

let cartCount = 5;
if (cartCount) {
  console.log("you have :" , cartCount, "in the county"); // 5 is truthy
}

let userData = null;
if (userData) {
  console.log("User found."); // SKIPPED — null is falsy
} else {
  console.log("No user found.");
}
```

This pattern — `if (value)` — is used constantly in real JavaScript.

---

## Nested `if` Statements

You can put an `if` inside another `if`:

```js
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  console.log("Welcome back!");
  
  if (isAdmin) {
    console.log("Admin panel unlocked.");
  } else {
    console.log("User dashboard loaded.");
  }
} else {
  console.log("Please log in.");
}
```

> 💡 Be careful with deep nesting (more than 2–3 levels). It gets hard to read quickly. We'll learn cleaner patterns later.

---


| Situation | Use |
|-----------|-----|
| 
| Range checks (`> 50`, `<= 100`) | `if/else if` |
| Complex conditions with `&&` and `||` | `if/else if` |
| Simple true/false | `if/else` |


---

## Real-World Example: A Shipping Calculator

```js
const country = "USA";
const weight = 2.5; // kg
let shippingCost = 0;

if (country === "USA") {
  if (weight <= 1) {
    shippingCost = 5.99;
  } else if (weight <= 5) {
    shippingCost = 9.99;
  } else {
    shippingCost = 19.99;
  }
} else if (country === "Canada") {
  shippingCost = 14.99;
} else {
  shippingCost = 29.99; // International
}

console.log( "Shipping to" , country: ,shippingCost);
// Shipping to USA: $9.99
```

---

## Key Takeaways

- `if` runs code only when a condition is true
- `else` handles the false case
- `else if` lets you chain multiple conditions
- JavaScript checks `if/else if` top to bottom and stops at the first true match

- Any value can be used as a condition — truthy/falsy applies

---

## What's Next?

Now that code can make decisions, the next lesson teaches **loops** — how to repeat code automatically without writing it over and over.