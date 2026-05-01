// ============================================
// Lesson 01 — Introduction to JavaScript
// examples.js
// ============================================

// ----------------------------
// 1. Your very first JavaScript line
// ----------------------------
console.log("Hello, World!");

// ----------------------------
// 2. console.log() can print many things
// ----------------------------
console.log("I am learning JavaScript!"); // a piece of text (called a "string")
console.log(42);                          // a number
console.log(3.14);                        // a decimal number
console.log(true);                        // true or false (called a "boolean")

// ----------------------------
// 3. You can print multiple things at once
// Separate them with a comma
// ----------------------------
console.log("My name is", "Alex", "and I am", 25, "years old.");

// ----------------------------
// 4. You can do math inside console.log()
// ----------------------------
console.log(10 + 5);   // 15
console.log(10 - 3);   // 7
console.log(4 * 6);    // 24
console.log(20 / 4);   // 5

// ----------------------------
// 5. Strings (text) use quotes
// Single quotes or double quotes both work!
// ----------------------------
console.log("Hello with double quotes");
console.log('Hello with single quotes');

// ----------------------------
// 6. Combining text with +
// This is called "concatenation"
// ----------------------------
console.log("Hello, " + "World!");        // Hello, World!
console.log("I have " + 3 + " cats.");   // I have 3 cats.

// ----------------------------
// 7. Comments — JavaScript ignores these
// Use them to explain your code
// ----------------------------

// This is a single-line comment — only one line is ignored

/*
  This is a multi-line comment.
  Everything in here is ignored by JavaScript.
  Great for longer explanations.
*/

console.log("Comments don't affect the code below or above them!");

// ----------------------------
// 8. A real-world example:
// Imagine this is the welcome message for a website
// ----------------------------
console.log("Welcome to MyShop!");
console.log("We have", 120, "products available.");
console.log("Free shipping on orders over $50.");