import { useState } from 'react'

const Filter = (props) => {
    const [nameFilter, setNameFilter] = useState('');
    const handleFilter = (event) => {
        setNameFilter(event.target.value)
        console.log(nameFilter)
    }

    const filteredNames = persons.filter(person =>
        person.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
    
  return (
    <form>
        <div>
          Search: <input value={nameFilter} onChange={handleFilter} /> 
        </div>
      </form>
  )
}

export default Filter