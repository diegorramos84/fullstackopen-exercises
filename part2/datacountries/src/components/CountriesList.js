import React from 'react'
import Languages from "./Languages";

const CountriesList = ({countries, filterCountry}) => {
  const filtered = ""
    ? countries
    : countries.filter(country => country.name.common.toLowerCase().includes(filterCountry.toLowerCase()))

    if (filtered.length > 10) return <p>Too many matches, specify another filter</p>

    if (filtered.length > 1 && filtered.length < 10) {
      return (
        <div>
        {filtered.map(countriesNames =>
        <p key={countriesNames.name.common}>{countriesNames.name.common}</p>)
        }
      </div>
    )}

    if (filtered.length === 1) {
      return (
        filtered.map(country =>
        <div>
          <h1 key={country.id}>{country.name.common}</h1>

          <p key={country.id}>capital: {country.capital}</p>
          <p key={country.id}>area: {country.area}</p>

          <p><strong>languages:</strong></p>
          <Languages country={filtered} />
        </div>
        )
      )
    }

}

export default CountriesList
