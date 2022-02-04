import React from 'react'
import NewAnecdote from './components/NewAnecdote'
import Anecdotes from './components/Anectodes'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = () => {

  return (
    <div>
      <Filter />
      <Notification />
      <Anecdotes />
      <NewAnecdote/>
    </div>
  )
}

export default App