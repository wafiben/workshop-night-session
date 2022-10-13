let userName = document.querySelector("#userName");
let email = document.querySelector("#mail");
let passwordOfUser = document.querySelector("#password");
let buttonShowPassword = document.querySelector("#show-btn");

userName.addEventListener("change", function (event) {
  let nameOfUser = event.target.value;
  if (nameOfUser.length < 5) {
    alert("userName should be at least 5 caracter");
  }
});
email.addEventListener("change", function (event) {
  let mail = event.target.value;
  if (!mail.includes("@")) {
    alert("fomr invalid of email");
  }
});
passwordOfUser.addEventListener("change", function (event) {
  let password = event.target.value;
  let char = password[0];
  if (!(char === char.toUpperCase()) && !(password.length < 6)) {
    alert(
      "the first caracter of the password must be uppercase and the length"
    );
  }
});
buttonShowPassword.addEventListener("click", function (event) {});
