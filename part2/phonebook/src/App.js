import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  const allnames = persons.map(person => person.name)


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    if (allnames.includes(newName)) {
        alert(`${personObject.name} is already in the books`)
        return
    } else {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      }
  }

    const ShowPeople = () => {
      const filtered = ""
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
      return (
        <div>
        {filtered.map(name =>
        <p key={name.name}>{name.name} {name.number}</p>)
        }
      </div>
    )}

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with <input
        value = {filterName}
        onChange = {handleFilterChange}
      />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
          value = {newName}
          onChange ={handleNameChange}
          />
        </div>
        <div>
          number: <input
          value = {newNumber}
          onChange ={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>New name: {newName}</div>
      <ShowPeople />
    </div>
  )
}

export default App
