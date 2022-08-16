import React from 'react'

const Filter = ({filterName, handleFilterChange}) => {
  return (
    <div>
      <div>
        filter shown with <input
        value = {filterName}
        onChange = {handleFilterChange}
      />
      </div>
    </div>
)}

export default Filter
