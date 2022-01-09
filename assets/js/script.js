// Grabbing Elements for Manipulation
var generateBtn = document.querySelector("#generate");
var checkboxLower = document.getElementById("char-lower");
var checkboxUpper = document.getElementById("char-upper");
var checkboxNum = document.getElementById("char-num");
var checkboxSpecial = document.getElementById("char-special");
var passwordLength = document.getElementById("password-length");

// character arrays
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNum = "012345679";
var charSpecial = "~`!@#$%^&*()_-+=[]{}\\|,./<>?";
var useableChar = "";

// var nullCheck = function() {
//   if ((lowerCheck = false) && (upperCheck = false) && (numCheck = false) && (specialCheck = false)) {
//     alert("You must fill out the form!");
//   }
// };

var lowerCheck = function () {
  if (checkboxLower.checked) {
    useableChar += charLower;
    // console.log("1");
  }else {
    return false;
  }
}
var upperCheck = function () {
  if (checkboxUpper.checked) {
    useableChar += charUpper;
    // console.log("2");
  }else {
    return false;
  }
}
var numCheck = function () {
  if (checkboxNum.checked) {
    useableChar += charNum;
    // console.log("3");
  }else {
    return false;
  }
}
var specialCheck = function () {
  if (checkboxSpecial.checked) {
    useableChar += charSpecial;
    // console.log("4");
  }else {
    return false;
  }
}
//updating password character array with user selection
var generateCharSet = function () {
  lowerCheck();
  upperCheck();
  numCheck();
  specialCheck();
  if ((lowerCheck = false) && (upperCheck === false) && (numCheck === false) && (specialCheck === false)) {
    alert("You must fill out the form.");
    return false;
  } 
  // console.log(useableChar);
};

// var generatePassword = function () {
//   var passwordString = "";
//   for (var i = 0; i < passwordLength.length; i++) {
//     passwordString = useableChar.indexOf(Math.floor(Math.random() * useableChar.length));
//     console.log(passwordString);
//     // passwordString += useableChar[arrRef];

//   }
// };

function generatePassword() {
  // nullCheck();
  if (generateCharSet == false){
    return false;
  } else {
    generateCharSet();
    console.log(useableChar);
    var passwordString = "";
    if (passwordLength.value < 8 || passwordLength.value > 128) {
      alert("Password length must be between 8 and 128 characters.");
      return "";
    }else {
      for (var i = 0, n =useableChar.length; i < passwordLength.value; ++i) {
          passwordString += useableChar.charAt(Math.floor(Math.random() * n));
      }
      return passwordString;
    }
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  if (password == false) {
    alert("You must fill out the form.");
    return "";
  } else {
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // console.log(checkboxUpper.checked);
  // reset useable char [] after password is generated
  console.log(passwordLength.value)
  useableChar = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);