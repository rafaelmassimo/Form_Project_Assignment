const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;;
const emailInput = document.getElementById('email');
emailInput.addEventListener("change", validateEmail);

function validateEmail() {
  const emailValue = emailInput.value;
  let feedbackEmail = document.getElementById("email-valid");
  if (emailRegex.test(emailValue)) {
    feedbackEmail.style.display = "block";
    feedbackEmail.style.color = "#ffc632";
    feedbackEmail.textContent = "E-mail added correctly";

    console.log('Email is valid');
  } else {
    feedbackEmail.style.display = "block";
    feedbackEmail.style.color = "red";
    feedbackEmail.textContent = "This e-mail was not accepted, try again";
  };

emailInput.addEventListener("input", hideText);
function hideText() {
    let feedbackEmail = document.getElementById("email-valid");
    feedbackEmail.style.display = "none"
    if (emailInput = emailInput.addEventListener("change")) {
        validateEmail()
        }
    }
};


var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// Function for when the input field is selected
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// Function for when the password field lose focus
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// Function for when the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}


