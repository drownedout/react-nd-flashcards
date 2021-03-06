import { AsyncStorage } from 'react-native';

export const FLASHCARDS_STORAGE_KEY = 'Flashcards:decks';

function setData(){
    const decks = {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }
    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks))
    return decks
}

export const fetchDecks = () => 
  AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(decks => (decks ? JSON.parse(decks) : setData()))

export const saveDeck = (deck) => 
  AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({[deck.title]:deck}))

export const saveCard = (deck, card) =>
  fetchDecks().then(decks => {
    const fetchedDecks = {
      ...decks,
      [deck.title]: {
        ...decks[deck.title],
        questions: decks[deck.title].questions.concat([card])
      }
    }
    return AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(fetchedDecks))
  })
