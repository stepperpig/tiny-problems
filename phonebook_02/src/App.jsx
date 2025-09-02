import { useState } from 'react'
import Filter from './Filter'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  // add the newName component to the persons array
  const add = (event) => {
    //check for a duplicate
    const isDuplicate = persons.some(
      (person) => person.name == newName
    );

    if (isDuplicate) {
      event.preventDefault()
      alert(`${newName} is already added to the phonebook!`)
      return;
    }

    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('') // clear newName buffer
    setNewNumber('') // clear newNumber buffer
    console.log(persons, event.target)
  }

  // we change the state of the newName component...
  const handleAddName = (event) => {
    setNewName(event.target.value)
  }

  const handleAddNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setNameFilter(event.target.value)
  }

  const filteredNames = persons.filter(person =>
    person.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook (Tiny Problems #1)</h1>
      <form>
        <div>
          Search: <input value={nameFilter} onChange={handleFilter} /> 
        </div>
      </form>

      <h2>Add New Contact</h2>
      <form onSubmit={add}>
        <div>
          Name: <input value={newName} onChange={handleAddName} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleAddNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
          {filteredNames.map(person => 
            (<p key={person.name}>{person.name} {person.number}</p>)
          )}
    </div>
  )
}

export default App
