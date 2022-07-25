import React, { useEffect } from 'react'
import MyNotes from './MyNotes'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  
  const Navigate = useNavigate();
  
  useEffect(() => {
    if (!localStorage.getItem('auth-token')) Navigate('/login');
  }, [])
  
  return (
    <div >
      <MyNotes />
    </div>
  )
}

export default Home