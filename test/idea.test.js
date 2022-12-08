import {generateIdea} from "../js/idea.js";

describe('GenerateIdea', () => {
    test('it should add a title', () => {
      const title = 'What'   
      const idea = generateIdea({title})
      expect(idea.title).toBe(title)
    })
    test('it should add a body', () => {
        const body  = 'Please work'
        const idea = generateIdea({body})
        expect(idea.body).toBe(body)
    })
    test('it should have an specific id', () => {
        const idea = generateIdea({ id:10})
        // console.log(idea.id,"<>>idea")
        
        expect(idea.id).toBe(10)
      })

})