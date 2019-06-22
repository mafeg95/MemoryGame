/*
 * Create a list that holds all of your cards
 */

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


function getSuit(array){
  let cardsArray = [];
  for (let i = 0; i < array.length; i++) {
    cardsArray.push(array[i].innerHTML);
  }
  return cardsArray;
}

function setSuit(array){
  // const cards = document.getElementsByClassName('card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].innerHTML = array[i];
  }
  return cards;
}

let cards = document.getElementsByClassName('card');
let suits = getSuit(cards);
let shuffled = shuffle(suits);
let changed = setSuit(shuffled);



// for (let i = 0; i < changed.length; i++) {
//   changed[i].addEventListener("click", (e) => {
//     showCardSymbol(e);
//   });
// }

let checking = [];
let pairs = 0;
let counter = 0;

function showCardSymbol(event){
  if (event.target.nodeName === 'LI'){
    event.target.classList.add('show');
    event.target.classList.add('open');
    addToChecking(event);
  }
}

function addToChecking(event){
  if (checking[0] !== event.target){
    checking.push(event.target);
  }
  checkLength();
}

function checkLength(){
  if (checking.length === 2){
    checkMatch();
  }
}

function checkMatch(){
  if (checking[0].children[0].classList.value === checking[1].children[0].classList.value){
    setTimeout(matched, 500);
  } else{
    wrong();
  }
  counter += 1;
  updateMoves();
}

function matched(){
  for (let i = 0; i < checking.length; i++) {
    checking[i].classList.add('match');
  }
  checking = [];
  pairs += 1;
  won();
}

function wrong(){
  for (var i = 0; i < checking.length; i++) {
    checking[i].classList.add('wrong');
  }
  setTimeout(closed, 500);
}

function closed(){
  for (var i = 0; i < checking.length; i++) {
    checking[i].classList.remove('show');
    checking[i].classList.remove('open');
    checking[i].classList.remove('wrong');
  }
  checking = [];
}

let deck = document.getElementsByClassName('deck')[0];

deck.addEventListener('click', (e) => {
  showCardSymbol(e);
});

var timer = 0;
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    setInterval( function(){
        document.getElementById("seconds").innerHTML=pad(++timer%60);
        document.getElementById("minutes").innerHTML=pad(parseInt(timer/60,10));
    }, 1000);


function updateMoves(){
  let moves = document.getElementsByClassName('moves');
  moves[0].innerHTML = counter;
  updateStar();
}

function updateStar(){
  let stars = document.getElementsByClassName('fa-star');
  if (counter % 10 === 0){
    stars[0].classList.add('fa-star-o');
    stars[0].classList.remove('fa-star');
  }
}

function won() {
  seconds = document.getElementById("seconds").innerHTML;
  minutes = document.getElementById("minutes").innerHTML;
  if (pairs === 8){
    setTimeout(alert(`Congratulations! You won in ${counter} moves, and in ${minutes}:${seconds}`), 500);
    reset();
  }
}

function reset() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.remove('match');
    cards[i].classList.remove('open');
    cards[i].classList.remove('show');
  }
  counter = 0;
  updateMoves();
  resetStars();
  pairs = 0;
  timer = 0;
  shuffle(cards);
}

// function resetStars(){
//   let stars = document.getElementsByClassName('fa-star-o');
//   if (stars ){
//     for (var i = 0; i < 3; i++) {
//       // debugger
//       stars[0].classList.add('fa-star');
//       stars[0].classList.remove('fa-star-o');
//     }
//   }
// }

let restartButton = document.getElementsByClassName('restart')[0];

restartButton.addEventListener('click', reset);

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
