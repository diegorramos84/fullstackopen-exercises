import React from 'react'

const Filter = ({filterCountry, handleFilterChange}) => {
  return (
    <div>
      <div>
        find countries <input
        value = {filterCountry}
        onChange = {handleFilterChange}
      />
      </div>
    </div>
)}

export default Filter
