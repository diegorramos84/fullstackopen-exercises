import React from 'react'

const NameList = ({persons, filterName}) => {
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

export default NameList
