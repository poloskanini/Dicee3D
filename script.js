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

// Dice Static Rotate (default behaviour)
const diceStaticRotate = () => {
  dice.classList.add("staticRotate");
}
diceStaticRotate();

// FUNCTION STARTGAME

const startGame = () => {
  // 1- Animation Dé Statique
  diceStaticRotate();
  // 2- Initialiser le currentPlayer à 1
  currentPlayer = 1;
  // 3- Surligner le player 1
  playerUn.classList.add('playerUnSelect');
  // 4- Reseter le roundScore
  roundScore = 0;
  roundScoreUn.textContent = 0;
  roundScoreDeux.textContent = 0;
  // 5- Reseter le globalScore
  globalScore = 0;
  // 6- PopUp ON
  popUp.classList.add('popUpActive')
}

newGame.addEventListener("click", startGame)





// Lancement du dé par Joueur 1 (rollDiceLeft)

const rollDice = () => {

  popUp.classList.remove('popUpActive')



  let currentPlayer = 1;

  // Create randomNumber between 1 & 6 ( the "+ 1" excludes the zero)
  let randomNumber = Math.floor(Math.random() * 6) + 1;

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

  // Si player ONE : animationDiceLeft + animationShadowLeft
  // Si player TWO : animationDiceRight + animationShadowRight

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

  if (randomNumber !== 1) { // Si le score n'est pas 1, on continue :
    setTimeout(function() {
      console.log(roundScore+= randomNumber)
      roundScoreUn.textContent = roundScore;
    }, 1200)
  } else { 
    setTimeout(function() {
      console.log("merde");
      roundScore = 0;
      roundScoreUn.textContent = roundScore;
      // Incrémente le compteur
    }, 1200)// Si le score est 1, PERDU.
  }

 }

 // LANCER LES DÉS
 dice.addEventListener("click", rollDice);


 // *** Initialiser partie (function) ***///
// SELECT INGAMEPLAYER
let players = [playerUn, playerDeux]

let inGamePlayer = 0;
let globalScore;

 // roundScore


 // *** Démarrer partie (function) ***///
 /*
 - Si inGamePlayer est sur player 1,
 alors diceleft et shadowleft
 sinon diceRight et shadowright


  */


// Fonctions

// LOSE FONCTION
const lose = () => {

  /*
1- reset le roundScore à 0
2- Change de currentplayer en appelant la fonction SELECTPLAYER
*/

}

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

    /*
1- currentplayer === player-1 ? currentPlayer = player-2 : activePlayer = player-1;
3- Change de currentplayer
*/

}