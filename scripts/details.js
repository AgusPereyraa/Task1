import {addCard, categoryCheck} from "../scripts/modules/functions.js"

const section = document.getElementById("detail-section")

let info = data.events

const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const card = info.find( events => events._id == id)

const aux = card.name;
document.title = `${aux}'s Details`

addCard(card)
categoryCheck(id, section)



