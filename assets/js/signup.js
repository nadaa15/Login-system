let signupName = document.querySelector(".signup-name");
let signupEmail = document.querySelector(".signup-email");
let signupPassword = document.querySelector(".signup-pass");
let signupError = document.getElementById("signup-error");
let signupButton = document.querySelector(".signup-button");


export let signupArr = [];

if (localStorage.getItem("user") == null) {
  signupArr = [];
} else {
  signupArr = JSON.parse(localStorage.getItem("user"));
}
console.log(signupArr);


//! validation

let nameRegex = /^[a-zA-Z]+[ a-zA-Z]*$/
export let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]/;
export let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function validateName() {
    if (!signupName.value.match(nameRegex)) {
        signupError.textContent="Name can't include numbers or special characters"
    }
    else {
        signupError.textContent = "";

    }
}
function validateEmail() {
    if (!signupEmail.value.match(emailRegex)) {
        signupError.textContent="Email not valid"
    }
    else {
        signupError.textContent = "";

    }
}
function validatePassword() {
  if (!signupPassword.value.match(passwordRegex)) {
    signupError.textContent =
      "Password must have minimum eight characters, at least one letter and one number";
  } else {
    signupError.textContent = "";
  }
}
signupName?.addEventListener("input", () => {
  validateName();
});
 signupEmail?.addEventListener("input", () => {
   validateEmail();
 });
 signupPassword?.addEventListener("input", () => {
   validatePassword();
 });


//! Check if email exist
function isExist() {
    for (let i = 0; i < signupArr.length; i++) {
        if (signupArr[i].email == signupEmail.value) {
            return true
        }
    }
    
}
function isEmpty() {
  if (!signupName.value || !signupEmail.value || !signupPassword.value) {
    return true
  }
}
//! signup

signupButton?.addEventListener("click", () => {
   
    let userData = {
        userName: signupName.value,
           email: signupEmail.value,
           password: signupPassword.value,
    };
    
    if (signupArr.length == 0) {
        signupArr.push(userData)
        localStorage.setItem("user", JSON.stringify(signupArr));
        signupError.textContent = "Success";
        signupError.classList.add("text-success");
        signupError.classList.remove("text-danger");
        window.location.href = "index.html";
    }
    else if (isExist() == true) {
      signupError.textContent = "Email aleardy exists";
      signupError.classList.remove("text-success");
      signupError.classList.add("text-danger");
    } else if (isEmpty() == true) {
      signupError.textContent = "Please enter all information";
      signupError.classList.remove("text-success");
      signupError.classList.add("text-danger");
    } else {
      signupArr.push(userData);
      localStorage.setItem("user", JSON.stringify(signupArr));
      signupError.textContent = "Success";
      signupError.classList.add("text-success");
      signupError.classList.remove("text-danger");
      window.location.href = "index.html";
    }
        
    }
)








