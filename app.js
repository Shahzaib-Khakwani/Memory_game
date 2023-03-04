const cards = [
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: "fries",
        img: "images/fries.png"
    }

];
const gridDisplay = document.querySelector('#grid');
const resultDispaly = document.getElementById('result');
let flippedCards = [];
let flippedCardsID = [];
let result = 0;
cards.sort(() => 0.5 - Math.random());

function createBroad() {
    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        grid.appendChild(card);
        card.addEventListener('click', flipCard);
    }
}

function checkMatch() {
    const cardsimg = document.querySelectorAll('img');
    if (flippedCardsID[0] == flippedCardsID[1]) {
        alert('you try to click same card')
        cardsimg[flippedCardsID[0]].setAttribute('src', 'images/blank.png');
    }
    else if (flippedCards[0] == flippedCards[1]) {
        console.log('its a match');
        cardsimg[flippedCardsID[0]].setAttribute('src', 'images/white.png');
        cardsimg[flippedCardsID[1]].setAttribute('src', 'images/white.png');
        cardsimg[flippedCardsID[0]].removeEventListener('click', flipCard);
        cardsimg[flippedCardsID[1]].removeEventListener('click', flipCard);
        result++;
        updateResult();

    }
    else {
        cardsimg[flippedCardsID[0]].setAttribute('src', 'images/blank.png');
        cardsimg[flippedCardsID[1]].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again')
    }
    flippedCards = [];
    flippedCardsID = [];
}

function flipCard() {
    let cardID = this.getAttribute('data-id');
    flippedCardsID.push(cardID);
    this.setAttribute('src', cards[cardID].img);
    flippedCards.push(cards[cardID].name);
    console.log(cards);
    if (flippedCards.length === 2) {
        setTimeout(checkMatch(), 800);
    }

}

function updateResult() {
    resultDispaly.innerHTML = String(result);
    if (result === cards.length / 2) {
        alert('You won');
    }
}


createBroad();
