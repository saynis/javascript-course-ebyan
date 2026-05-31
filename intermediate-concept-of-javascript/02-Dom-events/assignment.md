# Assignment 13 — DOM Events & User Interaction ⚡

> **How to submit:** Create a file called `answers.js` and an `index.html` file.

---

## Task 1 — Click Counter 🖱️

Create:

```html
<h1>Clicks: 0</h1>
<button>Click Me</button>
```

Requirements:

- Select the button and heading
- Every time the button is clicked:
  - Increase the counter by 1
  - Update the heading

Example:

```text
Clicks: 1
Clicks: 2
Clicks: 3
```

---

## Task 2 — Keyboard Tracker ⌨️

Create:

```html
<h1>Press Any Key</h1>
```

Requirements:

- Listen for keyboard events
- Show the last key pressed inside the heading

Example:

If user presses:

```text
A
```

Display:

```text
Last Key: A
```

If user presses:

```text
Enter
```

Display:

```text
Last Key: Enter
```

---

## Task 3 — Focus 👀

Create:

```html
<input type="text" placeholder="Enter your name">
<p>Status: Waiting...</p>
```

Requirements:

### When input gets focus:

```text
Status: Typing...
```


---

## Task 4 — Live Character Counter ✍️

Create:

```html
<input type="text">
<p>Characters: 0</p>
```

Requirements:

- Use the `input` event
- Display the number of characters typed

Example:

User types:

```text
hello
```

Display:

```text
Characters: 5
```

---

## Task 5 — Prevent Form Refresh 🚫

Create:

```html
<form>
  <input type="text" placeholder="Username">
  <button type="submit">Submit</button>
</form>
```

Requirements:

- Prevent page refresh
- Print the username in the console

Example:

```text
Username: Mohamed
```

---

## Task 6 — Mouse Events 🎯

Create:

```html
<div class="box"></div>
```

Requirements:

When the mouse enters:

```text
Mouse Entered
```

When the mouse leaves:

```text
Mouse Left
```

When the box is clicked:

```text
Box Clicked
```

---

## Task 7 — Event Delegation ⭐

Create:

```html
<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Services</li>
  <li>Contact</li>
</ul>
```

Requirements:

- Add only ONE event listener to the `<ul>`
- When a user clicks a menu item:
  - Print the text of the clicked item

Example:

```text
Home
```

or

```text
Services
```

---

## Task 8 — Toggle Active Class 🎨

Create:

```html
<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Services</li>
  <li>Contact</li>
</ul>
```

Requirements:

- Use Event Delegation
- When an item is clicked:
  - Add class `active`
  - Remove `active` from the previously selected item

Example:

Only one menu item can be active at a time.

---

## 🌟 Bonus Challenge — Mini Todo List

Create:

```html
<input type="text">
<button>Add</button>

<ul></ul>
```

Requirements:

- User enters a task
- Clicking Add creates a new `<li>`
- Use Event Delegation
- Clicking a task should toggle a `done` class

Example:

```text
✓ Study JavaScript
```

---

# Checklist Before Submission ✅

- [ ] I used `click`
- [ ] I used `keydown`
- [ ] I used `focus`
- [ ] I used `input`
- [ ] I used `preventDefault()`
- [ ] I used `e.target`
- [ ] My code runs without errors

---

# 🎯 Goal

By completing this assignment, you should be comfortable with:

- DOM Events
- Event Listeners
- Keyboard Events
- Mouse Events
- Form Events
- `preventDefault()`
- `e.target`
- User Interaction