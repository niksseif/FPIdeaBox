//DOM related js
import {generateIdea} from './idea.js'
import { saveToStorage, retrieveIdeas,deleteFromStorage } from './localStorage'


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
    ideas = ideas.filter((idea) => idea.id !== id)
    const selectedIdea = ideas.filter((idea) => idea.id === id)
    deleteFromStorage(selectedIdea)
    saveToStorage(ideas)
    return retrieveIdeas()
}

const toggleStar = (id) => {
   ideas.filter(idea => idea.id === id ? idea.star = !idea.star : 'the ID is not matching')
   saveToStorage(ideas)
   return retrieveIdeas() 
}
const showStars = () => {
    const res = retrieveIdeas()
    return res.filter(idea => idea.star)
}


return {
    addIdea, 
    ideas,
    getIdeas, 
    removeIdea, 
    toggleStar,
    showStars
}
}
app()
module.exports = { app }