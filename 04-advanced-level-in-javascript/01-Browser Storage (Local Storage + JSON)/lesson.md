# Lesson 01 — Browser Storage (Local Storage + JSON) 💾

> First lesson of the Advanced level. Don't worry, it builds on what you already know.

---

## Before We Start: What is Browser Storage?

Every time you open a website, the browser keeps some information about you. Your login. Your dark mode setting. The items in your shopping cart. Your last search.

If this information disappeared every time you refreshed the page, the web would be miserable. You'd have to log in to Gmail every time you opened it. Your YouTube preferences would reset every hour. No website would feel personal.

So browsers built a small storage space, right inside the browser itself, where websites can save information about you. This is called **browser storage**.

Think of it like a small notebook the browser carries around for each website. Every site gets its own notebook. Twitter can write notes in its notebook, your bank writes notes in its notebook, but they can't read each other's notebooks.

You can actually see this notebook right now:

1. Open any website
2. Press `F12` to open DevTools
3. Click the **Application** tab
4. On the left, look for **Storage**

You'll see different types of storage listed. The browser gives us a few different storage options, each one good for a different job.

---

## Types of Browser Storage

There are three main types worth knowing. Don't worry about memorising them all. We'll focus on one today, and the others are mostly for context.

### 1. Cookies 🍪

The oldest type, from way back in 1994. Cookies hold tiny pieces of data (only 4KB each) and get automatically sent to the server with every request.

Cookies are mostly used for things like authentication tokens (so the server knows you're logged in). You probably won't write to cookies directly in beginner projects. They're more of a server-side topic.

### 2. Session Storage 🕐

Session Storage saves data for **one tab only**, and only while that tab is open. When you close the tab, the data is gone.

Use it for things like a multi-step form where the user is filling out 3 pages. You want the data to survive between page transitions, but you don't need it forever.

```js
sessionStorage.setItem("step", "2");
sessionStorage.getItem("step"); // "2"
// Close the tab, data is gone forever
```

### 3. Local Storage 💾 ← this is what we'll learn today

Local Storage saves data **permanently** in the browser. It survives refreshes. It survives closing the browser. It survives shutting down your computer. The only way data leaves Local Storage is when you (or your code) delete it.

This is what we use for things like dark mode preferences, saved drafts, or the list of todos in a todo app.

```js
localStorage.setItem("darkMode", "on");
// Refresh, close browser, come back next week...
localStorage.getItem("darkMode"); // still "on"
```

### Quick Comparison

| Type | Lives for | Size | Use it for |
|------|-----------|------|------------|
| Cookies | Configurable | 4KB | Auth tokens (mostly server-side) |
| Session Storage | One tab session | ~5MB | Temporary data, multi-step forms |
| Local Storage | Forever | ~5MB | User preferences, saved data |

For this lesson and most of your projects, **Local Storage** is the one you want.

---

## What is JSON? (One More Thing Before We Code)

Before we get into the code, you need to know about **JSON**.

JSON stands for **JavaScript Object Notation**. It's a way to write objects and arrays as plain text.

Why does this matter? Because browser storage can only hold strings. It can't hold real JavaScript objects or arrays. So when we want to save an object, we first turn it into a JSON string. When we want to read it back, we turn the string back into an object.

Here's the same data as a JavaScript object and as JSON text:

```js
// JavaScript object
const user = { name: "Sofia", age: 28 };

// Same data as a JSON string
'{"name":"Sofia","age":28}'
```

They look almost identical. The JSON version is just text, wrapped in quotes, with quoted keys.

JavaScript gives us two helper methods to convert back and forth:

- `JSON.stringify(object)` turns an object into a JSON string
- `JSON.parse(string)` turns a JSON string back into an object

We'll see these in action a lot in this lesson. JSON isn't only for browser storage. It's how websites talk to servers, how APIs send data, how config files are written. You'll meet JSON everywhere in web development.

Now that you know what browser storage is and what JSON is, let's actually use them.

---

## The Problem We're Solving

Remember the Expense Tracker you just built? Try this:

1. Open it in your browser
2. Add a few expenses
3. Refresh the page

Everything disappears. 😱

That's because the data lives in JavaScript variables, and JavaScript variables reset every time the page loads. The expenses, the todos, the quiz scores. All gone.

Local Storage fixes this. We save the data in the browser's notebook, so it stays there even after refreshing. Even after closing the browser and coming back tomorrow.

---

## The 4 Methods You Need

Local Storage has 4 methods. Memorise these and you know almost everything.

### 1. `setItem(key, value)` to save data

```js
localStorage.setItem("userName", "Sofia");
```

This stores `"Sofia"` under the key `"userName"`. The key is like a label on a drawer, the value is what's inside.

### 2. `getItem(key)` to read data

```js
const name = localStorage.getItem("userName");
console.log(name); // "Sofia"
```

If the key doesn't exist, you get `null` back:

```js
const missing = localStorage.getItem("doesNotExist");
console.log(missing); // null
```

### 3. `removeItem(key)` to delete one item

```js
localStorage.removeItem("userName");
```

### 4. `clear()` to delete everything

```js
localStorage.clear();
```

Be careful with this one. It wipes all the data for your site.

---

## Try It Right Now

Open your browser console and try this:

```js
// Save your name
localStorage.setItem("myName", "Alex");

// Read it back
console.log(localStorage.getItem("myName")); // "Alex"

// Now press F5 to refresh the page.
// Open the console again and run:
console.log(localStorage.getItem("myName")); // Still "Alex" 🎉
```

The data survived the refresh. That's the whole point.

---

## The String-Only Rule

Here's the one rule you must remember:

> Local Storage can only store strings.

Try saving a number:

```js
localStorage.setItem("age", 25);
const age = localStorage.getItem("age");

console.log(age);          // "25"
console.log(typeof age);   // "string"
console.log(age + 5);      // "255" 😱
```

Local Storage quietly turned `25` into `"25"` when saving. So when we read it back, it's a string, and `age + 5` becomes string concatenation instead of math.

For numbers, the fix is to convert with `Number()`:

```js
const age = Number(localStorage.getItem("age"));
console.log(age + 5); // 30 ✅
```

For objects and arrays, this is a bigger problem.

---

## The Object Problem

Watch what happens when you try to save an object directly:

```js
const user = { name: "Sofia", age: 28 };
localStorage.setItem("user", user);

const saved = localStorage.getItem("user");
console.log(saved); // "[object Object]" 😱
```

It saved the text `"[object Object]"`. Completely useless. That's because Local Storage forced our object into a string using JavaScript's default conversion, which is broken.

We need a smarter way to turn objects into strings. That's exactly what JSON is for.

---

## JSON to the Rescue

Now we use the two JSON methods we talked about earlier.

### `JSON.stringify(value)` to convert to a string

```js
const user = { name: "Sofia", age: 28 };
const text = JSON.stringify(user);

console.log(text);        // '{"name":"Sofia","age":28}'
console.log(typeof text); // "string"
```

### `JSON.parse(string)` to convert back to an object

```js
const text = '{"name":"Sofia","age":28}';
const user = JSON.parse(text);

console.log(user);       // { name: "Sofia", age: 28 }
console.log(user.name);  // "Sofia"
```

Think of `stringify` and `parse` as a pair of translators:

- `stringify` is the "object to text" translator (for saving)
- `parse` is the "text to object" translator (for reading)

---

## The Pattern You'll Use Everywhere

Here's how Local Storage and JSON work together:

```js
// SAVING
const user = { name: "Sofia", age: 28, isAdmin: false };
localStorage.setItem("user", JSON.stringify(user));

// READING
const savedText = localStorage.getItem("user");
const user = JSON.parse(savedText);

console.log(user.name);    // "Sofia"
console.log(user.age + 1); // 29 (real math works!)
```

Two simple rules:

- Going in: `JSON.stringify()` first, then `setItem`
- Coming out: `getItem` first, then `JSON.parse()`

---

## Saving Arrays

Arrays work the same way:

```js
const todos = ["Buy groceries", "Walk dog", "Write code"];
localStorage.setItem("todos", JSON.stringify(todos));

const savedTodos = JSON.parse(localStorage.getItem("todos"));
console.log(savedTodos.length); // 3
savedTodos.push("Learn JavaScript");
```

And arrays of objects, which is what most real apps use:

```js
const expenses = [
  { description: "Coffee", amount: 5.50, category: "Food" },
  { description: "Bus",    amount: 2.75, category: "Transport" }
];

localStorage.setItem("expenses", JSON.stringify(expenses));

const saved = JSON.parse(localStorage.getItem("expenses"));
console.log(saved[0].description); // "Coffee"
```

This is exactly the pattern you'll use to save your Expense Tracker data.

---

## The Safe Loading Pattern

What happens if you try to load data that was never saved? `getItem` returns `null`. If your code expects an array, you'll hit errors later.

The safe pattern uses `||` to provide a default value:

```js
// If "expenses" doesn't exist yet, start with an empty array
const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Now you can use it normally
expenses.push({ description: "Snack", amount: 3.00 });
```

Same idea for other defaults:

```js
const todos    = JSON.parse(localStorage.getItem("todos"))    || [];
const settings = JSON.parse(localStorage.getItem("settings")) || { darkMode: false };
const userName = localStorage.getItem("userName")             || "Guest";
```

The `||` operator returns the first truthy value. Since `null` is falsy, the fallback gets used.

---

## A Small Example

A tiny "remember me" feature:

```js
const nameInput = document.querySelector("#nameInput");
const greeting  = document.querySelector("#greeting");

// On page load: show saved name if any
const savedName = localStorage.getItem("userName");
if (savedName) {
  nameInput.value = savedName;
  greeting.textContent = "Welcome back, " + savedName + "! 👋";
}

// On every keystroke: save the name
nameInput.addEventListener("input", function() {
  localStorage.setItem("userName", nameInput.value);
  greeting.textContent = "Hi, " + nameInput.value;
});
```

Refresh the page and the name stays. 

---

## Common Mistakes

### Mistake 1: forgetting `JSON.stringify` when saving

```js
const cart = [1, 2, 3];
localStorage.setItem("cart", cart); // ❌ saves "1,2,3", which is broken

// ✅ Correct:
localStorage.setItem("cart", JSON.stringify(cart));
```

### Mistake 2: forgetting `JSON.parse` when loading

```js
const cart = localStorage.getItem("cart"); // ❌ this is a string
cart.push(4); // ❌ TypeError: cart.push is not a function

// ✅ Correct:
const cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push(4);
```

### Mistake 3: treating numbers as numbers without converting

```js
const score = localStorage.getItem("score"); // "100" (string)
console.log(score + 50); // "10050" 😱

// ✅ Correct:
const score = Number(localStorage.getItem("score")) || 0;
console.log(score + 50); // 150
```

---

## What NOT to Save in Local Storage

Local Storage isn't encrypted. Any JavaScript on your site can read it. So:

- Never save passwords
- Never save credit card numbers
- Never save anything you wouldn't want a hacker to see if they got into the browser

It's fine for todos, preferences, draft text, scores, and similar harmless data.

---

## Key Takeaways

| Concept | Code |
|---------|------|
| Save a string | `localStorage.setItem("key", "value")` |
| Read a string | `localStorage.getItem("key")` |
| Delete one item | `localStorage.removeItem("key")` |
| Clear everything | `localStorage.clear()` |
| Save an object/array | `localStorage.setItem("key", JSON.stringify(obj))` |
| Read an object/array | `JSON.parse(localStorage.getItem("key"))` |
| Safe load with default | `JSON.parse(localStorage.getItem("key")) || []` |

---

## What's Next?

You now know how to make data survive refreshes. In the assignment, you'll add Local Storage to a small notes app and upgrade your Expense Tracker so it never forgets data again.

Next lesson is **ES6 Features Part 1**. Destructuring, spread, rest, template literals. The modern JavaScript that React uses everywhere.