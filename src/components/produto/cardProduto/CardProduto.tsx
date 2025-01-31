/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArrowSquareOut, DotsThreeVertical, Plus } from '@phosphor-icons/react'
import React, { useContext } from 'react'
import Produto from '../../../models/Produto'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CarrinhoContext } from '../../../context/CarrinhoContext'
import { AuthContext } from '../../../context/AuthContext'
import { Popup } from 'reactjs-popup'
import ecoaidEmBreve from '../../../assets/EM BREVE.png';

interface CardProdutoProps {
    produto: Produto
    carregando: boolean
}

function CardProduto({ produto, carregando }: CardProdutoProps) {

    const { adicionarItem } = useContext(CarrinhoContext);

    const { usuario } = useContext(AuthContext);

    return (
        <div className='shadow-2xl h-[710px] gap-4 box-border rounded-3xl bg-[#FFFFFF] leading-none flex flex-col'>
            <div className="w-full flex flex-1 flex-col gap-4">
                {carregando ? <Skeleton className="h-40 rounded-t-3xl" /> : <div className='bg-cover h-40 rounded-t-3xl overflow-hidden p-4'
                    style={{ backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 70%,rgba(0,0,0,0.4) 100%), url(${produto.foto})` }}>
                    {produto.usuario?.usuario === usuario.usuario && <Menu as="div" className="relative w-full inline-block text-left">
                        <div className='w-full flex items-center text-white'>
                            <MenuButton className='w-full flex justify-end'>
                                {carregando ? <Skeleton style={{ borderRadius: 10 }} width={46} /> : <DotsThreeVertical size={40} />}
                            </MenuButton>
                        </div>
                        <MenuItems
                            transition
                            className="overflow-hidden absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-isabelline shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className='rounded-md'>
                                <MenuItem>
                                    <Link to={`/editarDoacao/${produto.id}`} className='p-2 bg-ferngreen w-full text-white hover:bg-green-900 flex items-center justify-center'>
                                        <button>Editar</button>
                                    </Link>

                                </MenuItem>
                                <MenuItem>
                                    <Link to={`/deletarDoacao/${produto.id}`} className='p-2 text-white bg-red-500 hover:bg-red-700 w-full flex items-center justify-center'>
                                        <button>Deletar</button>
                                    </Link>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>}
                </div>}
                {carregando ? <Skeleton className='mx-8 text-md' height={25} width={200} style={{ borderRadius: 10 }} /> : <h1 className='text-[#414141] w-fit text-md mx-8 px-4 py-1 border-2 border-solid border-violetblue text-white bg-violetblue bg-opacity-75 rounded-full'>{produto.categoria?.tipo}</h1>}
                <h1 className='text-[#414141] w-auto line-clamp-2 break-words mx-8 text-3xl font-bold'>{produto.nome || <Skeleton style={{ borderRadius: 10 }} />}</h1>
                {carregando ? <Skeleton className="text-md mx-8" width={250} style={{ borderRadius: 10 }} /> : <h1 className='text-[#414141] text-md px-8'>Data de cadastro: {new Date(produto.dataCadastro).toLocaleDateString()}</h1>}
                <div className='flex gap-4 items-center px-8 mt-4'>
                    {carregando ? <Skeleton circle={true} className="w-12 h-12" style={{ borderRadius: 10 }} /> : <img className="rounded-full w-12 h-12" src={produto.usuario?.foto} alt="" />}
                    <h1 className='text-[#414141] text-md font-semibold'>{produto.usuario?.nome || <Skeleton width={150} style={{ borderRadius: 10 }} />}</h1>
                </div>
                <h1 className='text-[#414141] text-md h-fit mt-4 px-8 break-words line-clamp-2 leading-9'>{produto.descricao || <Skeleton count={2} style={{ borderRadius: 10 }} />}</h1>
                {carregando ? <Skeleton className='mb-8 h-4 w-36' style={{ borderRadius: 10 }} /> : <Link to={`/detalhesProduto/${produto.id}`} className='flex gap-1 items-center px-8 text-ferngreen hover:text-green-900'>
                    <button>Mais detalhes</button> <ArrowSquareOut size={24} />
                </Link>}
            </div>
            <div className='mb-4 px-4 flex flex-col gap-4'>
                <Popup
                    trigger={
                        carregando ? <Skeleton className='w-full h-12' style={{ borderRadius: 10 }} /> : <button className='rounded-lg bg-[#407C44] text-white w-full text-xl py-2'>DOAR</button>
                    } modal>
                    <div className='flex flex-col items-center gap-8 p-11'>
                        <h1 className='text-4xl text-ferngreen text-center'>Eita! Está funcionalidade está sendo desenvolvida, obrigado por acompanhar nosso progresso!</h1>
                        <img src={ecoaidEmBreve} alt="" />
                    </div>
                </Popup>
                {carregando ? <Skeleton className='w-full h-14' style={{ borderRadius: 10 }} /> : <button onClick={() => { adicionarItem(produto) }} className='rounded-lg bg-[#407C44] py-4 flex items-center justify-center gap-4 text-white'><Plus size={24} /> Adicionar ao carrinho</button>}
            </div>
        </div>
    )
}

export default CardProduto