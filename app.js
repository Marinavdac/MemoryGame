document.addEventListener('DOMContentLoaded', () => {


//card options

const cardArray = [
{
    name: 'bird',
    img: 'imgs/bird.jpg'
},
{
    name: 'bird',
    img: 'imgs/bird.jpg'
},
{
    name: 'cow',
    img: 'imgs/cow.jpg'
   },
{
    name: 'cow',
    img: 'imgs/cow.jpg'
},
{
    name: 'dog',
    img: 'imgs/dog.jpg'
   },
   {
    name: 'dog',
    img: 'imgs/dog.jpg'
},
{
    name: 'hamster',
    img: 'imgs/hamster.jpg'
   },
{
    name: 'hamster',
    img: 'imgs/hamster.jpg'
},
{
    name: 'kitten',
    img: 'imgs/kitten.jpg'
   },
{
    name: 'kitten',
    img: 'imgs/kitten.jpg'
},
{
    name: 'lion',
    img: 'imgs/lion.jpg'
   },
{
    name: 'lion',
    img: 'imgs/lion.jpg'
},
{
    name: 'pig',
    img: 'imgs/pig.jpg'
   },
{
    name: 'pig',
    img: 'imgs/pig.jpg'
},{
    name: 'porcupine',
    img: 'imgs/porcupine.jpg'
   },
{
    name: 'porcupine',
    img: 'imgs/porcupine.jpg'
},
{
    name: 'rabbit',
    img: 'imgs/rabbit.jpg'
   },
{
    name: 'rabbit',
    img: 'imgs/rabbit.jpg'
},
{
    name: 'racoon',
    img: 'imgs/racoon.jpg'
   },
{
    name: 'racoon',
    img: 'imgs/racoon.jpg'
}
]
    
    

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//creating the board

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'imgs/blank.jpg')
        card.setAttribute('data-id', i)
    
        card.addEventListener('click', flipCard)

    grid.appendChild(card)
  }
}

//check for matches

function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen [0] === cardsChosen [1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'imgs/white.jpg') 
        cards[optionTwoId].setAttribute('src', 'imgs/white.jpg')
        cardsWon.push(cardsChosen) 
    } else {
        cards[optionOneId].setAttribute('src', 'imgs/blank.jpg') 
        cards[optionTwoId].setAttribute('src', 'imgs/blank.jpg')
        alert('Sorry, try again')
    }

    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent= 'Congratulations! You found them all!'
    }
}

//flip your card
function flipCard() {
let cardId = this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name)
cardsChosenId.push(cardId)
this.setAttribute('src', cardArray[cardId].img)
if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
    }
}

createBoard()










})