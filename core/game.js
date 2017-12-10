// Game
const board = document.getElementsByClassName('cardHolder')[0];
const cards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

// Selections
let cardValue = [];
let card_tile = [];
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

        // the clickSelector
        card.setAttribute('onclick', `flipTile(this, ${cards[i]})`);

        // append card to Li, and then that to the board
        cardLi.appendChild(card);
        board.appendChild(cardLi);
    }
}

/* The flip function */
function flipTile(tile, val) {
        tile.style.background = '#FFF';
        console.log('DEBUG: <b>FUNCTION START</b>');

        // First card selected
        if (cardValue.length == 0) {
            cardValue.push(val);
            card_tile.push(tile.classList[1]);
            console.log('DEBUG: Entered First card');
            console.log(card_tile);
            
        }
        
        // Second card selected
       else if (cardValue.length == 1) {
            cardValue.push(val);
            card_tile.push(tile.classList[1]);

            console.log('DEBUG: Entered second card');

            // See if they are the same
            if (cardValue[0] == cardValue[1]) {
                flipped += 2;
                
                console.log('DEBUG: Cards identical [73]'); 
                // Reset 
                card_tile = [];
                cardValue = [];

                // See if game is finished
                if (flipped == cards.length) {
                    alert("Congratulations!");
                    newBoard();
                }
            }

            // else flipback
            else {
                console.log('DEBUG: Entered flipBack');
                setTimeout(function() {
                    // Change back
                    for (let i = 0; i < 2; i++) {
                        const selected = document.querySelector(`.${card_tile[i]}`);
                        selected.style.background = "red";
                    }

                    // Reset
                    card_tile = [];
                    cardValue = [];
                }, 750);
            }

            return;
        } 
}

// Setup a game on first sight
window.onload = function () {
    newGame();
};

// New game functionallity
const key = document.getElementsByClassName('key')[0];
key.addEventListener('click', () => {
    newGame();
})
