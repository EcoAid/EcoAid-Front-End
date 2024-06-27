import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <>
      <div className='w-full bg-white text-[#407C44] flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>EcoAid</div>

            <div className='flex gap-4'>
            <Link to='/login' className='hover:underline'>Entre</Link>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/sobre' className='hover:underline'>Sobre-nos</Link>
            <div className='hover:underline'>Doações</div>
            <div className='hover:underline'>Devoluções e Cancelamentos</div>
            <div className='hover:underline font-bold'><TiShoppingCart size={38}/></div>
            <div className='hover:underline'>Sair</div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Navbar