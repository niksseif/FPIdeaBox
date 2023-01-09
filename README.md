# FP - IdeaBox
This is my attempt to develop an Idea Box project with Functional programming.

## Running the app
- Clone the repo: git clone https://github.com/niksseif/FPIdeaBox.git
- Install the dependencies: npm i
- Start the app: npm start

## Running the tests
- Follow the same installation steps as above, then:
- Run the tests: npm test
- Alternatively, run the tests in watch mode: npm run test:watch

## Functional programming:

Functional programming is a programming paradigm in which programs are constructed by applying and composing functions. It is based on pure functions, meaning that functions are independent of state and have no side effects. Functional programming is also characterized by its use of immutable data, which means that data cannot be modified once it has been created. The goal of functional programming is to develop programs that are more concise, easier to debug, and more maintainable than programs written in other paradigms.

### Pure functions
A pure function is a function that consistently generates the same output for a given set of input values and has no side effects. This indicates that the function can be called several times with the same arguments and produce the same result each time. Pure functions are deterministic, which means that they do not affect the state of a program or system outside of the function's scope. Pure functions are a crucial component of functional programming since they help to ensure that programs are predictable and clear of unexpected side effects. Here is a sample of implemented pure functions in this application.
```
const app = () => {
  ...
  const addIdea = (newIdea) => {
    ideas = [...ideas, generateIdea(newIdea)]
    saveToStorage(ideas)
  }
  const getIdeas = () => ideas;
  return {
    ...
    addIdea, 
    getIdeas   
  }
}
```
### Closure
A closure, also known as a lexical closure or function closure, is a technique for implementing lexically scoped name binding in a language with first-class functions. A closure is formed whenever a function is defined within the scope of another function, and the inner function has access to the variables defined in the outer function. Closures allow functions to access variables defined outside their scope and preserve the state between invocations.
```
const app = () => {
  !retrieveIdeas()
    ? (ideas = [{ id: 1, title: "Hello", body: "hello to Idea Box" }])
    : (ideas = retrieveIdeas());
  let toggled = false;
  let searchTerm = "";
  const addIdea = (newIdea) => {
    ideas = [...ideas, generateIdea(newIdea)];
    saveToStorage(ideas);
  };

  const getIdeas = () => {
    return ideas;
  };

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
```
