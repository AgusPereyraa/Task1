const cards = document.getElementById("section-cards")
let info = data.events
// let card = " "

for(let infoEvent of info){
    cards.innerHTML += `<div class="card m-2" style="width: 16rem; height: 24rem;">
    <img src=${infoEvent.image} class="card-img-top mt-2" alt="food">
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 class="card-title">${infoEvent.name}</h5>
        <p class="card-text">${infoEvent.description}</p>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <span>Price: $${infoEvent.price}</span>
        <a href="./pages/details.html" class="btn btn-outline-secondary">Go details</a>
      </div>
    </div>
  </div>`
}
// cards.innerHTML = card