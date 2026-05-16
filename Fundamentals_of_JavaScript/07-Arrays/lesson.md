# Lesson 08 — Arrays

## What is an Array?

So far, variables have stored one value at a time:

```js
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Mango";
```

That works for 3 items. But what about 100 products in a store? Or 1,000 users in a database? You can't create a thousand variables.

An **array** is a single variable that holds a **list of values** — in order, one after another.

```js
let fruits = ["Apple", "Banana", "Mango"];
```

Now one variable holds all three. And you can add more whenever you want.

Think of an array like a **numbered shelf** at a post office. Each slot has a number (starting at 0), and you can put anything in any slot.

---

## Creating an Array

Use square brackets `[]`, with items separated by commas:

```js
let colors = ["Red", "Green", "Blue"];
let scores = [95, 87, 72, 100, 68];
let mixed = ["Alice", 30, true, null]; // Arrays can hold any types
let empty = []; // An empty array — valid!
```

---

## Accessing Items — Index

Every item in an array has an **index** — a position number. Indexes start at **0**, not 1.

```js
let fruits = ["Apple", "Banana", "Mango", "Orange"];
//                0         1        2        3

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[3]); // Orange
console.log(fruits[4]); // undefined — nothing at index 4
```

> 🧠 **Why start at 0?** It comes from how computer memory works at a low level. The first item is at the very start of the list — zero steps away. It's one of those things you just accept and your brain adjusts quickly.

### Getting the Last Item

Since you might not always know the length of an array:

```js
let fruits = ["Apple", "Banana", "Mango"];
let lastItem = fruits[fruits.length - 1];
console.log(lastItem); // Mango
```

---

## The `length` Property

`.length` tells you how many items are in the array:

```js
let scores = [95, 87, 72, 100, 68];
console.log(scores.length); // 5
```

---

## Modifying Arrays

### Changing an Item

```js
let colors = ["Red", "Green", "Blue"];
colors[1] = "Yellow"; // Replace "Green" with "Yellow"
console.log(colors); // ["Red", "Yellow", "Blue"]
```

### Adding Items

```js
let fruits = ["Apple", "Banana"];

fruits.push("Mango");     // Add to the END
console.log(fruits);      // ["Apple", "Banana", "Mango"]

fruits.unshift("Grape");  // Add to the BEGINNING
console.log(fruits);      // ["Grape", "Apple", "Banana", "Mango"]
```

### Removing Items

```js
let fruits = ["Grape", "Apple", "Banana", "Mango"];

fruits.pop();             // Remove from the END
console.log(fruits);      // ["Grape", "Apple", "Banana"]

fruits.shift();           // Remove from the BEGINNING
console.log(fruits);      // ["Apple", "Banana"]
```

### Memory trick:
- `push` / `pop` → both end in the word "end" in your mind → they work at the **end**
- `unshift` / `shift` → work at the **beginning** (start/front)

---

## Useful Array Methods

### `indexOf()` — Find the position of an item

```js
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.indexOf("Grape"));  // -1 (not found)
```

### `includes()` — Does the array contain this item?

```js
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits.includes("Mango"));  // true
console.log(fruits.includes("Grape"));  // false
```


### `reverse()` — Reverse the array in place

```js
let nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums); // [5, 4, 3, 2, 1]
```

---

## Looping Over Arrays

This is where arrays become truly powerful. Combine them with loops to process every item:

### `for` loop with index

```js
let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`${i + 1}. ${fruits[i]}`);
}
// 1. Apple
// 2. Banana
// 3. Mango
// 4. Orange
```


## Key Takeaways

| Concept | Example |
|---------|---------|
| Create array | `let a = [1, 2, 3]` |
| Access by index | `a[0]` → first item |
| Length | `a.length` |
| Add to end | `a.push(4)` |
| Remove from end | `a.pop()` |
| Add to start | `a.unshift(0)` |
| Remove from start | `a.shift()` |
| Check if exists | `a.includes(2)` |
| Find position | `a.indexOf(2)` |

---

## What's Next?

Arrays store lists. **Objects** (next lesson) store structured data — instead of numbered positions, you use named keys. Together, arrays and objects are the most important data structures in JavaScript.