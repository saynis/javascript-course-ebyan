# Assignment 10 — Array Methods 🚀

> **How to submit:** Create a file called `answers.js`

---

## Dataset

Use this array for all tasks:

```js
let products = [
  { id: 1, name: "Laptop", price: 899, category: "Electronics", inStock: true },
  { id: 2, name: "T-Shirt", price: 25, category: "Clothing", inStock: true },
  { id: 3, name: "Headphones", price: 149, category: "Electronics", inStock: false },
  { id: 4, name: "Jeans", price: 65, category: "Clothing", inStock: true },
  { id: 5, name: "Tablet", price: 499, category: "Electronics", inStock: true },
  { id: 6, name: "Sneakers", price: 120, category: "Footwear", inStock: true },
  { id: 7, name: "Jacket", price: 180, category: "Clothing", inStock: false },
];
```

---

## Task 1 — forEach Practice 🔁

Use `forEach()` to print each product like this:

```txt
Laptop costs $899
T-Shirt costs $25
```

---

## Task 2 — map Practice 🧩

Use `map()` to create a new array that contains only product names.

Expected result:

```js
["Laptop", "T-Shirt", "Headphones", "Jeans", "Tablet", "Sneakers", "Jacket"]
```

---

## Task 3 — map with Objects 🛒

Use `map()` to create a new array where each product has:

- name
- oldPrice
- newPrice

The `newPrice` should be the original price plus 10.

Example:

```js
{
  name: "Laptop",
  oldPrice: 899,
  newPrice: 909
}
```

---

## Task 4 — filter Practice ✅

Use `filter()` to create a new array that contains only products that are in stock.

Then print the result.

---

## Task 5 — filter by Price 💰

Use `filter()` to get all products with price greater than 100.

Then print only their names.

---

## Task 6 — find Practice 🔍

Use `find()` to find the product with the name `"Tablet"`.

Print the full product object.

---

## Task 7 — findIndex Practice 📍

Use `findIndex()` to find the index of `"Headphones"`.

Then use that index to change `inStock` from `false` to `true`.

Print the updated products array.

---

## Task 8 — reduce Practice ➕

Use `reduce()` to calculate the total price of all products.

Expected answer:

```txt
1937
```

---

## Task 9 — Chaining Challenge 🔗

Use `filter()` and `map()` together to get only the names of products that are:

- in stock
- price greater than 100

Print the final array.

---

## 🌟 Bonus Task — Category Counter

Use `reduce()` to count how many products are in each category.

Expected idea:

```js
{
  Electronics: 3,
  Clothing: 3,
  Footwear: 1
}
```

---

## ✅ Checklist

- [ ] I used `forEach()`
- [ ] I used `map()`
- [ ] I used `filter()`
- [ ] I used `find()`
- [ ] I used `findIndex()`
- [ ] I used `reduce()`
- [ ] I tested every task with `console.log()`
- [ ] My code runs without errors