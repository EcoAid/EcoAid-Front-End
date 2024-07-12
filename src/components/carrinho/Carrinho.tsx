import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import React, { Fragment, useContext } from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { CarrinhoContext } from '../../context/CarrinhoContext';
import Produto from '../../models/Produto';
import clsx from 'clsx'
import { CaretDown, CaretUp, Trash } from '@phosphor-icons/react';

let total = 0;

function Carrinho() {

    const { listaCarrinho, adicionarItem, diminuirQuantidade, removerItem, finalizarCompra } = useContext(CarrinhoContext);

    return (
        <Menu as="div" className="relative w-fit inline-block text-left">
            <div className='flex items-center text-white'>
                <MenuButton as={Fragment}>
                    {({ active }) => <button className={clsx(active ? 'text-green-900' : 'text-ferngreen')}><TiShoppingCart size={38} /></button>}
                </MenuButton>
            </div>
            <MenuItems
                modal={false}
                transition
                className="overflow-hidden absolute right-0 z-10 mt-2 w-[550px] p-4 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className='flex flex-col gap-4 rounded-md'>

                    {listaCarrinho.length === 0 && (
                        <MenuItem as={Fragment}>
                            <p className='text-gray-300'>Não há nada no carrinho</p>
                        </MenuItem>)
                    }

                    {listaCarrinho.map((produto: Produto) => (
                        <MenuItem onClick={(e) => { e.preventDefault() }} key={produto.id} as={Fragment}>

                            {({ focus }) => (
                                <div className={clsx('text-sm py-2 px-4 text-nowrap flex gap-8 block', focus && 'bg-green-100')}>
                                    <p className='w-52 text-wrap line-clamp-1 break-words'> {produto.nome} </p>
                                    <button onClick={(e) => { adicionarItem(produto); e.preventDefault() }}><CaretUp /></button>
                                    <p>Quantidade: {produto.qtd}</p>
                                    <button onClick={(e) => { diminuirQuantidade(produto); e.preventDefault() }}><CaretDown /></button>
                                    <button onClick={(e) => { removerItem(produto); e.preventDefault() }}> <Trash /> </button>
                                </div>
                            )}
                        </MenuItem>
                    ))}
                    <MenuItem className="text-sm flex justify-between border-t-2 pt-4 border-gray-100">
                    <div className='flex items-center'>
                        <button className='flex items-center w-fit h-12 rounded-md transition hover:text-ferngreen hover:bg-transparent border border-green-800 text-white bg-ferngreen p-4' onClick={() => finalizarCompra()}> Finalizar </button>
                        <p className="text-lg">Total: {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(listaCarrinho.reduce((total, produto)=>total+(produto.valor*produto.qtd),0))}</p>
                    </div>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    )
}

export default Carrinho