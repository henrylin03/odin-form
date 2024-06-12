const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
  checkIfPasswordsMatch();
  // validatePasswords();
});
email.addEventListener("blur", validateEmail);
email.addEventListener("input", validateEmail);
password.addEventListener("input", (e) => validateRequiredField(e.target));
password.addEventListener("blur", (e) => validateRequiredField(e.target));
passwordConfirm.addEventListener("input", (e) =>
  validateRequiredField(e.target)
);
passwordConfirm.addEventListener("blur", (e) =>
  validateRequiredField(e.target)
);

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

function checkIfPasswordsMatch() {
  const passwordConfirmContainer = passwordConfirm.parentNode;
  const passwordConfirmError =
    passwordConfirmContainer.querySelector(".error-message");

  const isMatchingPassword = password.value === passwordConfirm.value;
  if (isMatchingPassword) console.log(password.value);
}

function validateRequiredField(requiredInput) {
  const container = requiredInput.parentNode;
  const errorMessage = container.querySelector(".error-message");

  if (!requiredInput.validity.valueMissing) {
    container.classList.remove("error");
    errorMessage.textContent = "";
    return;
  }
  errorMessage.textContent = "This is a required field";
  container.classList.add("error");
}

// todo: reset also clears all errors
