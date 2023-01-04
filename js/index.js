import {  saveToStorage, updateIdea,retrieveIdeas} from './localStorage'
import { generateIdea } from './idea'
import {app} from './app'
import {comment } from '../assets/comment.svg'
import {star} from '../assets/star.svg';
import { dl } from '../assets/delete.svg'


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
const IdeaForm = document.querySelector(".idea-input-form")


const application = app()

const addIdea = () => {
    const title = titleInput.value.trim()
    const body = bodyInput.value.trim()
    application.addIdea({title, body})
    let result = application.getIdeas()
    render(result)
    clearForm()
}
// ----- Retrieve Idea from storage 
//@ after adding idea we need to retrieve ideas from the local storage 
//@ after that we can render the ideas into cards 


const clearForm = () => {
 IdeaForm.reset()
}
const render = (ideas) => {
    ideaGrid.innerHTML = "";
    ideas.map((idea) => {
        ideaGrid.innerHTML += `
        <section class="idea-card" id="${idea.id}">
       <div class="idea-card-top dark-purple" id="ideaCardTop">
         <img src=${star} alt="star" class="star-button">
         <img src=${dl} alt="delete" id="deleteButton" class="delete-button">
       </div>
       <div class="idea-card-main">
         <h3 class="idea-title bold">${idea.title}</h3>
         <p>${idea.body} </p>
       </div>
       <button class="comment-button">
         <img class="comment-icon" src=${comment} alt="comment">
         <h3 class="bold comment">Comment</h3>
       </button>
     </section>`
    })
} 





// Event listeners 

saveButton.addEventListener('click',addIdea )