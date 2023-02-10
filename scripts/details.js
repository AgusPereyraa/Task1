const section = document.getElementById("detail-section")
let info = data.events
let asis = info.assistance
let esti = info.estimate

const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const card = info.find( events => events._id == id)


function addCard(card){
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
addCard(card)



