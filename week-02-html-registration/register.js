// ================================================================
// OUTFITLY - PRACTICAL 2: REGISTRATION HANDLER & LOCALSTORAGE STORAGE
// ================================================================

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const successBanner = document.getElementById("successBanner");
    const successMessage = document.getElementById("successMessage");
    const errorBanner = document.getElementById("errorBanner");
    const errorMessage = document.getElementById("errorMessage");

    if (!form) return;

    // Helper functions to show alerts
    function showError(msg) {
        if (errorBanner && errorMessage) {
            errorMessage.textContent = msg;
            errorBanner.style.display = "block";
            errorBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
        if (successBanner) successBanner.style.display = "none";
    }

    function showSuccess(msg) {
        if (successBanner && successMessage) {
            successMessage.textContent = msg;
            successBanner.style.display = "block";
            successBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
        if (errorBanner) errorBanner.style.display = "none";
    }

    // Intercept form submission to prevent unexpected page reload
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop normal HTTP POST submission

        // Hide previous alerts
        if (errorBanner) errorBanner.style.display = "none";
        if (successBanner) successBanner.style.display = "none";

        // Retrieve field values
        const fullNameInput = document.getElementById("fullName");
        const usernameInput = document.getElementById("username");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const phoneInput = document.getElementById("phone");
        const dobInput = document.getElementById("dob");
        const ageInput = document.getElementById("age");
        const primaryStyleInput = document.getElementById("primaryStyle");
        const termsInput = document.getElementById("terms");

        const fullName = fullNameInput ? fullNameInput.value.trim() : "";
        const username = usernameInput ? usernameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim().toLowerCase() : "";
        const password = passwordInput ? passwordInput.value : "";
        const phone = phoneInput ? phoneInput.value.trim() : "";
        const dob = dobInput ? dobInput.value : "";
        const age = ageInput ? ageInput.value.trim() : "";

        // Selected gender section
        const selectedGender = document.querySelector('input[name="genderSection"]:checked');
        const genderSection = selectedGender ? selectedGender.value : "";

        // Selected primary style
        const primaryStyle = primaryStyleInput ? primaryStyleInput.value : "";

        // Selected wardrobe items
        const checkedItems = Array.from(document.querySelectorAll('input[name="items"]:checked')).map(cb => cb.value);

        // Style bio
        const styleBioInput = document.getElementById("styleBio");
        const styleBio = styleBioInput ? styleBioInput.value.trim() : "";

        // Terms consent
        const termsAccepted = termsInput ? termsInput.checked : false;

        // Validation Checks
        if (!fullName || fullName.length < 3) {
            showError("Please enter your Full Name (at least 3 characters).");
            fullNameInput && fullNameInput.focus();
            return;
        }

        if (!username || username.length < 4) {
            showError("Username is required and must be at least 4 characters (letters, numbers, underscores).");
            usernameInput && usernameInput.focus();
            return;
        }

        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        if (!usernameRegex.test(username)) {
            showError("Username can only contain letters, numbers, and underscores.");
            usernameInput && usernameInput.focus();
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            showError("Please enter a valid email address (e.g. name@college.edu).");
            emailInput && emailInput.focus();
            return;
        }

        if (!password) {
            showError("Password cannot be empty.");
            passwordInput && passwordInput.focus();
            return;
        }

        if (password.length < 8) {
            showError("Password must be at least 8 characters long.");
            passwordInput && passwordInput.focus();
            return;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phone || !phoneRegex.test(phone)) {
            showError("Phone number must contain exactly 10 numeric digits.");
            phoneInput && phoneInput.focus();
            return;
        }

        if (!dob) {
            showError("Please select your Date of Birth.");
            dobInput && dobInput.focus();
            return;
        }

        if (!age || Number(age) < 13 || Number(age) > 100) {
            showError("Please enter a valid age between 13 and 100.");
            ageInput && ageInput.focus();
            return;
        }

        if (!genderSection) {
            showError("Please select your preferred wardrobe section (Menswear, Womenswear, or Unisex).");
            return;
        }

        if (!primaryStyle) {
            showError("Please select your primary style aesthetic from the dropdown.");
            primaryStyleInput && primaryStyleInput.focus();
            return;
        }

        if (!termsAccepted) {
            showError("You must agree to the Terms of Service to complete registration.");
            termsInput && termsInput.focus();
            return;
        }

        // Save account into localStorage
        try {
            const rawUsers = localStorage.getItem("outfitly_users");
            const users = rawUsers ? JSON.parse(rawUsers) : [];

            // Check duplicate email
            const emailExists = users.some(u => u.email && u.email.toLowerCase() === email);
            if (emailExists) {
                showError(`Registration failed: An account with the email "${email}" already exists. Please log in or use a different email.`);
                emailInput && emailInput.focus();
                return;
            }

            // Check duplicate username
            const usernameExists = users.some(u => u.username && u.username.toLowerCase() === username.toLowerCase());
            if (usernameExists) {
                showError(`Registration failed: The username "${username}" is already taken. Please choose another username.`);
                usernameInput && usernameInput.focus();
                return;
            }

            // Create new user account object with all details including password
            const newUser = {
                id: Date.now(),
                fullName: fullName,
                username: username,
                email: email,
                password: password, // Included in stored account data
                phone: phone,
                dob: dob,
                age: Number(age),
                genderSection: genderSection,
                primaryStyle: primaryStyle,
                items: checkedItems,
                styleBio: styleBio,
                registeredAt: new Date().toISOString()
            };

            users.push(newUser);
            localStorage.setItem("outfitly_users", JSON.stringify(users));

            // Set current session user for easy login/greeting
            localStorage.setItem("outfitly_currentUser", JSON.stringify({
                fullName: newUser.fullName,
                email: newUser.email,
                username: newUser.username
            }));

            // Display success message
            showSuccess(`Welcome ${fullName}! Your Outfitly account has been successfully created and saved. You can now log in using "${email}".`);

            // Reset form fields
            form.reset();

        } catch (storageErr) {
            console.error("LocalStorage write error:", storageErr);
            showError("Failed to save account to browser storage. Please ensure cookies/storage are enabled.");
        }
    });

    // Reset button clears alerts too
    const resetBtn = form.querySelector('input[type="reset"]');
    if (resetBtn) {
        resetBtn.addEventListener("click", function () {
            if (errorBanner) errorBanner.style.display = "none";
            if (successBanner) successBanner.style.display = "none";
        });
    }
});
