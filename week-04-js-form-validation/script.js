// ================================================================
// OUTFITLY - PRACTICAL 4: JAVASCRIPT REGISTRATION FORM VALIDATION
// ================================================================

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const resetBtn = document.getElementById("resetBtn");
    const successBanner = document.getElementById("successBanner");
    const successMessage = document.getElementById("successMessage");
    const errorBanner = document.getElementById("errorBanner");
    const errorMessage = document.getElementById("errorMessage");

    // Form inputs
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const phone = document.getElementById("phone");
    const stylePreference = document.getElementById("stylePreference");
    const termsAgree = document.getElementById("termsAgree");

    // Error labels
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const phoneError = document.getElementById("phoneError");
    const styleError = document.getElementById("styleError");
    const termsError = document.getElementById("termsError");

    // Helper function to set an error state
    function setError(inputElement, errorElement, message) {
        inputElement.classList.add("is-invalid");
        inputElement.classList.remove("is-valid");
        errorElement.textContent = message;
        return false;
    }

    // Helper function to set a valid state
    function setSuccess(inputElement, errorElement) {
        inputElement.classList.remove("is-invalid");
        inputElement.classList.add("is-valid");
        errorElement.textContent = "";
        return true;
    }

    // 1. Validate Full Name (min 3 chars, letters and spaces only)
    function validateName() {
        const val = fullName.value.trim();
        const nameRegex = /^[A-Za-z\s]+$/;

        if (val === "") {
            return setError(fullName, nameError, "Full Name is required.");
        } else if (val.length < 3) {
            return setError(fullName, nameError, "Full Name must be at least 3 characters.");
        } else if (!nameRegex.test(val)) {
            return setError(fullName, nameError, "Full Name should contain letters only.");
        }
        return setSuccess(fullName, nameError);
    }

    // 2. Validate Email using regex
    function validateEmail() {
        const val = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (val === "") {
            return setError(email, emailError, "Email address is required.");
        } else if (!emailRegex.test(val)) {
            return setError(email, emailError, "Please enter a valid email format (e.g. name@domain.com).");
        }
        return setSuccess(email, emailError);
    }

    // 3. Validate Password (min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char)
    function validatePassword() {
        const val = password.value;
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (val === "") {
            return setError(password, passwordError, "Password is required.");
        } else if (val.length < 8) {
            return setError(password, passwordError, "Password must be at least 8 characters long.");
        } else if (!passRegex.test(val)) {
            return setError(password, passwordError, "Must contain 1 uppercase, 1 lowercase, 1 digit & 1 special character.");
        }
        return setSuccess(password, passwordError);
    }

    // 4. Validate Confirm Password (must match password)
    function validateConfirmPassword() {
        const passVal = password.value;
        const confirmVal = confirmPassword.value;

        if (confirmVal === "") {
            return setError(confirmPassword, confirmPasswordError, "Please confirm your password.");
        } else if (confirmVal !== passVal) {
            return setError(confirmPassword, confirmPasswordError, "Passwords do not match.");
        }
        return setSuccess(confirmPassword, confirmPasswordError);
    }

    // 5. Validate Phone (exactly 10 digits)
    function validatePhone() {
        const val = phone.value.trim();
        const phoneRegex = /^[0-9]{10}$/;

        if (val === "") {
            return setError(phone, phoneError, "Phone number is required.");
        } else if (!phoneRegex.test(val)) {
            return setError(phone, phoneError, "Phone number must be exactly 10 digits.");
        }
        return setSuccess(phone, phoneError);
    }

    // 6. Validate Style Preference
    function validateStyle() {
        if (stylePreference.value === "") {
            return setError(stylePreference, styleError, "Please choose your preferred style category.");
        }
        return setSuccess(stylePreference, styleError);
    }

    // 7. Validate Terms agreement checkbox
    function validateTerms() {
        if (!termsAgree.checked) {
            termsError.textContent = "You must agree to the Terms of Service to proceed.";
            return false;
        }
        termsError.textContent = "";
        return true;
    }

    // Real-time event listeners for feedback as user types or changes fields
    fullName.addEventListener("input", validateName);
    email.addEventListener("input", validateEmail);
    password.addEventListener("input", function() {
        validatePassword();
        if (confirmPassword.value !== "") validateConfirmPassword();
    });
    confirmPassword.addEventListener("input", validateConfirmPassword);
    phone.addEventListener("input", validatePhone);
    stylePreference.addEventListener("change", validateStyle);
    termsAgree.addEventListener("change", validateTerms);

    // Form Submission Handler
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop normal HTTP submit and page reload

        if (errorBanner) errorBanner.style.display = "none";
        if (successBanner) successBanner.style.display = "none";

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isPhoneValid = validatePhone();
        const isStyleValid = validateStyle();
        const isTermsValid = validateTerms();

        const isFormValid = isNameValid && isEmailValid && isPasswordValid &&
                            isConfirmPasswordValid && isPhoneValid && isStyleValid && isTermsValid;

        if (isFormValid) {
            const nameVal = fullName.value.trim();
            const emailVal = email.value.trim().toLowerCase();
            const passwordVal = password.value;
            const phoneVal = phone.value.trim();
            const styleVal = stylePreference.value;

            try {
                // Check localStorage for existing registered users
                const rawUsers = localStorage.getItem("outfitly_users");
                const users = rawUsers ? JSON.parse(rawUsers) : [];

                // Check for duplicate email address
                const existingUser = users.find(u => u.email && u.email.toLowerCase() === emailVal);
                if (existingUser) {
                    if (errorBanner && errorMessage) {
                        errorMessage.textContent = `Registration failed: An account with the email "${emailVal}" already exists. Please log in or use a different email.`;
                        errorBanner.style.display = "block";
                        errorBanner.scrollIntoView({ behavior: "smooth" });
                    }
                    return;
                }

                // Construct new user account with all details including password
                const newUser = {
                    id: Date.now(),
                    fullName: nameVal,
                    email: emailVal,
                    password: passwordVal, // Included in saved user data
                    phone: phoneVal,
                    stylePreference: styleVal,
                    registeredAt: new Date().toISOString()
                };

                users.push(newUser);
                localStorage.setItem("outfitly_users", JSON.stringify(users));

                // Save active current user
                localStorage.setItem("outfitly_currentUser", JSON.stringify({
                    fullName: newUser.fullName,
                    email: newUser.email
                }));

                // Display success message
                successBanner.style.display = "block";
                successMessage.textContent = `Welcome ${nameVal}! Your Outfitly account has been successfully created and saved. You can now log in using "${emailVal}".`;
                successBanner.scrollIntoView({ behavior: "smooth" });

                // Reset form fields
                form.reset();
                document.querySelectorAll(".form-control").forEach(el => el.classList.remove("is-valid"));

            } catch (err) {
                console.error("Storage error:", err);
                if (errorBanner && errorMessage) {
                    errorMessage.textContent = "Failed to save account to browser storage. Please try again.";
                    errorBanner.style.display = "block";
                }
            }
        } else {
            if (errorBanner && errorMessage) {
                errorMessage.textContent = "Please correct the highlighted errors in the form before submitting.";
                errorBanner.style.display = "block";
            }
            successBanner.style.display = "none";
        }
    });

    // Reset Button Handler
    resetBtn.addEventListener("click", function () {
        form.reset();
        if (successBanner) successBanner.style.display = "none";
        if (errorBanner) errorBanner.style.display = "none";
        
        // Remove error classes and messages
        document.querySelectorAll(".form-control").forEach(input => {
            input.classList.remove("is-valid", "is-invalid");
        });
        document.querySelectorAll(".error-message").forEach(msg => {
            msg.textContent = "";
        });
    });
});
