import React from 'react'

const Languages = ({country}) => {
  const languagesList = country.map(el => el.languages)
  const languages= Object.values(languagesList[0])
  console.log(languages)
  return (
    languages.map(el =>
      <ul>
        <li key={el}>{el}</li>
      </ul>
    )
  )

  // console.log(languages, typeof languages, "lang")
  // console.log(Object.values(languages[0]))
  // return (
  //  <ul> {
  //    Object.values(countryLanguages).map(el => <li key={el}>{el}</li>)
  //   }
  //  </ul>
  // )
}

export default Languages
