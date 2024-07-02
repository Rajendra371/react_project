import React from 'react'
import { useDispatch } from 'react-redux'

const TestItem = () => {
const dispatch=useDispatch()

const add =()=>{
    dispatch({type:'add_to_cart'})
}
const remove=()=>{
  dispatch({type:'remove_from_cart'})
}
  return (
    <>
    <div className="row d-flex justify-content-around">
        <div className="col-md-4">
            <button className='btn btn-primary' onClick={add}> Add</button>
        </div>
        <div className="col-md-4">
            <button className='btn btn-danger' onClick={remove}>Remove</button>
        </div>
    </div>


    </>
  )
}

export default TestItem