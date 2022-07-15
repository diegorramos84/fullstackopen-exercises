import { useState } from "react";

const Statistic = ({text, value}) =>
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

const Statistics = ({good, bad, neutral, allClicks}) => {
  console.log(allClicks.length);
  if (allClicks.length === 0) {
    return <p>No feedback given</p>
  }
  const all = allClicks.length
  const average = ((good * 1) + (neutral * 0) + (bad * -1))/all
  const positive = (good / (allClicks.length)*100) + "%"
  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </tbody>
    </table>
  )
}

 const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

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
        <Button onClick={handleGoodClicks} text="good" />
        <Button onClick={handleNeutralClicks} text="neutral" />
        <Button onClick={handleBadClicks} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  )
}

export default App;
