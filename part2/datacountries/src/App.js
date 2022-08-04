import React,{ useState, useEffect } from 'react';
import axios from "axios";
import Filter from './components/Filter'
import CountriesList from './components/CountriesList'

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

  return (
    <div>
      <Filter filterCountry={filterCountry} handleFilterChange={handleFilterChange} />
      <CountriesList countries={countries} filterCountry={filterCountry} />
    </div>
  );
}

export default App;
