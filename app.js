document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
  ]
  console.log(cardArray)


  cardArray.sort(()=> 0.5 - Math.random())
  const gridDisplay = document.querySelector('#grid')
  console.log(gridDisplay)
  let cardsChosen = []
  let cardsChosenIds = []
  const cardsWon = []

  // Create "for" loop

  function createBoard(){
    for (let i=0; i < cardArray.length; i++){
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click',flipCard)
      gridDisplay.appendChild(card)
    }
  }
  createBoard()

  function checkMatch(){
    const cards = document.querySelectorAll('img')
    console.log('check for match')
    if (cardsChosenIds[0] == cardsChosenIds[1]) {
      alert('You have clicked the same image!')
    }

    if (cardsChosen[0] == cardsChosen[1]){
      alert ('You have found a match!')
      cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
      cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
      cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
      cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png')
        alert('Sorry try again!')
    }
    cardsChosen = []
    cardsChosenIds = []
  }

  function flipCard(){
  const cardId = this.getAttribute('data-id')
  console.log(cardArray[cardId].name)
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  console.log('clicked')
  console.log(cardsChosen)
  console.log(cardsChosenIds)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2){
    setTimeout(checkMatch, 500)
  }
  }
});