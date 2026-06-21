# Lesson 05 — Async/Await ✨

> A cleaner way to write Promise code. Async/Await makes asynchronous code look like normal step-by-step code.

---

## Where We Left Off

In the previous lesson, we used Promises with `.then()` and `.catch()`.

```js
loadUser()
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });
```

This works, but when there are many steps, the code can become harder to read.

Async/Await gives us a cleaner way.

---

## What is Async/Await?

Async/Await is another way to work with Promises.

These two examples do the same thing:

### Promise Style

```js
loadUser()
  .then((user) => {
    console.log(user);
  });
```

### Async/Await Style

```js
async function showUser() {
  const user = await loadUser();

  console.log(user);
}
```

The second version is easier to read.

---

## The Two Keywords

### async

`async` goes before a function.

```js
async function showUser() {

}
```

It tells JavaScript:

> This function works with Promises.

---

### await

`await` goes before a Promise.

```js
const user = await loadUser();
```

It means:

> Wait for the Promise to finish, then give me the result.

---

## Simple Example

Imagine loading a user takes 2 seconds.

```js
function loadUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("John");
    }, 2000);
  });
}
```

Using Async/Await:

```js
async function showUser() {
  const user = await loadUser();

  console.log(user);
}

showUser();
```

### Output

```text
John
```

(after 2 seconds)

---

## The Rule

`await` only works inside an `async` function.

### Wrong ❌

```js
function showUser() {
  const user = await loadUser();
}
```

### Correct ✅

```js
async function showUser() {
  const user = await loadUser();
}
```

### Easy Rule

> `await` needs `async`.

---

## Multiple Steps

Imagine we want to:

```text
Load User
↓
Load Products
↓
Show Products
```

### Promise Style

```js
loadUser()
  .then((user) => {
    return loadProducts(user);
  })
  .then((products) => {
    console.log(products);
  });
```

### Async/Await Style

```js
async function showProducts() {
  const user = await loadUser();

  const products = await loadProducts(user);

  console.log(products);
}
```

This reads like normal code:

```text
Get user
↓
Get products
↓
Show products
```

---

## Handling Errors

With Promises:

```js
loadUser()
  .catch((error) => {
    console.log(error);
  });
```

With Async/Await:

```js
try {

} catch (error) {

}
```

### Example

```js
async function showUser() {
  try {
    const user = await loadUser();

    console.log(user);
  } catch (error) {
    console.log("Error:", error);
  }
}
```

---

## Easy Way to Remember

| Promise    | Async/Await |
| ---------- | ----------- |
| `.then()`  | `await`     |
| `.catch()` | `try/catch` |

Think of it like this:

```text
.then()  → await

.catch() → try/catch
```

---

## Key Takeaways

| Idea              | Meaning                                 |
| ----------------- | --------------------------------------- |
| async             | Function works with Promises            |
| await             | Wait for a Promise to finish            |
| await needs async | await only works inside async functions |
| try/catch         | Handle errors                           |
| Async/Await       | Cleaner Promise code                    |

---

## Practice Challenge

What will be printed?

```js
function getName() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ali");
    }, 1000);
  });
}

async function showName() {
  const name = await getName();

  console.log(name);
}

showName();
```

### Answer

```text
Ali
```

(after 1 second)

---

## What's Next?

Next lesson:

### Fetch API 🌐

We will learn how to get real data from the internet using:

```js
async
await
try/catch
```

The tools you learned in this lesson.
