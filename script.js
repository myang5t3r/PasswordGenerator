// Assignment code here
const generatePassword = ()=> {
  var passwordLength = prompt("Enter a numeric length for your password, must be between 8 and 128 characters")
  // turn into a number so we can check if the we have the right length
  passwordLength = Number(passwordLength)
  // Also check if a string was enter into the prompt
  if (Number.isNaN(passwordLength)) {
    alert("Please enter a number")
  } 
  else if(passwordLength < 8 || passwordLength > 128){
    alert("Password must be between 8 and 128 characters")
  }
  else{
    // Create object to store character types
    let types = {"lowercase":"",
    "uppercase":"", "numbers":"", "specialCharacters":""}
    for (let property in types){
    types[property] =prompt(`Would you like your password to contain ${property}, please answer yes or no. `)
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
      }
    }
    console.log(types)
    }
    }
}

 
   // Ask user if password should contain these
  


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
