const board = document.getElementsByClassName('cardHolder')[0];
const cards = 3;

/* Add cards to board */
for (let i = 0; i < cards; i++) {
    // first create new li
    const cardLi = document.createElement('li');

    // create the card class
    const card = document.createElement('div');
    card.classList.add('card'); // Assign className to new element

    // append card to LI, and then that to the board
    cardLi.appendChild(card);
    board.appendChild(cardLi);
    console.log(i);
}