import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-bold px-4 py-2 text-white bg-gray-700'>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
