import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createAnecdote, voteForAnecdote } from './reducers/anecdoteReducer'
import NewAnecdote from './components/NewAnecdote'
import Anecdotes from './components/Anectodes'

const App = () => {

  return (
    <div>
      <Anecdotes />
      <NewAnecdote/>
    </div>
  )
}

export default App