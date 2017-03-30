// **************************** VARIABLES ****************************

var buttonStart = document.querySelector("#buttonStart");
var rules = document.querySelector("#rules");
var divLives = document.getElementById("lives");
var lives = ["../images/lives/3hearts.png", "../images/lives/2hearts.png", "../images/lives/1heart.png", "../images/lives/0heart.png"]
var doorAndCharacterL1 = document.getElementById("doorAndCharacterL1");
var doorAndCharacterL2 = document.getElementById("doorAndCharacterL2");
var doorAndCharacterL3 = document.getElementById("doorAndCharacterL3");
var doorAndCharacterR1 = document.getElementById("doorAndCharacterR1");
var doorAndCharacterR2 = document.getElementById("doorAndCharacterR2");
var doorAndCharacterR3 = document.getElementById("doorAndCharacterR3");
var doorsAndCharacters = [doorAndCharacterL1, doorAndCharacterL2, doorAndCharacterL3, doorAndCharacterR1, doorAndCharacterR2, doorAndCharacterR3];


// **************************** FONCTIONS ****************************

function randomCharacter(door) {
  var randomCharac = Math.floor(Math.random() * characters.length);
  var newImage = characters[randomCharac].image;
  door.lastElementChild.innerHTML = newImage;
}

function moveADoor() {
  var random = Math.floor(Math.random() * doorsAndCharacters.length);
  if (doorsAndCharacters[random].classList.contains("close") === true) {
    doorsAndCharacters[random].classList.remove("close");
    randomCharacter(doorsAndCharacters[random]);
  } else {
    doorsAndCharacters[random].classList.add("close");
  }
}

function randomQuote() {
  var selectCharacter = Math.floor(Math.random() * characters.length);
  var selectSentence = Math.floor(Math.random() * characters[selectCharacter].sentences.length);

  return characters[selectCharacter].sentences[selectSentence];
}

var answers = document.getElementsByClassName("falseAnswer", "rightAnswer");
console.log(answers[0]);

// CLICK ON CHARACTER

for (l = 0; l <  answers.length; l++){
  answers[l].addEventListener('click', function(){
      if (this.classList.contains("falseAnswer") === true){
        console.log("PERDU !");
      }
      else {
        console.log("GAGNÉ !")
      }
    },
    false
  );

}

// **************************** ACTIONS ****************************

// START THE GAME
buttonStart.addEventListener('click', function(){
    rules.style.display = "none";
    setInterval(moveADoor, 1000);
  },
  false
);

// GENERATE A RANDOM QUOTE

document.getElementById("sentence").textContent = randomQuote();


// souris
// tumblewheed
// sons personnages ?
// voir comment gérer le son
// approfondir/illustrer l'event de communication