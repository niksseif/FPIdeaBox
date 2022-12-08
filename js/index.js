import { app, saveToStorage} from './app'


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





// where do I need to make ideas array???
const addIdea = () => {
    const title = titleInput.value.trim()
    const body = bodyInput.value.trim()
    saveToStorage({title, body})
}





// Event listeners 

saveButton.addEventListener('click',addIdea )