let form = document.querySelector("form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");

//show error function
function showError(input, msg) {
  let parent = input.parentElement;
  parent.className = "form-control error";
  let small = parent.querySelector("small");
  small.innerText = msg;
}

//show success function
function showSuccess(input) {
  let parent = input.parentElement;
  parent.className = "form-control success";
}

//email validation
function emailValidation(email) {
  let emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  // return emailRegex.test(email);
  if(emailRegex.test(email.value.trim())){
    showSuccess(email)
  }else{
    showError(email,"Email not valid")
  }
}

//upper case the first letter of small error
function firstUpper(el) {
  return el.id.charAt(0).toUpperCase() + el.id.slice(1);
}

//checkLength funtion
function chechLength(input,min,max){
  if(input.value.length<min)
  {
    showError(input,`${firstUpper(input)} must be greater than ${min}`)
  }
  else if(input.value.length>max)
  {
    showError(input,`${firstUpper(input)} must be smaller than ${max}`)
  }
}

//is the password are match
function isPasswordMatch(pass1,pass2)
{
  if(pass1.value==pass2.value)
  {
    showSuccess(pass1,pass2)
  }else{
    showError(pass2,`${firstUpper(pass1)} is not mathched`)
  }
}

//check validation
function checkValidity(inputs) {
  inputs.forEach((el) => {
    if (el.value.trim() == "") {
      showError(el, `${firstUpper(el)} is invalid`);
    } else {
      showSuccess(el);
    }
  });
}

//form validation
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkValidity([username, email, password, password2]);
  
  chechLength(username,3,15)
  chechLength(password,6,25)
  emailValidation(email)
  isPasswordMatch(password,password2)
});


