import {app, saveToStorage} from '../js/app'
import {generateIdea} from '../js/idea'

describe('save to storage', () => {
    test('expect save idea title matching idea title', () => {
        const idea = generateIdea({ title: 'what', body:'what'})
        saveToStorage(idea)
        const getIdea = localStorage.getItem('idea')
        const savedIdea = JSON.parse(getIdea)
        
      expect(savedIdea.title).toBe('what')
    })

    
})
// describe('remove from storage', () => {
//     test('remove idea from local storage', () => {
//         const idea = generateIdea({ title: 'Please', body:'work'})
//         // saveToStorage(idea)

//         // expect(deleteFromStorage(idea)).toBe({})
//     })
// })