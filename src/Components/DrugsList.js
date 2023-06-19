import React from 'react'

const DrugsList = ({ value, getDataByDrugName }) => {
  return (
    <>
      <button
        className='drugTitle'
        value={value}
        onClick={(e) => {
          getDataByDrugName(e)
        }}
        role='button'
      >
        {value}
      </button>
    </>
  )
}

export default DrugsList
