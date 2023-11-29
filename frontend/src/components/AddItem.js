import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const AddItem = () => {
    const {name,address,id,salary,dob,handleNameChange,
        handleIdChange,handleAddressChange,handleDobChange,handleSalaryChange,onAddSubmit}=useContext(DataContext)
  return (
    <form className='m-3 p-2 pt-4'>
            <h3 className='mx-auto'>Employee Details</h3>
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
            <input type="text" value={name} className="form-control" onChange={handleNameChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">DOB</span>
            <input type="text" value={dob} className="form-control" onChange={handleDobChange} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Address</span>
            <input type="text" value={address} onChange={handleAddressChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Salary</span>
            <input type="text" value={salary} onChange={handleSalaryChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">ID</span>
            <input type="text" value={id} onChange={handleIdChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <button type="button" onClick={onAddSubmit} className="btn btn-primary">Add Data</button>
        
    </form>
  )
}

export default AddItem