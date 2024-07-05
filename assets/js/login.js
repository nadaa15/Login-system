let loginEmail = document.querySelector(".login-email");
let loginPassword = document.querySelector(".login-pass");
let loginError = document.getElementById("login-error");
let loginButton = document.querySelector(".login-button");

import { signupArr, emailRegex, passwordRegex } from "./signup.js";
console.log(signupArr);

//! validation

function validateEmail() {
  if (!loginEmail.value.match(emailRegex)) {
    loginError.textContent = "Email not valid";
  } else {
    loginError.textContent = "";
  }
}
function validatePassword() {
  if (!loginPassword.value.match(passwordRegex)) {
    loginError.textContent =
      "Password must have minimum eight characters, at least one letter and one number";
  } else {
    loginError.textContent = "";
  }
}
 loginEmail?.addEventListener("input", () => {
   validateEmail();
 });
 loginPassword?.addEventListener("input", () => {
   validatePassword();
 });

 
//! login

function isSignedUp() {
  for (let i = 0; i < signupArr.length; i++) {
    if (signupArr[i].email == loginEmail.value && signupArr[i].password == loginPassword.value) {
      localStorage.setItem("username", signupArr[i].userName);
      return true;
    }
  }
}

loginButton.addEventListener("click", function () {
  if (isSignedUp() == true) {
    loginError.textContent = "Succes";
    loginError.classList.add("text-success");
    loginError.classList.remove("text-danger");
    window.location.href = "home.html";
  } else {
    loginError.textContent = "Incorrect email or password";
    loginError.classList.add("text-danger");
    loginError.classList.remove("text-success");
  }
});
