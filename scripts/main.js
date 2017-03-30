// **************************** VARIABLES ****************************

var buttonStart = document.querySelector("#buttonStart");
var rules = document.querySelector("#rules");
var divLives = document.getElementById("lives");
var divScore = document.getElementById("score");
var doorAndCharacterL1 = document.getElementById("doorAndCharacterL1");
var doorAndCharacterL2 = document.getElementById("doorAndCharacterL2");
var doorAndCharacterL3 = document.getElementById("doorAndCharacterL3");
var doorAndCharacterR1 = document.getElementById("doorAndCharacterR1");
var doorAndCharacterR2 = document.getElementById("doorAndCharacterR2");
var doorAndCharacterR3 = document.getElementById("doorAndCharacterR3");
var doorsAndCharacters = [doorAndCharacterL1, doorAndCharacterL2, doorAndCharacterL3, doorAndCharacterR1, doorAndCharacterR2, doorAndCharacterR3];
var answers = document.getElementsByClassName("avatars");
var scoreTotal = document.getElementById("scoreTotal").innerText;

//****************************** VAR AUDIO ****************************

var doorOpening = new Audio();
doorOpening.src = '../sounds/openDoor.wav'; // Opendoor

var doorClosing = new Audio();
doorClosing.src = '../sounds/closeDoor.wav'; // Close door

var playButton = new Audio();
playButton.src = '../sounds/play.wav'; // Game start

var gameMusic = new Audio();
gameMusic.src = '..sounds/game.wav'; // Game theme

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
  console.log(presence);
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

function loseLife() {
  var actualHealthBar = divLives.lastElementChild.src;
  var actualHealth = actualHealthBar[actualHealthBar.length - 5];
  var newHealth = actualHealth - 1;
  if (newHealth >= 0) {
    divLives.lastElementChild.src = '../images/lives/' + newHealth + '.png';
  }
}

function gainScore() {
  var actualScoreBar = divScore.lastElementChild.src;
  var actualScore = actualScoreBar[actualScoreBar.length - 5];
  var newScore = parseInt(actualScore) + 1;
  if (newScore <= 4) {
    divScore.lastElementChild.src = '../images/progress/' + newScore + '.png';
  }
}

function gainScoreTotal(){
  oldScore = scoreTotal.substr(14);
  newScore = parseInt(oldScore) + 10;
  scoreTotal += newScore;
}

// **************************** START THE GAME ****************************

// GENERATE A RANDOM QUOTE
document.getElementById("sentence").textContent = randomQuote();

// REMOVE RULES
buttonStart.addEventListener('click', function () {
    rules.style.display = "none";
    setInterval(moveADoor, 1000);
  },
  false
);

// CLICK ON CHARACTER
for (l = 0; l < answers.length; l++) {
  answers[l].addEventListener('click', function () {
      if (this.classList.contains("falseAnswer") === true) {
        console.log("PERDU !");
        loseLife();
      } else {
        console.log("GAGNÉ !")
        gainScore();
        gainScoreTotal();
      }
    },
    false
  );

}

// souris
// sons personnages ?
// voir comment gérer le son