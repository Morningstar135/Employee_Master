import axios from "axios"
import { Button } from "@mui/material"
import Alert from 'react-bootstrap/Alert';
import Stack from 'react-bootstrap/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const ListItems = ({ list, setList, isLoading, match }) => {
    const handleDelete = async (id) => {
        const response = await axios.delete(`http://localhost:8080/todo/delete/${id}`)
        setList(response.data)
    }
    const handleCheck = async (id) => {
        const updated = list.map((item) => (
            item._id === id ? { ...item, isComplete: !item.isComplete } : item
        )
        )
        const updatedItem = updated.filter((item) => (item._id === id))
        const item = updatedItem[0]
        const response = await axios.patch(`http://localhost:8080/todo/update/${id}`, item)
        setList(response.data)
    }

    return (
        isLoading ? <div
            className="mx-auto p-2 mt-5"
        >
            <Alert
                className="p-2"
                variant="info"
                style={{ width: 300 }}
            >
                Loading Content
            </Alert>
        </div> :
            list.length ? (
                <Stack gap={3}>
                    <FormGroup>
                        <ul
                            className="mx-auto mt-3"
                        >
                            {
                                list.map((item) => (
                                    <li
                                        key={item._id}
                                        className="mx-auto mt-3"
                                    >
                                        <p
                                            className="border-bottom "
                                        >
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={item.isComplete}
                                                        size="large"
                                                    />
                                                }
                                                id={String(item._id)}
                                                onChange={() => handleCheck(item._id)}
                                                label={item.todo}
                                            />
                                            <span> </span>
                                            <Button
                                                variant="contained"
                                                size="small"
                                                type="submit"
                                                onClick={() => handleDelete(item._id)}
                                            >
                                                Delete
                                            </Button>
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </FormGroup>
                </Stack>
            ) : <div
                className="mx-auto p-2 mt-5"
            >
                <Alert
                    variant="info"
                    className="p-2"
                    style={{ width: 300 }}
                    id="alert"
                >
                    You Have Nothing To Do
                </Alert>
            </div>
    )
}

export default ListItems