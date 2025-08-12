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
  
  

  

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm form={form} setForm={setForm} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList filter={filter} form={form} setForm={setForm} />
    </>
  );
}

export default App;
