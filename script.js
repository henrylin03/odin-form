const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
  validateRequiredField(password);
  validateRequiredField(passwordConfirm);
  checkIfPasswordsMatch();
  // validatePasswords();
});
email.addEventListener("blur", validateEmail);
password.addEventListener("blur", handleValidatingPasswords);
passwordConfirm.addEventListener("blur", handleValidatingPasswords);

// functions
function validateEmail() {
  const container = email.parentNode;
  const error = container.querySelector(".error-message");

  if (email.validity.valid) {
    error.textContent = "";
    container.classList.remove("error");
    return;
  }

  validateRequiredField(email);
  container.classList.add("error");
  if (email.validity.typeMismatch)
    return (error.textContent = "Please enter a valid email address");
}

function handleValidatingPasswords(e) {
  validateRequiredField(e.target);
  checkIfPasswordsMatch();
}

function checkIfPasswordsMatch() {
  const passwordConfirmContainer = passwordConfirm.parentNode;
  const passwordConfirmError =
    passwordConfirmContainer.querySelector(".error-message");

  if (password.value === passwordConfirm.value) {
    passwordConfirmError.textContent = "";
    passwordConfirmContainer.classList.remove("error");
    return true;
  }
  passwordConfirmError.textContent = "Passwords don't match";
  passwordConfirmContainer.classList.add("error");
  return false;
}

function validateRequiredField(requiredInput) {
  const container = requiredInput.parentNode;
  const errorMessage = container.querySelector(".error-message");

  if (!requiredInput.validity.valueMissing) {
    container.classList.remove("error");
    errorMessage.textContent = "";
    return true;
  }
  errorMessage.textContent = "This is a required field";
  container.classList.add("error");
  return false;
}

// todo: reset also clears all errors
