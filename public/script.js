const data = [];
function loginConfirm() {
  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value;

  console.log(email, password);
  if (
    sessionStorage.getItem("email") == email &&
    sessionStorage.getItem("password") == password
  ) {
    alert("Sikeres bejelentkezés");
    document.getElementById("email-login").value = "";
    document.getElementById("password-login").value = "";
    return;
  } else {
    alert("A jelszó vagy az email nem helyes");
    return;
  }
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
  data.push(email, password);
  console.log(data);
  if (
    sessionStorage.getItem("email") == "" ||
    sessionStorage.getItem("password") == ""
  ) {
    alert("Minden mező kitöltése kötelező!");
  }
  alert("Sikeres a regisztráció");
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("password", password);
  sessionStorage.setItem("repeat", repeat);
  document.getElementById("password-register").value = "";
  document.getElementById("password-repeat").value = "";
  showLoginPage();
});
