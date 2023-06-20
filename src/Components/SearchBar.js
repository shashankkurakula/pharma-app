import React, { useState } from 'react'
import { Search, Close } from '@mui/icons-material'
import DrugsList from './DrugsList'
import DrugInfo from './DrugInfo'
import Landing from './Landing'

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([])
  const [drugList, setdrugList] = useState([])
  const [mechanismList, setmechanismList] = useState([])
  const [wordEntered, setWordEntered] = useState('')
  const [isHidden, setisHidden] = useState(true)
  const [viewMechanismSelectedDrugsList, setViewMechanismSelectedDrugsList] =
    useState(false)
  const [mechanismSelectedDrugsList, setMechanismSelectedDrugsList] = useState(
    []
  )
  const [viewDrugsList, setViewDrugsList] = useState(false)
  const [drugInfo, setDrugInfo] = useState()

  const handleFilter = (event) => {
    setViewMechanismSelectedDrugsList(false)
    setViewDrugsList(false)
    setisHidden(false)
    var Drugset = new Set()
    var Mechanismset = new Set()
    const searchWord = event.target.value

    setWordEntered(searchWord)
    data.filter((value) => {
      if (value.title.toLowerCase().includes(searchWord.toLowerCase())) {
        Drugset.add(value.title)
      }
      return true
    })
    data.filter((value) => {
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
    setdrugList([])
    setmechanismList([])
    setFilteredData([])
    setWordEntered('')
    setViewDrugsList(false)
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
    var tempArray = Array.from(temp)
    console.log(tempArray)
    setWordEntered('')
    setViewMechanismSelectedDrugsList(false)
    setViewDrugsList(true)
    setDrugInfo(tempArray)
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
    var tempArray = Array.from(temp)
    console.log(tempArray)
    setWordEntered('')
    setViewDrugsList(false)
    setViewMechanismSelectedDrugsList(true)
    setMechanismSelectedDrugsList(tempArray)

    // debugger
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
          {!wordEntered ? (
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

      {/* {viewDrugsList ? <DrugInfo drugInfo={drugInfo} /> : <Landing />} */}
      {viewDrugsList && <DrugInfo drugInfo={drugInfo} />}
      {!wordEntered && !drugList.length && !viewMechanismSelectedDrugsList && (
        <Landing />
      )}

      {viewMechanismSelectedDrugsList ? (
        <div className='dataResult customScroll'>
          <div className='drugDetails'>
            {mechanismSelectedDrugsList.length > 0 ? (
              <div>
                <div className='drugTitleDiv headerText'>Drug Name</div>
                <div className='drugTitleDiv'>
                  {mechanismSelectedDrugsList.map((drug, ind) => {
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
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default SearchBar

// {viewMechanismSelectedDrugsList ? (
//     <div className='drugTitleDiv'>
//       {drugList.map((drug, ind) => {
//         return (
//           <DrugsList
//             className='drugTitle'
//             key={ind}
//             value={drug}
//             getDataByDrugName={getDataByDrugName}
//           />
//         )
//       })}
//     </div>
//   ) : null}

// {viewMechanismSelectedDrugsList ? (
//     <div className='dataResult customScroll' hidden={isHidden}>
//       <div className='drugDetails'>
//         {drugList.length > 0 ? (
//           <div>
//             <div className='drugTitleDiv headerText'>Drug Name</div>
//             <div className='drugTitleDiv'>
//               {drugList.map((drug, ind) => {
//                 return (
//                   <DrugsList
//                     className='drugTitle'
//                     key={ind}
//                     value={drug}
//                     getDataByDrugName={getDataByDrugName}
//                   />
//                 )
//               })}
//             </div>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   ) : null}
