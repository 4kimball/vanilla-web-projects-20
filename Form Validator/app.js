const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("form");

function userNameValidator(input, value, error) {
  if (value.length === 0) {
    input.style.borderColor = "red";
    error.innerText = "Username을 반드시 작성해주세요.";
  } else if (value.length < 6) {
    input.style.borderColor = "red";
    error.innerText = "Username은 6글자 이상으로 작성해주세요.";
  } else if (username.length > 15) {
    input.style.borderColor = "red";
    error.innerText = "Username은 15글자 이하로 작성해주세요.";
  } else {
    input.style.borderColor = "#33cc33";
    error.innerText = "";
  }
}

function emailValidator(input, value, error) {
  const emailCheck =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (value.length === 0) {
    input.style.borderColor = "red";
    error.innerText = "이메일을 반드시 작성해주세요.";
  } else if (!emailCheck.test(value)) {
    input.style.borderColor = "red";
    error.innerText = "이메일 형식에 맞게 작성해주세요.";
  } else {
    input.style.borderColor = "#33cc33";
    error.innerText = "";
  }
}

function passwordValidator(input, value, error) {
  const numberCheck = /\d/;
  const engCheck = /[a-zA-Z]/;
  const specialCheck = /[~!@#$%^&*()_+|<>?:{}]/;
  if (value.length === 0) {
    input.style.borderColor = "red";
    error.innerText = "비밀번호를 반드시 작성해주세요.";
  } else if (value.length < 6) {
    input.style.borderColor = "red";
    error.innerText = "비밀번호는 6글자 이상으로 작성해주세요.";
  } else if (value.length > 20) {
    input.style.borderColor = "red";
    error.inerrText = "비밀번호는 20글자 이하로 작성해주세요.";
  } else if (!engCheck.test(value)) {
    input.style.borderColor = "red";
    error.innerText = "비밀번호에 영문자를 포함시켜주세요.";
  } else if (!numberCheck.test(value)) {
    input.style.borderColor = "red";
    error.inerrText = "비밀번호에 숫자를 포함시켜주세요.";
  } else if (!specialCheck.test(value)) {
    input.style.borderColor = "red";
    error.innerText = "비밀번호에 특수문자를 하나 이상 포함시켜주세요.";
  } else {
    input.style.borderColor = "#33cc33";
    error.innerText = "";
  }
}

function confirmPasswordValidator(input, value, error, password) {
  if (value.length === 0) {
    input.style.borderColor = "red";
    error.innerText = "비밀번호를 한번 더 입력해주세요.";
  } else if (value !== password) {
    input.style.borderColor = "red";
    error.innerText = "비밀번호가 일치하지 않습니다.";
  } else {
    input.style.borderColor = "#33cc33";
    error.innerText = "";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameError = document.querySelector("#username-error");
  const emailError = document.querySelector("#email-error");
  const passwordError = document.querySelector("#password-error");
  const confirmPasswordError = document.querySelector(
    "#confirm-password-error"
  );
  userNameValidator(userName, userName.value, nameError);
  emailValidator(email, email.value, emailError);
  passwordValidator(password, password.value, passwordError);
  confirmPasswordValidator(
    confirmPassword,
    confirmPassword.value,
    confirmPasswordError,
    password.value
  );
});
