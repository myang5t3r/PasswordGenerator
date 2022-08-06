// Assignment code here
const generatePassword = ()=> {
  // Global variables
  var charArray = [
    (lowercase = "abcdefghijklmnopqrstuvwxyz"),
    (uppercase ="ABCDEFGHIJKLMNOPWXYZ"),
    (numbers = "0123456789"), 
    (specicalCharacters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~") 
    ];
  var char ="";
  var password = "";
  // Create object to store boolean for character types
  const types = {
    "lowercase":"",
    "uppercase":"", 
    "numbers":"", 
    "specialCharacters":"",
  };
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
    types[property] =confirm(`Would you like your password to contain ${property} characters`)
    }
    if ( types.lowercase || types.numbers || types.specialCharacters || types.uppercase === true){
      console.log("At least one yes")
    }else {
        alert("No character selected")
    }
  }
  console.log(types)
  // Conditions for which characters the use chose, if yes append to char string
  for(i=0; i<charArray.length; i++){
    console.log(Object.values(types)[i])
    if(Object.values(types)[i]===true){
        char = char.concat(charArray[i])
        console.log(charArray[i])
    }
  }
  // https://dev.to/code_mystery/random-password-generator-using-javascript-6a
  // Generate password
  for (var i = 0; i <= passwordLength; i++) {
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
