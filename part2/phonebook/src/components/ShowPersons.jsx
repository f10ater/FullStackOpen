import services from '../services/phonebook'
import { displayMessage } from '../services/displayMessage'

const ShowPersons = ({persons, setPersons, setMessage, setSuccessState}) => {
  const removePerson = (person) => {
    if (confirm(`Delete ${person.name}`)) {
      services
      .remove(person.id)
      .then((person) => {
        setPersons(persons.filter(p => p.id !== person.id))
      })
      .catch((error) => {
        setSuccessState(false)
        setPersons(persons.filter(p => p.id !== person.id))
        displayMessage(`Information of ${person.name} has already been removed from the server`, setMessage)
      })
    }
    
  }
    return (
        <>  
        <h2>Numbers</h2>
          {persons.map(person => <p key={person.name}>{person.name} {person.phone} 
          <button onClick={() => removePerson(person)}>
            Delete
          </button>
          </p>)}
        </>
    )
}

export default ShowPersons