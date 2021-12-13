// Assignment Code
var generateBtn = document.querySelector("#generate");
var checkboxLower = document.getElementById("char-lower");
var checkboxUpper = document.getElementById("char-upper");
var checkboxNum = document.getElementById("char-num");
var checkboxSpecial = document.getElementById("char-special");
var submit = document.getElementById("submit");
// console.log(checkboxLower);

// character arrays
var charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "U", "J", "K", "L", "M", "N", "O", 
"P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSpecial = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", 
"{", "}", "[", "]", "|", "<", ">", "/", "?", "`", "'",, ",", ".", ";", ":", "\\"];

var useableChar = [];
// grabbing html elements for manipulation

// functionality
var randomNum = function (argument) {
  var arrayReference = Math.floor(Math.random() * argument);
  return arrayReference;
};

var generateArray = function () {
  if (checkboxLower = true) {
    useableChar.push(charLower);
  }
  console.log(useableChar);
  if (checkboxUpper = true) {
    useableChar.push(charUpper)
  }
  console.log(useableChar);
  if (checkboxNum = true) {
    useableChar.push(charNum);
  }
  console.log(useableChar);
  if (checkboxSpecial = true) {
    useableChar.push(charSpecial)
  }
  console.log(useableChar);
};

submit.addEventListener("submit", generateArray);


var updateArr = function () {};

var generatePassword = function () {
  for (var i = 0; i < passwordLength; i++) {};
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/******************PSEUDOCODE********************* 
STORE VALUES IN ARRAYS

SELECT PREFERENCES FOR PASSWORD
* SELECT CHAR TYPES -> Radiobuttons
* SELECT PASSWORD LENGTH (8-128) -> create prompt
* VALIDATE SELECTION -> if statement
* SE SELECTION TO REFERENCE ARRAYS

GENERATE PASSWORD RANDOMLY FROM ARRAYS SELECTED
* USE MATH.RANDOM METHOD

DISPLAY PASSWORD IN DOCUMENT
* REFERENCING DOM
*/