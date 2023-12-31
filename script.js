"use strict";
const emailField = document.querySelector("#email");
const emailError = document.querySelector(".email-error-message");
const passwordField = document.querySelector("#password");
const passwordError = document.querySelector(".password-error-message");

function validateEmail() {
  if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.textContent = "Please enter a valid email address";
  } else {
    emailError.textContent = "";
  }
}

function validatePassword() {
  if (passwordField.value === "") {
    passwordError.textContent = "Password is required";
  } else {
    // Updated regular expression to enforce at least one number and one special character
    let regularExpression =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (!passwordField.value.match(regularExpression)) {
      passwordError.textContent =
        "Password: 6-16 characters, 1 number, 1 special character.";
    } else {
      passwordError.textContent = "";
    }
  }
}

// Add event listeners
emailField.addEventListener("input", validateEmail);
passwordField.addEventListener("input", validatePassword);
