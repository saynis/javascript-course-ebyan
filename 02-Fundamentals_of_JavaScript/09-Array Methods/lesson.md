# Lesson 10 — Array Methods (map, filter, reduce & friends)

## Why These Methods?

In Lesson 08 you learned the basics: `push`, `pop`, `includes`. Those are great for managing a list. But JavaScript also has a set of **higher-order array methods** that let you *transform*, *search*, and *summarize* arrays with clean, readable code.

These methods are everywhere in real JavaScript — in every React app, every API call, every data dashboard. Learning them is a serious leap forward.

The key idea: instead of writing a `for` loop manually, you pass a **function** to the method. The method calls your function once for each item and handles the looping for you.

---

## The Dataset We'll Use

Throughout this lesson, we'll work with this array of products:

```js
let products = [
  { id: 1, name: "Laptop",    price: 899,  category: "Electronics", inStock: true  },
  { id: 2, name: "T-Shirt",   price: 25,   category: "Clothing",    inStock: true  },
  { id: 3, name: "Headphones",price: 149,  category: "Electronics", inStock: false },
  { id: 4, name: "Jeans",     price: 65,   category: "Clothing",    inStock: true  },
  { id: 5, name: "Tablet",    price: 499,  category: "Electronics", inStock: true  },
  { id: 6, name: "Sneakers",  price: 120,  category: "Footwear",    inStock: true  },
  { id: 7, name: "Jacket",    price: 180,  category: "Clothing",    inStock: false },
];
```

---

## `forEach` — Loop Without Building Anything

`forEach` calls a function for every item. It's a cleaner alternative to `for...of` when you want to *do something* with each item but don't need a new array back.

```js
products.forEach(product => {
  console.log(`${product.name}: $${product.price}`);
});
```

**When to use:** Running side effects — printing, logging, updating the DOM. It doesn't return anything useful — just `undefined`.

---

## `map` — Transform Every Item Into Something New

`map` creates a **brand new array** by transforming each item. The original array is never changed.

Think of it as: *"Give me a new array where every item has been transformed by this function."*

```js
// Get just the names
let names = products.map(product => product.name);
console.log(names);
// ["Laptop", "T-Shirt", "Headphones", "Jeans", "Tablet", "Sneakers", "Jacket"]

// Get prices with 10% discount applied
let discountedPrices = products.map(product => ({
  name: product.name,
  originalPrice: product.price,
  salePrice: (product.price * 0.9).toFixed(2)
}));
console.log(discountedPrices);
```

**Rule of thumb:** If you want a new array of the same length, but with each item changed → use `map`.

---

## `filter` — Keep Only Items That Pass a Test

`filter` creates a **new array** containing only the items where your function returns `true`.

Think of it as: *"Give me a new array with only the items that match this condition."*

```js
// Only in-stock products
let inStock = products.filter(product => product.inStock);
console.log(inStock.length); // 5

// Only Electronics
let electronics = products.filter(p => p.category === "Electronics");
console.log(electronics.map(p => p.name)); // ["Laptop", "Headphones", "Tablet"]

// Products under $100
let affordable = products.filter(p => p.price < 100);
console.log(affordable.map(p => `${p.name} ($${p.price})`));

// Chain filter with map
let inStockNames = products
  .filter(p => p.inStock)
  .map(p => p.name);
console.log(inStockNames); // Names of all in-stock items
```

**Rule of thumb:** If you want a new array that's a subset (fewer items) → use `filter`.

---

## `find` — Get the First Matching Item

`find` returns the **first item** where your function returns `true` — just the item itself (not an array). If nothing matches, it returns `undefined`.

```js
let laptop = products.find(p => p.name === "Laptop");
console.log(laptop); // { id: 1, name: "Laptop", price: 899, ... }

let cheap = products.find(p => p.price < 30);
console.log(cheap.name); // T-Shirt

let nonExistent = products.find(p => p.price > 10000);
console.log(nonExistent); // undefined
```

**Rule of thumb:** If you're searching for *one specific item* → use `find`.

---

## `findIndex` — Get the Position of the First Match

Like `find`, but returns the **index** (position number) instead of the item:

```js
let tabletIndex = products.findIndex(p => p.name === "Tablet");
console.log(tabletIndex); // 4

// Useful for updating a specific item
let idx = products.findIndex(p => p.id === 3);
if (idx !== -1) {
  products[idx].inStock = true; // Update Headphones to in stock
}
```

Returns `-1` if not found (like `indexOf`).


---


## `reduce` — Boil an Array Down to a Single Value

`reduce` is the most powerful and most misunderstood method. It processes each item and builds up a **single result** — a total, an object, a string, anything.

```js
array.reduce((accumulator, currentItem) => {
  // update accumulator
  return updatedAccumulator;
}, initialValue);
```

- **accumulator** — the running result (starts as `initialValue`)
- **currentItem** — the current item being processed
- **initialValue** — what the accumulator starts as

### Sum all prices:

```js
let totalValue = products.reduce((total, product) => {
  return total + product.price;
}, 0);
console.log(`Total inventory value: $${totalValue}`); // $1937
```


**Rule of thumb:** If you're turning an array into one thing (a number, object, string) → use `reduce`.

---


## Quick Reference

| Method | Returns | Use when... |
|--------|---------|-------------|
| `forEach` | `undefined` | Loop for side effects |
| `map` | New array (same length) | Transform every item |
| `filter` | New array (fewer items) | Keep items matching a test |
| `find` | One item or `undefined` | Find the first match |
| `findIndex` | Index or `-1` | Find the position of a match |
| `some` | Boolean | Check if any item matches |
| `every` | Boolean | Check if all items match |
| `reduce` | Anything | Summarize to a single value |


---

## What's Next?

You now know how to work with data like a real developer. The next lesson takes JavaScript into the browser — **DOM manipulation** — where you'll finally make visible changes to an actual webpage.