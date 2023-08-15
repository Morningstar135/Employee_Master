import { useState, useRef } from "react"
import axios from 'axios'
import { Button, TextField } from "@mui/material";
const AddItem = ({ list, setList }) => {
    const inputRef = useRef()
    const [todo, settodo] = useState("")
    const handleChange = (e) => {
        settodo(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (todo === "") return
        const newItem = {
            todo: todo,
            isComplete: false
        }
        const response = await axios.post('http://localhost:8080/todo/post', newItem)
        setList(response.data)
        settodo("")
        inputRef.current.focus()
    }
    return (
        <form onSubmit={handleSubmit} className="mx-auto mt-3">
            <TextField
                type="text"
                label="Add Your To-Do"
                value={todo}
                ref={inputRef}
                onChange={handleChange}
                size="small"
            />
            <span> </span>
            <Button
                variant="contained"
                size="large"
                type="submit"
            >
                Add
            </Button>
        </form>
    )
}
export default AddItem