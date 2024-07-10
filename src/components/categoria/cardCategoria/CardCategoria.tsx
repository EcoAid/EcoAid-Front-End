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

            <div className="p-8 bg-white h-full ">
                <div className="flex justify-between">
                    <div
                        className="bg-isabelline border-solid border-2 border-ferngreen rounded-full w-16 h-16 flex justify-center items-center text-ferngreen shadow-2xl"
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
                            className="overflow-hidden absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-isabelline shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className='rounded-md'>
                                <MenuItem>
                                    <Link to={`/editarCategoria/${categoria.id}`} className='p-2 bg-ferngreen w-full text-white hover:bg-green-900 flex items-center justify-center'>
                                        <button>Editar</button>
                                    </Link>

                                </MenuItem>
                                <MenuItem>
                                    <Link to={`/deletarCategoria/${categoria.id}`} className='p-2 text-white bg-red-500 hover:bg-red-700 w-full flex items-center justify-center'>
                                        <button>Deletar</button>
                                    </Link>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>

                </div>
                <div className='flex flex-col items-left justify-center'>
                    <h2 className="uppercase mt-6 text-ferngreen font-medium mb-3">
                        {categoria.tipo}
                    </h2>
                    <p className="font-light text-sm text-gray-800 mb-3 h-16 line-clamp-3">
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
        </div>
    )
}

export default CardCategoria