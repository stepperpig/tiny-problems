import { useState } from 'react'

const Filter = ({ nameFilter, setNameFilter }) => {
    const handleFilter = (event) => {
      setNameFilter(event.target.value)
    }
    
  return (
    <form>
        <div>
          Search: <input value={nameFilter} onChange={handleFilter} /> 
        </div>
      </form>
  )
}

export default Filter