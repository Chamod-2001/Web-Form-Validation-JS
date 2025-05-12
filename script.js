// Selecting DOM elements
const form = document.getElementById('registration-form');
const fullNameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const ageInput = document.getElementById('age');
const successMessage = document.getElementById('success-message');
const fullNameError = document.getElementById('fullname-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const ageError = document.getElementById('age-error');
const togglePasswordButton = document.getElementById('toggle-password');

// Form validation function
function validateForm(event) {
  event.preventDefault(); // Prevent form submission if validation fails
  
  let isValid = true;
  
  // Validate each field
  if (!validateFullName()) isValid = false;
  if (!validateEmail()) isValid = false;
  if (!validatePassword()) isValid = false;
  if (!validateAge()) isValid = false;
  
  // If valid, show success message
  if (isValid) {
    successMessage.style.display = 'block';
  }
}

// Full Name validation
function validateFullName() {
  const value = fullNameInput.value.trim();
  
  // Regular expression to check for alphabetic characters, spaces, and hyphens
  const nameRegex = /^[A-Za-z\s-]+$/;
  
  if (value === '' || value.length < 3) {
    fullNameError.textContent = 'Please enter your full name (at least 3 characters)';
    fullNameInput.classList.add('input-error');
    return false;
  } else if (!nameRegex.test(value)) {
    // If the name contains invalid characters (numbers, symbols, etc.)
    fullNameError.textContent = 'Full Name can only contain letters, spaces, and hyphens';
    fullNameInput.classList.add('input-error');
    return false;
  } else {
    fullNameError.textContent = '';
    fullNameInput.classList.remove('input-error');
    return true;
  }
}

// Email validation
function validateEmail() {
  const value = emailInput.value.trim();
  
  if (value === '' || !value.includes('@')) {
    emailError.textContent = 'Please enter a valid email address';
    emailInput.classList.add('input-error');
    return false;
  } else {
    emailError.textContent = '';
    emailInput.classList.remove('input-error');
    return true;
  }
}

// Password validation
function validatePassword() {
  const value = passwordInput.value.trim();
  
  if (value === '' || value.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters long';
    passwordInput.classList.add('input-error');
    return false;
  } else {
    passwordError.textContent = '';
    passwordInput.classList.remove('input-error');
    return true;
  }
}

// Age validation
function validateAge() {
  const value = ageInput.value;
  
  if (value < 18 || value > 100) {
    ageError.textContent = 'Age must be between 18 and 100';
    ageInput.classList.add('input-error');
    return false;
  } else {
    ageError.textContent = '';
    ageInput.classList.remove('input-error');
    return true;
  }
}

// Toggle password visibility
togglePasswordButton.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordButton.textContent = 'Hide';
  } else {
    passwordInput.type = 'password';
    togglePasswordButton.textContent = 'Show';
  }
});

// Event listener for form submission
form.addEventListener('submit', validateForm);
