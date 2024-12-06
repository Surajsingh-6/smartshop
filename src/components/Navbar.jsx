import React from 'react'

function Navbar() {
  return (
    <div>
        <div className='h-14 w-full flex justify-between items-center px-5 unif text-3xl text-white'>
            <div>Shop Smart</div>
            <div><img src="./cart.png" alt=""  className='h-14 p-2 pt-3'/></div>
        </div>
    </div>
  )
}

export default Navbar