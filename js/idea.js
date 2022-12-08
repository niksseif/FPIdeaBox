


const generateIdea = (idea={}) => {
   const id  = () => idea.id || Date.now(); 
   const title = () => idea.title
   const body = () => idea.body
   const starred = () => idea.star ? idea.star : false
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


