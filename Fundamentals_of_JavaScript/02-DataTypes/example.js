// ============================================
// Lesson 03 — Data Types
// examples.js
// ============================================

// ----------------------------
// 1. STRINGS — Text data
// ----------------------------
let firstName = "Amina";
let lastName = 'Osei';           // single quotes work too
let country = `Ghana`;           // backticks also work

console.log(firstName);  // Amina
console.log(typeof firstName);  // string


// String properties and methods
let sentence = "JavaScript is amazing!";
console.log(sentence.length);          // 22
console.log(sentence.toUpperCase());   // JAVASCRIPT IS AMAZING!
console.log(sentence.toLowerCase());   // javascript is amazing!
console.log(sentence.includes("amazing")); // true
console.log(sentence.replace("amazing", "powerful")); // JavaScript is powerful!

// ----------------------------
// 2. NUMBERS
// ----------------------------
let wholeNumber = 100;
let decimal = 9.99;
let negative = -50;

console.log(typeof wholeNumber);  // number
console.log(wholeNumber + decimal);  // 109.99




// ----------------------------
// 3. BOOLEANS
// ----------------------------
let isLoggedIn = true;
let hasProAccount = false;

console.log(typeof isLoggedIn);  // boolean
console.log(isLoggedIn);   // true
console.log(hasProAccount); // false



// ----------------------------
// 4. UNDEFINED vs NULL
// ----------------------------

// undefined — JavaScript sets this automatically
let userInput;
console.log(userInput);          // undefined
console.log(typeof userInput);   // "undefined"

// null — you set this intentionally
let selectedColor = null;
console.log(selectedColor);          // null
console.log(typeof selectedColor);   // "object" ← JavaScript's famous quirk

// ----------------------------
// 5. TYPE CONVERSION
// ----------------------------

// String to Number
let stringNumber = "42";
console.log(typeof stringNumber);          // string
let realNumber = Number(stringNumber);
console.log(typeof realNumber);            // number
console.log(realNumber + 10);             // 52

// parseInt — grabs the integer part
console.log(parseInt("100px"));   // 100
console.log(parseInt("3.9"));     // 3 (drops the decimal)

// parseFloat — keeps decimals
console.log(parseFloat("3.14meters"));  // 3.14

// Number to String
let score = 500;
let scoreText = String(score);
console.log(typeof scoreText);  // string



// ----------------------------
// 6. The + operator trap
// ----------------------------
console.log("10" + 5);   // "105" — string + number = string (concatenation)
console.log("10" - 5);   // 5    — subtraction converts to number
console.log("10" * 2);   // 20   — multiplication converts to number

// Safe way: convert first!
let userAgeInput = "25";  // came from a form as a string
let nextYear = Number(userAgeInput) + 1;
console.log(nextYear);  // 26 ✅

// ----------------------------
// 7. Real-world scenario: Shopping cart item
// ----------------------------
const itemName = "Laptop";
const itemPrice = 899.99;
const quantity = 2;
const inStock = true;
let couponCode = null; // no coupon applied yet

// Later on, we might update the coupon code:
console.log("itemName: " + itemName);  // itemName: Laptop
console.log("itemPrice: " + itemPrice); // itemPrice: 899.99
console.log("quantity: " + quantity);   // quantity: 2
console.log("inStock: " + inStock);     // inStock: true
console.log("couponCode: " + couponCode); // couponCode: null


// this is concatenation of strings and variables to create a summary
console.log("You added " + quantity + " " + itemName + "(s) to your cart at $" + itemPrice + " each.");

// you can also use commas in console.log for cleaner output
console.log("You added", quantity, itemName + "(s) to your cart at $", itemPrice, "each.");

// or use template literals for even nicer formatting
console.log(`You added ${quantity} ${itemName}(s) to your cart at $${itemPrice} each.`);
