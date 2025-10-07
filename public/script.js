import { response } from "express";

const data = [];
function loginConfirm() {
  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value;
}
function showRegisterPage() {
  document.getElementById("password-register").type = "password";
  document.getElementById("password-repeat").type = "password";
  document.getElementById("password-login").type = "hidden";
  document.getElementById("login-button").style.display = "none";
  document.getElementById("register-page").style.display = "none";
  document.getElementById("register-button").style.display = "block";
  document.getElementById("login-page").style.display = "block";
}
function showLoginPage() {
  document.getElementById("password-register").type = "hidden";
  document.getElementById("password-repeat").type = "hidden";
  document.getElementById("password-login").type = "password";
  document.getElementById("register-button").style.display = "none";
  document.getElementById("login-page").style.display = "none";
  document.getElementById("login-button").style.display = "block";
  document.getElementById("register-page").style.display = "block";
}

document.getElementById("register-button").addEventListener("click", () => {
  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-register").value;
  const repeat = document.getElementById("password-repeat").value;
  if (password != repeat) {
    alert("Nem egyezik meg a két jelszó!");
    return;
  }
  if (!email || !password || !repeat) {
    alert("Minden mezőt ki kell tölteni!");
    return;
  }
  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
  alert("Sikeres a regisztráció");
  document.getElementById("password-register").value = "";
  document.getElementById("password-repeat").value = "";
  showLoginPage();
});
