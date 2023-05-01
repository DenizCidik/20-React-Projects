import React, { useState } from 'react'


export const EditTodoForm = ({editTodo, task}) => {

    const [value, setValue] = useState('');
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue('');
    }


  return (
    <form action="" className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" name="" className='todo-input' value={value} id="" placeholder='update to do' onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className='todo-btn'>update</button>
    </form>
  )
}



