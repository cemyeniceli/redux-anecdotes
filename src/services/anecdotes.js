import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll =  async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createAnecdote = async (content) => {
    const anectode = {
        content,
        votes: 0
    }

    const response = await axios.post(baseUrl, anectode)
    return response.data
}

const updateVote = async (anecdote) => {
    const id = anecdote.id
    const updatedAnectode = {...anecdote, votes: anecdote.votes + 1} 
    const response = await axios.put(`${baseUrl}/${id}`, updatedAnectode)
	return response.data
}

export default {getAll, createAnecdote, updateVote}