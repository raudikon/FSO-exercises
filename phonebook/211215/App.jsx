import { useEffect, useState } from 'react'
import axios from 'axios'
import services from './services.js'

const App = () => {

// VARIABLES + STATES #################################################
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [newSearch, setSearch] = useState('')

  useEffect(()=>{
    services.getAll()
    .then(response => setPersons(response.data))
  }, [])

//EVENT HANDLERS #################################################

  const handleNewEntry = (event) => {
    event.preventDefault();

    const newEntry = {
      name: newName, 
      number: newNum
    }

    //Handle if added number with no name
    if(newName === ''){
      alert ("Please enter a name!")
      return
    }

    //Handle updating a person's number OR adding new from scratch
    let existingPerson = persons.find(person => person.name === newName)
    if(existingPerson){
      if (window.confirm(`${newName} is already in the phonebook. Update number?`)){
        // console.log(existingPerson.name, existingPerson.id, " already exists") <- this works! 
        services.updateNum(existingPerson.id, newEntry)
        .then(response => {
          setPersons(persons.map(person =>
            person.id === existingPerson.id ? response.data : person
            ))
          })
      }
    }
    else{
      services.create(newEntry)
      .then(response => {
      setPersons(persons.concat(response.data))
    })
    }
  }

  const handleRemove = (id) => {
    let toRemove = persons.find(person => person.id === id)
    if(window.confirm(`Delete ${toRemove.name}?`)){
      services.remove(id)
      .then(response => {
        setPersons(persons.filter(
          person => person.id !== id
        ))
      })
    }
  }
//OTHER FUNCTIONS 
  let filteredPeople;
  if(newSearch !== ''){
    filteredPeople = persons.filter((person) => 
      person.name.toLowerCase().includes(newSearch.toLowerCase()))
  }
  else{
    filteredPeople = persons
  }


//RETURN #################################################
  return (
    <div>
      <h1>Welcome to the Phonebook!</h1>

      <PersonForm 
        handleNewEntry={handleNewEntry}
        newName={newName}
        setNewName={setNewName}
        newNum={newNum}
        setNewNum={setNewNum}
      />

      <SearchByName 
        newSearch={newSearch}
        setSearch={setSearch}
      /> 

      <DisplayNumbers 
        filteredPeople={filteredPeople}
        handleRemove={handleRemove}
      />

    </div>
  )
}


//LEAVING ROOT COMPONENT #################################################

const PersonForm = ({handleNewEntry, newName, setNewName, newNum, setNewNum}) => {
  return(
    <>
      <h2>Add a person</h2>
      <form onSubmit={handleNewEntry}>
        <div>
          Name: 
          <input 
            value={newName}
            onChange={(event) => setNewName(event.target.value)}/>
        </div>
        <div>
          Number:
          <input 
          value = {newNum}
          onChange={(event) => setNewNum(event.target.value)} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  )
}

const SearchByName = ({newSearch, setSearch}) => {
  return(
  <>
    <h2>Search by name</h2>
    Name: <input 
    value={newSearch}
    onChange={(event) => {setSearch(event.target.value)}}/>
  </>
  )
}

const DisplayNumbers = ({filteredPeople, handleRemove}) => {
  return(
    <>
      <h2>Numbers</h2>
      {filteredPeople.map((person) => 
        (<p key={person.name}>{person.name} {person.number}
        <button onClick={()=>handleRemove(person.id)}>Remove</button>
        </p>))}
    </>
  )
}
export default App
