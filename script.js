// Assignment code here
const generatePassword = ()=> {
  
  var passwordLength = prompt("Enter a numeric length for your password, must be between 8 and 128 characters")
  // make into a number so we can check if the we have the right length
  passwordLength = Number(passwordLength)
  // Also check if a string was enter into the prompt
  if (Number.isNaN(passwordLength)) {
    alert("Please enter a number")
  }
  if(passwordLength < 8 || passwordLength > 128){
    alert("Password must be between 8 and 128 characters")
    console.log(typeof passwordLength)
  }
  // Ask user if password should contain these
  const passwordTypes = ["lowercase", "uppercase", "numeric", "Special Characters"]
  passwordTypes.forEach(Element =>  
    Element = prompt() 
    );

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
