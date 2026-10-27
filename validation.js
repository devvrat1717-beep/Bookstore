function validateNameAndPassword(name, password) {
const namePattern = /^[A-Za-z ]+$/;
if (name.length < 6 || !namePattern.test(name)) {
alert("Name must contain only alphabets and spaces, and be at least 6 characters long.");
return false;
}
if (password.length < 6) {
alert("Password must be at least 6 characters long.");
return false; 
}
return true;
}
// Call this function from the registration form submit handler:
const name = document.getElementById("fullName").value.trim();
const password = document.getElementById("password").value;
if (!validateNameAndPassword(name, password)) {
event.preventDefault();
}




