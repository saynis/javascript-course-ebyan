# Lesson 13 — Forms & Validation

## Why Forms Matter
Forms are how users send data — sign up, log in, checkout. Good validation checks input BEFORE accepting it and gives clear feedback.

## Reading Form Values
```js
const username = document.querySelector("#username").value;
const agreed   = document.querySelector("#terms").checked;   // checkbox
const country  = document.querySelector("#country").value;   // select
```
`.value` is always a **string** — convert with `Number()` if you need math.

## Handling Submission — Always use `submit` event
```js
form.addEventListener("submit", e => {
  e.preventDefault(); // ← CRITICAL: stops page reload
  const val = document.querySelector("#email").value.trim();
  if (!val) { showError("email", "Required!"); return; }
  // if valid, process...
});
```

## Validation Helpers
```js
function showError(id, msg) {
  document.querySelector("#"+id).classList.add("error");
  document.querySelector("#"+id+"-err").textContent = msg;
}
function showSuccess(id) {
  document.querySelector("#"+id).classList.remove("error");
  document.querySelector("#"+id).classList.add("success");
  document.querySelector("#"+id+"-err").textContent = "";
}
```

## Common Validation Rules
```js
const isEmpty   = v => !v.trim();
const minLen    = (v, n) => v.trim().length >= n;
const isEmail   = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isStrong  = v => v.length >= 8 && /[A-Z]/.test(v) && /[0-9]/.test(v);
const matches   = (a, b) => a === b;
```

## Live Validation (validate on blur, clear on input)
```js
emailInput.addEventListener("blur", () => {
  if (!isEmail(emailInput.value)) showError("email","Invalid email.");
  else showSuccess("email");
});
emailInput.addEventListener("input", () => {
  if (emailInput.classList.contains("error")) clearState("email");
});
```

## Regex Basics
```js
/[A-Z]/.test("Hello")   // true — has uppercase
/[0-9]/.test("abc123")  // true — has digit
/^[a-z]+$/.test("hello")// true — all lowercase
/^[^\s@]+@[^\s@]+\.[^\s@]+$/ // email pattern
```

## Key Takeaways
- `submit` event + `e.preventDefault()` — always
- `.value` for text, `.checked` for checkboxes
- Validate on `blur`, clear errors on `input`
- Show errors inline below each field — never use `alert()`
- One validation function per field that returns `null` (valid) or an error string
