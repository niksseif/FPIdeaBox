// save to storage 
const saveToStorage = (idea) => {
    localStorage.setItem('ideas', JSON.stringify([ ...idea]))

}
const updateIdea = () => {
    const getIdea = localStorage.getItem('ideas')
    const parsedIdea = JSON.parse(getIdea)
    return parsedIdea.star ? true : false

}
const retrieveIdeas = () => {
    const getIdea = localStorage.getItem('ideas')
    const parsedIdea = JSON.parse(getIdea)
    return parsedIdea;   
}

module.exports = { saveToStorage, updateIdea, retrieveIdeas}