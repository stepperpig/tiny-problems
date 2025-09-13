import { useState } from 'react'
import axios from 'axios'
import numberService from './services/persons'

const Persons = ({ persons, setPersons, nameFilter }) => {
    const filteredNames = persons.filter(p =>
        p.name.toLowerCase().includes(nameFilter.toLowerCase()) //p.n.toLowerCase().includes(nameFilter.toLowerCase())
    );

    const label = 'delete'

    const deleteNumber = (object) => {
        const id = object.id
        const targetPerson = persons.find(p => p.id === object.id)
        
        console.log(targetPerson)
        numberService.remove(id, targetPerson).then(response => {
            setPersons(persons.filter(p => p.id !== targetPerson.id))
            console.log(response.data)
        })
    }
  

    return (
        filteredNames.map(person => 
            (<li key={person.name}>{person.name} {person.number}
                <button onClick={() => {
                    if (window.confirm(`Delete ${person.name}?`)) {
                        deleteNumber(person)
                    }
                } }>{label}</button>
            </li>)
        )
    )
}

export default Persons