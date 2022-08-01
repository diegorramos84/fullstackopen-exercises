import React from 'react'

const CountriesList = ({countries, filterCountry}) => {
  const filtered = ""
    ? countries
    : countries.filter(country => country.common.toLowerCase().includes(filterCountry.toLowerCase()))
  return (
    <div>
    {filtered.map(countryName =>
    <p key={countryName.common}>{countryName.common}</p>)
    }
  </div>
)}

export default CountriesList
