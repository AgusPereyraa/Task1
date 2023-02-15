import {addDetailsCard} from "../scripts/modules/functions.js"

const section = document.getElementById("detail-section")

const params = new URLSearchParams(location.search)

const id = params.get("id")

const aux = params.get("name")
document.title = `${aux}'s Details`

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then( (response) => response.json())
    .then( (info) =>{
        addDetailsCard(info.events.find( (card) =>  card._id == id), section )
    }
    )



