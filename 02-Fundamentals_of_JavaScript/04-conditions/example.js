// ============================================
// Lesson 05 — Conditions
// examples.js
// ============================================

// ----------------------------
// 1. Basic if statement
// ----------------------------
let batteryLevel = 15;

if (batteryLevel < 20) {
  console.log("⚠️ Low battery! Please charge your device.");
}
// Output: ⚠️ Low battery! Please charge your device.

// ----------------------------
// 2. if / else
// ----------------------------
let isRaining = true;

if (isRaining) {
  console.log("☔ Take an umbrella!");
} else {
  console.log("☀️ Enjoy the sunshine!");
}
// Output: ☔ Take an umbrella!

// ----------------------------
// 3. if / else if / else
// ----------------------------
let timeOfDay = 14; // 24-hour format (2 PM)

if (timeOfDay < 12) {
  console.log("Good morning! ☀️");
} else if (timeOfDay < 17) {
  console.log("Good afternoon! 🌤️");
} else if (timeOfDay < 21) {
  console.log("Good evening! 🌆");
} else {
  console.log("Good night! 🌙");
}
// Output: Good afternoon! 🌤️

// ----------------------------
// 4. Truthy / Falsy in conditions
// ----------------------------
let searchQuery = "";

if (searchQuery) {
  console.log(`Searching for: ` , searchQuery);
} else {
  console.log("Please type something to search.");
}
// Output: Please type something to search.

let userToken = "abc123";
if (userToken) {
  console.log("User is authenticated.");
}
// Output: User is authenticated.

// ----------------------------
// 5. Nested conditions — Role-based access
// ----------------------------
let isLoggedIn = true;
let userRole = "editor"; // "admin", "editor", or "viewer"

if (isLoggedIn) {
  if (userRole === "admin") {
    console.log("🔑 Full access: read, write, delete, settings");
  } else if (userRole === "editor") {
    console.log("✏️ Editor access: read and write");
  } else {
    console.log("👁️ Viewer access: read only");
  }
} else {
  console.log("Please log in to continue.");
}
// Output: ✏️ Editor access: read and write




// ----------------------------
// 8. Real-world: Ticket pricing
// ----------------------------
let customerAge = 12;
let isStudent = false;
let ticketPrice;

if (customerAge <= 3) {
  ticketPrice = 0;
  console.log("🎠 Free entry for toddlers!");
} else if (customerAge <= 12) {
  ticketPrice = 8;
  console.log(`🎒 Child ticket:` , ticketPrice);
} else if (customerAge >= 65) {
  ticketPrice = 10;
  console.log(`👴 Senior ticket`,ticketPrice);
} else if (isStudent) {
  ticketPrice = 12;
  console.log(`🎓 Student ticket: ` , ticketPrice);
} else {
  ticketPrice = 18;
  console.log(`🎟️ Adult ticket:`, ticketPrice);
}

// ----------------------------
// 9. Multiple conditions combined
// ----------------------------
let cartTotal = 85;
let isMember = true;
let promoCode = "SAVE10";

let finalDiscount = 0;

if (isMember && cartTotal >= 50) {
  finalDiscount += 10; // $10 off for members with $50+ order
}

if (promoCode === "SAVE10") {
  finalDiscount += 10; // Additional $10 from promo code
}

if (cartTotal >= 100) {
  finalDiscount += 5; // Bonus $5 for orders over $100
}

const finalTotal = cartTotal - finalDiscount;
console.log(`Cart: ` , cartTotal);
console.log(`Discount: -$` , finalDiscount);
console.log(`Final Total: $` , finalTotal);