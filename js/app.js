//DOM related js
import {generateIdea} from './idea.js'
import { saveToStorage, retrieveIdeas,removeIdea } from './localStorage'


const app = () => {
let ideas = []
    const addIdea = (newIdea) => {
        ideas = [...ideas, generateIdea(newIdea)]
        saveToStorage(ideas)
}
const getIdeas = () => {
    return  retrieveIdeas()
}

const removeIdea = (id) => {
    const result = ideas.filter((idea) => idea.id !== id)
    ideas =  [...result]
    saveToStorage(ideas)
    return retrieveIdeas()
}
// if the Idea id matches the id idea star will get !idea.star
const toggleStar = (id) => {
   ideas.filter(idea => idea.id === id ? idea.star = !idea.star : 'the ID is not matching')
   saveToStorage(ideas)
   return retrieveIdeas() 
}


return {
    addIdea, 
    ideas,
    getIdeas, 
    removeIdea, 
    toggleStar
}
}
app()
module.exports = { app }