const login = document.querySelector("#login");
const sginup = document.querySelector("#sginup");
const buttonnewuser = document.getElementById("buttonnewuser");
sginup.style.display = "none";
buttonnewuser.addEventListener("click", function () {
  login.style.display = "none";
  sginup.style.display = "inline-block";
});
