import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }
    const allnames = persons.map(person => person.name)
    if (allnames.includes(newName)) {
        alert(`${personObject.name} is already in the books`)
        return
    } else {
        setPersons(persons.concat(personObject))
        setNewName('')
      }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
          value = {newName}
          onChange ={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>New name: {newName}</div>
      {persons.map(person =>
        <p key={person.name}>{person.name}</p>
      )}
    </div>
  )
}

export default App
