import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import SearchBar from './Components/SearchBar'

function App() {
  const [drugsData, setDrugsData] = useState()

  useEffect(() => {
    const fetchDrugs = async () => {
      const drugsUrl = 'https://comfortable-trench-coat-clam.cyclic.app/drugs'

      try {
        const drugsData = await axios.get(drugsUrl)
        console.log(drugsData)
        setDrugsData(drugsData.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDrugs()
  }, [])

  return (
    <div className='App'>
      <SearchBar placeholder='Search' data={drugsData} />
    </div>
  )
}

export default App
