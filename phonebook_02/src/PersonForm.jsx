import { useState } from 'react'

const PersonForm = ({ persons, newName, newNumber, setPersons, setNewName, setNewNumber}) => {
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
  }

  // we change the state of the newName component...
  const handleAddName = (event) => {
    setNewName(event.target.value)
  }

  const handleAddNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
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
  )
}

export default PersonForm