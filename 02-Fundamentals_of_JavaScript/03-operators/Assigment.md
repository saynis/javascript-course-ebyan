# Assignment 04 — Operators

> **How to submit:** Create a file called `answers.js` in this folder.

---

## Task 1 — The Cashier Calculator 🧮

You work at a café. Write a program using arithmetic and assignment operators to:

1. Start with a `total` of `0`
2. Add a coffee for `$4.50`
3. Add a sandwich for `$8.75`
4. Add a cookie for `$2.00`
5. Apply a 10% discount using `*=`
6. Add 8% tax to the discounted total

Print a receipt showing each step:

```
☕ Coffee:      $4.50
🥪 Sandwich:    $8.75
🍪 Cookie:      $2.00
─────────────────────
Subtotal:       $15.25
After 10% off:  $13.725
After 8% tax:   $14.823
```

> 💡 Use `toFixed(2)` on the final number to round to 2 decimal places: `total.toFixed(2)`

---

## Task 2 — Strict vs Loose Equality 🔍

For each comparison below, write:
1. What `==` returns
2. What `===` returns
3. **Why** they're different (or the same)

```js
// Example:
// 1 == "1"  → true  (loose: JS converts "1" to 1)
// 1 === "1" → false (strict: number ≠ string)

// Now YOU do these:
0 == false
0 === false
"" == false
"" === false
null == undefined
null === undefined
1 == true
1 === true
"0" == false
"0" === false
```

Put all 10 answers in `answers.js` as comments, then verify with `console.log()`.

---

## Task 3 — The Access Control System 🔐

Build a simple access control checker using logical operators. Given these variables:

```js
const userAge = 17;
const hasParentalConsent = true;
const isBanned = false;
const isPremiumMember = false;
const hasTrial = true;
```

Calculate and print the result (`true` or `false`) for each rule:

1. `canCreateAccount` → Must be 18+ OR have parental consent, AND NOT be banned
2. `canWatchContent` → Must have account (assume `true`), AND either be premium OR on trial
3. `isMinorWithConsent` → Must be under 18 AND have parental consent
4. `canAccessAll` → Must be 18+ AND premium AND not banned

Print like:
```
Can create account:    true
Can watch content:     true
Is minor with consent: true
Can access all:        false
```

---



This is one of the most famous beginner programming challenges. Using **only** the operators from this lesson (no `if` statements yet!), print a result for the number 15 that follows these rules:

- If the number is divisible by 3 → print `"Fizz"`
- If the number is divisible by 5 → print `"Buzz"`
- If divisible by BOTH 3 and 5 → print `"FizzBuzz"`
- Otherwise → print the number itself

> 💡 Use the ternary operator and the `%` (modulus) operator. Think about the order: check for "both" first!

```js
let n = 15;
let result = /* your ternary expression here */;
console.log(result); // FizzBuzz
```

Test your solution with: `n = 9` (Fizz), `n = 10` (Buzz), `n = 7` (7), `n = 15` (FizzBuzz).

---

## Checklist Before You're Done ✅

- [ ] I understand why `===` is preferred over `==`
- [ ] I can use `%` to check if a number is even or odd
- [ ] I can combine conditions with `&&` and `||`
- [ ] I used the ternary operator at least once
- [ ] My code runs without errors