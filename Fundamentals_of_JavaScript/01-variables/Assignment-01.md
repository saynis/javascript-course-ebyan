# Assignment 02 — Variables

> **How to submit:** Create a file called `answers.js` in this folder and write all your answers there.

---

## Task 1 — Build a User Profile 👤

Create variables for a fictional user's profile. Use `const` for things that won't change and `let` for things that might.

You need to store:
- First name
- Last name
- Age
- City they live in
- Whether they are currently online (`true` or `false`)
- Their points/score (starts at 0)

Then print all of it to the console in a readable format, like:

```
=== User Profile ===
Name: Sarah Connor
Age: 30
City: Los Angeles
Online: true
Points: 0
```

**Think before you code:** Which values should be `const`? Which should be `let`? Why?

---

## Task 2 — The Score Tracker 🏆

You're building a simple game score tracker. 

1. Create a variable called `score` and set it to `0`
2. Print the score: `"Starting score: 0"`
3. The player earns 10 points — update `score` and print it
4. The player earns 25 more points — update and print
5. The player loses 5 points — update and print
6. Print a final message like: `"Game Over! Final score: 30"`

---

## Task 3 — Fix the Broken Code 🔧

The code below has **4 mistakes**. Find them, fix them, and explain in a comment what was wrong.

```js
const userName = "Jordan";
userName = "Taylor";

let 2ndPlace = "Silver";

let full name = "Jordan Lee";

const country = "Brazil";
console.log(Country);
```

Copy this into your `answers.js` file, fix each line, and add a comment like `// Fixed: ...` explaining what you changed.

---

## 🌟 Bonus Challenge — The Price Calculator

You work at a store. Create a program using variables that:

1. Stores the name of a product (your choice)
2. Stores the original price
3. Stores a discount percentage (e.g., 20 for 20% off)
4. **Calculates** the discount amount and the final price
5. Prints a formatted output like:

```
Product: Running Shoes
Original Price: $120
Discount: 20%
You Save: $24
Final Price: $96
```

> 💡 Hint: To calculate 20% of 120, do: `120 * (20 / 100)` or `120 * 0.20`

---

## Checklist Before You're Done ✅

- [ ] I used `const` for values that don't change
- [ ] I used `let` for values that do change
- [ ] My variable names are in camelCase
- [ ] My variable names are descriptive (not `x`, `a`, `temp1`)
- [ ] My code runs without errors