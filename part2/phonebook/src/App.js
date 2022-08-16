import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PeopleForm from './components/PeopleForm'
import NamesList from './components/NamesList'
import Notifications from './components/Notification'

import personsService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)


  useEffect(() => {
    personsService
      .getAll()
      .then(allPersons=> {
        setPersons(allPersons)
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

  // TODO: this should get the names from the server


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }

    const updateName = persons.find(person => person.name === newName)
      if (updateName) { // check if name already exists
        if (window.confirm(`${personObject.name} is already in the phonebook,
            replace the old number with the new one?`)) {
          personsService
            .update(updateName.id, personObject)
            .then(returnedPerson => {
              setPersons(persons.map(person =>
                person.id !== updateName.id ? person : returnedPerson))
              setNewName('')
              setNewNumber('')
              setNotificationMessage(
                `note: ${personObject.name} contact was updated`
              )
              setTimeout(() => {
                setNotificationMessage(null)
              }, 5000);
            })
        }
    } else {
        personsService
          .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
            setNotificationMessage(
              `note: ${personObject.name} was added to the contact list`
            )
            setTimeout(() => {
              setNotificationMessage(null)
            }, 5000);
        })
      }
  }

  const removePhone = (event) => {
    const name = event.target.name
    const id = event.target.value
    if (window
      .confirm(`Do you really want to delete ${name}'s contact?`)) {
        personsService
          .remove(id)
          .then(allPersons => {
            console.log(allPersons)
            setPersons(persons.filter(person => person.name !== name ))
        })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notifications message={notificationMessage} />
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
      <NamesList
      persons={persons}
      filterName={filterName}
      removePhone={removePhone}
      />
    </div>
  )
}

export default App
