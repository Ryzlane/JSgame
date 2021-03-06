// **************************** START THE GAME ****************************

var buttonStart = document.querySelector("#buttonStart");
var rules = document.querySelector("#rules");

// GENERATE A RANDOM QUOTE ON THE TOP OF THE GAME
function randomQuote() {
  var selectCharacter = Math.floor(Math.random() * characters.length);
  var selectSentence = Math.floor(Math.random() * characters[selectCharacter].sentences.length);
  return characters[selectCharacter].sentences[selectSentence];
}

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
        document.getElementById("sentence").textContent = randomQuote();
        gainScore();
        gainScoreTotal();
      }
    },
    false
  );

}

// **************************** RESTART - LOSE VER. ****************************


function lost(){
  rules.style.display = "block";
  document.querySelector("#rulesText").style.display = "none";
  document.querySelector("#winText").style.display = "none";
  document.querySelector("#loseText").style.display = "block";
  divLives.lastElementChild.src='../images/lives/3.png';
  divScore.lastElementChild.src='../images/progress/0.png';
  
}


// **************************** RESTART - WIN VER. ****************************

function won(){
  setInterval(moveADoor, 1000);
  rules.style.display = "block";
  document.querySelector("#rulesText").style.display = "none";
  document.querySelector("#loseText").style.display = "none";
  document.querySelector("#winText").style.display = "block";
  divScore.lastElementChild.src='../images/progress/0.png';
  divLives.lastElementChild.src='../images/lives/3.png';
  
}