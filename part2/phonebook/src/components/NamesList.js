import React from 'react'

const NameList = ({persons, filterName, removePhone}) => {
  const filtered = ""
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))
  return (
    <div>
    {filtered.map(name =>
    <p key={name.name}>{name.id} {name.name} {name.number}
    <button
    onClick={removePhone}
    value={name.id}
    name={name.name}
    >delete</button>
    </p>
    )}
  </div>
)}

export default NameList
