import react from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteForAnecdote } from "../reducers/anecdoteReducer";
import { setNotification, resetNotification } from "../reducers/notificationReducer"

const Anecdote = ({anecdote, vote}) => {
    return (
        <div> 
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
    )
}

const Anecdotes = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filterText = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteForAnecdote(id))
        const anectodeForMessage = anecdotes.find(anecdote => anecdote.id === id)
        const message = `You voted ${anectodeForMessage.content}`
        dispatch(setNotification(message, 3))
    }

    const anecdotesToDisplay = anecdotes.filter(anecdote => anecdote.content.includes(filterText))

    return (
        <div>
            <h2>Anecdotes</h2> 
            {anecdotesToDisplay.map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} vote={vote}/>)}
        </div>
    )
}

export default Anecdotes