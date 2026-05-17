# Assignment 09 — Objects 🧱🔥

> **How to submit:** Create a file called `answers.js`

> ⚠️ Important:
>
> - Write clean code
> - Use meaningful variable names
> - Test every task with `console.log()`

---

# Task 1 — Student Profile 👨‍🎓

Create an object called `student`.

The object must contain:

- name
- age
- city
- skills (array with at least 3 skills)

Then:

- print the whole object
- print the student name
- print the second skill

---

# Task 2 — Update User Information ✏️

Create this object:

```js
let user = {
   username: "admin",
   password: "12345",
   isLoggedIn: false
}
```

Then:

- change the password
- change `isLoggedIn` to `true`
- add a new property called `role`
- print the updated object

---

# Task 3 — Product Inventory 📦

Create an array of objects called `products`.

Add at least 4 products.

Each product must contain:

- name
- price
- inStock

Example:

```js
{
   name: "Laptop",
   price: 500,
   inStock: true
}
```

Then:

- print all product names using a loop
- print only products where `inStock` is `true`

---

# Task 4 — Nested Object 🌍

Create an object called `person`.

The object should contain:

- name
- age
- address object

Inside `address` add:

- city
- country
- zipCode

Then print:

- the country
- the zip code

---

# Task 5 — Check Properties 🔍

Create this object:

```js
let phone = {
   brand: "Samsung",
   model: "S24",
   color: "Black",
   price: 900
}
```

Then:

- check if `"model"` exists
- check if `"storage"` exists
- delete the `color` property
- print the final object

---

# Task 6 — Loop Through Object 🔁

Create this object:

```js
let employee = {
   name: "Khadar",
   position: "Developer",
   salary: 1200,
   city: "Jigjiga"
}
```

Use a `for...in` loop to print:

```js
name : Khadar
position : Developer
salary : 1200
city : Jigjiga
```

---

# Task 7 — Mini E-Commerce Cart 🛒

Create an array called `cart`.

Add at least 3 product objects.

Each object should contain:

- productName
- quantity
- price

Then:

- print all product names
- calculate the total price of all products
- print the final total

---

# 🌟 Bonus Challenge — User Database 🚀

Create an array called `users`.

Add at least 5 user objects.

Each user should contain:

- username
- email
- isAdmin

Then:

- print all usernames
- print only admin users
- count how many admins exist

---

# ✅ Checklist

- [ ] I used objects correctly
- [ ] I used arrays with objects
- [ ] I used nested objects
- [ ] I used loops with objects
- [ ] I updated and deleted properties
- [ ] My code runs without errors