import {  saveToStorage, updateIdea,retrieveIdeas} from './localStorage'
import { generateIdea } from './idea'
import {app} from './app'

// this is where all the DOM manipulation live  
const saveButton = document.querySelector(".save-button");
const showStarredButton = document.querySelector(".show-starred-ideas");
const searchButton = document.querySelector(".search-button");
const deleteButton = document.querySelector(".delete-button");
const whiteStarButton = document.querySelector('#whiteStar')
const redStarButton = document.querySelector('#redStar')
const titleInput = document.querySelector(".idea-title-input");
const bodyInput = document.querySelector(".idea-body-input");
const searchInput = document.querySelector("#searchBar");
const ideaGrid = document.querySelector("#ideaGrid");
const ideaCard = document.querySelector('#ideaCard');
const ideaCardTop = document.querySelector('#ideaCardTop');


const application = app()



const addIdea = () => {
    const title = titleInput.value.trim()
    const body = bodyInput.value.trim()
    application.addIdea({title, body})
    let result = getIdeas()
    render(result)
}
// ----- Retrieve Idea from storage 
//@ after adding idea we need to retrieve ideas from the local storage 
//@ after that we can render the ideas into cards 

const getIdeas = () => {
    const result = retrieveIdeas()
    return result; 
    

}
const render = (ideas) => {
    ideaGrid.innerHTML = "";
    ideas.map((idea) => {
        ideaGrid.innerHTML += `
        <section class="idea-card" id="${idea.id}">
       <div class="idea-card-top dark-purple" id="ideaCardTop">
         <img src="assets/star.svg" alt="White star" class="star-button">
         <img src="assets/delete.svg" alt="delete" id="deleteButton" class="delete-button">
       </div>
       <div class="idea-card-main">
         <h3 class="idea-title bold">${idea.title}</h3>
         <p>${idea.body} </p>
       </div>
       <button class="comment-button">
         <img class="comment-icon" src="assets/comment.svg" alt="comment">
         <h3 class="bold comment">Comment</h3>
       </button>
     </section>`
    })
} 





// Event listeners 

saveButton.addEventListener('click',addIdea )