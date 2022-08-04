// Assignment code here
const generatePassword = ()=> {
  // Global variables
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase ="ABCDEFGHIJKLMNOPWXYZ"
  var numbers = "0123456789";
  var specicalCharacters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"; 
  var char ="";
  var password = "";
  var passwordLength = prompt("Enter a length for your password, must be between 8 and 128 characters")
  // Create object to store character types
  const types = {"lowercase":"",
  "uppercase":"", "numbers":"", "specialCharacters":""};
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
    types[property] =prompt(`Would you like your password to contain ${property} characters, please answer yes or no. `)
    // make lower case incase user 
    types[property] = types[property].toLowerCase();
    // make sure user inputs yes or no
    if (types[property] != "yes" ){
      if (types[property] != "no" ){
        alert("You must enter yes or no, Sorry but you will have to start over")
        break;
      }
      // Check if at least one character type is selected 
    if(types.uppercase === "no"){
      if(types.lowercase === "no"){
        if(types.specialCharacters === "no"){
          if(types.numbers === "no"){
            alert("No characters selected, you must choose at least one type of character")
          }
        }
      }
    }}}}

  // Conditions for which characters the use chose, if yes append to char string
  if(Object.values(types)[0] === "yes"){
    char = char.concat(lowercase)
  }
  if(Object.values(types)[1] === "yes"){
    char = char.concat(uppercase)
  }
  if(Object.values(types)[2] === "yes"){
    char = char.concat(numbers)
  }
  if(Object.values(types)[3] === "yes"){
    char = char.concat(specicalCharacters)
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
