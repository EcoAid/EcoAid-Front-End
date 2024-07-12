import { ArrowSquareOut, DotsThreeVertical, Plus } from '@phosphor-icons/react'
import React, { useContext } from 'react'
import Produto from '../../../models/Produto'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { CarrinhoContext } from '../../../context/CarrinhoContext'

interface CardProdutoProps {
    produto: Produto
    carregando: boolean
}

function CardProduto({ produto, carregando }: CardProdutoProps) {

    const { adicionarItem, listaCarrinho } = useContext(CarrinhoContext);

    return (
        <div className='shadow-2xl h-[675px] gap-4 box-border rounded-3xl bg-[#FFFFFF] leading-none flex flex-col'>
            <div className="w-full flex-1 flex flex-col gap-4">
                {carregando ? <Skeleton className="h-40 rounded-t-3xl" /> : <div className='bg-cover h-40 rounded-t-3xl overflow-hidden p-4'
                style={{backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 70%,rgba(0,0,0,0.4) 100%), url(${produto.foto})`}}>
                    <div>
                    <Menu as="div" className="relative w-full inline-block text-left">
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
                </Menu>
                    </div>
                </div>}
                {carregando ? <Skeleton className='mx-8 text-md' height={25} width={200} style={{ borderRadius: 10 }} /> : <h1 className='text-[#414141] w-fit text-md mx-8 px-4 py-1 border-2 border-solid border-violetblue text-white bg-violetblue bg-opacity-75 rounded-full'>{produto.categoria?.tipo}</h1>}
                <h1 className='text-[#414141] w-auto line-clamp-2 break-words mx-8 text-3xl font-bold'>{produto.nome || <Skeleton style={{ borderRadius: 10 }} />}</h1>
                <div className='flex gap-4 items-center px-8'>
                    {carregando ? <Skeleton circle={true} className="w-12 h-12" style={{ borderRadius: 10 }} /> : <img className="rounded-full w-12 h-12" src={produto.usuario?.foto} alt="" />}
                    <h1 className='text-[#414141] text-md'>{produto.usuario?.nome || <Skeleton width={150} style={{ borderRadius: 10 }} />}</h1>
                </div>
                <h1 className='text-[#414141] text-md flex-1 px-8 line-clamp-2 leading-9'>{produto.descricao || <Skeleton count={2} style={{ borderRadius: 10 }} />}</h1>
                {carregando ? <Skeleton className='mx-8 h-6 w-36' style={{ borderRadius: 10 }} /> : <Link to={`/detalhesProduto/${produto.id}`} className='flex gap-1 items-center px-8 py-1 text-ferngreen hover:text-green-900'>
                    <button>Mais detalhes</button> <ArrowSquareOut size={24} className='mb-1' />
                </Link>}
            </div>
            <div className=' p-4 flex flex-col gap-4'>
                {carregando ? <Skeleton className='w-full h-12' style={{ borderRadius: 10 }} /> : <button className='rounded-lg bg-[#407C44] text-white w-full text-xl py-2'>DOAR</button>}
                {carregando ? <Skeleton className='w-full h-14' style={{ borderRadius: 10 }} /> : <button onClick={() => {adicionarItem(produto)}} className='rounded-lg bg-[#407C44] py-4 flex items-center justify-center gap-4 text-white'><Plus size={24} /> Adicionar ao carrinho</button>}
            </div>
        </div>
    )
}

export default CardProduto