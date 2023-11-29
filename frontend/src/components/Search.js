import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const Search = () => {
    const {key,setKey,onSearchClick} = useContext(DataContext)
  return (
    <div class="input-group mt-5">
    <input type="text" class="form-control" placeholder="Enter Employee Name" value={key} onChange={(e)=>setKey(e.target.value)} aria-label="Enter Name" aria-describedby="button-addon2" />
    <button class="btn btn-outline-secondary" onClick={onSearchClick} type="button" id="button-addon2">Search</button>
  </div>  
  )
}

export default Search