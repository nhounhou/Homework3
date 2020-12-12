// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(Form) {
  var password = generatePassword(Form);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(myForm) {
  // initialisation of all variables
  //   - init of allowed string of charaters
  var lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numCase=["0","1","2","3","4","5","6","7","8","9"];
  var specialCase=[",",".","/",";","[","]","<",">","?","{","}"];
  //   - init of internal variables
  var genPwd="";
  var genChar=0;
  var genType=0;
  var i=0;
  // Variable to activate console.log command, set debugMode to TRUE
  var debugMode=false;

  // Prompt for Password Criteria Type
  var isLower=myForm.chkLower.checked;
  var isUpper=myForm.chkUpper.checked;
  var isNum=myForm.chkNum.checked;
  var isSpecial=myForm.chkSpecial.checked;
  var pwdLength=myForm.txtLength.value;
  // isLower=confirm ("Do you want to include lower Character ?");
  // isUpper=confirm ("Do you want to include UPPER Character ?");
  // isNum=confirm ("Do you want to include Numeric Character ?");
  // isSpecial=confirm ("Do you want to include Special Character ?");

  // debugging command to check if Checkbox selection is recognized
  if (debugMode) {
    console.log(Lower);
    console.log(Upper);
    console.log(Num);
    console.log(Special);
    console.log(Longueur);
  }
  
  // checked if at least one Criteria has been confirmed
  if (!isLower && !isUpper && !isNum && !isSpecial) {
    //alert("Please select at least one Criteria Type!!!");
    // function return a message error and display in the webpage, in place of the generated password
    return ("No password has been generated\r\rNo Criteria Selected")
    } else {
    // Asking for the length of the Password
    //var pwdLength=prompt("length of Password (8 to 128 characters) ?");
    if (debugMode) {
      console.log("length="+pwdLength);
    }
    // Checking that the input length is within the acceptable range
    if (pwdLength<8 || pwdLength>128) {
        alert("Wrong length for Password, must be netween 8 to 128 Characters long");
    } else {
      /* loop to generate the password.
          - each type of criteria will be randomly selected : upper, lower, num or special.
          - for each type, check if the user has selected the criteria from the previous CONFIRM command 
            (isUpper, isLower, isNum or isSpecial).
          - if the boolean Criteria type of character is TRUE then add the randomly character
            to the Password.
          - on the fall thru of the IF statement, then the character is not generated so it will not be 
            added to the generated password. Decrement the counter (i) to generate a new character at the 
            same position in the password generation process.
          - continue until the length is met.
      */
      while (i<pwdLength) {
          genType=Math.floor(Math.random() * 4);

          /*
           if (debugMode) {
            console.log("genType:"+genType);
           }
          if (genType===0) {
              if (isLower) {
                // generate a character from the lower case array
                genChar = lowerCase[Math.floor(Math.random() * lowerCase.length)];
              }
          } else if (genType===1) {
              if (isUpper) {
                // generate a character from the upper case array
                genChar = upperCase[Math.floor(Math.random() * upperCase.length)];
              }
          } else  if (genType===2) {
              if (isNum) {
                // generate a character from the numeric number array
                genChar = numCase[Math.floor(Math.random() * numCase.length)];
              }
          } else {
              if (isSpecial) {
                // generate a character from the special character array
                genChar = specialCase[Math.floor(Math.random() * specialCase.length)];
              } else {
                genChar="";
                i--;
              }
          }
          */

          // Same commands than the IF...ELSE IF...ELSE block above by with a SWITCH command
          // Create a variable isGenerated to check that the character randomly generated fit the Password Type Criteria
          var isGenerated=false;
          switch (genType){
            case 0:
              if (isLower) {
                // generate a character from the lower case array
                genChar = lowerCase[Math.floor(Math.random() * lowerCase.length)];
                isGenerated=true;
              }
              break;
            case 1:
              if (isUpper) {
                // generate a character from the upper case array
                genChar = upperCase[Math.floor(Math.random() * upperCase.length)];
                isGenerated=true;
              }
              break;
            case 2:
              if (isNum) {
                // generate a character from the numeric number array
                genChar = numCase[Math.floor(Math.random() * numCase.length)];
                isGenerated=true;
              }
              break;
            default:
              if (isSpecial) {
                // generate a character from the special character array
                genChar = specialCase[Math.floor(Math.random() * specialCase.length)];
                isGenerated=true;
              }
          }
          if (!isGenerated){
            genChar="";
            i--;
          }

          // debugging console log to make sure that each generated character meet the selected criteria
          if (debugMode) {
            console.log ("genChar:"+genChar);
          }
          genPwd += genChar;
          if (debugMode) {
            console.log ("genPwd:"+genPwd);
            console.log(genPwd.length);
          }
          i++;
      }
      /* final return function with generated password and message with List of criteria selected
      the variable MessageCriteria will be build base on the answer of the PROMPT command at the start
      of the function
      */
      var messageCriteria="";
      if (isLower){
        messageCriteria += "\nWith Lower Case,";
      } else {
        messageCriteria += "\nNo Lower Case,";
      }
      if (isUpper){
        messageCriteria += " With Upper Case,";
      } else {
        messageCriteria += " No Upper Case,";
      }
      if (isNum){
        messageCriteria += "\nWith Numeric Character,";
      } else {
        messageCriteria += "\nNo Numeric Character,";
      }
      if (isSpecial){
        messageCriteria += " With Special Character.";
      } else {
        messageCriteria += " No Special Character.";
      }
      messageCriteria += "\nLength of "+pwdLength+" characters";

      return (genPwd+"\n"+messageCriteria);
      
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);