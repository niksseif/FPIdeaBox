//DOM related js
import {idea} from './idea'



const app = () => {


    var saveButton = document.querySelector(".save-button");
    var showStarredButton = document.querySelector(".show-starred-ideas");
    var searchButton = document.querySelector(".search-button");
    var deleteButton = document.querySelector(".delete-button");
    var whiteStarButton = document.querySelector('#whiteStar')
    var redStarButton = document.querySelector('#redStar')
    var titleInput = document.querySelector(".idea-title-input");
    var bodyInput = document.querySelector(".idea-body-input");
    var searchInput = document.querySelector("#searchBar");
    var ideaGrid = document.querySelector("#ideaGrid");
    var ideaCard = document.querySelector('#ideaCard');
    var ideaCardTop = document.querySelector('#ideaCardTop');
 saveButton.addEventListener('click', (e) => {
        e.preventDefault()
        let resBody = bodyInput.value.trim()
        let resTitle = titleInput.value.trim()
        let ideaFactory = idea({resTitle, resBody, star:false})
        console.log(ideaFactory,"<>>factory")
        ideaGrid.innerHTML += `${ideaFactory.id} -${ideaFactory.resTitle} - ${ideaFactory.resBody} - ${ideaFactory.star} `

    })
 
   
}
app()