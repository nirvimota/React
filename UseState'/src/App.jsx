// import React, { useState } from 'react'



// const App = () => {
//    const Increase = () => {
//      setNum(num+1);
//    }

//    const decrease=() =>{
//      setNum(num-1);
//    }

//    const [num, setNum] = useState(0)
//    <h1>Value of A is {num} </h1>
//        <button onClick={Increase}>Increase</button>
//     <button onClick={decrease}>Decrease</button>
//   return (
//     <div>

//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {

const Submithandler=(e)=>{
  e.preventDefault()
 alert("Form Submitted")
}

  return (
    <div>
      <form onSubmit={(e)=>{
        Submithandler(e)
      }}>
        <input type="text" placeholder='Enter Your Name'>
        </input>
        <button>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App