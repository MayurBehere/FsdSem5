// This file is intentionally left blank.
// Input validation code will be added here.
// Get the form element
const form = document.querySelector('form');

// Get the input fields
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Get the error elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Define regular expressions for validation
const nameRegex = /^[a-zA-Z ]{2,30}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

// Define functions for validation
function validateName() {
    if (nameInput.value === '') {
        nameError.textContent = 'Name is required';
        return false;
    } else if (!nameRegex.test(nameInput.value)) {
        nameError.textContent = 'Name must be 2-30 characters long and contain only letters and spaces';
        return false;
    } else {
        nameError.textContent = '';
        return true;
    }
}

function validateEmail() {
    if (emailInput.value === '') {
        emailError.textContent = 'Email is required';
        return false;
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Email is invalid';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validatePassword() {
    if (passwordInput.value === '') {
        passwordError.textContent = 'Password is required';
        return false;
    } else if (!passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number';
        return false;
    } else {
        passwordError.textContent = '';
        return true;
    }
}

function validateConfirmPassword() {
    if (confirmPasswordInput.value === '') {
        confirmPasswordError.textContent = 'Confirm Password is required';
        return false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match';
        return false;
    } else {
        confirmPasswordError.textContent = '';
        return true;
    }
}

// Add event listeners for validation
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePassword);
confirmPasswordInput.addEventListener('blur', validateConfirmPassword);

// Add submit event listener for form validation
form.addEventListener('submit', function(event) {
    if (!validateName() || !validateEmail() || !validatePassword() || !validateConfirmPassword()) {
        event.preventDefault();
        nameInput.focus();
    }
});

