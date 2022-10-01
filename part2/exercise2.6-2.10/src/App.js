import { useState } from 'react'

import Contact from './Components/Contact'
import Header from './Components/Header'
import Search from './Components/Search'
import AddContact from './Components/AddContact'

const App = (props) => {
  const [contacts, setContacts] = useState(props.contacts)
  const [newContact, setNewContact] = useState('')
  const [newNumber, setNewNumber] = useState(0)
  const [newSearch, setNewSearch] = useState('')

  //Add Contact to Array
  const addContact = (event) => {
    event.preventDefault()
    if(props.contacts.map(contact=>contact.name).includes(newContact)) {
      alert(`${newContact} is already added to phonebook`);
    } else {
      const contactObject = {
        name: newContact,
        number: newNumber,
        id: contacts.length + 1,
      }
      let updatedContacts = contacts;
      updatedContacts.push(contactObject);
      setContacts(updatedContacts);
      setNewContact('');
      setNewNumber(0);
    }
  }

  //Get New Contact from Input
  const handleContactChange = (event) => {
    setNewContact(event.target.value)
  }

  //Get New Number from Input
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  //Get Results
  const search = (event) => {
    setNewSearch(event.target.value)
  }    

  return (
    <div>
      <Header text="Phonebook"/>
      <Search newSearch={newSearch} search={search}/>
      <Header text="Add a new"/>
      <AddContact addContact={addContact} newContact={newContact} handleContactChange={handleContactChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <Header text="Numbers"/>
      {
        props.contacts.filter(contact=>(contact.name.includes(newSearch))).map(contact=><Contact key={contact.id} name={contact.name} number={contact.number}/>)
      }
    </div>
  )
}

export default App