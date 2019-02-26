//generate 4 random unique numbers
var number1 = null;
var number2 = null;
var number3 = null;
var number4 = null;
do {
  number1 = Math.floor(Math.random() * 10);
  number2 = Math.floor(Math.random() * 10);
  number3 = Math.floor(Math.random() * 10);
  number4 = Math.floor(Math.random() * 10);
} while (number1 == number2 || number1 == number3 || number1 == number4 || number2 == number3 || number2 == number4 || number3 == number4);
var totalNumber = `${number1}${number2}${number3}${number4}`;
document.getElementById("numbers").textContent = `${totalNumber}`;

//generate 4 random unique characters
var possible = "abcd";
var character1 = null;
var character2 = null;
var character3 = null;
var character4 = null;
do {
  character1 = possible.charAt(Math.floor(Math.random() * 4));
  character2 = possible.charAt(Math.floor(Math.random() * 4));
  character3 = possible.charAt(Math.floor(Math.random() * 4));
  character4 = possible.charAt(Math.floor(Math.random() * 4));
} while (character1 == character2 || character1 == character3 || character1 == character4 || character2 == character3 || character2 == character4 || character3 == character4);
var totalCharacters = `${character1}${character2}${character3}${character4}`;
document.getElementById("letters").textContent = `${totalCharacters}`;