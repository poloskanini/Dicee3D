// Declarations
const wrapper = document.querySelector('.wrapper');
const dice = document.querySelector('.dice');
const shadow = document.querySelector('.shadow')
const front = document.querySelector('.front');
const back = document.querySelector('.back');
const animationDiceLeft = document.querySelector('.animationDiceLeft');
const animationShadowLeft = document.querySelector('.animationShadowLeft');
const animationDiceRight = document.querySelector('.animationDiceRight');
const animationShadowRight = document.querySelector('.animationShadowRight');
const staticRotate = document.querySelector('.staticRotate');
const staticShadow = document.querySelector('.staticShadow');

// Object Player
let Player = function(id) {
  this.id = id;
  this.roundScore = 0; // Pointer dans le DOM vers un element a la classe roundScore (intermédiaire)
  this.globalScore = 0; // Pointer dans le DOM vers un element a la classe globalScore (acquis)

}


let cpt = 0;

// __________CSS EFFECTS________ //
// Hover DICE
wrapper.addEventListener("mouseover", function() {
  // on met l'accent sur la cible de mouseenter
  shadow.style.background = "rgba(30, 30, 40, 0.9)";
  shadow.style.transition = ".5s all ease";
});

wrapper.addEventListener("mouseleave", function() {
  // on met l'accent sur la cible de mouseenter
  shadow.style.background = "";
});

// Initialize the staticRotate (default behaviour)
dice.classList.add("staticRotate");
shadow.classList.add("staticShadow")

// _____________________________ //


// Lancement du dé par Joueur 1 (rollDiceLeft)

dice.addEventListener("click", rollDice);

function rollDice() {



  // Si player ONE : dicerotateLeft

  dice.classList.remove("staticRotate");
  shadow.classList.remove("staticShadow");
  dice.classList.toggle('animationDiceLeft');
  shadow.classList.toggle('animationShadowLeft');
  
  setTimeout(function() {
   dice.classList.remove('animationDiceLeft')
 }, 2200);
 setTimeout(function() {
   shadow.classList.remove('animationShadowLeft')
 }, 2200)


 // else PLAYER TWO : dicerotateright


 // Create 2 variables generating 2 random numbers between 1 & 6 ( the "+ 1" excludes the zero)
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

  if (randomNumber !== 1) { // Si le score n'est pas 1, on continue :
    setTimeout(function() {
      console.log(cpt += randomNumber) // Incrémente le compteur
    }, 2000);
  } else { // Si le score est 1, PERDU.
    setTimeout(function() {
      console.log("merde");
      cpt = 0; // Réinitialise le compteur à zéro
    }, 2000);
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