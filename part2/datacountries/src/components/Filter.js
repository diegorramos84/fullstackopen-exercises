import React from 'react'

const Filter = ({filterName, handleFilterChange}) => {
  return (
    <div>
      <div>
        find countries <input
        value = {filterName}
        onChange = {handleFilterChange}
      />
      </div>
    </div>
)}

export default Filter
