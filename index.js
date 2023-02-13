import {createCard, agreeCard, createChecks, agreeChecks, categoryCheck, searchFilter, message} from "./scripts/modules/functions.js"


const cards = document.getElementById('section-cards')
const checks = document.getElementById('section-check');
const input = document.querySelector('.form-control');

let info = data.events

const category = [...new Set(info.map(categories => categories.category))]

// FUNCTIONS
createCard(cards)
createChecks(checks)
agreeCard(info, cards)
agreeChecks(category, checks)


// EVENTS

// check event
checks.addEventListener("change", () => {
  let inputValue = input.value.toLowerCase()
  let aux = searchFilter(info, inputValue)
  let aux2 = categoryCheck(aux)
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


