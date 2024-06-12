const form = document.querySelector("form");
const email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
});

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
