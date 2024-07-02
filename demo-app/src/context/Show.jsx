import React from 'react'
import ComA from './ComA'
import GlobalContextProvider from './Global'

const Show = () => {
  return (
    <>
    <GlobalContextProvider>
    <ComA/>
    </GlobalContextProvider>
    
    </>
  )
}

export default Show