// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generatePassword() {
  //   WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength;
  var allowUppercase;
  var allowLowercase;
  var allowNumbers;
  var allowSpecialCharacters;
  var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChars = lowerCaseChars.toUpperCase();
  var numbers = "0123456789";
  var specialChars = "!@#$%^&*()_+";
  var passwordChars = "";
  var newPassword = "";
  var charIndex;


  do {
    passwordLength = parseInt(prompt('Please enter the length of new password'));
    if ((passwordLength < 8) || (passwordLength > 128)) {
      // show an error message to the user 
      alert("You specified an invalid password length.  Please try again.");
      // prompt the user again for a valid password length
    }
  } while ((passwordLength < 8) || (passwordLength > 128));
  // THEN I confirm whether or not to include lowercase, 
  // uppercase, numeric, and/or special characters
  // WHEN I answer each prompt
  allowLowercase = confirm("Allow lowercase characters?");
  // alert("allowLowercase: " + allowLowercase);
  if (allowLowercase) {
    passwordChars = passwordChars + lowerCaseChars;
  }

  allowUppercase = confirm("Allow uppercase characters?");
  // alert("allowUppercase: " + allowUppercase);
  if (allowUppercase) {
    passwordChars = passwordChars + upperCaseChars;
  }

  allowNumbers = confirm("Allow numbers?");
  // alert("allowNumbers: " + allowNumbers);
  if (allowNumbers) {
    passwordChars = passwordChars + numbers;
  }

  allowSpecialCharacters = confirm("Allow special characters?");
  // alert("allowSpecialCharacters: " + allowSpecialCharacters);
  if (allowSpecialCharacters) {
    passwordChars = passwordChars + specialChars;
  }

  for (var i = 0; i < passwordLength; i++) {
    // Get a random index value by calling getRandomIndex() and 
    // assigning it to a variable (i.e. var charIndex)
    charIndex = getRandomIndex(passwordChars.length);
    // Use charIndex to get a character from passwordChars 
    //and append it to newPassword
    newPassword = newPassword + passwordChars.charAt(charIndex);
  }

  return newPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
