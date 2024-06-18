import services  from '../services/phonebook'
import { displayMessage } from '../services/displayMessage'



const AddContact = ({handleChange, newName, newPhone, setNewName, setNewPhone, setPersons, persons, setMessage, setSuccessState}) => {

    const addPerson = (event) => {

      setSuccessState(true)
    
      event.preventDefault()
      if (!newName || !newPhone) {
        alert('Both Name and Phone Number field must have a non-empty value')
        return
      }
      
      const match = persons.find(person => person.name === newName)
      console.log(match);
      if (match) {
        if (match.phone === newPhone) {
          alert(`${newName} is already added to phonebook`)
          setNewName('')
          setNewPhone('')
          return
        }
        if (confirm(`${match.name} is already added to the phonebook, replace the old number with a new one`)) {
          const updatedPerson = {
            name: newName,
            phone: newPhone
          }

          services.update(match.id, updatedPerson)
          .then(data => {
            console.log(data)
            setPersons(persons.map(person => person.name === match.name ? updatedPerson : person))
            setNewName('')
            setNewPhone('')
            displayMessage(`Updated Contact Number for ${match.name}`, setMessage)
            return
          })

        }
        return
        }
  
      const newPerson = {
        name: newName,
        phone: newPhone
      }
      
      services.create(newPerson)
      .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewPhone('')
          displayMessage(`Added ${returnedPerson.name}`, setMessage)
      }) 
      
      }

    return (
        <>
        <h2>Add a new contact</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={(e) => handleChange('name', e)}/>
        </div>
        <div>Phone: <input value={newPhone} onChange={(e) => handleChange('phone', e)}/></div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      </>
    )
}

export default AddContact