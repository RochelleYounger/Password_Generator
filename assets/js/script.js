// Grabbing Elements for Manipulation
var generateBtn = document.querySelector("#generate");
var checkboxLower = document.getElementById("char-lower");
var checkboxUpper = document.getElementById("char-upper");
var checkboxNum = document.getElementById("char-num");
var checkboxSpecial = document.getElementById("char-special");
var passwordLength = document.getElementById("password-length");

// character arrays
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "U", "J", "K", "L", "M", "N", "O", 
"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSpecial = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", 
"{", "}", "[", "]", "|", "<", ">", "/", "?", "`", "'",, ",", ".", ";", ":", "\\"];
var useableChar = [];

var lowerCheck = function () {
  if (checkboxLower.checked) {
    useableChar.push(charLower);
    // console.log("1");
  }else {
    return false;
  }
}
var upperCheck = function () {
  if (checkboxUpper.checked) {
    useableChar.push(charUpper);
    // console.log("2");
  }else {
    return false;
  }
}
var numCheck = function () {
  if (checkboxNum.checked) {
    useableChar.push(charNum);
    // console.log("3");
  }else {
    return false;
  }
}
var specialCheck = function () {
  if (checkboxSpecial.checked) {
    useableChar.push(charSpecial);
    // console.log("4");
  }else {
    return false;
  }
}
//updating password character array with user selection
var generateArray = function () {
  lowerCheck();
  upperCheck();
  numCheck();
  specialCheck();
  // console.log(useableChar);
};

var passwordString = "";
var generatePassword = function () {
  for (var i = 0; i < passwordLength.length; i++) {
    var arrRef = Math.floor(Math.random() * (useableChar.length));
    console.log(passwordString);
    passwordString += useableChar[arrRef];

  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // console.log(checkboxUpper.checked);
  // reset useable char [] after password is generated
  console.log(passwordLength.value)
  // useableChar = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);