let userName = document.querySelector("#userName");
let email = document.querySelector("#mail");
let passwordOfUser = document.querySelector("#password-btn");
let buttonShowPassword = document.querySelector("#show-btn");
const buttonSubmit = document.querySelector("#submit-btn");

const validation = [false, false, false];

buttonSubmit.disabled = true;

userName.addEventListener("change", function (event) {
  let nameOfUser = event.target.value;
  if (nameOfUser.length < 5) {
    alert("userName should be at least 5 caracter");
  } else {
    validation[0] = true;
    validationForm();
    toggleStyle();
  }
});
email.addEventListener("change", function (event) {
  let mail = event.target.value;
  if (!mail.includes("@")) {
    alert("fomr invalid of email");
  } else {
    validation[1] = true;
    validationForm();
    toggleStyle();
  }
});
passwordOfUser.addEventListener("change", function (event) {
  let password = event.target.value;
  let char = password[0];
  if (!(char === char.toUpperCase()) && !(password.length < 6)) {
    alert(
      "the first caracter of the password must be uppercase and the length"
    );
  } else {
    validation[2] = true;
    validationForm();
    toggleStyle();
  }
});

buttonShowPassword.addEventListener("click", function (event) {
  if (passwordOfUser.type === "password") {
    passwordOfUser.type = "text";
    buttonShowPassword.innerHTML = "hide password";
  } else {
    passwordOfUser.type = "password";
    buttonShowPassword.innerHTML = "show password";
  }
});
function validationForm() {
  let sum = 0;
  for (let i = 0; i < validation.length; i++) {
    if (validation[i] === true) {
      sum += 1;
    }
  }
  if (sum === validation.length) {
    return true;
  } else {
    return false;
  }
}

function toggleStyle() {
  if (validationForm()) {
    buttonSubmit.disabled = false;
    buttonSubmit.classList.add("btn-success");
  } else {
    buttonSubmit.disabled = true;
    buttonSubmit.classList.add("btn-primary");
  }
}

function login() {
  window.location.href = "home.html";
}

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  login();
});
