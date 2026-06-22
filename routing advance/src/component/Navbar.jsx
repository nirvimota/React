import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <div className='flex justify-between p-4 bg-cyan-700'>
            <h2>YeildWise</h2>
            <div className='flex gap-8'>
                <Link to='/' >Home</Link>
                <Link to='/Product' >Product</Link>
                <Link to='/About' >About</Link>
            </div>
        </div>
    )
}

export default navbar