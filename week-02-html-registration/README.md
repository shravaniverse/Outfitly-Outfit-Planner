# Practical 2: HTML Registration Form with Basic Input Validation

## Aim
To create an interactive member registration form for the "Outfitly" application utilizing HTML5 native form controls and built-in client-side input validation attributes without writing JavaScript.

## Technologies Used
- HTML5 Form Controls & Validation API

## Files Included
- `register.html`: Complete registration form capturing personal credentials and wardrobe preferences.
- `register.js`: Registration event handler that intercepts form submission (`event.preventDefault()`), validates inputs, stores user accounts to `localStorage` under `outfitly_users`, prevents duplicate email registrations, and displays visual success/error banners.

## HTML5 Validation Attributes Implemented
1. **`required`**: Enforces mandatory fields (Full Name, Username, Email, Password, Phone, DOB, Age, Gender, Primary Style, and Terms checkbox).
2. **`type="email"`**: Automatically checks for `@` symbol and valid email structure.
3. **`type="tel"` with `pattern="[0-9]{10}"`**: Restricts the mobile contact input to exactly 10 numeric digits using regular expression.
4. **`minlength` and `maxlength`**: Constrains length (e.g., Full Name 3–40 characters, Password min 8 chars).
5. **`type="number"` with `min="13"` and `max="100"`**: Enforces numeric age boundaries.
6. **`type="date"`**: Invokes the browser's native date picker for date of birth.
7. **`type="radio"` with grouped `name`**: Ensures mutual exclusivity when choosing wardrobe section.
8. **`type="checkbox"`**: Allows multiple item selection and mandatory terms acceptance.
9. **`pattern="^[a-zA-Z0-9_]+$"`**: Validates that username contains only alphanumeric characters and underscores.
10. **`title="..."`**: Displays user-friendly tooltips when pattern matching fails.

## How to Run
1. Navigate to the `week-02-html-registration/` folder.
2. Double-click `register.html` to open it in Google Chrome, Microsoft Edge, or Mozilla Firefox.
3. Try submitting the form empty to test the browser's native validation popups.
4. Enter an invalid email (e.g., `user@`) or a 5-digit phone number to observe pattern rejection.
5. Fill valid data and press "Complete Registration".

## Expected Output
1. The browser prevents submission and displays contextual tooltip warnings or alert banners whenever invalid or incomplete data is provided.
2. When valid data is entered and submitted via **Complete Registration**, `register.js` intercepts the form, validates all fields, saves the user record (including password) to `localStorage` under `outfitly_users`, prevents duplicate email registrations, and displays a prominent green success banner with a link to log in.
