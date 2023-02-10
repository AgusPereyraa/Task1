const cards = document.getElementById('section-cards')
const checks = document.getElementById( 'section-check' )
const input = document.querySelector('.form-control');

let info = data.events
let date = data.currentDate


const category = [... new Set(info.map (info => info.category))]


// funciones

// Create card function
function createCard(e) {
    return `<div class="card m-2" style="width: 16rem; height: 24rem;">
    <img src=${e.image} class="card-img-top mt-2" alt="food">
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 class="card-title">${e.name}</h5>
        <p class="card-text">${e.description}</p>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <span>Price: $${e.price}</span>
        <a href="../pages/details.html?id=${e._id}" class="btn btn-outline-secondary">Go details</a>
      </div>
    </div>
  </div>`
}


// Print card function
function agreeCard(info, cards) {
  let template = " "
  for (let e of info) {
    if(e.date > data.currentDate){
      template += createCard(e)
    }
    }
    cards.innerHTML = template
}
agreeCard(info, cards)

// Create checks function
function createChecks(checks) {
  return `<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="${checks}" value="${checks}">
<label class="form-check-label" for="${checks}">${checks}</label>
</div>`
}

// Print checks function
function agreeChecks(categories, checks) {
  let template = " "
  for (let e of categories) {
    template += createChecks(e)
  }
  checks.innerHTML += template
}
agreeChecks(category, checks)

// Filter checks function
function categoryCheck(info) {
  const checked = [...document.querySelectorAll("input[type='checkbox']:checked")].map(check => check.value)
  if (checked.length === 0) { return info }
  return info.filter(checkFilter => checked.includes(checkFilter.category))
}

// Filter search function
function searchFilter(e, inputValue) {
  let filtered = e.filter(filter => filter.name.toLowerCase().includes(inputValue))
  return filtered
}

// print message not found
function message(eventos, cards) {
  if (eventos.length === 0) {
    cards.innerHTML = `<p class="fs-2 text-danger">Event's not found</p>`
  } else {
    return agreeCard(eventos, cards)
  }
}


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

