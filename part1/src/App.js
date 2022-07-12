const Hello = (props) => {
  return (
    <div>
      <p>Hello world {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age ={26 + 18} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App;
