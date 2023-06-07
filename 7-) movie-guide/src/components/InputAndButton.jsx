import React from 'react'



const InputAndButton = () => {
  return (
    <div className='flex align-center justify-center mt-20 py-12'>
        <input type="text" placeholder='Movie name' className='ml-4 pl-3 w-full focus:ring focus:ring-blue-300 outline-none border-none rounded-md'/>
        <button className='mx-2  hover:opacity-90 active:opacity-70 bg-[#FACC15] rounded-md p-3 px-12'>Search</button>
    </div>
  )
}

export default InputAndButton