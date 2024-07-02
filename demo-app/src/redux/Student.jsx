import React from 'react'
import { useSelector,} from 'react-redux'
import StudentForm from './reducers/StudentForm'





const Student = () => {
  const data=useSelector(store=>store.student)
  return (
    <>
      <h1 className='text-success'>
        the name of the student is {data.name}
      </h1>
      <StudentForm/>

    </>
  )
}

export default Student