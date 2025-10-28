function checkPassword() {
    // --- START: DEFINE YOUR CONTENT HERE ---
    const correctPassword = "puellula";
    const correctImage = "clue.png"; // Filename for the correct image
    const correctHeading = "Your clue"
    const correctSummary = "Three cursed relics written by the Red Witch in the Book of Faces - their name erased, but their chaos remains.";

    const wrongImage = "jumpscare.png"; // Filename for the wrong image
    const wrongHeading = "Access Denied";
    // --- END: DEFINE YOUR CONTENT HERE ---

    // Get elements from the HTML
    const userInput = document.getElementById('password-input').value;
    const loginContainer = document.getElementById('login-container');
    const contentContainer = document.getElementById('content-container');
    const resultHeading = document.getElementById('result-heading');
    const resultSummary = document.getElementById('result-summary');
    const resultImage = document.getElementById('result-image');

    // Check if the password is correct
    if (userInput === correctPassword) {
        // If correct, set the heading and image for success
        resultHeading.textContent = correctHeading;
        resultSummary.textContent = correctSummary;
        resultImage.src = correctImage;
        resultImage.alt = "Secret content";
    } else {
        // If incorrect, set the heading and image for failure
        resultHeading.textContent = wrongHeading;
        resultImage.src = wrongImage;
        resultImage.alt = "Access denied indicator";
    }

    // --- This part runs for BOTH correct and incorrect passwords ---
    // Hide the login form
    loginContainer.style.display = 'none';
    // Show the result page
    contentContainer.style.display = 'block';
}

/**
 * Toggles the visibility of the password input field.
 * (This function remains unchanged)
 */
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password-input');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}