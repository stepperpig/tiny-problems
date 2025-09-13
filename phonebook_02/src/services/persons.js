import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => {
        return response.data
    })
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const remove = (id, object) => {
    const request = axios.delete(`${baseUrl}/${id}`, object)
    return request.then(response => response.data)
}

const update = (id, newObj) => {
    try {
        const request = axios.put(`${baseUrl}/${id}`, {
            name: newObj.name,
            number: newObj.number
        })
        return request.then(response => response)
    } catch {
        console.log("skeet")
    }
}

export default { getAll, create, remove, update }