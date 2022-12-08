//DOM related js
import {generateIdea} from './idea.js'


// save to storage 
const saveToStorage = (idea) => {
    let newIdea = {
        id: idea.id,
        title: idea.title,
        body: idea.body,
        star: idea.star
    }
    localStorage.setItem('idea', JSON.stringify(newIdea))
}
// const deleteFromStorage = () => {
//     localStorage.removeItem('idea')
// }
const app = () => {




}
app()
module.exports = { app, saveToStorage }