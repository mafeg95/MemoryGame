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
  const cards = document.getElementsByClassName('card');
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

function showCardSymbol(event){
  if (event.target.nodeName === 'LI'){
    event.target.classList.add('show');
    event.target.classList.add('open');
    addToChecking(event);
  }
}

function addToChecking(event){
  checking.push(event.target);
  checkLength();
}

function checkLength(){
  debugger
  if (checking.length === 2){
    checkMatch();
  }
}

function checkMatch(){
  debugger
  if (checking[0].children[0].classList.value === checking[1].children[0].classList.value){
    setTimeout(matched, 500);
  } else{
    wrong();
  }
}

function matched(){
  debugger
  for (let i = 0; i < checking.length; i++) {
    checking[i].classList.add('match');
  }
  checking = [];
}

function wrong(){
  for (var i = 0; i < checking.length; i++) {
    checking[i].classList.add('wrong');
  }
  setTimeout(closed, 500);
}

function closed(){
  debugger
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
