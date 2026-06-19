# Lesson 03 — Asynchronous JavaScript (The Concept) ⏳

> This lesson has almost no code to memorise. It's about understanding *how* JavaScript runs your code. Get this idea right and Promises, async/await, and Fetch (the next lessons) will make sense instead of feeling like magic.

---

## Start With a Question

Imagine you order food at a busy café.

You walk up, order a coffee, and the barista starts making it. Now, does everyone behind you in the queue have to wait, frozen, until your coffee is done? Of course not. The barista takes your order, starts it, and serves the next person while your coffee brews. When your coffee is ready, they call your name.

That's the whole idea behind asynchronous JavaScript. Some tasks take time. While they happen in the background, the rest of your code keeps running. When the slow task finishes, JavaScript comes back to deal with it.

By the end of this lesson you'll understand why this matters and how JavaScript pulls it off.

---

## JavaScript Does One Thing at a Time

Here's the first thing to understand, and it surprises a lot of people:

> JavaScript can only do one thing at a time.

It has a single worker. One line of code runs, finishes, then the next line runs. This is called being **single-threaded**. There's one thread of work, one task at a time, in order.

Run this and the output is exactly what you'd expect:

```js
console.log("First");
console.log("Second");
console.log("Third");

// First
// Second
// Third
```

Top to bottom, one after another. Simple.

So if JavaScript can only do one thing at a time, we have a problem. What about tasks that take a while? Downloading a file. Asking a server for data. Waiting 3 seconds for a timer. If JavaScript froze and waited for each of those, your whole web page would lock up. Buttons wouldn't click. Nothing would scroll. The page would feel broken.

This is the problem async solves.

---

## Synchronous vs Asynchronous

Two words you'll hear a lot. Let's nail them down.

**Synchronous** means one thing at a time, in order, each task blocking the next until it's done. Like a single checkout line where each customer must finish completely before the next can start.

**Asynchronous** means a slow task can be started and set aside, so other code runs while it finishes in the background. Like the café, where the barista keeps serving people while drinks brew.

Watch the difference. Here's synchronous code:

```js
console.log("Start");

// A slow task that BLOCKS everything (just for demonstration)
function wait3Seconds() {
  const stop = Date.now() + 3000;
  while (Date.now() < stop) {
    // doing nothing, just burning 3 seconds
  }
}
wait3Seconds();

console.log("End");

// Start
// (page is frozen for 3 full seconds)
// End
```

During those 3 seconds, the page is completely stuck. You can't click anything. That's blocking, and it's bad.

Now here's the asynchronous version using `setTimeout`:

```js
console.log("Start");

setTimeout(function() {
  console.log("3 seconds later");
}, 3000);

console.log("End");

// Start
// End
// 3 seconds later
```

Look at the order. `"End"` printed *before* `"3 seconds later"`, even though the timeout line comes first in the code. JavaScript didn't freeze. It set the timer aside, kept going, finished the rest of the code, and only came back to the timer when it was ready.

That reordering is the heart of async. The code does not always run strictly top to bottom when slow tasks are involved.

---

## Meet `setTimeout`

`setTimeout` is the easiest way to see async behaviour. It runs a function after a delay.

```js
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);
```

It takes two things: a function to run later, and a delay in milliseconds (1000 ms = 1 second).

Here's the key insight. `setTimeout` does **not** pause your code. It schedules the function for later and immediately moves on:

```js
console.log("A");

setTimeout(function() {
  console.log("B");
}, 0); // even with 0 delay!

console.log("C");

// A
// C
// B
```

Even with a delay of `0`, `"B"` prints last. That feels wrong the first time you see it. Why? To explain it, we need to look at how JavaScript actually runs code. Time for the call stack.

---

## The Call Stack

JavaScript keeps track of what it's doing using something called the **call stack**. Think of it as a stack of plates. The last plate you put on is the first one you take off.

When you call a function, JavaScript puts it on top of the stack. When that function finishes, it comes off the top. Whatever is on top is what JavaScript is working on right now.

Let's trace a simple example:

```js
function greet() {
  console.log("Hello");
}

function start() {
  greet();
  console.log("Done");
}

start();
```

Here's what the call stack does, step by step:

1. `start()` is called, so it goes on the stack.
2. Inside `start`, `greet()` is called, so it goes on top.
3. Inside `greet`, `console.log("Hello")` runs and prints "Hello", then comes off.
4. `greet` is finished, so it comes off the stack.
5. Back in `start`, `console.log("Done")` runs and prints "Done", then comes off.
6. `start` is finished, so it comes off. The stack is now empty.

The stack is JavaScript's way of remembering where it is. One thing on top at a time. This is the single-threaded worker we talked about.

So where do slow tasks go? They can't sit on the stack, because that would block everything. This is where the rest of the system comes in.

---

## Where Async Tasks Actually Go

JavaScript by itself only has the call stack. But it runs inside a browser, and the browser gives it extra helpers. Here's the simple version of how `setTimeout` works behind the scenes:

1. You call `setTimeout` with a function and a delay.
2. JavaScript hands the timer to the **browser** to watch. The `setTimeout` call itself finishes instantly and comes off the stack.
3. Your other code keeps running. The stack stays free.
4. When the timer is done, the browser doesn't interrupt your code. It puts your function in a waiting area called the **callback queue**.
5. A part of the system called the **event loop** constantly checks: "Is the call stack empty? If yes, take the next function from the queue and run it."

That last point explains the `setTimeout(..., 0)` mystery. The function was ready immediately, but it had to wait in the queue until the stack was completely empty, which meant after `"A"` and `"C"` had already run.

Here's the whole journey in plain words:

> Slow task starts, browser watches it, your code keeps running, task finishes and waits in the queue, and the event loop runs it the moment JavaScript is free.

You don't need to memorise every part. You just need the big picture: **async tasks wait their turn and run only when the main code is done.**

---

## A Real Example You've Already Felt

You've actually used async code already, back in the Events lesson. Every event listener is asynchronous:

```js
console.log("Page loaded");

button.addEventListener("click", function() {
  console.log("Button clicked!");
});

console.log("Ready for clicks");

// Page loaded
// Ready for clicks
// Button clicked!   <- only when YOU click, maybe minutes later
```

JavaScript didn't freeze and wait for you to click. It registered the listener, moved on, and the click handler runs later, whenever the click happens. That's the exact same idea as `setTimeout`. The function runs *later*, when the event is ready, while the rest of the code carries on.

So you already understand async on some level. This lesson just gives it a name and explains the machinery.

---

## Why This Matters

Almost everything slow on the web is async:

- Loading data from a server (you'll do this with Fetch soon)
- Waiting for a user to click or type
- Timers and animations
- Reading files

If these were synchronous, every web page would freeze constantly. Async is what keeps pages smooth and responsive while slow things happen in the background.

Right now you might be wondering how you actually *write* code that does something once a slow task finishes. The answer in this lesson is callbacks, a function you hand off to run later. That works, but it gets messy fast when you have many steps. The next lessons fix that with **Promises** and **async/await**, which are cleaner ways to handle the exact same idea.

For now, focus on the concept. Make sure these sink in:

- JavaScript does one thing at a time (single-threaded, one call stack)
- Slow tasks are handed off so they don't block your code
- They run later, after the main code finishes
- This is why output sometimes appears in a surprising order

---

## Callbacks: The First Way to Handle "Later"

A **callback** is just a function you pass to another function, to be run later. You've seen this already without the label:

```js
setTimeout(function() {       // <- this function is a callback
  console.log("Runs later");
}, 1000);

button.addEventListener("click", function() {  // <- also a callback
  console.log("Clicked");
});
```

The pattern is: "Here's a function. Run it when you're ready." That's all a callback is.

Callbacks are fine for one step. The trouble starts when you need several slow steps in order. For example: get the user, then get their orders, then get the details of each order. Each step waits for the one before it, and you end up nesting callbacks inside callbacks inside callbacks:

```js
getUser(function(user) {
  getOrders(user, function(orders) {
    getDetails(orders, function(details) {
      console.log(details);
      // ...and it keeps getting deeper
    });
  });
});
```

People call this "callback hell." It's hard to read and easy to break. You don't need to write code like this yet. Just know it's the problem that Promises and async/await were invented to solve, which is exactly where we're headed next.

---

## Key Takeaways

| Idea | What it means |
|------|---------------|
| Single-threaded | JavaScript does one thing at a time |
| Call stack | The list of what's running right now, last on first off |
| Synchronous | Tasks run in order, each blocking the next |
| Asynchronous | Slow tasks are set aside so other code keeps running |
| `setTimeout` | Schedules a function to run later, without blocking |
| Callback queue | Where finished async tasks wait their turn |
| Event loop | Runs queued tasks once the call stack is empty |
| Callback | A function passed to run later |

---

## What's Next?

You now understand *why* async exists and *how* JavaScript handles slow tasks without freezing. That mental model is the hard part, and you've got it.

Next lesson: **Promises**. A cleaner way to handle "do this when the slow task finishes," without the nested callback mess.