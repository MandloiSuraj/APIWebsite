import React from 'react'
import './App.css'
import Stories from './Stories'
import Search from './Search'
import Pagination from './Pagination'

import { useGlobalContext } from './Context'

const App = () => {
  const data=useGlobalContext()
  return (
    <>
    
    <Search/>
    <Pagination/>
    <Stories/>
    </>
  )
}

export default App
