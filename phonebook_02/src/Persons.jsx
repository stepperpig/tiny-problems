import { useState } from 'react'

const Persons = ({ persons, nameFilter }) => {
    const filteredNames = persons.filter(person =>
        person.name.toLowerCase().includes(nameFilter.toLowerCase())
    );

    return (
        filteredNames.map(person => 
            (<p key={person.name}>{person.name} {person.number}</p>)
        )
    )
}

export default Persons