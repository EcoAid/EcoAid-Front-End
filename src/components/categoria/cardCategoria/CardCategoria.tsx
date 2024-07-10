import React from 'react'
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria';
import { DotsThree, Tag } from '@phosphor-icons/react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-center'>

            <div className="p-8 bg-white">
                <div className="flex justify-between">
                    <div
                        className="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-ferngreen shadow-2xl"
                    >
                        <Tag size={32} />
                    </div>
                    <Menu as="div" className="relative inline-block text-left">
                        <div className='flex items-center'>
                            <MenuButton>
                                <DotsThree size={28} />
                            </MenuButton>
                        </div>
                        <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-isabelline shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div>
                                <MenuItem className="my-4">
                                    <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-gray-800 hover:underline flex items-center justify-center'>
                                        <button>Editar</button>
                                    </Link>

                                </MenuItem>
                                <MenuItem className="my-4">
                                    <Link to={`/deletarCategoria/${categoria.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                                        <button>Deletar</button>
                                    </Link>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>

                </div>
                <h2 className="uppercase mt-6 text-ferngreen font-medium mb-3">
                    {categoria.tipo}
                </h2>
                <p className="font-light text-sm text-gray-800 mb-3">
                    {categoria.descricao}
                </p>
                <a className="text-ferngreen flex items-center hover:text-ferngreen" href="/">
                    Mais sobre essa categoria
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default CardCategoria