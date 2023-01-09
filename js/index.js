import { app } from "./app";
import comment from "../assets/comment.svg";
import star from "../assets/star.svg";
import dl from "../assets/delete.svg";
import starActive from "../assets/star-active.svg";

// this is where all the DOM manipulation live
const saveButton = document.querySelector(".save-button");
const showStarredButton = document.querySelector(".show-starred-ideas");
const searchButton = document.querySelector(".search-button");
const deleteButton = document.querySelector(".delete-button");
const whiteStarButton = document.querySelector("#whiteStar");
const redStarButton = document.querySelector("#redStar");
const titleInput = document.querySelector(".idea-title-input");
const bodyInput = document.querySelector(".idea-body-input");
const searchInput = document.querySelector("#search-bar");
const ideaGrid = document.querySelector("#ideaGrid");
const ideaCard = document.querySelector("#ideaCard");
const ideaCardTop = document.querySelector("#ideaCardTop");
const IdeaForm = document.querySelector(".idea-input-form");

const application = app();

const addIdeaToDOM = () => {
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();
  application.addIdea({ title, body });
  let result = application.getIdeas();
  render(result);
  clearForm();
};

const removeIdeaFromDOM = (e) => {
  e.preventDefault();
  const id = parseInt(e.target.parentNode.parentNode.id);
  const res = application.removeIdea(id);
  render(res);
};

const toggleStars = (e) => {
  e.preventDefault();
  const id = parseInt(e.target.parentNode.parentNode.id);
  const res = application.toggleStar(id);
  return render(res);
};

const findStarDeleteBtn = (event) =>
  event.target.classList.contains("star-button")
    ? toggleStars(event)
    : removeIdeaFromDOM(event);

const showStarredIdeas = (e) => {
  e.preventDefault();
  switch (application.toggled) {
    case false:
      const res = application.showStars();
      render(res);
      e.target.innerText = "Show ideas";
      application.toggled = !application.toggled;
      break;
    case true:
      const result = application.getIdeas();
      render(result);
      e.target.innerText = "Show starred Ideas";
      application.toggled = !application.toggled;
      break;
  }
};
const searchIdeas = (e) => {
  const searchTerm = e.target.value;
  application.setSearchTerm(searchTerm);
  const res = application.findSearchedIdeas();
  render(res);
  application.setSearchTerm("");
};
const loadPage = () => {
  let result = application.getIdeas();
  render(result);
};
const clearForm = () => {
  IdeaForm.reset();
};
const render = (ideas) => {
  ideaGrid.innerHTML = "";
  ideas.map(addItemToCard);
};

const addItemToCard = (idea) => {
  ideaGrid.innerHTML += `
      <section class="idea-card" id="${idea.id}">
     <div class="idea-card-top dark-purple" id="ideaCardTop">
       <img src=${idea.star ? starActive : star} alt="star" class="star-button">
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
   </section>`;
};

// Event listeners

saveButton.addEventListener("click", addIdeaToDOM);
ideaGrid.addEventListener("click", findStarDeleteBtn);
showStarredButton.addEventListener("click", showStarredIdeas);
searchInput.addEventListener("input", searchIdeas);
window.onload = loadPage;
