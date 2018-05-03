//Don't forget clean up code prior to submitting on Friday. Double check html error c%7  is correct.

var cards = [
    {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
    },
    {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
    },
    {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
    },
    {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
    }
    ];
    var flipCard = function () {
        cardId = this.getAttribute('data-id');
        console.log(cardId);
        cardsInPlay.push(cards[cardId].rank);
        this.setAttribute('src', cards[cardId].cardImage);
        if (cardsInPlay.length === 2) {
        checkForMatch();
        cardsInPlay = [];
        }
        };
    var cardsInPlay = [];
    var checkForMatch = function () {
    if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("YOU WIN! Click OK to Try Again!");location.reload();
    } else {
    alert("Wrong Card :( Don't Worry. Click OK to Try Again!");location.reload();
    }
    }; 

    var createBoard = function () {
    for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
}  
    }
    
    createBoard();