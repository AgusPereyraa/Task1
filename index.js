import {agreeCard, addChecks, filterCategory, filterSearch, addMessage} from "./scripts/modules/functions.js"

const cards = document.getElementById('section-cards')
const checks = document.getElementById('section-check')
const input = document.querySelector('.form-control')


fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((info) => {
    const data = info.events
    agreeCard(data, cards)
    const filterCheckbox = Array.from(
      new Set(data.map((card) => card.category))
    )

    addChecks(filterCheckbox, checks)
    checks.addEventListener("change", () => {
      let search = input.value.toLowerCase()
      let searchFilter = filterSearch(search, data)
      let filters = filterCategory(searchFilter)
      agreeCard(filters, cards)
      addMessage(filters, cards)
    })

    input.addEventListener("keyup", () => {
      let search = input.value.toLowerCase()
      let searchFilter = filterSearch(search, data)
      let filters = filterCategory(searchFilter)
      agreeCard(filters, cards)
      addMessage(filters, cards)
    })

    input.addEventListener("submit", (e) => {
      e.preventDefault()
    })
  })
  .catch((error) => console.log(error))




