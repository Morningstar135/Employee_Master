import React, { createContext,useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {URL} from '../utils/baseUrl'

const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const [name,setName]= useState('')
    const [id,setId]= useState('')
    const [updateId,setUpdateId]= useState('')
    const [address,setAddress]= useState('')
    const [salary,setSalary]= useState(0)
    const [dob,setDob]= useState('')
    const [data,setData] = useState({})
    const [datum,setDatum] = useState([])
    const [key,setKey] =useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        URL.get('/alldata').then((response)=>setDatum(response.data)).catch((err)=>console.log(err.message))
    },[]
    )
    const handleNameChange=(e)=>{
        setName(e.target.value)
    }
    const handleIdChange=(e)=>{
        setId(e.target.value)
    }
    const handleSalaryChange=(e)=>{
        setSalary(e.target.value)
    }
    const handleDobChange=(e)=>{
        setDob(e.target.value)
    }
    const handleAddressChange=(e)=>{
        setAddress(e.target.value)
    }
    const onAddSubmit=async ()=>{

        setData({
            name,
            address,
            dateOfBirth:dob,
            salary,
            employeeId:id
        })
        const response = await URL.post('/data/add',data)
        setDatum(response.data.newItems)
        navigate('/')
        setName('')
        setAddress('')
        setSalary(0)
        setId('')
        setDob('')
    }
    const onAddClick =()=>{
        navigate('/add')
    }
    const onDeleteClick =async(id)=>{
        const response = await URL.delete(`/data/delete/${id}`)
        setDatum(response.data)
        console.log(response.data)
    }
    const onEditClick =async(id)=>{
        const response = await URL.get(`/data/single/${id}`)
        const item = response.data
        console.log(item)
        setAddress(item.address)
        setDob(item.dateOfBirth)
        setName(item.name)
        setId(item.employeeId)
        setSalary(item.salary)
        setUpdateId(id)
        navigate('/edit')
    }
    const onEditSubmit = async ()=>{
        console.log(name,address,salary,id,dob)
        setData({
            name,
            address,
            dateOfBirth:dob,
            salary,
            employeeId:id
        })
        console.log(data);
        const response = await URL.patch(`/data/update/${updateId}`,data)
        setDatum(response.data.list)
        console.log(response.data.list);
        navigate('/')
    }
    const onSearchClick =async()=>{
        const response = await URL.get(`/data/search/${key}`)
        setDatum(response.data)
    }
    return(
        <DataContext.Provider value={{name,setName,id,setId,address,setAddress,salary,setSalary,dob,setDob,handleNameChange,
        handleIdChange,handleAddressChange,handleDobChange,handleSalaryChange,onAddSubmit,datum,onAddClick,onDeleteClick,onEditClick,onEditSubmit,
        key,setKey,onSearchClick
        
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext