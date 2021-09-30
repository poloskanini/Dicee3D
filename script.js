// __________DOM DECLARATIONS________ //
//DICE
const wrapper = document.querySelector('.wrapper');
const dice = document.querySelector('.dice');
const shadow = document.querySelector('.shadow')
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
// HOLDSCORE Button
const hold = document.querySelector('.holdScore')
// NEW GAME
const start = document.getElementById('newGame')
// ROUNDSCORE
let roundScore = 0;


// __________CSS EFFECTS________ //
// Hover DICE
wrapper.addEventListener("mouseover", function() {
  shadow.style.background = "rgba(54, 54, 54, .7)";
  shadow.style.transition = ".5s all ease";
});
wrapper.addEventListener("mouseleave", function() {
  shadow.style.background = "";
});

// __________FUNCTIONS________ //
// Dice Static Rotate (default behaviour)
function diceStaticRotate() {
  dice.classList.add("staticRotate");
}
diceStaticRotate();


// Lancement du dé par Joueur 1 (rollDiceLeft)

dice.addEventListener("click", rollDice);

function rollDice() {


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


  dice.classList.remove("staticRotate");
  // shadow.classList.remove("staticShadow");
  dice.classList.toggle('animationDiceLeft');
  shadow.classList.toggle('animationShadowLeft');
  
  setTimeout(function() {
   dice.classList.remove('animationDiceLeft')
 }, 1200);
 setTimeout(function() {
   shadow.classList.remove('animationShadowLeft')
 }, 1200)


  if (randomNumber !== 1) { // Si le score n'est pas 1, on continue :
    setTimeout(function() {
      console.log(roundScore += randomNumber) // Incrémente le compteur
    }, 1200)
  } else { 
    setTimeout(function() {
      console.log("merde");
      roundScore = 0; // Incrémente le compteur
    }, 1200)// Si le score est 1, PERDU.
  }

 }


 // function HOLD :
 // 


 // 2 Joueurs sur un même écran

 // Chaque joueur a un "score temporaire" et un "score global"

 // A chaque tour, chaque joueur a son "score temporaire" initialisé à 0 et peut lancer le dé autant qu'il veut. Chaque résultat du dé est ajouté au "score temporaire".

 // Durant son tour, chaque joueur peut décider : 
 // - Cliquer sur l'option "hold" qui permet d'envoyer les points du score temporaire vers le "score global"
 // - Lancer le dé. S'il obtient 1, le "score temporaire" repasse à zéro, les points sont perdus et on change de tour.

 // Le premier qui atteint 100 points a gagné.


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


