import React, { useState } from 'react'

const Todo = () => {
const[todos,setTodos] =useState([]);
function handleTodo() {
    setTodos([...todos]);
   
    
}



  return (
    <div>
        <input type='text' ></input>
        <h3>
            {todos}
        </h3>
        
        <button onClick={handleTodo}>Submit</button>
    </div>
  )
}

export default Todo