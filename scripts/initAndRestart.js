// **************************** START THE GAME ****************************

var buttonStart = document.querySelector("#buttonStart");
var rules = document.querySelector("#rules");

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
  clearInterval(setInterval(moveADoor, 1000));
  rules.style.display = "block";
  document.querySelector("#rulesText").style.display = "none";
  document.querySelector("#loseText").style.display = "block";
  
}


// **************************** RESTART - WIN VER. ****************************

function won(){
  clearInterval(setInterval(moveADoor, 1000));
  rules.style.display = "block";
  document.querySelector("#rulesText").style.display = "none";
  document.querySelector("#winText").style.display = "block";
  
}