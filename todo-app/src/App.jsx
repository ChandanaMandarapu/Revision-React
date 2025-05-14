import { useState } from 'react'
import './index.css'
import './fanta.css'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import TodoCard from './components/TodoCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
    </div>
  )
}

export default App
