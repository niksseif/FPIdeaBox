//DOM related js
import { generateIdea } from "./idea.js";
import {
  saveToStorage,
  retrieveIdeas,
  deleteFromStorage,
} from "./localStorage";

const app = () => {
  let ideas = retrieveIdeas();
  let toggled = false;
  let searchTerm = "";
  const addIdea = (newIdea) => {
    ideas = [...ideas, generateIdea(newIdea)];
    saveToStorage(ideas);
  };

  const getIdeas = () => ideas;

  const removeIdea = (id) => {
    ideas = ideas.filter((idea) => idea.id !== id);
    const selectedIdea = ideas.filter((idea) => idea.id === id);
    deleteFromStorage(selectedIdea);
    saveToStorage(ideas);
    return ideas;
  };

  const toggleStar = (id) => {
    ideas.filter((idea) =>
      idea.id === id ? (idea.star = !idea.star) : "the ID is not matching"
    );
    saveToStorage(ideas);
    return ideas;
  };
  const showStars = () => {
    return ideas.filter((idea) => idea.star);
  };
  const setSearchTerm = (value) => {
    searchTerm = value;
  };
  const findSearchedIdeas = () => {
    if (!searchTerm.isEmpty) {
      return ideas.filter(
        (idea) =>
          idea.title.includes(searchTerm) || idea.body.includes(searchTerm)
      );
    }
    return;
  };

  return {
    addIdea,
    getIdeas,
    removeIdea,
    toggleStar,
    showStars,
    toggled,
    setSearchTerm,
    findSearchedIdeas,
  };
};
app();
module.exports = { app };
