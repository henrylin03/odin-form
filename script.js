const form = document.querySelector("form");
const email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
});

function validateEmail() {
  const errorMessage = email.parentNode.querySelector(".error-message");
  console.log(errorMessage);
  // if (email.validity.valueMissing)
}
