// __________DOM DECLARATIONS________ //
//DICE
const wrapper = document.querySelector('.wrapper');
const dice = document.querySelector('.dice');
const shadow = document.querySelector('.shadow');
const front = document.querySelector('.front');
const back = document.querySelector('.back');
// DICE Animation
const animationDiceLeft = document.querySelector('.animationDiceLeft');
const animationShadowLeft = document.querySelector('.animationShadowLeft');
const animationDiceRight = document.querySelector('.animationDiceRight');
const animationShadowRight = document.querySelector('.animationShadowRight');
const staticRotate = document.querySelector('.staticRotate');
const staticShadow = document.querySelector('.staticShadow');
// PLAYER Select
const playerUn = document.querySelector('.playerUn');
const playerDeux = document.querySelector('.playerDeux');
// PLAYER Scores
let roundScoreUn = document.getElementById('roundScore-1');
let roundScoreDeux = document.getElementById('roundScore-2');
let totalScoreUn = document.getElementById('totalScore-1');
let totalScoreDeux = document.getElementById('totalScore-2');
// ROUNDSCORE & TOTALSCORE
let roundScore = 0;
// HOLDSCORE Button
let holdScoreUn = document.getElementById('holdScore-1');
let holdScoreDeux = document.getElementById('holdScore-2');
// Player Title
const playerTitleUn = document.querySelector('.player-title1');
const playerTitleDeux = document.querySelector('.player-title2');


// Ne fonctionne que sur le premier HOLD SCORE BUTTON !

// CURRENT PLAYER
let currentPlayer;
// POPUP
const popUp = document.querySelector('.popUp');
const popUpText = document.querySelector('.popUpText');
// NEW GAME
const newGame = document.getElementById('newGame');

// __________CSS EFFECTS________ //
// Hover DICE
wrapper.addEventListener("mouseover", function() {
  shadow.style.background = "rgba(54, 54, 54, .6)";
  shadow.style.transition = ".5s all ease";
});
wrapper.addEventListener("mouseleave", function() {
  shadow.style.background = "";
});

// Dice staticRotate (default behaviour)
const diceStaticRotate = () => {
  dice.classList.add("staticRotate");
}
diceStaticRotate();

// __________FUNCTIONS________ //
// ***  STARTGAME() FUNCTION  *** \\
const startGame = () => {
  // Reset Scores
  roundScore = 0;
  totalScoreUnResult = 0;
  totalScoreDeuxResult = 0;
  totalScoreUn.textContent = 0;
  // roundScoreUn.textContent = 0;
  totalScoreDeux.textContent = 0;
  roundScoreDeux.textContent = 0;
  // Réactive les holdScore
  holdScoreUn.disabled = false;
  holdScoreDeux.disabled = false;
  playerTitleUn.textContent = "Player 1";
  playerTitleDeux.textContent = "Player 2"
  // Player 1 selected
  playerUnSelected();
  // Static Rotate Dice
  diceStaticRotate();
  // PopUp ON
  popUp.classList.add('popUpActive');
  popUpText.innerHTML="Click on the dice";

  // THROW DICE
  dice.addEventListener("click", rollDice);
}

newGame.addEventListener("click", startGame);

// ***  ROLLDICE() FUNCTION *** \\
const rollDice = () => {
  if (currentPlayer === undefined) {
    playerUnSelected();
  }
  // PopUp OFF
  popUp.classList.remove('popUpActive');
  // Create randomNumber between 1 & 6
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  // Dice faces Display
  switch (randomNumber) {
    case 1:
      front.style.backgroundImage = "url(images/die-1.png)";
      back.style.backgroundImage = "url(images/die-2.jpeg)";
      break;
    case 2:
      front.style.backgroundImage = "url(images/die-2.jpeg)";
      back.style.backgroundImage = "url(images/die-6.jpeg)";
      break;
    case 3:
      front.style.backgroundImage = "url(images/die-3.jpeg)";
      back.style.backgroundImage = "url(images/die-5.jpeg)";
      break;
    case 4:
      front.style.backgroundImage = "url(images/die-4.jpeg)";
      back.style.backgroundImage = "url(images/die-1.png)";
      break;
    case 5:
      front.style.backgroundImage = "url(images/die-5.jpeg)";
      back.style.backgroundImage = "url(images/die-4.jpeg)";
      break;
    case 6:
      front.style.backgroundImage = "url(images/die-6.jpeg)";
      back.style.backgroundImage = "url(images/die-3.jpeg)";
      break;
  }

  // LEFT THROW
  if (currentPlayer === 1) {
    dice.classList.remove("staticRotate");
    shadow.classList.remove("staticShadow");
    dice.classList.toggle('animationDiceLeft');
    shadow.classList.toggle('animationShadowLeft');
    setTimeout(function() {
      dice.classList.remove('animationDiceLeft')
    }, 1000);
    setTimeout(function() {
      shadow.classList.remove('animationShadowLeft')
    }, 1000)
  } else { // RIGHT THROW
    dice.classList.remove("staticRotate");
    shadow.classList.remove("staticShadow");
    dice.classList.toggle('animationDiceRight');
    shadow.classList.toggle('animationShadowRight');
    setTimeout(function() {
      dice.classList.remove('animationDiceRight')
    }, 1000);
    setTimeout(function() {
      shadow.classList.remove('animationShadowRight')
    }, 1000)
  }

  // SCORE IS NOT 1 ?
  if (randomNumber !== 1) {
    setTimeout(function() {
      if (currentPlayer === 1) {
        roundScore += randomNumber
        roundScoreUn.textContent = roundScore;
      } else {
        roundScore+= randomNumber
        roundScoreDeux.textContent = roundScore;
      }
    }, 1000)

  // SCORE IS 1 ?
  } else if (randomNumber === 1) { 
    setTimeout(function() {
      if (currentPlayer === 1) {
        roundScore = 0;
        roundScoreUn.innerText = 0;
        playerDeuxSelected()
      } else {
        roundScore = 0;
        roundScoreDeux.innerText = 0;
        playerUnSelected()
      }
    }, 1000)
  }
 }

// HOLD EVENT
holdScoreUn.addEventListener("click", () => {
  if (currentPlayer === 1) {
    totalScoreUnResult += roundScore;
    totalScoreUn.textContent = totalScoreUnResult;
    roundScoreUn.textContent = 0;
    playerDeuxSelected();
  }
})

holdScoreDeux.addEventListener("click", () => {
  if (currentPlayer === 2) {
    totalScoreDeuxResult += roundScore;
    totalScoreDeux.textContent = totalScoreDeuxResult;
    roundScoreDeux.textContent = 0;
    playerUnSelected();
  }
})

// PLAYER UN SELECTED
const playerUnSelected = () => {
  if (totalScoreDeuxResult >= 5) {
    // WIN FONCTION
    win();
  } else {
    diceStaticRotate();
  //  Reset Scores
  roundScore = 0;
  popUp.classList.add('popUpActive')
  popUpText.innerHTML="Au tour de Player 1"
  playerUn.classList.add('playerUnSelect');
  playerDeux.classList.remove('playerDeuxSelect');
  currentPlayer = 1;
  }
}

// PLAYER DEUX SELECTED
const playerDeuxSelected = () => {
  if (totalScoreUnResult >= 5) {
    // WIN FONCTION
    win();
  } else {
    diceStaticRotate();
    //  Reset Scores
    roundScore = 0;
    popUp.classList.add('popUpActive')
    popUpText.innerHTML="Au tour de Player 2"
    playerDeux.classList.add('playerDeuxSelect');
    playerUn.classList.remove('playerUnSelect');
    currentPlayer = 2;
  }
}

// WIN FONCTION
const win = () => {
  if (currentPlayer === 1) {
    (playerTitleUn.textContent = playerTitleUn.textContent + " a gagné !");
  } else {
    (playerTitleDeux.textContent = playerTitleDeux.textContent + " a gagné !")
  }
  holdScoreUn.disabled = true;
  holdScoreDeux.disabled = true;
  dice.removeEventListener("click", rollDice, false);
}