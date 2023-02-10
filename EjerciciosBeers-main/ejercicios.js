// Ejercicio 1 
 function filtroCerveza(lista, abv){ 
    let cervezas = [] 
    cervezas = lista.map(beer => { 
    if(beer.abv < abv){ 
        return {
        nomre: ${beer.name}
        abv: ${beer.abv}
        ibu: ${beer.ibu}} 
    } 
 }) 
 console.log(cervezas) 
 return cervezas.filter(cerveza => cerveza) 
 } 
 let cervezaFiltrada = filtroCerveza(beers, 5) 
 console.log(cervezaFiltrada)  




// Ejercicio 2 
function filtroCerveza(lista, abv){ 
     let cervezas = lista.filter( beer=>{ 
         if(beer.abv > abv){
             return beer 
         } 
     }) 
     return cervezas.map(cerveza => cerveza.name) 
 }  
 let cervezaFiltrada = filtroCerveza(beers, 7.4) 
 console.log(cervezaFiltrada)

// Ejercicio 3
 function filtroCerveza(beers, ibu){ 
     let aux = [] 
     aux = beers.filter(beer =>{ 
         if(beer.ibu < ibu){ 
             return beer.name 
         } 
     }) 
     return aux.map(cerveza => cerveza.name) 
 } 

// Ejercicio 4
function beerProperties (alcohol, propertie , boolean){
    let newArray = [];
  if(true){
      alcohol.map(element => element.propertie).sort((a,b) => a-b)
      newArray = alcohol.slice(0,11)
  } 

  return newArray;
  }

  let arrayInOrder = beerProperties(beers, beers.abv, true)
  console.log(arrayInOrder)

// Ejercicio 5
const table = document.getElementById('table')

function createTable(list){
    return <table>
    <thead>
        <tr>
            <th>name</th>
            <th>abv</th>
            <th>ibu</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${list.name}</td>
            <td>${list.abv}</td>
            <td>${list.ibu}</td>
        </tr>
    </tbody>
</table>
}

function printTable(e, elemento){
    let tab = ''
    for(let beer of e){
        tab += createTable(beer)
    }
    elemento.innerHTML = tab
}

printTable(beers, table)


console.log(printTable(beers, table))