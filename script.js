const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
  validatePasswords();
});
email.addEventListener("blur", validateEmail);
email.addEventListener("input", validateEmail);
password.addEventListener("blur", validatePasswords);
passwordConfirm.addEventListener("blur", validatePasswords);

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

function validatePasswords() {
  const passwordInputs = [password, passwordConfirm];
  const passwordContainers = document.querySelectorAll(".password-container");

  passwordInputs.forEach((input) => {
    const container = input.parentNode;
    const error = container.querySelector(".error-message");

    if (input.validity.valid) {
      error.textContent = "";
      container.classList.remove("error");
      return;
    }
    validateRequiredField(input);
  });
}

function validateRequiredField(requiredInput) {
  const container = requiredInput.parentNode;
  const errorMessage = container.querySelector(".error-message");

  if (!requiredInput.validity.valueMissing) {
    errorMessage.textContent = "";
    container.classList.remove("error");
  }
  errorMessage.textContent = "This is a required field";
  container.classList.add("error");
}

// todo: reset also clears all errors
