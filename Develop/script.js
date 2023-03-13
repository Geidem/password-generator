// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("Choose length of password (8-128 characters)");
  var lowercaseChars = confirm("Include lowercase characters?");
  var uppercaseChars = confirm("include uppercase characters?");
  var numericChars = confirm("Include numeric characters?");
  var specialChars = confirm("Include special characters?");

  //validating user input
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    return;
  }

  if (!(lowercaseChars || uppercaseChars || numericChars || specialChars)) {
    alert("Select at least one character type to include in password.");
    return;
  }
  var password = generatePassword(passwordLength, lowercaseChars, uppercaseChars, numericChars, specialChars);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// function to actually generate password
function generatePassword(length, lowercase, uppercase, numeric, special) {
  var characterSet = "";
  var password = "";

  if (lowercase) {
    characterSet += "abcedefghijklmnopqrstuvwxyz";
  }

  if (uppercase) {
    characterSet += "ABCEDFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (numeric) {
    characterSet += "0123456789";
  }

  if (special) {
    characterSet += "!\$%&'()*+,-./:;<=>?@[]^_{}|~`";
  }

  for (var i = 0; i < length; i++) {
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }
  return password;
}


 