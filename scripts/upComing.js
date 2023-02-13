import {createCard, agreeUpcoming, filterUpcoming, agreeChecks, categoryCheck, searchFilter, message} from "../scripts/modules/functions.js"

const cards = document.getElementById('section-cards')
const checks = document.getElementById( 'section-check' )
const input = document.querySelector('.form-control');

let info = data.events
// let date = data.currentDate


const category = [... new Set(info.map (info => info.category))]

console.log(info)
console.log(category)


// FUNCTIONS
createCard(cards)
agreeChecks(category, checks)
agreeUpcoming(info, cards)
filterUpcoming(category,info)


// EVENTS

// check event
checks.addEventListener("change", () => {
  let inputValue = input.value.toLowerCase()
  let aux = searchFilter(info, inputValue)
  let aux2 = categoryCheck(aux)
  filterUpcoming(category, cards)
  message(aux2, cards)
})


// input event
input.addEventListener("keyup", (e) => {
  e.preventDefault()
  let inputValue = input.value.toLowerCase()
  let aux = searchFilter(info, inputValue)
  let aux2 = categoryCheck(aux)
  message(aux2, cards)
})

