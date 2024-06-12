const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");

// when form submits: prevent default, validate email, validate passwords

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateEmail();
  validatePasswords();
});
email.addEventListener("blur", validateEmail);

// functions
function validateEmail() {
  const container = email.parentNode;
  const error = container.querySelector(".error-message");

  if (email.validity.valid) {
    error.textContent = "";
    container.classList.remove("error");
    return true;
  }

  container.classList.add("error");
  if (email.validity.valueMissing)
    error.textContent = "This is a required field";
  else if (email.validity.typeMismatch)
    error.textContent = "Please enter a valid email address";
  return false;
}

function validatePasswords() {
  const passwordFields = [password, passwordConfirm];

  passwordFields.forEach((elem) => elem.classList.remove("error"));

  return;
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

// todo: reset also clears all errors
