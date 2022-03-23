document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'wolf',
            img: 'img/wolf.jpg'
        },
        {
            name: 'wolf',
            img: 'img/wolf.jpg'
        },
        {
            name: 'elephant',
            img: 'img/elephant.jpg'
        },
        {
            name: 'elephant',
            img: 'img/elephant.jpg'
        },
        {
            name: 'cat',
            img: 'img/cat.jpg'
        },
        {
            name: 'cat',
            img: 'img/cat.jpg'
        },
        {
            name: 'snake',
            img: 'img/snake.jpg'
        },
        {
            name: 'snake',
            img: 'img/snake.jpg'
        },
        {
            name: 'dog',
            img: 'img/dog.jpg'
        },
        {
            name: 'dog',
            img: 'img/dog.jpg'
        },
        {
            name: 'white_bear',
            img: 'img/white_bear.jpg'
        },
        {
            name: 'white_bear',
            img: 'img/white_bear.jpg'
        },
    ]


    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const stepsDisplay = document.querySelector('#steps_cnt')
    const messageDisplay = document.querySelector('#message')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    let steps = 0

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement( 'img')
            card.setAttribute('src', 'img/blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        steps++
        stepsDisplay.textContent = steps.toString()
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'img/white.jpg')
            cards[optionTwoId].setAttribute('src', 'img/white.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/blank.jpg')
            cards[optionTwoId].setAttribute('src', 'img/blank.jpg')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            messageDisplay.textContent = 'Поздравляем, Вы выиграли!'
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 200)
        }
    }

    createBoard()

})
