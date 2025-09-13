import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import numberService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    numberService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  return (
    <div>
      <h1>Tiny Phonebook</h1>
      <Filter 
        nameFilter={nameFilter} 
        setNameFilter={setNameFilter} />

      <h2>Add New Contact</h2>
      <PersonForm 
        persons={persons} 
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber} />
      
      <h2>Numbers</h2>
      <Persons 
        persons={persons}
        setPersons={setPersons}
        nameFilter={nameFilter}
        
      />
    </div>
  )
}

export default App
