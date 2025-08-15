import axios from 'axios'
const baseUrl = "http://localhost:3001/persons"

//Get all persons. 
const getAll = () => { 
    return axios.get(baseUrl)
}

//Add a person. 
const create = (newObject) => {
    return axios.post(baseUrl, newObject)
}

//Change star status
const toggleStar = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

//Remove a person. 
const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

//Update phone number.
const updateNum = (id, newNum) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

export default {
    getAll: getAll, 
    create: create,
    toggleStar: toggleStar,
    remove: remove,
    updateNum: updateNum
}
