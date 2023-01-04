//DOM related js
import {generateIdea} from './idea.js'
import { saveToStorage, retrieveIdeas } from './localStorage'


const app = () => {
let ideas = []
const addIdea = (newIdea) => {
    ideas = [...ideas, generateIdea(newIdea)]
    saveToStorage(ideas)
}
const getIdeas = () => {
    const result = retrieveIdeas()
    return result; 
}



return {
    addIdea, 
    ideas,
    getIdeas
}
}
app()
module.exports = { app }