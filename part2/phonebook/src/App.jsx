import { useState, useEffect} from 'react'
import Filter from './components/Filter'
import AddContact from './components/AddContact'
import ShowPersons from './components/ShowPersons'
import contactService from './services/phonebook'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [successState, setSuccessState]  = useState(true)

  useEffect(() => {
    console.log('In Effect function')
    contactService
    .getAll()
    .then((initialData) => {
      setPersons(initialData)
    })
  },[])

  console.log('Rendering Component Code', persons.length)

  const handleChange = (state, event) => {
    const setState = {
      name: setNewName,
      phone: setNewPhone,
      filter: setFilter,
    }

    setState[state](event.target.value)
  }

  const personsToShow = !filter
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} successState={successState}/>
      <Filter handleChange={handleChange}/>
      <AddContact handleChange={handleChange} newName={newName} setNewName={setNewName} newPhone={newPhone} setNewPhone={setNewPhone} persons={persons} setPersons={setPersons} setMessage={setMessage} setSuccessState={setSuccessState}/>
      <ShowPersons persons={personsToShow} setPersons={setPersons} setMessage={setMessage} setSuccessState={setSuccessState}/>
    </div>
  )
}

export default App