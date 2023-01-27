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
  const cardsChosen = []

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
  function flipCard(){
  const cardId = this.getAttribute('data-id')
  console.log(cardArray[cardId].name)
  cardsChosen.push(cardArray[cardId].name)
  console.log('clicked')
  console.log(cardsChosen)
  this.setAttribute('src', cardArray[cardId].img)
  }
});