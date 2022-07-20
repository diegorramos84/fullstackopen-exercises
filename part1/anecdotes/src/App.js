import { useState } from "react";

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const randomizer = () => {
  let random = Math.floor(Math.random() * 6 )
  return random
}
  const mostVoted = (array) => {
    let most = Math.max(array)
    return most

  }


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])
  const handleSelection = () => {
    setSelected(randomizer)
  }
  const handleVotes = () => {
    // makes a copy of the current votes state
    const votesCopy = [...votes]
    // adds 1 to the selected index
    votesCopy[selected] += 1
    // update votes with the new array
    setVotes(votesCopy)
  }

  let maxIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {/* randomize the selected number so it takes a different anectode
      every click */}
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      {/* we need to add a vote to the selected anectdote */}
      <Button onClick={handleVotes} text="vote" />
      <Button onClick={handleSelection} text="next anecdote" />
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {votes[maxIndex]} votes</p>
    </div>
  );
}

export default App;
