const cards = document.getElementById('section-cards')
const checks = document.getElementById( 'section-check' )
const input = document.querySelector('.form-control');

let info = data.events
let check = " "

const category = [... new Set(info.map (info => info.category))]



// funciones

function agreeCard(category, cards){
    cards.innerHTML = ''
    let template = ''
    for( let e of category ){
        template += createCard(e)
    }
    cards.innerHTML += template
}
agreeCard( category, cards )

// ------ //

function createCard(e){
  let card = " "
for(let infoEvent of e){
    card.className = "infoCard"
    card += `<div class="card m-2" style="width: 16rem; height: 24rem;">
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
cards.innerHTML = card
}
createCard(info)

// ------ //

function createChecks(){
  for (let checks of category){
    check += `<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="${checks}" value="${checks}">
    <label class="form-check-label" for="${checks}">${checks}</label>
  </div>`
  }
  checks.innerHTML += check
}
createChecks(category)

// ------ //

function categoryCheck(category){
  const checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(check => check.value)
  if(checked.length === 0){
    return(category)
  }
  return category.filter(filtrados => checked.includes(filtrados.category))
}
categoryCheck(category)

// funciones fin

// eventos

checks.addEventListener("change", (e) => {
  let aux = categoryCheck (info)
  createCard(aux)
})

input.addEventListener("input", (e) => {
  const search = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  let value = false
  cards.forEach(card => {
    const nombre = card.querySelector(".card-title").innerText.toLowerCase()
    if(nombre.includes(search)){
      value == true
      return card.style.display="block"
    }else{
      return card.style.display="none"
    }
  })
});

// eventos fin

// function filtrarPersonajesSelect( personajes, value ){
//     if( value == 'all' ) return personajes
//     return personajes.filter( personaje => personaje.role.displayName == value ) 
// }   

// function filtrarPersonajesRadio( personajes, value){
//     if( value == 'all'){
//         return personajes
//     }
//     let aux = personajes.filter( personaje => {
//         if( value == 'base' ){
//             return personaje.isBaseContent
//         }
//         if( value == 'Contracts' ){
//             return !personaje.isBaseContent
//         }
//     } )

//     return aux
// }


