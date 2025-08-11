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
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0: 0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0})

  const vote = (votes, selected) => {

    const newVote = {...votes}
    newVote[selected] += 1 
    setVotes(newVote)

}


  return (
    <div>
      <h1>{anecdotes[selected]}</h1>
      <p>This anecdote has {votes[selected]} votes.</p>
      <button onClick={() => setSelected(getRandom(0,7))}>
      Next Anecdote
      </button>
      <button onClick={() => vote(votes, selected)}>
        Vote
      </button>
      <DisplayMostVotes votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

const getRandom = () => {
  const out = Math.floor(Math.random() * 8)
  return out
}

const DisplayMostVotes = ({votes, anecdotes}) => {

  let maxVotes = 0
  let outKey = 0
  Object.keys(votes).forEach(key =>{
    if(votes[key] >= maxVotes){
      outKey = parseInt(key)
      maxVotes = votes[key]
    }
  })
  return(
    <>
    <h2>Most Popular Anecdote</h2>
    <p>This is the most popular anecdote, with {maxVotes} votes.</p>
    <p>{anecdotes[outKey]}</p>
    </>
  )
}


export default App

