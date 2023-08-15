import { Button, TextField } from "@mui/material"
import axios from 'axios'
const Search = ({ list, setList, val, setVal,setMatch }) => {
  const handleChange = (e) => {
    setVal(e.target.value)
  }
  const handleSearch = async () => {
    if (val!=='') {
    const response = await axios.get(`http://localhost:8080/todo/search/${val}`)
    if(response.data===[]) setMatch(false)
  
    setList(response.data)
  }
  }
  return (
    <section className="mx-auto mt-3">

      <TextField
        type="text"
        size="small"
        label="Search Your To Do"
        value={val}
        onChange={handleChange}
      >
      </TextField>
      <span>  </span>
      <Button 
      variant="contained" 
      size="large" 
      onClick={handleSearch}
      >
      Search
      </Button>
    </section>
  )
}
export default Search