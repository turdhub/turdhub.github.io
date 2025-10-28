function checkPassword() {
    // --- IMPORTANT: CHANGE YOUR PASSWORD HERE ---
    const correctPassword = "dj_butt";

    const userInput = document.getElementById('password-input').value;
    const loginContainer = document.getElementById('login-container');
    const contentContainer = document.getElementById('content-container');
    const errorMessage = document.getElementById('error-message');

    if (userInput === correctPassword) {
        loginContainer.style.display = 'none';
        contentContainer.style.display = 'block';
    } else {
        errorMessage.textContent = "Incorrect spell. You die.";
        document.getElementById('password-input').value = "";
    }
}

// START: ADDED THIS FUNCTION
/**
 * Toggles the visibility of the password input field.
 */
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password-input');
    
    // Check the current type of the input field
    if (passwordInput.type === 'password') {
        // If it's a password field, change it to a text field
        passwordInput.type = 'text';
    } else {
        // Otherwise, change it back to a password field
        passwordInput.type = 'password';
    }
}
// END: ADDED THIS FUNCTION
