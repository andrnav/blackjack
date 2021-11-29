// let firstCard = getRandomCard();
// let secondCard = getRandomCard();

let player = {
  name: "AN",
  chips: 145,
};

let cards = [];
// let cards = [firstCard, secondCard];
// let sum = firstCard + secondCard;
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sumEl");
let sumEl = document.querySelector(".sumEl");
let cardEl = document.querySelector(".card-El");
let playerEl = document.getElementById("player-el");
let thirdCard = getRandomCard();

playerEl.textContent = player.name + " " + player.chips + "€";

function startGame() {
  isAlive = true;
  // let firstCard = getRandomCard();
  cards[0] = getRandomCard();
  cards[1] = getRandomCard();
  sum = cards[0] + cards[1];
  console.log(cards[0]);
  console.log(cards[1]);
  console.log(cards);
  renderGame();
}

function getRandomCard() {
  let randomNumb = Math.floor(Math.random() * 13 + 1);
  if (randomNumb === 1) {
    randomNumb = 11;
  } else if (randomNumb === 11 || randomNumb === 12 || randomNumb === 13) {
    randomNumb = 10;
  }
  return randomNumb;
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Youre got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "Youre out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    // sum += getRandomCard();
    // cards.push(getRandomCard());
    cards[2] = getRandomCard();
    sum += cards[2];
    console.log(cards);
    renderGame();
  }
}
