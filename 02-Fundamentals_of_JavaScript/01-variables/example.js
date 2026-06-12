// ============================================
// Lesson 02 — Variables
// examples.js
// ============================================

// ----------------------------
// 1. Creating variables with let
// let = values that CAN change
// ----------------------------
let playerName = "Alex";
let playerScore = 0;
let isAlive = true;

console.log(playerName);  // Alex
console.log(playerScore); // 0
console.log(isAlive);     // true

// Update the values (this is allowed with let)
playerScore = 50;
isAlive = false;
console.log(playerScore); // 50
console.log(isAlive);     // false

// ----------------------------
// 2. Creating constants with const
// const = values that CANNOT change
// ----------------------------
const gameName = "Space Adventure";
const maxLives = 3;

console.log(gameName); // Space Adventure
console.log(maxLives); // 3

// Trying to change a const causes an error:
// gameName = "New Game"; // ❌ TypeError: Assignment to constant variable.

// ----------------------------
// 3. Declaring without a value
// The variable is "undefined" until assigned
// ----------------------------
let userEmail;
console.log(userEmail); // undefined

userEmail = "alex@example.com";
console.log(userEmail); // alex@example.com

// ----------------------------
// 4. Good variable naming — camelCase
// ----------------------------
let firstName = "Fatima";
let lastName = "Ahmed";
let totalScore = 95;
let isLoggedIn = false;
let numberOfItems = 7;

// Combining name parts
console.log(firstName + " " + lastName); // Fatima Ahmed

// ----------------------------
// 5. Real-world example: E-commerce product
// ----------------------------
const productName = "Wireless Headphones";
const productId = "WH-2024";
let productPrice = 79.99;
let stockCount = 42;
let isOnSale = false;

console.log("Product:", productName);
console.log("ID:", productId);
console.log("Price: $" + productPrice);
console.log("In Stock:", stockCount);
console.log("On Sale:", isOnSale);

// Apply a sale — price changes so we used let
isOnSale = true;
productPrice = 59.99;
console.log("--- SALE APPLIED ---");
console.log("New Price: $" + productPrice);

