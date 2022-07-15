import { useState } from "react";

const Statistics = (props) => {
  console.log(props.value)
  if (props.value === 0 || isNaN(props.value)) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <p>{props.text} {props.value}{props.alt}</p>
  )

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClicks = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
  }

  const handleNeutralClicks = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleBadClicks = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
        <button onClick={handleGoodClicks}>good</button>
        <button onClick={handleNeutralClicks}>neutral</button>
        <button onClick={handleBadClicks}>bad</button>
      <h2>statistics</h2>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={allClicks.length} />
      <Statistics text="average" value={((good * 1) + (neutral * 0) + (bad * -1)) /allClicks.length} />
      <Statistics text="positive" value={good / (allClicks.length)*100} alt="%" />
    </div>
  )
}

export default App;
