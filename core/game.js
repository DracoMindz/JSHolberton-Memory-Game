// Game
const board = document.getElementsByClassName('cardHolder')[0];
const cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
const cardValue = [];
const card_tile = [];
let flipped = 0;

// Shuffle function
Array.prototype.shuffle = function() {
    let i = this.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

/* Add cards to board */
function newGame() {
    flipped = 0;
    cards.shuffle();

    for (let i = 0; i < cards.length; i++) {
        // first create new li
        const cardLi = document.createElement('li');

        // create the card class
        const card = document.createElement('div');
        card.classList.add('card');      // Assign className to new element
        card.classList.add(`tile_${i}`); // set identifier for card


        // append card to LI, and then that to the board
        cardLi.appendChild(card);
        board.appendChild(cardLi);
    }
}


// Setup a game on first sight
window.onload = function () {
    newGame();
};
