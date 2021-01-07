// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword);

//define function that receives inputs from user and generates password
function generatePassword() {
let length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

let uppers = confirm("Should password include uppercase letters");
let lowers = confirm("Should password include lowercase letters");
let numbers = confirm("Should password include numbers");
let symbols = confirm("Should password include numbers");

//Fallback in case no character types are chosen
while (!uppers && !lowers && !numbers && !symbols) {
  alert("Please select at least one character type");
  uppers = confirm("Should password include uppercase letters");
  lowers = confirm("Should password include lowercase letters");
  numbers = confirm("Should password include numbers");
  symbols = confirm("Should password include numbers");
}

let password = "";

//Rando Script (linked in HTML) allows for easy(er) random selection of allowed values by randomly selecting random characters within a string
//This function chooses random characters from each string of allowed values based on (if) categories were selected in the generator prompts
let allowed = {};
if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
if (numbers) password += rando(allowed.numbers = "1234567890");
if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

//Loop through password length and allowed characters to assemble password
for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);
return password;
}