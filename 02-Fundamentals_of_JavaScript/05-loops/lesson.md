# Lesson 06 — Loops

## Why Do We Need Loops?

Imagine you need to print "Good morning!" 100 times. You *could* write `console.log("Good morning!")` 100 times. But that's absurd. What if it's 10,000 times? Or a number you don't know in advance?

**Loops** solve this. They let you repeat a block of code automatically — for a set number of times, or until a condition changes.

Real examples where loops are essential:
- Show every product in a store catalog
- Send a notification to every user in a database
- Check each letter in a password
- Count down a timer from 10 to 0

---

## The `for` Loop

The most common loop. Use it when you **know how many times** you want to repeat.

```js
for (initialization; condition; update) {
  // code to repeat
}
```

The three parts:
1. **Initialization** — runs once at the start (set up a counter)
2. **Condition** — checked before each repeat (keep going while true)
3. **Update** — runs after each repeat (usually increment the counter)

```js
for (let i = 0; i < 5; i++) {
  console.log(`Lap:`, i);
}
// Lap 1
// Lap 2
// Lap 3
// Lap 4
// Lap 5
```

### Reading it in English:
*"Start with `i = 0`. While `i` is less than 5, run the code. After each run, add 1 to `i`."*

### Why start at 0?

Programmers count from 0 by convention (called **zero-indexing**). Arrays start at index 0, so loops often do too. But you can start at any number:

```js
// Count from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Count down
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

```

---

## The `while` Loop

Use `while` when you want to repeat **until something changes** — and you don't know how many times that will take.

```js
while (condition) {
  // runs as long as condition is true
}
```

```js
let fuel = 100;

while (fuel > 0) {
  console.log(`Fuel remaining: ${fuel}%`);
  fuel -= 25; // burn 25% each iteration
}
console.log("⛽ Tank empty!");
// Fuel remaining: 100%
// Fuel remaining: 75%
// Fuel remaining: 50%
// Fuel remaining: 25%
// ⛽ Tank empty!
```

```js
let password = ""

while(password !== "1234"){
   password = prompt("Enter password")
}

console.log("Login Success")

```

### ⚠️ The Infinite Loop Danger

If the condition **never becomes false**, the loop runs forever and freezes your program:

```js
// ❌ INFINITE LOOP — DON'T RUN THIS
while (true) {
  console.log("This never stops!");
  // No update — condition is always true!
}
```

Always make sure something inside your `while` loop will eventually make the condition false.

---

## The `do...while` Loop

Like `while`, but it **always runs at least once** — the condition is checked *after* the first run:

```js
do {
  // code runs at least once
} while (condition);
```

```js
let attempts = 0;

do {
  attempts++;
  console.log(`Attempt ${attempts}: Trying to connect...`);
} while (attempts < 3);

console.log(`Connected after ${attempts} attempts.`);
// Attempt 1: Trying to connect...
// Attempt 2: Trying to connect...
// Attempt 3: Trying to connect...
// Connected after 3 attempts.
```

Use `do...while` when you want to run code first and then decide whether to repeat. It's less common but useful for things like "try this action, then check if it worked."

---

## `break` and `continue` — Controlling Loops

### `break` — Stop the loop immediately

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Found 5! Stopping.");
    break; // Exit the loop right now
  }
  console.log(i);
}
// 1
// 2
// 3
// 4
// Found 5! Stopping.
```

### `continue` — Skip this iteration and go to the next

```js
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i); // Only prints odd numbers
}
// 1, 3, 5, 7, 9
```

Real-world use of `continue`: skip invalid data while processing a list.
Real-world use of `break`: stop searching once you've found what you need.

---

## Loops and Strings

You can loop over the characters in a string using its `.length`:

```js
let word = "Hello";

for (let i = 0; i < word.length; i++) {
  console.log(`Character ${i}: ${word[i]}`);
}
// Character 0: H
// Character 1: e
// Character 2: l
// Character 3: l
// Character 4: o
```

`word[i]` accesses the character at position `i` — just like a box in a row, where the first box is box #0.



## Which Loop Should I Use?

| Situation | Loop to use |
|-----------|-------------|
| Repeat exactly N times | `for` |
| Repeat while a condition is true | `while` |
| Run once, then maybe repeat | `do...while` |



## Key Takeaways

- Loops repeat code without you writing it multiple times
- `for` loops are for a known number of repetitions
- `while` loops are for unknown repetitions (until a condition changes)
- Always ensure your loop will eventually stop
- `break` exits a loop early; `continue` skips to the next iteration
- Loops are one of the most powerful tools in programming

---

## What's Next?

In the next lesson, we'll learn **functions** — how to package code into reusable, named blocks that you can call anytime, anywhere.