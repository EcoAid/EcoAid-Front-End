import React, { useContext } from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

function Navbar() {

  const { handleLogout, usuario } = useContext(AuthContext);

  let usuarioProfile

  if(usuario.token !== "") {
    usuarioProfile = (<Menu as="div" className="relative inline-block text-left">
      <div className='flex items-center'>
        <MenuButton>
          <img className="rounded-full w-12 hover:brightness-50 transition ease-in-out" src={usuario.foto !== '' ? usuario.foto : 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'} />
        </MenuButton>
      </div>
  
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-2">
          <MenuItem>
            <h2 className='px-4 py-1 text-base font-medium'>{usuario.nome}</h2>
          </MenuItem>
          <MenuItem>
            <h3 className='px-4 py-1 text-sm'>{usuario.usuario}</h3>
          </MenuItem>
        </div>
        <div className="py-2">
          <MenuItem>
            <Link to='/home' className='px-4 py-1 text-base font-medium hover:underline'>Home</Link>
          </MenuItem>
        </div>
        <div className="py-2">
          <MenuItem>
            <Link to='/login' onClick={handleLogout} className='px-4 py-1 text-base font-medium hover:underline'>Sair</Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>)
  } else {
    usuarioProfile = (<Link to='/login' className='hover:underline'>Entre</Link>)
  }

  return (
    <>
      <div className='w-full bg-white text-[#407C44] flex justify-center py-4 border-b-2 border-gray-200'>
        <div className="container flex justify-between text-lg ">
          <div className='flex items-center'>
          <Link to='/home'><h1 className='text-2xl font-bold uppercase'>EcoAid</h1></Link>
          </div>

          <div className='flex items-center gap-8'>
            <Link to='/sobre' className='hover:underline'>Sobre nós</Link>
            <Link to='/doacoes' className='hover:underline'>Doações</Link>
            <Link to='/cadastroDoacao' className='hover:underline'>Cadastrar Doação</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
            <Link to='/home' className='hover:underline'>Devoluções e Cancelamentos</Link>
            <Link to='/home' className='hover:underline font-bold'><TiShoppingCart size={38} /></Link>
            {usuarioProfile}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar