import { agreeCard, addChecks, filterCategory, filterSearch, addMessage, filterCardsPast} from "../scripts/modules/functions.js"

const cards = document.getElementById('section-cards')
const checks = document.getElementById('section-check')
const input = document.querySelector('.form-control')


fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((info) => {
    const currentDate = info.currentDate
    const data = info.events
    agreeCard(filterCardsPast(data, currentDate), cards)
    const filterCheckbox = Array.from(
      new Set(
        data
          .filter((event) => event.date <= currentDate)
          .map((card) => card.category)
      )
    )
    addChecks(filterCheckbox, checks)

    checks.addEventListener("change", () => {
      let search = input.value.toLowerCase()
      let searchFilter = filterSearch(
        search,
        filterCardsPast(data, currentDate)
      )
      let filters = filterCategory(searchFilter)
      filterCardsPast(filters, cards)
      addMessage(filters, cards)
    })

    input.addEventListener("keyup", () => {
      let search = input.value.toLowerCase()
      let searchFilter = filterSearch(
        search,
        filterCardsPast(data, currentDate)
      )
      let filters = filterCategory(searchFilter)
      filterCardsPast(filters, cards)
      addMessage(filters, cards)
    })

    input.addEventListener("submit", (e) => {
      e.preventDefault()
    })
  })

