import React, { useState } from 'react'
import { Search, Close } from '@mui/icons-material'
import DrugsList from './DrugsList'
import DrugInfo from './DrugInfo'

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([])
  const [drugList, setdrugList] = useState([])
  const [mechanismList, setmechanismList] = useState([])
  const [wordEntered, setWordEntered] = useState('')
  const [isHidden, setisHidden] = useState(true)
  const [mechanismSelectedDrugsList, setMechanismSelectedDrugsList] =
    useState(false)
  const [viewDrugsList, setViewDrugsList] = useState(false)

  const handleFilter = (event) => {
    setMechanismSelectedDrugsList(false)
    setViewDrugsList(false)
    setisHidden(false)
    var Drugset = new Set()
    var Mechanismset = new Set()
    const searchWord = event.target.value

    setWordEntered(searchWord)
    let drugtitles = data.filter((value) => {
      if (value.title.toLowerCase().includes(searchWord.toLowerCase())) {
        Drugset.add(value.title)
      }
    })
    let newFilter = data.filter((value) => {
      value.mechanismsOfAction.filter((mech) => {
        if (mech.mechanism.toLowerCase().includes(searchWord.toLowerCase())) {
          Mechanismset.add(mech.mechanism)
        }
      })
    })
    if (searchWord === '') {
      setdrugList([])
      setmechanismList([])
      setisHidden(true)
    } else {
      var darry = Array.from(Drugset)
      var marry = Array.from(Mechanismset)
      setdrugList(darry)
      setmechanismList(marry)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  const getDataByDrugName = (e) => {
    var select = e.target.value
    setisHidden(true)
    var temp = new Set()
    data.filter((value) => {
      if (value.title === select) {
        temp.add(value)
      }
    })
    console.log(Array.from(temp))
    setWordEntered('')
    setMechanismSelectedDrugsList(false)
    setViewDrugsList(true)
  }

  const getDataBymechanism = (e) => {
    var select = e.target.value
    setisHidden(true)
    //setMechanismSelectedList
    var temp = new Set()
    data.filter((value) => {
      value.mechanismsOfAction.filter((mech) => {
        if (mech.mechanism === select) {
          temp.add(value.title)
        }
      })
    })
    console.log(Array.from(temp))
    setWordEntered('')
    setViewDrugsList(false)
    setMechanismSelectedDrugsList(true)
  }

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input
          type='text'
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className='searchIcon'>
          {filteredData.length === 0 ? (
            <Search />
          ) : (
            <Close id='clearBtn' onClick={clearInput} />
          )}
        </div>
      </div>
      <div className='dataResult customScroll' hidden={isHidden}>
        <div className='drugDetails'>
          {drugList.length > 0 ? (
            <div>
              <div className='drugTitleDiv headerText'>Drug Name</div>
              <div>
                <div className='drugTitleDiv'>
                  {drugList.map((drug, ind) => {
                    return (
                      <DrugsList
                        className='drugTitle'
                        key={ind}
                        value={drug}
                        getDataByDrugName={getDataByDrugName}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          ) : null}
          {mechanismList.length > 0 ? (
            <div>
              <div className='drugMechanism headerText'>
                Mechanisms Of Action
              </div>
              <div>
                <div className='drugMechanism'>
                  {mechanismList.map((mec, ind) => {
                    return (
                      <button
                        className='mechanism'
                        key={ind}
                        value={mec}
                        onClick={(e) => {
                          getDataBymechanism(e)
                        }}
                        role='button'
                      >
                        {mec}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {viewDrugsList ? <DrugInfo /> : null}
      {mechanismSelectedDrugsList ? (
        <div className='drugTitleDiv'>
          {drugList.map((drug, ind) => {
            return (
              <DrugsList
                className='drugTitle'
                key={ind}
                value={drug}
                getDataByDrugName={getDataByDrugName}
              />
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

export default SearchBar
