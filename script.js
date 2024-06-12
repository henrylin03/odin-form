const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");

const passwordFields = [password, passwordConfirm];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateEmail();
  validatePasswords();
});
email.addEventListener("blur", validateEmail);
passwordFields.forEach((input) =>
  input.addEventListener("blur", validatePasswords)
);

// functions
function validateEmail() {
  const container = email.parentNode;
  const error = container.querySelector(".error-message");

  if (email.validity.valid) return container.classList.remove("error");

  container.classList.add("error");
  if (email.validity.valueMissing)
    error.textContent = "This is a required field";
  else if (email.validity.typeMismatch)
    error.textContent = "Please enter a valid email address";
}

function validatePasswords() {
  passwordFields.forEach((elem) => elem.classList.remove("error"));

  passwordFields.forEach((elem) => {
    const container = elem.parentNode;
    const error = container.querySelector(".error-message");
    if (elem.validity.valueMissing) {
      error.textContent = "This is a required field";
      container.classList.add("error");
    } else container.classList.remove("error");
  });

  if (password.value) checkIfPasswordsMatch();
}

function checkIfPasswordsMatch() {
  const passwordConfirmContainer = passwordConfirm.parentNode;
  const passwordConfirmError =
    passwordConfirmContainer.querySelector(".error-message");

  if (password.value === passwordConfirm.value) {
    passwordConfirmError.textContent = "";
    passwordConfirmContainer.classList.remove("error");
    return;
  }
  passwordConfirmError.textContent = "Passwords don't match";
  passwordConfirmContainer.classList.add("error");
}

// todo: reset also clears all errors
// TODO: NEED TO DRAW DIAGRAM ON LOGIC TO MAKE SURE EVENT LISTENERS ARE ACTUALLY ATTACHED CORRECTLY!
//TODO: ADD GIF FOR A HIGH FIVE ON SCREEN (MAYBE EMOJI) IF USER SUBMITS
