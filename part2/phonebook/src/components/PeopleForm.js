import React from "react"

const PeopleForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange}) => {
  return (
      <div>
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
  </div>
  )
}



export default PeopleForm
