# Assignment 13 — Forms & Validation

## Task 1 — Contact Form
Fields: Full Name (letters+spaces, min 2), Email, Subject (select), Message (20–500 chars with live count), Phone (optional but validated).

Rules: validate on blur, clear errors on re-type, scroll to first error on submit. Success: show "Thanks, [Name]! We'll reply within 24 hours."

## Task 2 — Multi-Step Registration (3 steps)
Step 1: First name, last name, date of birth (must be 18+)
Step 2: Username, email, password (strength indicator), confirm password
Step 3: Favourite language (radio), newsletter (checkbox), how did you hear (select)

Requirements: step indicator, Next validates current step only, Back keeps data, Submit shows welcome summary.

## Task 3 — Loan Calculator Form
Fields: Loan Amount ($1k–$1M), Interest Rate (0.1–30%), Term (select months).
Auto-calculate on change:
- Monthly payment
- Total repaid
- Total interest

Formula: `M = P * [r(1+r)^n] / [(1+r)^n - 1]`
where r = annual_rate/12/100, n = months

## 🌟 Bonus — Draft Saving with localStorage
On every input, save non-password fields to localStorage.
On page load: if draft exists, pre-fill form + show banner "Continue where you left off? [Yes] [No, clear]".
On valid submit: clear the draft.

## Checklist ✅
- [ ] form submit event with e.preventDefault()
- [ ] .value for text, .checked for checkboxes
- [ ] Each field has its own validation function
- [ ] Inline errors below each field (no alert boxes)
- [ ] Errors clear as user retypes
- [ ] At least one regex used
- [ ] No page reloads on submit
