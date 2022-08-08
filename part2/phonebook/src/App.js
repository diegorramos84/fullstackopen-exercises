import React,{ useState, useEffect } from 'react'
import Filter from './components/Filter'
import PeopleForm from './components/PeopleForm'
import NamesList from './components/NamesList'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])

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

  return (
    <div>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange}/>
      <PeopleForm
      addPerson={addPerson}
      newName={newName}
      handleNameChange={handleNameChange}
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <div>New name: {newName}</div>
      <NamesList persons={persons} filterName={filterName}/>
    </div>
  )
}

export default App
