console.log("console, check");

let userName = prompt("Welkom! Wat is je naam?", "");
alert("Hey " + userName);

let randomNumber = function (max) {
  //deze werkt dus niet
  return Math.floor(Math.random() * Math.floor(max));
};
console.log(randomNumber(26));

// //dit werkt wel:
// 5;
// console.log(randomNumber);

//werkende code:

let numberInput = prompt(
  "Voer een nummer in van 0 tot 25 om te beginnen met raden...",
  ""
);
console.log(numberInput);

// expected output: a number between 0 and 25

if (parseInt(randomNumber) != parseInt(numberInput)) {
  alert("mis");
  prompt();
} else alert("Gefeliciteerd je hebt gewonnen. Het spel is nu af");

// //poging tot aanpassing
// function numberInput() {
//   let num = prompt(
//     "Voer een nummer in van 0 tot 25 om te beginnen met raden...",
//     ""
//   );

//   if (randomNumber != parseInt(num)) {
//     alert("mis");
//     numberInput();
//   } else {
//     alert("Gefeliciteerd je hebt gewonnen. Het spel is nu af");
//   }
// }

alert("Dag " + userName + ". Tot de volgende keer");
