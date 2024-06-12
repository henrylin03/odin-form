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

// functions
function validateEmail() {
  const container = email.parentNode;
  const error = container.querySelector(".error-message");

  if (email.validity.valid) {
    error.textContent = "";
    container.classList.remove("error");
    return;
  }

  container.classList.add("error");
  if (email.validity.valueMissing)
    return (error.textContent = "This is a required field");
  if (email.validity.typeMismatch)
    return (error.textContent = "Please enter a valid email address");
}

function validatePasswords() {
  const passwordContainers = document.querySelectorAll(".password-container");
}
