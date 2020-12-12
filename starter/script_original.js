// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var genPassword=" ";
  var lowerChar="abcdefghijklmnopqrstuvwxyz";
  var upperChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numChar="0123456789";
  var specialChar=" !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var charSet="";

  // prompt with Password Criteria
  // Strong password
  var isStrong=confirm("Do you want to generate a Strong Password ?");

  // prompt with password length ( 8 - 128 char)
  var passLen=prompt("Enter the length of the password");

  // prompt with character type
  //  - lowercase
  var isLower=confirm("Do you want to add Lower Case Letter ?");
  //  - uppercase
  var isUpper=confirm("Do you want to add Upper Case Letter ?");
  //  - numeric
  var isNum=confirm("Do you want to add Numeric Character ?");
  //  - special character
  var isSpecial=confirm("Do you want to add Specail Character ?");

  if (isLower){
    charSet +=lowerChar;
  }

  if (isUpper){
    charSet +=upperChar;
  }

  if (isNum){
    charSet +=numChar;
  }

  if (isSpecial){
    charSet +=specialChar;
  }

  n=charSet;
  console.log(n);
  for (var i=0; i<passLen; ++i) {
    genPassword += charSet.charAt(Math.floor(Math.random() * n));
    console.log(genPassword);
  }

  return genPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
