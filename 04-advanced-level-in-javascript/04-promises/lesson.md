# Lesson 04 — Promises 🤝

> The cleaner way to handle "do this when the slow task finishes." This lesson is the foundation. The next one (async/await) builds directly on it, so take your time here.

---

## Where We Left Off

In the async lesson you saw callbacks, and you saw how they get messy when you stack several slow steps:

```js
getUser((user) =>{
  getOrders(user, (orders) =>{
    getDetails(orders, (details)=> {
      console.log(details);
    });
  });
});
```

That nesting is hard to read and easy to break. People call it "callback hell." Promises were invented to fix exactly this. By the end of this lesson, that same logic will read top to bottom like a flat list of steps.

Let's start with what a Promise actually is.

---

## What is a Promise?

A Promise is an object that represents a value you don't have *yet*, but will have *later*.

Think about ordering food with one of those buzzers they hand you. You don't have your food yet, but you have a promise that food is coming. The buzzer can be in one of three states:

- **Pending**: still waiting, food isn't ready
- **Fulfilled**: the buzzer goes off, food is ready (success)
- **Rejected**: they come back and say the kitchen ran out (failure)

A JavaScript Promise works the same way. It starts pending. Then it either **resolves** (success, you get a value) or **rejects** (failure, you get an error). Once it settles one way, it's done. It can't change its mind later.

---

## Using a Promise: `.then()` and `.catch()`

Most of the time you don't create Promises, you *use* them. Many built-in functions hand you a Promise, and you react to it with `.then()` and `.catch()`.

```js
somePromise
  .then((result) =>{
    // runs if the promise SUCCEEDS
    console.log("Got it:", result);
  })
  .catch((error)=> {
    // runs if the promise FAILS
    console.log("Something went wrong:", error);
  });
```

- `.then()` runs when the promise resolves, and receives the value.
- `.catch()` runs when the promise rejects, and receives the error.

That's the core of it. One path for success, one path for failure.

---

## Creating a Promise

You'll mostly consume Promises, but creating one helps you see how they work. You make a Promise with `new Promise`, and you get two functions to call: `resolve` (call it on success) and `reject` (call it on failure).

```js
const myPromise = new Promise((resolve, reject)=> {
  // pretend we're loading something that takes 2 seconds
  setTimeout(()=> {
    const success = true;

    if (success) {
      resolve("Here is your data!");  // success path
    } else {
      reject("Failed to load data."); // failure path
    }
  }, 2000);
});

myPromise
  .then(function(result) {
    console.log(result); // "Here is your data!" after 2 seconds
  })
  .catch(function(error) {
    console.log(error);
  });
```

Try flipping `success` to `false` and you'll see the `.catch()` run instead of the `.then()`.

---

## Promise-Returning Functions

In real code, you usually wrap a Promise inside a function so you can reuse it. The function does the slow work and hands back a Promise:

```js
function loadUser(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (id > 0) {
        resolve({ id: id, name: "Sofia" });
      } else {
        reject("Invalid id: " + id);
      }
    }, 1000);
  });
}

loadUser(1)
  .then(function(user) {
    console.log("Loaded:", user.name); // Loaded: Sofia
  })
  .catch(function(error) {
    console.log("Error:", error);
  });
```

Now `loadUser` can be called anywhere, and the caller decides what to do with the result using `.then()`.

---



## Chaining: The Real Reason Promises Are Good

Here's where Promises beat callbacks. When you `return` a value (or another Promise) inside `.then()`, you can add another `.then()` after it. This makes a flat chain of steps instead of deep nesting.

```js
getUser()
  .then(function(user) {
    return getOrders(user);   // return the next promise
  })
  .then(function(orders) {
    return getDetails(orders);
  })
  .then(function(details) {
    console.log(details);
  })
  .catch(function(error) {
    console.log("Error somewhere in the chain:", error);
  });
```

Compare that to the nested callback version at the top of this lesson. Same logic, but it reads top to bottom like a list.

And notice there's just **one** `.catch()` at the end. It catches an error from any step in the chain. That's a big deal. With callbacks you had to handle errors at every single level. With a Promise chain, one `.catch()` covers them all.

So Promises gave us two wins:
- A flat chain instead of nesting
- One place to handle errors

---


## A Small but Important Rule

Once a Promise settles (resolves or rejects), it stays settled. Calling `resolve` twice does nothing the second time. A Promise gives you exactly one result, once. This is part of what makes them safer than callbacks, where it was easy to accidentally call a function more than once.

---

## Common Mistakes

### Mistake 1: forgetting to return inside a chain
```js
getUser()
  .then(function(user) {
    getOrders(user); // ❌ forgot to return
  })
  .then(function(orders) {
    console.log(orders); // undefined, the chain broke
  });
```
Always `return` the next Promise so the chain connects.

### Mistake 2: forgetting `.catch()`
If a Promise rejects and you have no `.catch()`, the error gets swallowed and you'll be confused why nothing happens. Always handle the failure path.

### Mistake 3: nesting Promises like callbacks
```js
// ❌ This throws away the benefit of Promises
getUser().then(function(user) {
  getOrders(user).then(function(orders) {
    getDetails(orders).then(function(details) {
      console.log(details);
    });
  });
});
```
If you find yourself nesting `.then()` inside `.then()`, flatten it into a chain instead. That was the whole point.

---

## Key Takeaways

| Idea | What it means |
|------|---------------|
| Promise | An object for a value you'll get later |
| Pending / resolved / rejected | The three states of a Promise |
| `resolve` | Call it on success, with the value |
| `reject` | Call it on failure, with the error |
| `.then()` | Runs on success, receives the value |
| `.catch()` | Runs on failure, receives the error |
| Chaining `.then()` | Flat steps instead of nested callbacks |

---

## What's Next?

Promises fixed the nesting problem and gave us one clean place to handle errors. But there's an even cleaner way to write Promise code that reads almost like normal step-by-step code.

Next lesson: **Async/Await**. The modern syntax built right on top of the Promises you just learned.
