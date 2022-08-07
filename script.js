// Assignment code here
const generatePassword = ()=> {
  // Global variables
    // Create object to store boolean and character types
    const types = {
      "lowercase":["","abcdefghijklmnopqrstuvwxyz"],
      "uppercase":["","ABCDEFGHIJKLMNOPWXYZ"], 
      "numbers":["","0123456789"], 
      "specialCharacters":["","!#$%&()*+,-./:;<=>?@[\]^_`{|}~"]
    };
  var char ="";
  var password = "";
  var passwordLength = prompt("Enter a length for your password, must be between 8 and 128 characters")
  // turn into a number so we can check if the we have the right length
  passwordLength = Number(passwordLength);
  // Also check if a string was enter into the prompt
  if (Number.isNaN(passwordLength)) {
    alert("Please enter a number")
  } 
  else if(passwordLength < 8 || passwordLength > 128){
    alert("Password must be between 8 and 128 characters");
  }
  else{
    for (let property in types){
    types[property][0] =confirm(`Would you like your password to contain ${property} characters`)
    }
    if ( types.lowercase[0] || types.numbers[0] || types.specialCharacters[0] || 
      types.uppercase[0] === true){
      console.log("At least one yes")
    }else {
        alert("No character selected")
    }
  }
  // Conditions for which characters the use, if true append to char string
  for(i=0; i < Object.values(types).length; i++){
    if(Object.values(types)[i][0]===true){
        char = char.concat(Object.values(types)[i][1])
    }
  }
  // https://dev.to/code_mystery/random-password-generator-using-javascript-6a
  // Generate password
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * char.length);
    password += char.substring(randomNumber, randomNumber +1);
   }
   return password;
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
