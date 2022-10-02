import { useState,useEffect } from 'react'

import Contact from './components/Contact'
import Header from './components/Header'
import Search from './components/Search'
import AddContact from './components/AddContact'

import contactService from './services/contacts'

const App = () => {
  const [contacts, setContacts] = useState([])
  const [newContact, setNewContact] = useState('')
  const [newNumber, setNewNumber] = useState(0)
  const [newSearch, setNewSearch] = useState('')

  useEffect(()=>{
    contactService.getAll()
      .then(initialContacts => {
        setContacts(initialContacts)
      })
  },[])

  const addContact = () => {
    const contactObject = {
      name: newContact,
      number: newNumber,
    }
    contactService.create(contactObject)
      .then(returnedContact=>{
        setContacts(contacts.concat(returnedContact))
        setNewContact('')
        setNewNumber(0)
        setNewSearch('')
      })
  }

  const deleteContactA = (id) => {
    contactService.deleteContact(id)
      .then(initialContacts => {
        setContacts(initialContacts)
      })
  }

  //Get New Contact from Input
  const handleContactChange = (event) => {
    setNewContact(event.target.value)
    setContacts(contacts)
  }

  //Get New Number from Input
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    setContacts(contacts)
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
        contacts.filter(contact=>(contact.name.includes(newSearch))).map(contact=><Contact key={contact.id} name={contact.name} number={contact.number}/>)
      }
      <button onClick={deleteContactA}>deleteAll</button>
    </div>
  )
}

export default App