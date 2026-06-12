# Lesson 11 — Built-in Objects in JavaScript

## Why Built-in Objects?

JavaScript comes with many built-in tools that are always available for you to use. These tools are called:

```text
Built-in Objects
```

Think of them like a toolbox 🧰 that JavaScript gives every developer.

Examples:
- `Math` → math operations
- `Date` → dates and time
- `String` → text manipulation
- `Array` → working with lists
- `Object` → structured data

These are tools developers use every single day.

---

# 1️⃣ The `Math` Object

## What is `Math`?

The `Math` object is used for:
- calculations
- random numbers
- rounding
- powers

---

## `Math.round()`

Rounds a number to the nearest integer.

```js
console.log(Math.round(4.4)); // 4

console.log(Math.round(4.8)); // 5
```

---

## `Math.random()`

Returns a random number between:

```text
0 → 1
```

```js
console.log(Math.random());
```

---

## Real World Example 🎲

```js
let dice =
Math.floor(Math.random() * 6) + 1;

console.log(dice);
```

Output:

```text
1 to 6
```

---

## `Math.max()` and `Math.min()`

```js
console.log(Math.max(10, 20, 50)); // 50

console.log(Math.min(10, 20, 50)); // 10
```

---

## `Math.pow()`

Raises a number to a power.

```js
console.log(Math.pow(2, 3)); // 8
```

Because:

```text
2 * 2 * 2
```

---

# 2️⃣ The `Date` Object

## What is `Date`?

The `Date` object is used for:
- dates
- time
- clocks
- timestamps

---

## Current Date

```js
let now = new Date();

console.log(now);
```

---

## `getFullYear()`

```js
console.log(now.getFullYear());
```

Output:

```text
2026
```

---

## `getMonth()`

```js
console.log(now.getMonth());
```

⚠️ Months start at:

```text
0
```

January = 0

---

## `getDate()`

```js
console.log(now.getDate());
```

---

## `getHours()`

```js
console.log(now.getHours());
```

---

## Real World Example ⏰

```js
let now = new Date();

console.log(
`Today is ${now.getDate()}`
);
```

---

# 3️⃣ The `String` Object

## What is a String?

A string is text.

```js
let text = "Hello World";
```

---

## `.length`

Returns the number of characters.

```js
console.log(text.length);
```

---

## `.toUpperCase()`

```js
console.log(text.toUpperCase());
```

Output:

```text
HELLO WORLD
```

---

## `.toLowerCase()`

```js
console.log(text.toLowerCase());
```

---

## `.indexOf()`

Searches for a word.

```js
console.log(text.indexOf("World"));
```

Output:

```text
6
```

---

## `.slice()`

Extracts part of a string.

```js
console.log(text.slice(0, 5));
```

Output:

```text
Hello
```

---

## `.replace()`

Replaces text.

```js
console.log(
text.replace("World", "JavaScript")
);
```

Output:

```text
Hello JavaScript
```

---

# 4️⃣ The `Array` Object

## What is an Array?

An array is a list.

```js
let fruits = [
  "Apple",
  "Banana",
  "Mango"
];
```

---

## `.push()`

Adds an item to the end.

```js
fruits.push("Orange");

console.log(fruits);
```

---

## `.pop()`

Removes the last item.

```js
fruits.pop();

console.log(fruits);
```

---

## `.shift()`

Removes the first item.

```js
fruits.shift();
```

---

## `.unshift()`

Adds an item to the beginning.

```js
fruits.unshift("Grapes");
```

---

## `.slice()`

Extracts part of an array.

```js
console.log(
fruits.slice(0, 2)
);
```

---

## `.splice()`

Adds or removes items.

```js
fruits.splice(1, 1);
```

---

## ⚠️ Difference Between `slice` and `splice`

| slice | splice |
|---|---|
| does NOT change original array | changes original array |

---

# 5️⃣ The `Object` Object

## What is an Object?

An object stores related data together.

```js
let user = {
  name: "Ali",
  age: 20,
  city: "Jigjiga"
};
```

---

## `Object.keys()`

Returns the keys.

```js
console.log(
Object.keys(user)
);
```

Output:

```js
["name", "age", "city"]
```

---

## `Object.values()`

Returns the values.

```js
console.log(
Object.values(user)
);
```

Output:

```js
["Ali", 20, "Jigjiga"]
```

---

## `Object.entries()`

Returns:

```js
[key, value]
```

```js
console.log(
Object.entries(user)
);
```

Output:

```js
[
  ["name", "Ali"],
  ["age", 20]
]
```

---

# Quick Reference

| Object | Used For |
|---|---|
| `Math` | calculations |
| `Date` | time and dates |
| `String` | text |
| `Array` | lists |
| `Object` | structured data |

---

# Key Takeaways

- Built-in Objects are tools already built into JavaScript
- `Math` helps with calculations
- `Date` works with time and dates
- `String` methods work with text
- `Array` methods manage lists
- `Object` methods help manage structured data

---

# What's Next?

You have now completed JavaScript Fundamentals 🎉

You now understand:
- variables
- conditions
- loops
- functions
- arrays
- objects
- array methods
- built-in objects
