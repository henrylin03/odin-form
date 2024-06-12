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
    console.log("all good");
    return;
  }
  if (email.validity.valueMissing)
    error.textContent = "This is a required field";
  // if (email.validity.valueMissing)
}
