document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");
  
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission
  
      const username = usernameField.value;
      const password = passwordField.value;
  
      // Replace this with actual authentication logic
      if (username === "sophia" && password === "s@123") {
        window.location.href = "success.html"; // Redirect to a success page
      } else {
        errorMessage.textContent = "Invalid username or password.";
      }
    });
  });