import { useState } from 'react'

const Persons = () => {
    const [persons, setPersons] = useState([
        { 
            name: 'Arto Hellas', 
            number: '040-123456' 
        }
    ]);
}

export default Persons