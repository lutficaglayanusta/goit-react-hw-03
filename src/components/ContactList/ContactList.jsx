import css from "./ContactList.module.css"
import { FaUser } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

const ContactList = ({ filter,form,setForm }) => {
  const handleDelete = (id) => {
    setForm(form.filter(item=> item.id !== id))
  }
  const newForm = form.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
  
  return (
    <>
      <ul className={css.contactlist}>
        {
          filter !== "" ? newForm.map(item => (
            <li key={item.id}>
              <div>
                
                <p> <FaUser style={{marginRight:10}} /> {item.name}</p>
                <p> <BsTelephoneFill style={{marginRight:10}} /> {item.number}</p>
              </div>
              
              <button onClick={()=>handleDelete(item.id)}>Delete</button>
            </li>
          )) : form.map(item => (
            <li key={item.id}>
              <div>
                <p><FaUser style={{marginRight:10}} /> {item.name}</p>
                <p><BsTelephoneFill style={{marginRight:10}} /> {item.number}</p>
              </div>
              
              <button onClick={()=>handleDelete(item.id)}>Delete</button>
            </li>
          ))

          
          
        }
      </ul>
    </>
  )
}

export default ContactList
