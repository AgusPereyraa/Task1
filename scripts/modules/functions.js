// --------------- CARDS ----------------- //

export function createCards(e) {
  return `<div class="card m-2" style="width: 16rem; height: 24rem;">
  <img src=${e.image} class="card-img-top mt-2" alt="${e.category}">
  <div class="card-body d-flex flex-column justify-content-between">
    <div>
      <h5 class="card-title">${e.name}</h5>
      <p class="card-text">${e.description}</p>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <span>Price: $${e.price}</span>
      <a href="../pages/details.html?id=${e._id}&name=${e.name}" class="btn btn-outline-secondary">Go details</a>
    </div>
  </div>
</div>`
}

export function agreeCard(events, cards) {
  let boxCards = ""
  for (let event of events) {
    boxCards += createCards(event)
  }
  cards.innerHTML = boxCards
}

// --------------- CARDS ----------------- //

// ======================================= //

// -------------- CHECKBOX --------------- //

export function addChecks(category, checks) {
  let checksBox = ""
  for (let categories of category) {
    checksBox += createChecks(categories)
  }
  checks.innerHTML = checksBox
}

export function createChecks(checks) {
  return `<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="${checks}" value="${checks}">
  <label class="form-check-label" for="${checks}">${checks}</label>
  </div>`
}

// -------------- CHECKBOX --------------- //

// ======================================= //

// -------------- FILTERS ---------------- //

export function filterCardsPast(events, pastDate) {
  let pastEvents = []
  for (let event of events) {
    if (pastDate > event.date) {
      pastEvents.push(event)
    }
  }
  return pastEvents
}

export function filterCardsUp(events, upDate) {
  let upComingEvents = []
  for (let event of events) {
    if (upDate < event.date) {
      upComingEvents.push(event)
    }
  }
  return upComingEvents
}

export function filterCategory(event) {
  let inputFilter = [
    ...document.querySelectorAll('input[type="checkbox"]:checked'),
  ].map((element) => element.value)
  if (inputFilter.length === 0) {
    return event
  }
  return event.filter((filters) => inputFilter.includes(filters.category))
}

export function filterSearch(search, e) {
  let filterArray = e.filter((searchFilter) =>
    searchFilter.name.toLowerCase().includes(search)
  )
  return filterArray
}

// -------------- FILTERS ---------------- //

// ======================================= //

// --------------- ERROR ----------------- //

export function message() {
  if (document.title === "Home") {
    return `<p class="fs-2 text-danger"> No events found</p> `
  }
  return `<p class="fs-2 text-danger"> No events found</p> `
}

export function addMessage(card, error) {
  if (card.length === 0) {
    error.innerHTML = message()
  } else {
    return agreeCard(card, error)
  }
}

// --------------- ERROR ----------------- //

// ======================================= //

// --------------- DETAILS --------------- //

export function addDetailsCard(events, cards) {
  cards.innerHTML = detailsCard(events)
}

export function detailsCard(card) {
  return `<div class="card-img m-5" style="max-width: 30rem; height: 25rem;">
  <img src="${card.image}" class="card-img-top" style="max-width: 30rem; height: 25rem;" alt="comidas">
  </div>
  <div id="body-card-detail" class="card-body text-black border border-whhite d-flex flex-column justify-content-center text-center m-5" style="max-width: 30rem; height: 25rem;">
  <h5 class="card-text fs-3">${card.name}</h5>
  <p class="card-text fs-4">${card.description}</p>
  <p class="card-text fs-4">Date: ${card.date}</p>
  <p class="card-text fs-4">Category: ${card.category}</p>
  <p class="card-text fs-4">Place: ${card.place}</p>
  <p class="card-text fs-4">Capacity: ${card.capacity}</p>
  <p class="card-text fs-4"> ${assistanceEstimate(card)}</p>
  </div> `
}

export function assistanceEstimate(add) {
  let show = ""
  let assistance = "Assistance"
  let estimate = "Estimate"
  if (add.assistance) {
    show = assistance + ":" + " " + add.assistance
  } else if (add.estimate) {
    show = estimate + ":" + " " + add.estimate
  }
  return show
}

// --------------- DETAILS --------------- //

// ======================================= //

// -------------- STATS ---------------- //

// export function addTable(events, cards) {
//   let boxCards = ""
//   boxCards += table(events)
//   cards.innerHTML = boxCards
// }

export function filterUp(events, date) {
  let upcomingFilter = []
  for (let event of events) {
      if (date < event.date) {
          upcomingFilter.push(event)
      }
  }
  return upcomingFilter
}

export function filterPast(events, date) {
  let pastEvents = []
  for (let event of events) {
      if (date > event.date) {
          pastEvents.push(event)
      }
  }
  return pastEvents
}

export function attendanceMax(events) {
  let highest = 0
  let highestEvent
  for (let event of events) {
      let percentageOfAttendance = (event.assistance * 100) / event.capacity
      if (highest === 0 || percentageOfAttendance > highest) {
          highest = percentageOfAttendance
          highestEvent = event
      }
  }
  return highestEvent
}

export function attendanceLow(events) {
  let lowest = 0
  let lowestEvent
  for (let event of events) {
      let percentageOfAttendance = (event.assistance * 100) / event.capacity
      if (lowest === 0 || percentageOfAttendance < lowest) {
          lowest = percentageOfAttendance
          lowestEvent = event
      }
  }
  return lowestEvent
}

export function capacityMax(events) {
  let larger = 0
  let largerCapacityEvent
  for (let event of events) {
      if (larger === 0 || event.capacity > larger) {
          larger = event.capacity
          largerCapacityEvent = event
      }
  }
  return largerCapacityEvent
}

export function upComingStatistics(events) {
  let upcomingStatistics = []
  let upcomingCategories = Array.from(new Set(events.map(event => event.category)))


  let upcomingRevenues = []
  for (let category of upcomingCategories) {
      let cont = 0
      for (let event of events) {
          if (event.category === category) {
              cont += event.estimate * event.price
          }
      }
      upcomingRevenues.push(cont)
  }


  let upcomingPercentageOfAttendance = [] 
  for (let category of upcomingCategories) {
      let estimateAttendance = 0
      let capacity = 0
      for (let event of events) {
          if (event.category === category) {
              estimateAttendance += event.estimate
              capacity += event.capacity
          }
      }
      upcomingPercentageOfAttendance.push((estimateAttendance * 100) / capacity)
  }


  upcomingStatistics.push(upcomingCategories, upcomingRevenues, upcomingPercentageOfAttendance)
  return upcomingStatistics
}

export function pastComingStatistics(events) {
  let pastStatistics = []
  let pastCategories = Array.from(new Set(events.map(event => event.category))) 


  let pastRevenues = []
  for (let category of pastCategories) {
      let cont = 0
      for (let event of events) {
          if (event.category === category) {
              cont += event.assistance * event.price
          }
      }
      pastRevenues.push(cont)
  }


  let pastPercentageOfAttendance = []
  for (let category of pastCategories) {
      let assistance = 0
      let capacity = 0
      for (let event of events) {
          if (event.category === category) {
              assistance += event.assistance
              capacity += event.capacity
          }
      }
      pastPercentageOfAttendance.push((assistance * 100) / capacity)
  }


  pastStatistics.push(pastCategories, pastRevenues, pastPercentageOfAttendance)
  return pastStatistics
}

