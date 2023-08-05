import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchOrder() {
    const [query,setQuery] = useState('')
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
  e.preventDefault();
  navigate(`/order/${query}`)
  setQuery('')
    }
  return (
    <form onSubmit={handleSubmit}>
    <input  placeholder='Search Order #' value={query} onChange={(e)=>setQuery(e.target.value)}
    className='rounded-full px-4 py-2 text-sm bg-yellow-100 placeholder:text-stone-400 
    w-28 sm:w-64 sm:focus:w-72 transition-all duration-300 focus:ring focus:outline-none focus:bg-yellow-500 
    focus:ring-opacity-50'
    />
    </form>
    
  )
}
