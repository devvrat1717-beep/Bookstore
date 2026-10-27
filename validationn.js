function validateEmailAndPhone(email, phone) {
  const emailPattern =
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const phonePattern = /^\d{10}$/;
  if (!emailPattern.test(email)) {
  alert("Please enter a valid email address, such as name@domain.com.");
  return false;
  }
  if (!phonePattern.test(phone)) {
  alert("Phone number must contain exactly 10 digits.");
  return false;
  }
  return true;
  }
  // Call this function from the registration form submit handler:
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  if (!validateEmailAndPhone(email, phone)) {
  event.preventDefault();
  }
  
  
  