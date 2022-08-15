import React,{ useState, useEffect } from 'react';
import axios from "axios";
import Filter from './components/Filter'
import CountriesList from './components/CountriesList'

// 924f940fe764a64f6f88233a84bba9d0

function App() {

  const [countries, setCountries] = useState([])
  const [filterCountry, setFilterCountry] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  },[])

  const handleFilterChange = (event) => {
    setFilterCountry(event.target.value)
  }

  // Set a function to handle when we click the show button in the country
  const handleShowCountry = (countriesNames) => {
    // this function takes the country we clicked and set the filter to the name
    // of that country
    setFilterCountry(countriesNames.name.common)
  }

  return (
    <div>
      <Filter filterCountry={filterCountry} handleFilterChange={handleFilterChange} />
      <CountriesList
      // we pass the function to handle the click to the component
      handleShowCountry = {handleShowCountry}
      countries={countries}
      filterCountry={filterCountry} />
    </div>
  );
}

export default App;
