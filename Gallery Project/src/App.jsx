import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setuserData] = useState([])

  const [index, setindex] = useState(1)
  const getData = async () => {

    const response = await axios.get("https://picsum.photos/v2/list?page=3&limit=30", { username: 'Nirvi', password: '123456' })
    setuserData(response.data)
    // console.log(userData)
  }

  useEffect(function () {
    getData()
  }, [])

  let printUserData = "no user available"

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, index) {
      return <div key={index}>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden bg-white rounded-2xl'>
            <img src={elem.download_url} alt="" className="h-full object-cover w-full " />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (

    <div className="bg-black h-fit p-4 text-white">
      <h1 className='text-6xl bg-red-500 fixed rounded-full object-fit'>{index}</h1>
      <div className="flex flex-wrap gap-3">
        {printUserData}
      </div>
      <div className='flex justify-center items-centerp-4 gap-6'>
        <button className='bg-amber-400 text-black rounded px-3 py-2 font-semibold cursor-pointer active:scale-95'
          onClick={() => {
            if (index > 1) {
              setindex(index - 1)
            }
          }}>Prev</button>
        <button className='bg-amber-400 text-black rounded px-3 py-2 font-semibold cursor-pointer active:scale-95'
          onClick={() => {
            setindex(index + 1)
          }}>Next</button>
      </div>
    </div>
  )

}

export default App