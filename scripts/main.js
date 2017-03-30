// **************************** VARIABLES ****************************

var buttonStart = document.querySelector("#buttonStart");
var rules = document.querySelector("#rules");
var doorAndCharacterL1 = document.getElementById("doorAndCharacterL1");
var doorAndCharacterL2 = document.getElementById("doorAndCharacterL2");
var doorAndCharacterL3 = document.getElementById("doorAndCharacterL3");
var doorAndCharacterR1 = document.getElementById("doorAndCharacterR1");
var doorAndCharacterR2 = document.getElementById("doorAndCharacterR2");
var doorAndCharacterR3 = document.getElementById("doorAndCharacterR3");
var doorsAndCharacters = [doorAndCharacterL1, doorAndCharacterL2, doorAndCharacterL3, doorAndCharacterR1, doorAndCharacterR2, doorAndCharacterR3];
var answers = document.getElementsByClassName("avatars");

// **************************** FONCTIONS ****************************

// GENERATE "rightAnswer" CLASS

function changeClass(objectNewCharacter) {
  var actualQuote = document.getElementById("sentence").textContent;
  var presence = 0;
  objectNewCharacter.sentences.forEach(function (sentenceToCompare) {
    if (sentenceToCompare === actualQuote){
      presence++;
    }
  });
  if (presence > 0){
    return "rightAnswer";
  } else {
    return "falseAnswer";
  }
}

// GENERATE A RANDOM CHARACTER INSIDE DOORS
function randomCharacter(door) {
  var randomCharac = Math.floor(Math.random() * characters.length);
  var newImage = characters[randomCharac].image;
  door.lastElementChild.innerHTML = newImage;
  door.lastElementChild.classList.remove("falseAnswer", "rightAnswer");
  door.lastElementChild.classList.add(changeClass(characters[randomCharac]));
}

// OPEN AND CLOSE THE DOORS WITH A NEW CHARACTER EACH TIME
function moveADoor() {
  var random = Math.floor(Math.random() * doorsAndCharacters.length);
  if (doorsAndCharacters[random].classList.contains("close") === true) {
    doorsAndCharacters[random].classList.remove("close");
    randomCharacter(doorsAndCharacters[random]);
    doorOpening.play();
  } else {
    doorsAndCharacters[random].classList.add("close");
    doorClosing.play();
  }
}
// GENERATE A RANDOM QUOTE ON THE TOP OF THE GAME
function randomQuote() {
  var selectCharacter = Math.floor(Math.random() * characters.length);
  var selectSentence = Math.floor(Math.random() * characters[selectCharacter].sentences.length);
  return characters[selectCharacter].sentences[selectSentence];
}