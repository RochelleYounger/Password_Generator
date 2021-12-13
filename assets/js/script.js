// Assignment Code
var generateBtn = document.querySelector("#generate");

// character arrays
var charL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var charN = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charS = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", 
"{", "}", "[", "]", "|", "<", ">", "/", "?", "`", "'",, ",", ".", ";", ":", "\\"]

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