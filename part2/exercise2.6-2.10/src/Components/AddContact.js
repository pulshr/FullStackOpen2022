const AddContact = (props) => (
    <form onSubmit={props.addContact}>
        <input
          value={props.newContact}
          onChange={props.handleContactChange}
        />
        <input
          value={props.newNumber}
          onChange={props.handleNumberChange}
        />
        <button type="submit">add</button>
    </form>
)

export default AddContact;