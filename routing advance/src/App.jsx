import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import About from './pages/About'
import Product from './pages/Product'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
   
      <Routes>
       
        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/About' element={<About />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
      {/* <Home/>
      <Product/>
      <About/> */}
    </div>
  )
}

export default App