

const ContactList = ({ form,setForm }) => {
  const handleDelete = (id) => {
    setForm(form.filter(item=> item.id !== id))
  }
  return (
    <>
      <ul>
        {
          form.map(item => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>{item.number}</p>
              <button onClick={()=>handleDelete(item.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default ContactList
