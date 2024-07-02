import React, { useContext } from 'react'
import { GlobalContext } from './Global'

const ComD = () => {
    const data=useContext(GlobalContext)
  return (
    <>
    <h2>the information of student is  {data.fName} {data.lName} from {data.Address}</h2>

    </>
  )
}

export default ComD