import React, {useEffect} from 'react'
import NewAnecdote from './components/NewAnecdote'
import Anecdotes from './components/Anectodes'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
import { initAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(initAnecdotes())
    }, [dispatch])

  return (
    <div>
      <Notification />
      <Filter />
      <Anecdotes />
      <NewAnecdote/>
    </div>
  )
}

export default App