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
// ROUNDSCORE
let roundScore = 0;
// HOLDSCORE Button
const holdScore = document.querySelector('.holdScore');
// CURRENT PLAYER
let currentPlayer;
// POPUP
const popUp = document.querySelector('.popUp');
// NEW GAME
const newGame = document.getElementById('newGame');

// __________CSS EFFECTS________ //
// Hover DICE
wrapper.addEventListener("mouseover", function() {
  shadow.style.background = "rgba(54, 54, 54, .7)";
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
  playerUnSelected();
  // Animation Dé Statique
  diceStaticRotate();
  //  Reset roundScore
  roundScore = 0;
  roundScoreUn.textContent = 0;
  roundScoreDeux.textContent = 0;
  // Reset globalScore
  globalScore = 0;
  // PopUp ON
  popUp.classList.add('popUpActive')
}

newGame.addEventListener("click", startGame)

// ***  ROLLDICE() FUNCTION *** \\
const rollDice = () => {

  if(currentPlayer === undefined) {
    playerUnSelected();
  }

  // PopUp OFF
  popUp.classList.remove('popUpActive')


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

  // LEFT THROW else RIGHT THROW
  if (currentPlayer === 1) {
    dice.classList.remove("staticRotate");
    shadow.classList.remove("staticShadow");
    dice.classList.toggle('animationDiceLeft');
    shadow.classList.toggle('animationShadowLeft');
    setTimeout(function() {
      dice.classList.remove('animationDiceLeft')
    }, 1200);
    setTimeout(function() {
      shadow.classList.remove('animationShadowLeft')
    }, 1200)
  } else {
    dice.classList.remove("staticRotate");
    shadow.classList.remove("staticShadow");
    dice.classList.toggle('animationDiceRight');
    shadow.classList.toggle('animationShadowRight');
    setTimeout(function() {
      dice.classList.remove('animationDiceRight')
    }, 1200);
    setTimeout(function() {
      shadow.classList.remove('animationShadowRight')
    }, 1200)
  }

  // SCORE IS NOT 1 ?
  if (randomNumber !== 1) {
    setTimeout(function() {
      if(currentPlayer === 1) {
        roundScore+= randomNumber
        roundScoreUn.textContent = roundScore;
      } else {
        roundScore+= randomNumber
        roundScoreDeux.textContent = roundScore;
      }
      
    }, 1200)

  } else { 
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
      // Incrémente le compteur
    }, 1200)// Si le score est 1, PERDU.
  }

 }

 // THROW DICE
 dice.addEventListener("click", rollDice);


 // *** Initialiser partie (function) ***///
// SELECT INGAMEPLAYER
let players = [playerUn, playerDeux]

let inGamePlayer = 0;
let globalScore;


// HOLD FONCTION

const holdPush = () => {

  /*
1- Transfère roundScore vers globalScore du currentplayer
2- Reset le roundScore à 0
3- Change de currentplayer
*/

}

// SELECTPLAYER FONCTION

const selectPlayer = () => {

if (currentPlayer === 1) {
    currentPlayer = 2;
    playerDeux.classList.add('playerDeuxSelect');
    playerUn.classList.remove('playerUnSelect');
  } else if (currentPlayer === 2) {
    currentPlayer = 1;
    playerUn.classList.add('playerUnSelect');
    playerDeux.classList.remove('playerDeuxSelect');
  } else if (currentPlayer === undefined) {
    playerUn.classList.add('playerUnSelect');
  }

}

// RESET FONCTION

const reset = () => {

  /*

*/

}
// PLAYERUN SELECTED
const playerUnSelected = () => {
  playerUn.classList.add('playerUnSelect');
  playerDeux.classList.remove('playerDeuxSelect');
  currentPlayer = 1;

}

const playerDeuxSelected = () => {
  playerDeux.classList.add('playerDeuxSelect');
  playerUn.classList.remove('playerUnSelect');
  currentPlayer = 2;
}

// PLAYERDEUX SELECTED
