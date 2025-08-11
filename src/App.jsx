import { useEffect, useState } from "react";

import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"

function App() {

  const [form, setForm] = useState(() => {
    
    return window.localStorage.getItem("forms") ? JSON.parse(window.localStorage.getItem("forms")) : []
  })

  useEffect(() => {
    window.localStorage.setItem("forms",JSON.stringify(form))
  },[form])

  const [filter, setFilter] = useState("")
  
  const handleFilter = (e) => {
    setFilter(e.target.value)
    const newForm = form.filter(item => item.name.indexOf(filter) !== -1)
    setForm([...form,newForm])
    console.log(form)
  }
  

  

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm form={form} setForm={setForm} />
      <SearchBox filter={filter} handleFilter={handleFilter} />
      <ContactList form={form} setForm={setForm} />
    </>
  );
}

export default App;
