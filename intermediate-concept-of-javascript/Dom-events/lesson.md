# Lesson 12 — Events

## What is an Event?

Every time a user does something on a webpage, the browser fires an **event** — a signal that says "something just happened." Your JavaScript can listen for these signals and react to them.

Examples of events:
- User **clicks** a button → `click` event
- User **types** in a text box → `input` event
- User **presses a key** → `keydown` event
- User **hovers over** an element → `mouseover` event
- The **page finishes loading** → `load` event
- User **submits a form** → `submit` event

Events are the heartbeat of interactive JavaScript. Without them, pages just sit there.

---

## `addEventListener` — The Right Way to Listen

You attach event listeners to elements like this:

```js
element.addEventListener("eventName", handlerFunction);
```

- **`eventName`** — a string: `"click"`, `"input"`, `"keydown"`, etc.
- **`handlerFunction`** — the function to run when the event fires

```js
const btn = document.querySelector("#myButton");

btn.addEventListener("click", () => {
  console.log("Button was clicked!");
});
```

The handler function runs every time the event fires — you don't call it yourself, the browser calls it for you.

---

## The Event Object

When an event fires, the browser automatically passes an **event object** to your handler. It contains details about what happened — which key was pressed, where the mouse was, which element was clicked.

```js
btn.addEventListener("click", (event) => {
  console.log(event.type);   // "click"
  console.log(event.target); // The element that was clicked
});
```

You can name it anything — `event`, `e`, `evt` are all common. Most developers use `e` for short.

---

## Mouse Events

```js
const box = document.querySelector(".box");

box.addEventListener("click",      (e) => console.log("Clicked!"));
box.addEventListener("dblclick",   (e) => console.log("Double clicked!"));
box.addEventListener("mouseover",  (e) => console.log("Mouse entered"));
box.addEventListener("mouseout",   (e) => console.log("Mouse left"));
box.addEventListener("mousedown",  (e) => console.log("Mouse button pressed"));
box.addEventListener("mouseup",    (e) => console.log("Mouse button released"));
```

### `e.target` vs `e.currentTarget`

```js
document.querySelector("ul").addEventListener("click", (e) => {
  console.log(e.target);        // The exact element clicked (maybe an <li>)
  console.log(e.currentTarget); // The element the listener is attached to (the <ul>)
});
```

---

## Keyboard Events

```js
document.addEventListener("keydown", (e) => {
  console.log(e.key);     // "a", "Enter", "ArrowUp", " " (space), "Escape"
});
```

Common key values:
- `"Enter"` — Enter key
- `"Escape"` — Escape key
- `"ArrowUp"`, `"ArrowDown"`, `"ArrowLeft"`, `"ArrowRight"` — arrow keys
- `" "` — spacebar
- `"Backspace"` — backspace

---

## Input & Form Events

```js
const input = document.querySelector("input");

// Fires on every keystroke / change
input.addEventListener("input", (e) => {
  console.log("Current value:", e.target.value);
});


// Fires when the element GAINS focus
input.addEventListener("focus", (e) => {
  console.log("Input focused");
});

// Fires when value changes AND element loses focus
input.addEventListener("change", (e) => {
  console.log("Value changed to:", e.target.value);
});
```

### `input` vs `change`:
- **`input`** fires *immediately* on every keystroke — great for live feedback
- **`change`** fires only when the user finishes and moves away — great for validation after they're done

---

## Preventing Default Browser Behavior

Some elements have built-in browser behavior. The `a` tag navigates. A `form` submits and refreshes the page. You can stop this with `e.preventDefault()`:

```js
// Prevent a link from navigating
const link = document.querySelector("a");
link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Link clicked, but navigation stopped!");
});

// Prevent a form from refreshing the page on submit
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop the page refresh
  console.log("Form submitted without page reload!");
  // Now handle the form data with JavaScript
});
```

`e.preventDefault()` is one of the most-used methods in DOM programming. You'll use it in almost every form.

---



## The `DOMContentLoaded` Event

This fires when the HTML is fully parsed (but before images and CSS are loaded). It's useful to ensure the DOM is ready before your script runs — though if your `<script>` is at the bottom of `<body>`, you usually don't need it:

```js
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready. Safe to query elements.");
  const btn = document.querySelector("#myBtn");
  btn.addEventListener("click", () => console.log("Clicked!"));
});
```

---

## Common Events Quick Reference

| Event | Fires when... |
|-------|--------------|
| `click` | Element is clicked |
| `dblclick` | Element is double-clicked |
| `mouseover` | Mouse enters element |
| `mouseout` | Mouse leaves element |
| `mousemove` | Mouse moves over element |
| `keydown` | Key is pressed down |
| `input` | Input value changes (every keystroke) |
| `change` | Input value changes and focus is lost |
| `focus` | Element gains focus |
| `submit` | Form is submitted |
| `scroll` | Page or element is scrolled |
| `resize` | Browser window is resized |
| `DOMContentLoaded` | HTML fully parsed |
| `load` | Page fully loaded (images too) |

---

## Key Takeaways

- `addEventListener("event", handler)` attaches a listener to an element
- The handler receives an **event object** (`e`) with details about what happened
- `e.target` is the element that triggered the event
- `e.preventDefault()` stops default browser behavior (navigation, form submit)
- **Event delegation** — one listener on a parent handles all its children
- Events **bubble** up from child to parent

---

## What's Next?

Now that we can listen to user actions, the next lesson puts it all together with **forms and validation** — reading user input, checking it, and giving real feedback.