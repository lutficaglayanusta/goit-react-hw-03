import { useId } from "react"
import css from "./SearchBox.module.css"


const SearchBox = ({ filter, setFilter }) => {
  const searchId = useId()
  return (
    <>
      <label htmlFor={searchId}>Find contacts by name</label> 
        
      <input className={css.search} type="search" value={filter} name="" id={searchId} onChange={(e) => setFilter(e.target.value)} />
      
    </>
  )
}

export default SearchBox
