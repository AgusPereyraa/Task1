// ------------ //


// Create card function
export function createCard(e) {
    return `<div class="card m-2" style="width: 16rem; height: 24rem;">
    <img src=${e.image} class="card-img-top mt-2" alt="food">
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 class="card-title">${e.name}</h5>
        <p class="card-text">${e.description}</p>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <span>Price: $${e.price}</span>
        <a href="./pages/details.html?id=${e._id}&name=${e.name}" class="btn btn-outline-secondary">Go details</a>
      </div>
    </div>
  </div>`
}
  
// Print card function
export function agreeCard(info, cards) {
    let template = " "
    for (let e of info) {
      template += createCard(e)
    }
    cards.innerHTML = template
}
  
// Create checks function
export function createChecks(checks) {
    return `<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="${checks}" value="${checks}">
  <label class="form-check-label" for="${checks}">${checks}</label>
  </div>`
}
  
// Print checks function
export function agreeChecks(categories, checks) {
    let template = " "
    for (let e of categories) {
      template += createChecks(e)
    }
    checks.innerHTML += template
}

// Filter checks function
export function categoryCheck(info) {
    const checked = [...document.querySelectorAll("input[type='checkbox']:checked")].map(check => check.value)
    if (checked.length === 0) { return info }
    return info.filter(checkFilter => checked.includes(checkFilter.category))
}
  
// Filter search function
export function searchFilter(e, inputValue) {
    let filtered = e.filter(filter => filter.name.toLowerCase().includes(inputValue))
    return filtered
}
  
// print message not found
export function message(eventos, cards) {
    if (eventos.length === 0) {
      cards.innerHTML = `<p class="fs-2 text-danger">Event's not found</p>`
    } else {
      return agreeCard(eventos, cards)
    }
}

// ------------ //
// Upcoming page filter cards

export function agreeUpcoming(info, cards) {
  let template = " "
  for (let e of info) {
    if(e.date > data.currentDate){
      template += createCard(e)
    }
    }
    cards.innerHTML = template
}

export function filterUpcoming(info){
    const checked = [...document.querySelectorAll("input[type='checkbox']:checked")].map(check => check.value)
    if (checked.length !== 0) { return info }
    return info.filter(checkFilter => checked.includes(checkFilter.category))
}


// ------------ //
// Past page filter cards

export function agreePastcoming(info, cards) {
    let template = " "
    for (let e of info) {
      if(e.date < data.currentDate){
        template += createCard(e)
      }
      }
      cards.innerHTML = template
}


// ------------ //
// Details add card
export function addCard(card){
    section.innerHTML = `<div class="card-img m-5" style="max-width: 30rem; height: 25rem;">
    <img src="${card.image}" class="card-img-top" style="max-width: 30rem; height: 25rem;" alt="comidas">
    </div>
    <div id="body-card-detail" class="card-body text-black border border-whhite d-flex flex-column justify-content-center text-center m-5" style="max-width: 30rem; height: 25rem;">
    <h5 id="title-card" class="card-title fs-3">${card.name}</h5>
    <p id="text-detail" class="card-text fs-4">${card.description}</p>
    <p id="category-detail" class="card-text fs-4">Category: ${card.category}</p>
    <p id="place-detail" class="card-text fs-4">Place: ${card.place}</p>
    <p id="capacity-detail" class="card-text fs-4">Capacity: ${card.capacity}</p>
    </div> `
}
