# Lesson 01 — Introduction to JavaScript

## What is JavaScript?

Imagine a website is a house.

- **HTML** is the structure — the walls, doors, and windows.
- **CSS** is the decoration — the paint, furniture, and style.
- **JavaScript** is the electricity — it makes things *work*. Lights turn on, doors open, the TV plays.

JavaScript is the programming language of the web. It runs directly inside your browser — no installation needed. It's what makes buttons clickable, forms checkable, menus animated, and pages interactive.

JavaScript is a high-level, dynamic programming language that is essential for creating interactive and dynamic web pages. Originally developed by Brendan Eich in 1995, it has evolved into one of the most popular and versatile languages in web development.

---

## Why Learn JavaScript?

- Every website you've ever used has JavaScript running on it.
- It's the **#1 most used programming language** in the world (Stack Overflow, year after year).
- You can use it for websites, mobile apps, games, servers, and even robots.
- Once you learn it, you can build almost anything on the web.

---

## Where Does JavaScript Run?

JavaScript runs in two places:

1. **The Browser** — Chrome, Firefox, Safari all have a built-in JavaScript engine.
2. **The Server** — Using a tool called Node.js, JavaScript can run on a computer/server too.

For this course, we'll start in the **browser** — no setup required.

---

## Your First Tool: The Browser Console

The easiest way to run JavaScript is inside your browser's **Developer Console**.

### How to open it:
- **Chrome / Edge**: Press `F12` or `Ctrl+Shift+J` (Windows) / `Cmd+Option+J` (Mac)
- **Firefox**: Press `F12` or `Ctrl+Shift+K`
- Click on the **"Console"** tab

You'll see a blank area where you can type JavaScript and press **Enter** to run it.

Try typing this and pressing Enter:

```js
console.log("Hello, World!");
```

You should see `Hello, World!` appear. You just ran your first JavaScript! 🎉

---

## What is `console.log()`?

Think of `console.log()` as JavaScript's way of **speaking to you**. It prints a message to the console so you can see what's happening in your code.

```js
console.log("I am learning JavaScript!");
console.log(2 + 2);
console.log("My name is", "Alex");
```

You'll use `console.log()` constantly — it's your best friend for understanding what your code is doing.

---

## Linking JavaScript to an HTML File

In real projects, you write JavaScript in a `.js` file and connect it to HTML like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First JS Page</title>
  </head>
  <body>
    <h1>Hello!</h1>

    <!-- Link your JS file at the BOTTOM of the body -->
    <script src="script.js"></script>
  </body>
</html>
```

And in `script.js`:

```js
console.log("JavaScript is connected!");
```

> 💡 **Why at the bottom?** The browser reads HTML top to bottom. If you put the `<script>` tag at the top, JavaScript might try to interact with elements that haven't loaded yet. Putting it at the bottom ensures the HTML is fully loaded first.

---

## You Can Also Write JS Directly in HTML

```html
<script>
  console.log("This JS is inside the HTML file!");
</script>
```

This works, but for anything beyond a few lines, use a separate `.js` file — it keeps your code clean and organized.

---

## Comments in JavaScript

Comments are notes you write for yourself (or other developers). JavaScript completely ignores them.

```js
// This is a single-line comment

/*
  This is a
  multi-line comment
*/

console.log("This runs!"); // This part runs, this comment does not
```

**Why use comments?**
- To explain what your code does
- To temporarily disable a line of code
- To leave notes for your future self (you'll thank yourself later!)

---

## Key Takeaways

| Concept | What it means |
|---|---|
| JavaScript | Programming language that makes web pages interactive |
| `console.log()` | Prints output to the browser console |
| `<script src="...">` | Links a JS file to your HTML |
| `//` | Single-line comment |
| `/* ... */` | Multi-line comment |

---

## What's Next?

In the next lesson, we'll learn about **variables** — how JavaScript remembers information.