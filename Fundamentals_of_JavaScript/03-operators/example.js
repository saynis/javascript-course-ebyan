// ============================================
// Lesson 04 — Operators
// examples.js
// ============================================

// ----------------------------
// 1. ARITHMETIC OPERATORS
// ----------------------------
let a = 10;
let b = 3;

console.log(a + b);   // 13 — addition
console.log(a - b);   // 7  — subtraction
console.log(a * b);   // 30 — multiplication
console.log(a / b);   // 3.3333... — division
console.log(a % b);   // 1  — remainder (10 ÷ 3 = 3 remainder 1)
console.log(a ** b);  // 1000 — 10 to the power of 3


// ----------------------------
// 2. ASSIGNMENT OPERATORS
// ----------------------------
let score = 100;
console.log(score); // 100

score += 50;
console.log(score); // 150 — added 50

score -= 30;
console.log(score); // 120 — subtracted 30

score *= 2;
console.log(score); // 240 — doubled

score /= 3;
console.log(score); // 80 — divided by 3

// Increment / Decrement
let lives = 3;
lives--;
console.log(`Lives remaining: ${lives}`); // Lives remaining: 2

let combo = 0;
combo++;
combo++;
combo++;
console.log("Combo:" , combo); // Combo: 3

// ----------------------------
// 3. COMPARISON OPERATORS
// ----------------------------
let userAge = 20;

console.log("userAge > 18:" , userAge > 18);   // true
console.log("userAge < 18:" , userAge < 18);   // false
console.log("userAge >= 20:" , userAge >= 20);  // true
console.log("userAge <= 19:" , userAge <= 19);  // false
console.log("userAge === 20:" , userAge === 20); // true
console.log("userAge !== 21:" , userAge !== 21); // true

// === vs == — THE IMPORTANT ONE
console.log("5 == '5':" , 5 == "5");   // true  — loose (type conversion happens)
console.log("5 === '5':" , 5 === "5");  // false — strict (different types)
console.log("0 == false:" , 0 == false); // true  — both are "falsy"
console.log("0 === false:" , 0 === false);// false — number vs boolean

// ALWAYS use === in real code
let cartCount = "3"; // came from user input as a string
console.log("cartCount === 3:" , cartCount === 3); // false — don't let this sneak up on you!
console.log("Number(cartCount) === 3:" , Number(cartCount) === 3); // true — convert first!

// ----------------------------
// 4. LOGICAL OPERATORS
// ----------------------------

// AND (&&) — BOTH must be true
let hasAccount = true;
let hasVerifiedEmail = true;
let canLogin = hasAccount && hasVerifiedEmail;
console.log("Can login:" , canLogin); // true

let isPremium = false;
let canWatchHD = hasAccount && isPremium;
console.log("Can watch HD:" , canWatchHD); // false

// OR (||) — AT LEAST ONE must be true
let isMember = false;
let hasGuestPass = true;
let canEnter = isMember || hasGuestPass;
console.log("Can enter:" , canEnter); // true

// NOT (!) — flips the boolean
let isLoading = true;
console.log("!isLoading:" , !isLoading);  // false
console.log("Show content:" , !isLoading); // Show content: false

let isBlocked = false;
console.log("Can post:" , !isBlocked); // Can post: true

// Chaining logical operators
let age2 = 22;
let hasTicket = true;
let isVIP = false;

let canEnterClub = age2 >= 18 && hasTicket;
let canEnterVIPArea = canEnterClub && isVIP;

console.log("Can enter club:" , canEnterClub);    // true
console.log("Can enter VIP area:" , canEnterVIPArea); // false

