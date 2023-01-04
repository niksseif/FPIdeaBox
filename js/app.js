//DOM related js
import {generateIdea} from './idea.js'
import { saveToStorage } from './localStorage'


const app = () => {
let ideas = []
const addIdea = (newIdea) => {
    console.log(newIdea,"<>>newIdea")
    ideas = [...ideas, generateIdea(newIdea)]
    console.log(ideas,"<>>>ideas")
    saveToStorage(ideas)

}



return {
    addIdea, ideas,
}
}
app()
module.exports = { app }