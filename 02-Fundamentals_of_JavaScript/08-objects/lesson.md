# Lesson 09 — Objects

## What is an Object?

Arrays are great for lists — ordered collections of similar things. But sometimes you need to describe a *single thing* with multiple characteristics.

A **person** has a name, age, email, and city. A **product** has a name, price, category, and stock count. A **car** has a make, model, year, and color.

An **object** groups related data together under one variable, organized by **named keys** instead of numbered indexes.

```js
let person = {
  name: "Sofia",
  age: 28,
  city: "Barcelona",
  isEmployed: true
};
```

Think of an object like a **form** or an **ID card** — each field has a label (the key) and a value.

Or think of a **real-world object** like a book: it has a title, author, pages, and ISBN. Those properties *belong to* the book. A JavaScript object works the same way.

---

## Creating an Object

Use curly braces `{}` with **key: value** pairs, separated by commas:

```js
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "White",
  isElectric: false
};
```

Each `key: value` pair is called a **property**.

- The **key** is always a string (or can be written without quotes if it's a valid identifier)
- The **value** can be anything — string, number, boolean, array, another object, even a function

---

## Accessing Properties

### Dot Notation — the standard way

```js
let person = { name: "Sofia", age: 28, city: "Barcelona" };

console.log(person.name); // Sofia
console.log(person.age);  // 28
console.log(person.city); // Barcelona
```
---

## Modifying Objects

### Updating a property

```js
let user = { name: "Alex", age: 25, score: 0 };

user.age = 26;     // Update existing property
user.score = 150;  // Update another
console.log(user); // { name: "Alex", age: 26, score: 150 }
```

### Adding a new property

You can add properties that didn't exist at creation time:

```js
let user = { name: "Alex" };

user.email = "alex@example.com"; // Add new property
user.isAdmin = false;
console.log(user); // { name: "Alex", email: "alex@example.com", isAdmin: false }
```

### Deleting a property

```js
let user = { name: "Alex", tempToken: "abc123", age: 25 };

delete user.tempToken;
console.log(user); // { name: "Alex", age: 25 }
```

---

## Checking if a Property Exists

```js
let product = { name: "Laptop", price: 999, stock: 5 };

console.log("name" in product);     // true
console.log("discount" in product); // false

```




## Looping Over an Object

### `for...in` — loop over an object's keys

```js
let person = { name: "Sofia", age: 28, city: "Barcelona" };

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// name: Sofia
// age: 28
// city: Barcelona
```

### `Object.keys()`, `Object.values()`

```js
let scores = { Alice: 92, Bob: 78, Carol: 95 };

console.log(Object.keys(scores));   // ["Alice", "Bob", "Carol"]
console.log(Object.values(scores)); // [92, 78, 95]

```

---

## Nested Objects — Objects Inside Objects

Objects can contain other objects (and arrays):

```js
let user = {
  name: "Priya",
  age: 31,
  address: {
    street: "123 Main St",
    city: "Mumbai",
    country: "India"
  },
  hobbies: ["Reading", "Coding", "Hiking"]
};

// Access nested object
console.log(user.address.city);    // Mumbai
console.log(user.address.country); // India

// Access array inside object
console.log(user.hobbies[0]);      // Reading
console.log(user.hobbies.length);  // 3
```

---

## Arrays of Objects

The most common real-world data structure — a **list of items where each item has multiple properties**:

```js
let products = [
  { id: 1, name: "Laptop",   price: 899, inStock: true },
  { id: 2, name: "Mouse",    price: 25,  inStock: true },
  { id: 3, name: "Keyboard", price: 75,  inStock: false },
  { id: 4, name: "Monitor",  price: 350, inStock: true },
];

// Loop and display
for (let product of products) {
  console.log(` ${product.name} : ${product.price}`);
}

```

---

## Object Destructuring

Just like with arrays, you can unpack object properties into variables:

```js
let person = { name: "Carlos", age: 24, city: "Lima" };

// Old way:
let name = person.name;
let age  = person.age;

// Destructuring way:
let { name, age, city } = person;
console.log(name); // Carlos
console.log(age);  // 24


## Key Takeaways

| Concept | Example |
|---------|---------|
| Create object | `let obj = { key: value }` |
| Access property | `obj.key` or `obj["key"]` |
| Add/update property | `obj.newKey = "value"` |
| Delete property | `delete obj.key` |
| Check if key exists | `"key" in obj` |
| Loop over keys | `for...in` or `Object.keys()` |
| Destructure | `let { key } = obj` |


---

## What's Next?

You now know both major data structures: arrays and objects. The next lesson covers **array methods** like `map`, `filter`, and `reduce` — the tools that make working with arrays of objects powerful, elegant, and fast.