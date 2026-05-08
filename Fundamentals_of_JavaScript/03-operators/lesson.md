# Lesson 04 — Operators

## What is an Operator?

An **operator** is a symbol that performs an action on one or more values. You already know some operators from math class: `+`, `-`, `*`, `/`. JavaScript has many more — for math, comparisons, logic, and assignment.

Think of operators as **verbs** — they *do* something to the data around them.

---

## 1. Arithmetic Operators — Math

These perform mathematical calculations:

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `10 + 3` | `13` |
| `-` | Subtraction | `10 - 3` | `7` |
| `*` | Multiplication | `10 * 3` | `30` |
| `/` | Division | `10 / 3` | `3.333...` |
| `%` | Modulus (remainder) | `10 % 3` | `1` |
| `**` | Exponentiation (power) | `2 ** 8` | `256` |

### The Modulus `%` — What is it for?

The `%` operator gives you the **remainder** after division. It sounds obscure, but it's incredibly useful:

```js
console.log(10 % 3);  // 1 (10 ÷ 3 = 3 remainder 1)
console.log(12 % 4);  // 0 (12 ÷ 4 = 3 remainder 0 — evenly divisible!)
console.log(7 % 2);   // 1 (odd number — remainder is always 1)
console.log(8 % 2);   // 0 (even number — remainder is always 0)
```


---

## 2. Assignment Operators — Storing Values

You already know `=` (assign). But there are shorthand versions:

```js
let score = 10;

score += 5;   // same as: score = score + 5  → 15
score -= 3;   // same as: score = score - 3  → 12
score *= 2;   // same as: score = score * 2  → 24
score /= 4;   // same as: score = score / 4  → 6
score **= 2;  // same as: score = score ** 2 → 36
score %= 10;  // same as: score = score % 10 → 6
```

### Increment and Decrement

Adding or subtracting 1 is so common, JavaScript has special operators for it:

```js
let count = 0;

count++;  // count = count + 1 → 1  (increment)
count++;  // → 2
count--;  // count = count - 1 → 1  (decrement)

console.log(count); // 1
```

You'll use `++` constantly in loops (Lesson 06).

---

## 3. Comparison Operators — Is this true or false?

Comparison operators **compare two values** and always return a boolean (`true` or `false`).

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `==` | Equal (loose) | `5 == "5"` | `true` |
| `===` | Equal (strict) | `5 === "5"` | `false` |
| `!=` | Not equal (loose) | `5 != 3` | `true` |
| `!==` | Not equal (strict) | `5 !== "5"` | `true` |
| `>` | Greater than | `10 > 5` | `true` |
| `<` | Less than | `3 < 7` | `true` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `4 <= 3` | `false` |

### `==` vs `===` — The Most Important Distinction

This trips up beginners constantly. Here's the difference:

- `==` (loose equality) — checks if values are **equal after converting types**
- `===` (strict equality) — checks if values are **equal AND the same type**

```js
console.log(5 == "5");   // true  ← JS converts "5" to 5, then compares
console.log(5 === "5");  // false ← different types (number vs string)

console.log(0 == false);  // true  ← both are "falsy"
console.log(0 === false); // false ← different types (number vs boolean)

console.log(null == undefined);  // true  ← special case
console.log(null === undefined); // false ← different types
```

> 🚨 **Rule of thumb:** **Always use `===`** (triple equals). It's predictable. `==` has surprising edge cases that cause bugs. The only time experienced developers use `==` is intentionally checking for both `null` and `undefined` at once: `value == null`.

---

## 4. Logical Operators — Combining Conditions

These let you combine multiple comparisons:

| Operator | Name | Meaning |
|----------|------|---------|
| `&&` | AND | Both conditions must be true |
| `\|\|` | OR | At least one condition must be true |
| `!` | NOT | Flips true to false, or false to true |

```js
let age = 20;
let hasID = true;

// AND — both must be true
console.log(age >= 18 && hasID);     // true (both are true)
console.log(age >= 18 && !hasID);    // false (hasID is true, !hasID is false)

// OR — at least one must be true
let isWeekend = false;
let isHoliday = true;
console.log(isWeekend || isHoliday); // true (one is true)
console.log(isWeekend || false);     // false (neither is true)

// NOT — flips the boolean
console.log(!true);    // false
console.log(!false);   // true
console.log(!0);       // true (0 is falsy, so !0 is true)
```

### Real-World Logic:

```js
let userAge = 25;
let isRegistered = true;
let hasPaid = false;

// Can access premium content?
let canAccess = userAge >= 18 && isRegistered && hasPaid;
console.log(canAccess); // false (hasPaid is false)

// Should show a warning?
let showWarning = !isRegistered || !hasPaid;
console.log(showWarning); // true
```






## Operator Precedence — Which Runs First?

Just like in math (`*` before `+`), JavaScript follows a specific order:

1. `()` — Parentheses (always first)
2. `**` — Exponentiation
3. `*`, `/`, `%` — Multiplication, Division, Modulus
4. `+`, `-` — Addition, Subtraction
5. `>`, `<`, `>=`, `<=` — Comparisons
6. `===`, `!==` — Equality checks
7. `&&` — AND
8. `||` — OR

```js
console.log(2 + 3 * 4);    // 14 (not 20) — multiplication first
console.log((2 + 3) * 4);  // 20 — parentheses force addition first
```

When in doubt, **use parentheses** to make your intent clear.

---

## Key Takeaways

- Use `===` not `==` for comparisons — always
- `%` gives the remainder — great for even/odd checks
- `&&` requires ALL conditions to be true
- `||` requires at LEAST ONE condition to be true
- `!` flips a boolean
- The ternary operator `? :` is a shorthand if/else

---

## What's Next?

Now that you can compare and combine values, the next lesson teaches **conditions** — how to make your program actually *do different things* based on those comparisons.