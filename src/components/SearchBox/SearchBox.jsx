

const SearchBox = ({filter,handleFilter}) => {
  return (
    <>
      <label htmlFor="">Find contacts by name</label> 
        
        <input type="search" value={filter}  name="" id="" onChange={handleFilter} />
      
    </>
  )
}

export default SearchBox
