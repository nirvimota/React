import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
  const [Title, setTitle] = useState('')
  const [Details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const [deleteTask, setdeleteTask] = useState('')
  const submithandler = (e) => {
    e.preventDefault();

    const Copytask = [...task];
    Copytask.push({ Title, Details })
    setTask(Copytask);
    // console.log(task);
    setTitle('')
    setDetails('')
  }
  const DeleteNote= (idx)=>{

const copyTask=[...task]
copyTask.splice(idx,1);
setTask(copyTask)

  }

  return (
    <div className='bg-black text-white h-screen flex'>
      <form onSubmit={(e) => {
        submithandler(e)
      }} className=" flex flex-col gap-6 items-start p-5 w-185 border-r">
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <input type="text" placeholder="Enter Heading" className='border-2 w-full px-5 py-2 rounded' value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input type="text" placeholder="Enter task" className='border-2 w-full px-5 py-2 h-20 rounded' value={Details}
          onChange={(e) => {
            setDetails(e.target.value);
          }} />
        <button className='border-2 px-5 py-2 w-full rounded bg-white text-black'>Add Note</button>
      </form>
      <div className=" bg-grey-800 w-215 p-3">
        <h1 className="font-bold text-3xl  ml-5 mt-2"> Recent Notes </h1>
        <div className="flex flex-wrap">
       
            {task.map(function (elem, idx) {

              return <div key={idx}className=" flex justify-between flex-col item-start relative h-60 w-45 opacity-100 border  bg-white border-white/20 rounded-2xl mt-3 ml-4 p-4  ">
                
                <h3 className='text-2xl font-bold text-black break-all'>{elem.Title}</h3>
                <p className="mt-2 ml-1 break-all  text-black">{elem.Details}</p>
                <button onClick={()=>{
                  DeleteNote(idx)
                }}className='w-full cursor-pointer active:scale-95 bg-gray-600 py-1 text-xs rounded font-bold'>Delete</button>
              </div>
              
            })}
         </div>

      </div>

    </div>
  )
}

export default App