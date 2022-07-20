// importing useState from react
import { useState } from "react";

//create Statistic component (table), taking text and value props
const Statistic = ({text, value}) =>
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

// Statistics component
const Statistics = ({good, bad, neutral, allClicks}) => {
  // if statement to check if we have any feedback
  if (allClicks.length === 0) {
    return <p>No feedback given</p>
  }
  // define all variable with the lenght of the allClicks array
  const all = allClicks.length
  // calculates de average of feedbacks
  const average = ((good * 1) + (neutral * 0) + (bad * -1))/all
  // calculates how many positive feedbacks
  const positive = (good / (allClicks.length)*100) + "%"
  // returns a table
  return (
    <>
    {/*returns a table */}
      <table>
        <tbody>
          {/*calls the Statistic component passing respective props */}
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
    </>
  )
}
// creates the button component and add an onClick listener to it
 const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  // sets the good variable, with a initial value of 0 and a function to update it
  const [good, setGood] = useState(0)
  // sets the neutral variable, initial value of 0
  const [neutral, setNeutral] = useState(0)
  // set the bad variable, intial value o 0
  const [bad, setBad] = useState(0)
  // sets the allClicks array that will store all the clicks
  const [allClicks, setAll] = useState([])

// define a function to handle clicks in the good button
  const handleGoodClicks = () => {
    // updates the array with a G letter when a good feedback
    setAll(allClicks.concat('G'))
    // adds 1 to the good variable
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
      {/* calls the button component passing respective props */}
        <Button onClick={handleGoodClicks} text="good" />
        <Button onClick={handleNeutralClicks} text="neutral" />
        <Button onClick={handleBadClicks} text="bad" />
      <h2>statistics</h2>
      {/* calls the statistic component that will return a table */}
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </div>
  )
}

export default App;
