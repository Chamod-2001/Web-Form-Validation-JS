![HTML](https://img.shields.io/badge/HTML-Registration%20Form-blue?style=flat-square&logo=html5)

# 📚 Simple Registration Form

A simple registration form developed using **HTML** and **JavaScript** for validating user inputs. This project showcases a basic form validation system with interactive features such as password visibility toggle and real-time error feedback for the user.

---

## ✨ Features

- 🔹 **Full Name Validation**: Checks for a minimum of 3 characters and allows only alphabetic characters, spaces, and hyphens.
- 🔹 **Email Validation**: Ensures that the email input contains a valid format with the '@' symbol.
- 🔹 **Password Validation**: Requires a minimum of 6 characters and provides a show/hide toggle for password visibility.
- 🔹 **Age Validation**: Limits age input to a range between 18 and 100.
- 🔹 **Real-time Error Messages**: Error messages appear dynamically under each input field when the user enters incorrect data.
- 🔹 **Success Message**: Displays a success message upon successful form submission.
- 🔹 **Form Reset**: A button to reset the form to its initial state.

---

## 🛠 Technologies Used

- HTML
- CSS (for styling)
- JavaScript (for form validation)
- Visual Studio Code (IDE)
- Git & GitHub

---

## 🚀 How to Run

1. Clone the repository:
    ```bash
    git clone https://github.com/YOUR_USERNAME/RegistrationForm.git
    ```

2. Navigate to the project directory:
    ```bash
    cd RegistrationForm
    ```

3. Open the `index.html` file in your preferred web browser or any text editor like Visual Studio Code.

4. The form will be ready to use for input validation and submission.

---

## 🔧 How It Works

1. **HTML**: Defines the structure of the form including fields for full name, email, password, and age.
2. **CSS**: Provides basic styling to make the form user-friendly and visually appealing.
3. **JavaScript**: Handles real-time validation of each input field, preventing form submission if any of the fields contain invalid data. The `onsubmit` event is intercepted by the `validateForm()` function to prevent default form submission and to ensure all fields are valid.


