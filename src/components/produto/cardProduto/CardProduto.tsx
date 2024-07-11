import { ArrowSquareOut, Heart, Plus } from '@phosphor-icons/react'
import React from 'react'
import Produto from '../../../models/Produto'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

interface CardProdutoProps {
    produto: Produto
    carregando: boolean
}

function CardProduto({ produto, carregando }: CardProdutoProps) {
    return (
        <div className='shadow-2xl gap-4 box-border rounded-3xl bg-[#FFFFFF]'>
            <div className="w-full flex flex-col gap-4">
                {carregando ? <Skeleton className="h-40 rounded-t-3xl" /> : <div className="h-40 rounded-t-3xl overflow-hidden">
                    <img className='object-fill' src={produto.foto} alt="PlaceHolder" />
                </div>}
                {carregando ? <Skeleton className='mx-8 text-md' height={25} width={200} style={{ borderRadius: 10 }} /> : <h1 className='text-[#414141] w-fit text-md mx-8 px-4 border-2 border-solid border-violetblue text-white bg-violetblue bg-opacity-75 rounded-full'>{produto.categoria?.tipo}</h1>}
                <h1 className='text-[#414141] text-3xl px-8 font-bold'>{produto.nome || <Skeleton style={{ borderRadius: 10 }} />}</h1>
                <div className='flex gap-4 items-center px-8'>
                    {carregando ? <Skeleton circle={true} className="w-12 h-12" style={{ borderRadius: 10 }} /> : <img className="rounded-full w-12 h-12" src={produto.usuario?.foto} alt="" />}
                    <h1 className='text-[#414141] text-md'>{produto.usuario?.nome || <Skeleton width={150} style={{ borderRadius: 10 }} />}</h1>
                </div>
                <h1 className='text-[#414141] text-md px-8 h-12 line-clamp-2'>{produto.descricao || <Skeleton count={2} style={{ borderRadius: 10 }} />}</h1>
                {carregando ? <Skeleton className='mx-8 h-6 w-36' style={{ borderRadius: 10 }} /> : <Link to={`/detalhesProduto/${produto.id}`} className='flex gap-1 items-center px-8 py-1 text-ferngreen hover:text-green-900'>
                    <button>Mais detalhes</button> <ArrowSquareOut size={24} className='mb-1' />
                </Link>}
            </div>
            <div className='p-4 flex flex-col gap-4'>
                {carregando ? <Skeleton className='w-full h-12' style={{ borderRadius: 10 }} /> : <button className='rounded-lg bg-[#407C44] text-white w-full text-xl py-2'>DOAR</button>}
                {carregando ? <Skeleton className='w-full h-14' style={{ borderRadius: 10 }} /> :<button className='rounded-lg bg-[#407C44] py-4 flex justify-center w-full gap-4 text-white'><Plus size={24} /> Adicionar ao carrinho</button>}
                <Link to={`/editarDoacao/${produto.id}`} className='w-full text-white bg-teal-400 hover:bg-teal-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarDoacao/${produto.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardProduto