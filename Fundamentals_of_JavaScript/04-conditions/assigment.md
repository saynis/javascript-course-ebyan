# Assignment 05 — Conditions

> **How to submit:** Create a file called `answers.js` in this folder.

---

## Task 1 — The BMI Calculator 🏃

Write a program that takes a person's BMI value and prints their health category.

Use these ranges:
| BMI | Category |
|-----|----------|
| Below 18.5 | Underweight |
| 18.5 – 24.9 | Normal weight |
| 25 – 29.9 | Overweight |
| 30 and above | Obese |

```js
let bmi = 22.4; // Change this to test different categories
```

Print a friendly message, for example:
```
Your BMI is 22.4
Category: Normal weight ✅
Keep up the healthy lifestyle!
```

> Test your code with at least 4 different BMI values to confirm all branches work.

---

## Task 2 — The Movie Ticket Booth 🎬

Build a ticket pricing system with these rules:

| Condition | Price |
|-----------|-------|
| Age 0–2 | Free |
| Age 3–12 | $6 |
| Age 13–17 | $10 |
| Age 18–64 | $14 |
| Age 65+ | $8 |
| **Any age** on Tuesday | Subtract $3 from base price |
| Has student ID (18+) | $11 instead of $14 |

Variables to start with:
```js
let age = 19;
let isStudentID = true;
let dayOfWeek = "Tuesday";
```

Print a receipt like:
```
🎬 Movie Ticket
Age: 19
Day: Tuesday
Student ID: true
─────────────────
Price: $8
```

---


Given a password string, check its strength based on these rules. Each rule that passes adds to the strength score:

1. Length is 8 or more characters → +1 point
2. Length is 12 or more characters → +1 more point  
3. Contains at least one number → +1 point *(Hint: try `/[0-9]/.test(password)`)*
4. Contains at least one uppercase letter → +1 point *(Hint: `/[A-Z]/.test(password)`)*
5. Contains a special character (`!@#$%`) → +1 point *(Hint: `/[!@#$%]/.test(password)`)*

Then rate the password:
- 0–1 points → "Weak ❌"
- 2–3 points → "Fair ⚠️"
- 4 points → "Strong ✅"
- 5 points → "Very Strong 💪"

```js
let password = "MyPass123!";
```

Expected output:
```
Password: MyPass123!
Score: 5/5
Strength: Very Strong 💪
```

Test with at least 3 different passwords.

---

## Checklist Before You're Done ✅

- [ ] I tested each condition with multiple values
- [ ] My `if/else if` chain is in the correct order (most specific first)
- [ ] I didn't use `==` anywhere — only `===`
- [ ] My code runs without errors