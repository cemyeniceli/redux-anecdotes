import anectodeService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'VOTE': {
      const id = action.data.id
      const anecdoteToChange = state.find(anecdote => anecdote.id === id)
      const updatedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
      return state.map((anecdote) => anecdote.id !== id ? anecdote : updatedAnecdote)
    }
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anectodeService.createAnecdote(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: {
        content: anecdote.content,
        votes: 0
      }
    })
  }
}

export const voteForAnecdote = (id) => {
  return async dispatch => {
    const anecdotes = await anectodeService.getAll()
    const anecdoteToChange =  anecdotes.find(anecdote => anecdote.id === id)
    const updatedAnecdote = await anectodeService.updateVote(anecdoteToChange)
    dispatch({
      type: 'VOTE',
      data: {
        id: updatedAnecdote.id
      }
    }) 
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anectodeService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  } 
}

export default reducer