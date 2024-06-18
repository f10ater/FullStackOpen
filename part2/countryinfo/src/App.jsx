import { useState, useEffect } from 'react'
import axios from 'axios'
import ShowResults from './components/ShowResults'

function App() {
  const [searchString, setSearchString] = useState('')
  const [results, setResults] = useState([])

  const url = 'https://studies.cs.helsinki.fi/restcountries/api/all'

  
  useEffect(() => {
      axios
    .get(url)
    .then((response) => {
      setResults(response.data)
    })
  }, [])

  const handleChange = (event) => {
    setSearchString(event.target.value)
  }

  return (
    <>
    <div>  
        Find Countries 
        <input value={searchString} onChange={handleChange}/>
    </div>
    <ShowResults list={results} searchString={searchString} setSearchString={setSearchString}/>
    </>
  )
}

export default App
