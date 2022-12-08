


const generateIdea = (idea={}) => {
   let id  = () => idea.id || Date.now(); 
   let title = () => idea.title
   let body = () => idea.body
   let starred = () => idea.star ? idea.star : false
   return {
    id: id(),
    title: title(),
    body : body(),
    star: starred()
   }  
}

module.exports = {
    generateIdea
}


