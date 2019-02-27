document.getElementById('body');
let possible = "abcd";
let character1;
let character2;
let character3;
let character4;
let previousSets = [];
let indexNumber;

function randomLetters() {
  text = document.createElement('div');

  for (let index = 0; index < previousSets.length + 2; index++) {
    if (previousSets[index - 1] == `${character1}${character2}${character3}${character4}` || character1 == character2 || character1 == character3 || character1 == character4 || character2 == character3 || character2 == character4 || character3 == character4) {
      character1 = possible.charAt(Math.floor(Math.random() * 4));
      character2 = possible.charAt(Math.floor(Math.random() * 4));
      character3 = possible.charAt(Math.floor(Math.random() * 4));
      character4 = possible.charAt(Math.floor(Math.random() * 4));
      index = 0
    };
    indexNumber = index;
  };

  previousSets.push(`${character1}${character2}${character3}${character4}`);
  text.innerText = `${indexNumber} ${character1}${character2}${character3}${character4}`;
  body.appendChild(text);
};

for (let index = 0; index < 24; index++) {
  randomLetters();
};