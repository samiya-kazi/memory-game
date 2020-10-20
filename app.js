document.addEventListener('DOMContentLoaded', () =>{

    const cardArray = [
        {
            name: 'bulbasaur',
            img: 'images/bulbasaur.jpg'
        },
        {
            name: 'bulbasaur',
            img: 'images/bulbasaur.jpg'
        },
        {
            name: 'charmander',
            img: 'images/charmander.jpg'
        },
        {
            name: 'charmander',
            img: 'images/charmander.jpg'
        },
        {
            name: 'squirtle',
            img: 'images/squirtle.jpg'
        },
        {
            name: 'squirtle',
            img: 'images/squirtle.jpg'
        },
        {
            name: 'ditto',
            img: 'images/ditto.jpg'
        },
        {
            name: 'ditto',
            img: 'images/ditto.jpg'
        },
        {
            name: 'magikarp',
            img: 'images/magikarp.jpg'
        },        
        {
            name: 'magikarp',
            img: 'images/magikarp.jpg'
        },       
        {
            name: 'pikachu',
            img: 'images/pikachu.jpg'
        },
        {
            name: 'pikachu',
            img: 'images/pikachu.jpg'
        },
    ]

    cardArray.sort(()=> 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsMatched = 0;



    //Create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/pokeball.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard)
            grid.appendChild(card);
        }
    }



    //Check if the cards chosen match
    function checkMatch() {
        var cards = document.querySelectorAll('img');
        var cardOne = cardsChosenId[0];
        var cardTwo = cardsChosenId[1];

        if(cardsChosen[0] === cardsChosen[1]){
            alert('Match found!');
            cards[cardOne].setAttribute('src', 'images/white.jpg');
            cards[cardTwo].setAttribute('src', 'images/white.jpg');
            cards[cardOne].removeEventListener('click', flipcard);
            cards[cardTwo].removeEventListener('click', flipcard);
            cardsMatched++;
        } else {
            alert('Try again');
            cards[cardOne].setAttribute('src', 'images/pokeball.jpg');
            cards[cardTwo].setAttribute('src', 'images/pokeball.jpg');
        }

        cardsChosen = [];
        cardsChosenId = [];
        
        resultDisplay.textContent = cardsMatched;
        if(cardsMatched == cardArray.length /2){
            alert('You Win!');
        }
    }



    //Flip the chosen card
    function flipcard() {
        var cardId = this.getAttribute('data-id');
        cardsChosenId.push(cardId);
        cardsChosen.push(cardArray[cardId].name);
        this.setAttribute('src', cardArray[cardId].img);

        if(cardsChosen.length == 2) {
            setTimeout(checkMatch, 200);
        }
    }


    createBoard();
})