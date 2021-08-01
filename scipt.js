let btn = document.querySelector(".btn-login");
let email = document.querySelector("#here1");
let password = document.querySelector("#here2");

let email2 = document.querySelector("#val1");
let pass = document.querySelector("#val2");

let link = document.querySelector("a");
link.addEventListener("click", function () {
  event.preventDefault();
});

let person = {
  email: "",
  password: "",
};

btn.addEventListener("click", () => {
  person.email = email.value;
  person.password = password.value;

  if (person.email == "") {
    alert("You need to type Email!");
  } else if (person.password == "") {
    alert("You need to type Password!");
  }

  //   email2.innerHTML = event.value;
  //   pass.innerHTML = password.value;
});
