import React, { useState } from 'react'


export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('');
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    }


  return (
    <form action="" className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" name="" className='todo-input' value={value} id="" placeholder='What To Do?' onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className='todo-btn'>Add To-Do</button>
    </form>
  )
}



