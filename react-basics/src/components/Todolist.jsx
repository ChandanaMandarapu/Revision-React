import React, { useState } from 'react'

const Todolist = () => {
const[todos,setTodos] = useState([])
const[inputValue, setInputValue] = useState("")


  return (
    <div>
        <h1>todolist</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' value={inputValue} placeholder='add a new todo'></input>
            <button type='submit'>Add Todo</button>
        </form>

        <ul>
            {todos }
        </ul>
    </div>
  )
}

export default Todolist