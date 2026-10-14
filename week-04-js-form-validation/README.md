# Practical 4: JavaScript Registration Form Validation

## Aim
To implement comprehensive client-side form validation using JavaScript for an Outfitly membership registration form, verifying user inputs via Regular Expressions (RegEx), string functions, and DOM manipulation.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)

## Files Included
- `index.html`: Registration form markup configured with `novalidate` to bypass native browser tooltips in favor of custom JS validation.
- `style.css`: Visual styling for standard, valid (`.is-valid`), and invalid (`.is-invalid`) input states, along with responsive button layouts.
- `script.js`: Core validation logic containing regex checks, real-time input event listeners, and form submission management.

## Validation Rules Implemented
1. **Full Name**: Non-empty, minimum 3 characters, alphabets and spaces only (`/^[A-Za-z\s]+$/`).
2. **Email Address**: Valid email syntax checked using `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.
3. **Password**: Minimum 8 characters; must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special symbol (`/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/`).
4. **Confirm Password**: Checked against the password input to ensure exact match.
5. **Phone Number**: Exactly 10 numeric digits (`/^[0-9]{10}$/`).
6. **Style Preference**: Dropdown must not be left on default placeholder.
7. **Terms Agreement**: Checkbox must be checked.

8. **Duplicate Email Prevention**: Checks `localStorage` under `outfitly_users` and blocks duplicate registrations with an error message banner.
9. **Account Persistence**: Stores the validated profile (including password) in `localStorage` under `outfitly_users` for demo authentication.

## Key JavaScript Concepts
- `document.getElementById()`, `addEventListener("submit", ...)`, `addEventListener("input", ...)`
- `event.preventDefault()` to stop premature submission and page reload
- `localStorage.getItem()` and `localStorage.setItem()` for client-side persistence
- Dynamic class switching (`classList.add("is-invalid")` / `classList.add("is-valid")`)
- String methods (`.trim()`, `.length`) and RegExp testing (`.test()`)

## How to Run
1. Navigate to `week-04-js-form-validation/`.
2. Double-click `index.html` to open in any web browser.
3. Test empty submission to observe red error messages appearing beneath each invalid field.
4. Correct fields one by one to see live green validation states.
5. Click **"Complete Registration"** with valid data to view the green success confirmation banner.
6. Attempt to submit again with the same email to verify duplicate email detection.

## Expected Output
Immediate, clear user feedback on invalid inputs with red outlines and descriptive error messages, blocking duplicate emails, and transitioning to a green success banner while saving the account into `localStorage`.
