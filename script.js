// Script for Login Form Submission
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
        alert("Login Successful!");
    } else {
        alert("Please fill in both fields.");
    }
});