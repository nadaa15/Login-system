let welcomeName = document.querySelector(".userName");
let logoutBtn = document.querySelector(".logout-button");

welcomeName.textContent = localStorage.getItem("username");

//! logout

logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("username");
    window.location.href = "index.html";
})