import React from 'react'
import Home from './components/Home'
import { UsersProvider } from './context'

const App = () => {
  return (
    <main className='container'>
      <h4 className='display-3'>Hello World</h4>

      <UsersProvider>
        <Home />
      </UsersProvider>
    </main>
  )
}

export default App
