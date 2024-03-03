import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Context/components/Login'
import Profile from './Context/components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1> Hello </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
