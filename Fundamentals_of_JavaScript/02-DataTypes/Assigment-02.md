# Assignment 03 — Data Types

> **How to submit:** Create a file called `answers.js` in this folder and write all your answers there.

---

## Task 1 — Type Detective 🔍

For each value below, **predict** its type (`string`, `number`, `boolean`, `undefined`, or `null`) and then **verify** using `typeof`.

Write your code like this:
```js
console.log(typeof "Hello");  // I predict: string → actual: string ✅
```

Values to check:
1. `"JavaScript"`
2. `3.14`
3. `true`
4. `100`
5. `"100"` ← look carefully!
6. `false`
7. `null`
8. An unassigned variable (declare one without a value)
9. `"true"` ← is this a boolean?
10. `0`

> 💡 Think before you check — did any answers surprise you?

---

## Task 2 — Template Literal Profile Card 🪪

Using **string concatenation**  build a profile card for a fictional person.

You must:
- Create at least 6 variables (mix `const` and `let` appropriately)
- Use **only string concatenation** for printing
- Calculate and display their birth year using the current year minus their age

**Expected output format:**
```
╔══════════════════════════╗
       PROFILE CARD        
╚══════════════════════════╝
Name:       Marcus Webb
Age:        31
Birth Year: 1994
City:       Lagos, Nigeria
Job:        Software Engineer
Premium:    true
```

---

## Task 3 — Type Conversion Challenge 🔄

Use `console.log()` to practice converting values between different data types.

---

### Instructions:

Create these variables:

- age (as a string)  
- price (as a string) 

---

### Step 1:

Convert `age` into a number and print it.

---

### Step 2:

Convert `price` into a number and print it.

---

### Step 3:

Create a number:

let score = 100;

Convert it into a string and print it.

---

### Step 4:

Create a string number with decimals:

let rating = "4.7";

Convert it into:
- integer number  
- decimal number  

Print both results.

---

### Output Example:

25  
300  
100  
4  
4.7  

---

### Rules:

- Use only variables and `console.log()`  
- You must use:
  - Number()
  - String()
  - parseInt()
  - parseFloat()

---

### Common Mistakes:

- Writing number without quotes:

let age = 25 ❌  
let age = "25" ✅  

- Not saving converted value:

Number(age) ❌  
let newAge = Number(age) ✅  

---

### Test Yourself:

1. What is the difference between Number() and parseInt()?  
2. What is the difference between parseInt() and parseFloat()?  
3. Why is "4.7" different from 4.7?  

---

### Checklist:

- [ ] I used Number() correctly  
- [ ] I used parseInt() correctly  
- [ ] I used parseFloat() correctly  
- [ ] I converted number to string  
- [ ] My code runs without errors  

---

💬 Somali Tip:

parseInt = wuxuu ka saaraa decimal-ka  
parseFloat = wuxuu ilaaliyaa decimal-ka  

---

## 🌟 Bonus Challenge — The Quirky Quiz

Without running the code first, predict what each line will output. Then run it and see if you were right!

```js
console.log("5" + 5);
console.log("5" - 5);
console.log(true + true);
console.log(false + 1);
console.log("3" * "4");
console.log("hello" - 1);
console.log(null + 1);
console.log(undefined + 1);
console.log(Boolean("false"));  // careful!
console.log(Boolean(0));
```

Write your predictions as comments, then run the code. For each result that surprised you, write one sentence explaining what JavaScript actually did.

---

## Checklist Before You're Done ✅

- [ ] I can name all 5 data types covered in this lesson
- [ ] I understand the difference between `null` and `undefined`
- [ ] I understand why `"5" + 5` gives `"55"` but `"5" - 5` gives `0`
- [ ] My code runs without errors