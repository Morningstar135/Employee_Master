import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const Items = () => {
  const {datum,onAddClick,onDeleteClick,onEditClick} = useContext(DataContext)
  return (
    datum.length>=1?   
  <div className='container pt-3 mt-2'>
        <div className='row pt-3 mt-3'>
            <div className='col'>
            {
            datum.map((item)=>(
                <div class="card mt-3" key={item._id}>
                    <p className='mx-auto'>Employee ID:{item.employeeId}</p>
                <div class="card-body">
                  <h5 class="card-title">Name:{item.name}</h5>
                  <p>DOB:{item.dateOfBirth}</p>
                  <p class="card-text">Address:{item.address}</p>
                  <p class="card-text">Salary:{item.salary}</p>
                  <p>
                      <button type="button" onClick={()=>onEditClick(item._id)} className="btn btn-primary">Edit Data</button>
                  </p> 
                  <p>
                      <button type="button" onClick={()=>onDeleteClick(item._id)} className="btn btn-primary">Delete Data</button>
                  </p>
                </div>
              </div>  
            ))
        }
            </div>
        </div>
        <div className='row  mt-3'> 
          <div className='col-12'>
          <button type="button" onClick={onAddClick} className="btn btn-primary">Add Data</button>
          </div>
        </div>
    </div>:
    <div>
    <div className='pt-2 m-3 mx-auto'>
      No Records Found
      </div>
       <div className='row  mt-3' >
       <div className='col-12'>
       <button type="button" onClick={onAddClick} className="btn btn-primary">Add Data</button>
       </div>
     </div>
     </div>
  )
}

export default Items