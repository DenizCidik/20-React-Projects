import { useState } from 'react'





function App  ()   {
  const [todo, setTodo] = useState(null)



  const findTodo = async () => {
    const url = 'https://www.boredapi.com/api/activity?participants=1'
    await fetch(url).then((res) => res.json()).then((data) =>{
      setTodo(data.activity)
    })
  }




  
  
  
  



  return (
    <div className='flex w-100 h-screen bg-gradient-to-r from-slate-600 to-slate-400'>
      <div className='flex flex-col items-center justify-center text-center w-screen'>
        <button className='font-medium  p-3 rounded-md bg-slate-900 text-white outline-none hover:scale-105 ease-in-out duration-100' onClick={findTodo}>Get me a To-Do</button>

        {todo &&
        <p className='text-white text-xl py-5 font-semibold capitalize '>You Can: {todo}</p>
      }
      </div>
    </div>
  )
}

export default App
