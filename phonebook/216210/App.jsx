import { useState } from 'react'

const App = () => {

// VARIABLES + STATES #################################################
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [newSearch, setSearch] = useState('')

//EVENT HANDLERS #################################################

  const handleNewEntry = (event) => {
    event.preventDefault();

    //Handle if added number with no name
    if(newName === ''){
      alert ("Please enter a name!")
      return
    }

    //Handle if added the same person 
    if(persons.find((person) => person.name === newName)){
      alert(`${newName} is already in the phonebook!`)
      return
    }
   setPersons(persons.concat({name: newName, number: newNum}))

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
        newName={newName}
        newNum={newNum}
        setNewName={setNewName}
        setNewNum={setNewNum}
        handleNewEntry={handleNewEntry}
      /> 
      <Filter newSearch={newSearch} setSearch={setSearch}/>
      <RenderPeople filteredPeople={filteredPeople}/>
    </div>
  )
}

//take a search value and an event handler (onchange). 
//notice what's ugly, sucks to use, and confusing. 
//get used to highlighting the code and put it in a new component. 
//then you move all the dependencies. (refactoring)
const Filter = ({newSearch, setSearch}) => {

  return(
    <>
      <h2>Search by name</h2>
      Name: <input 
      value={newSearch}
      onChange={(event) => {setSearch(event.target.value)}}/>
    </>
  )
}

const PersonForm = ({newName, newNum, setNewName, setNewNum, handleNewEntry}) => {
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

const RenderPeople = ({filteredPeople}) => {
    return(
        <>
        <h2>Numbers</h2>
        {filteredPeople.map((person) => (<p key={person.name}>{person.name} {person.number}</p>))}
        </>
    )
}
export default App
