import React from 'react'
import Languages from "./Languages";
import Weather from "./Weather"

const CountriesList = ({countries, filterCountry, handleShowCountry}) => {
  const filtered = ""
    ? countries
    : countries.filter(country => country.name.common.toLowerCase().includes(filterCountry.toLowerCase()))

    if (filtered.length > 10) return <p>Too many matches, specify another filter</p>

    if (filtered.length > 1 && filtered.length < 10) {
      return (
        <div>
        {filtered.map(countriesNames =>
        <div>
        <p key={countriesNames.name.common}>{countriesNames.name.common}</p>
        {/* when clicked the button will call the function and pass the
        country objected to it */}
        <button onClick={() => handleShowCountry(countriesNames)}>Show</button>
        </div>
        )
        }
      </div>
    )}

    if (filtered.length === 1) {
      return (
        filtered.map(country =>
          <div>
          {console.log(country.latlng[0], "lat")}
          <h1 key={country.id}>{country.name.common}</h1>

          <p key={country.id}>capital: {country.capital}</p>
          <p key={country.id}>area: {country.area}</p>

          <h2>languages:</h2>
          <Languages country={filtered} />
          <img src={country.flags.svg} />
          <h2>Weather in { country.name.common}:</h2>
          <Weather lat={country.latlng[0]} lng={country.latlng[1]}/>

        </div>
        )
      )
    }

}

export default CountriesList
