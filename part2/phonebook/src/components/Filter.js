import React from 'react'

const Filter = ({filterName, handleFilterChange}) => {
  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with <input
        value = {filterName}
        onChange = {handleFilterChange}
      />
      </div>
    </div>
)}

export default Filter
