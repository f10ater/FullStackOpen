import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const nextAnecdote = () => {
    let next
    do {
      next = Math.floor(Math.random() * anecdotes.length)
    } while(next === selected)

    setSelected(next)
  }

  const voteAnecdote = () => {
    let updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)

    if (updatedVotes[selected] > updatedVotes[max])
      setMax(selected)
  }

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [max, setMax] = useState(0)

  return (
    <>
      <Heading text='Anecdote of the day'/>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button text='Next Anecdote' onClick={nextAnecdote}/>
      <Button text='Vote Anecdote' onClick={voteAnecdote}/>

      <Heading text='Anecdote with the most votes'/>
      <Anecdote anecdote={anecdotes[max]} votes={votes[max]}/>
    </>
  )
}

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const Anecdote = ({anecdote, votes}) => {
  return(
    <div>
      {anecdote} <br/>
      has {votes} votes
    </div>
  )
}

const Heading = (props) => <h2>{props.text}</h2>

export default App