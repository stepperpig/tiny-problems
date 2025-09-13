import { useState } from 'react'
import numberService from './services/persons'

const PersonForm = ({ persons, newName, newNumber, setPersons, setNewName, setNewNumber}) => {
    // add the newName component to the persons array
  const add = (event) => {
    //check for a duplicate
    const isDuplicate = persons.some(
      (person) => person.name == newName
    );

    if (isDuplicate) {
      event.preventDefault()
      
      if (window.confirm(`${newName} is already added to the phonebook! Wanna replace the old number with a new one?`)) {
          const target = persons.find((p) => p.name == newName)

          console.log(target)
          const newObject = { name: newName, number: newNumber}
          numberService.update(target.id, newObject).then(response => {
            //console.log("what the fuck is the response?")
            console.log(response.data)
            setPersons(persons.map(target => target.id === response.data.id ? response.data : target))

          }).catch(error => {
            console.error("Shit! Something went wrong!")
          })
      }
      return;
    }

    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }

    numberService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
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