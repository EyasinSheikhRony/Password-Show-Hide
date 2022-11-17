let eyeOpen = document.querySelector("#eye_icon");
let password = document.querySelector("#password");

eyeOpen.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    eyeOpen.src = "eye-open.png";
  } else {
    password.type = "password";
    eyeOpen.src = "eye-close.png";
  }
});
