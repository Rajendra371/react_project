import React,{useState} from 'react'
import { useDispatch } from 'react-redux'

const StudentForm = () => {
    const[name,setName,]=useState('')
    const dispatch=useDispatch()

    const submit=()=>(
        dispatch({type:'change_name',payload:name})

    )

    
  return (
    <div>
<div className="container">
    <div className="row d-flex justify-content-center">
        <div className="col-md-6">
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' className='form-control'onChange={e=>setName(e.target.value)} />
            <button className='btn btn-primary'onClick={submit}>Change Name</button>
        </div>
    </div>
</div>

    </div>
  )
}

export default StudentForm