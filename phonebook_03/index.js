const http = require('http')

const express = require('express')
const app = express()

app.use(express.json())

let numbers = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

// Middleware to add timestamp
app.use((req, res, next) => {
    req.requestTime = new Date()
    next(); // Pass control to next middleware or route handler
})

// GET all contacts
app.get('/', (req, res) => {
    res.json(numbers)
})

// Display a page with request time
app.get('/info', (req, res) => {
    const requestTime = req.requestTime.toString()
    res.send(`<p>Found info for ${numbers.length} people</p>
        <p>${requestTime}</p>`)
})

// Display a single contact entry
app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    number = numbers.find(num => num.id === id)

    // error checking
    if (number) {
        res.json(number)
    } else {
        res.status(404).end()
    }
})

// Delete a single contact entry by id
app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id
    numbers = numbers.filter(num => num.id !== id)

    res.status(204).end()
})

const generateId = () => {
    const randId = Math.floor(Math.random() * 4000)
    return String(randId)
}

// Post a single contact entry with a random id
app.post('/api/persons', (req, res) => {
    const body = req.body

    if (!body.name || !body.number) {
        res.status(400).json({
            error: 'name or number missing'
        })
    } else if (numbers.find(n => n.name === body.name)) {
        res.status(404).json({
            error: 'name must be unique'
        })
    } else {
        const contact = {
            id: generateId(),
            name: body.name,
            number: body.number
        }

        numbers = numbers.concat(contact)
        res.json(contact)
    }
})

const PORT = 3000
app.listen(PORT)
console.log(`Server running on port ${PORT}`)