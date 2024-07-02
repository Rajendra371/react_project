import React from 'react'
import { useSelector } from 'react-redux'
import TestItem from './TestItem'
import Student from './Student'
const TestCart = () => {
    const data = useSelector(store=>store.cart)
  return (
    <>
     <h1 className='text-success'> the number of item in the cart is {data.cartCount}</h1>
     <TestItem/>
     <Student/>
    </>
  )
}

export default TestCart