import { Heart, Plus } from '@phosphor-icons/react'
import React from 'react'
import Produto from '../../../models/Produto'

interface CardProdutoProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
    console.log(produto)
    return (
        <div className='shadow-2xl gap-4 box-border rounded-t-3xl bg-[#FFFFFF]'>
            <div className="w-full flex flex-col gap-4">
                <div className="absolute p-8">
                    <Heart size={34} color="#407C44" />
                </div>
                    <img className='object-cover h-40' src={produto.foto} alt="PlaceHolder" />
                <h1 className='text-[#414141] text-xl px-8'>{produto.categoria?.tipo}</h1>
                <h1 className='text-[#414141] text-3xl px-8 font-bold'><span>{produto.nome}</span></h1>
                <div className='flex gap-8 items-center px-8'>
                    <img className="rounded-full w-16 h-16" src={produto.usuario?.foto === null ? 'https://betterttv.com/emotes/658f28f95e7e78960777148d' : produto.usuario?.foto} alt="" />
                    <h1 className='text-[#414141] text-xl'>{produto.usuario?.nome}</h1>
                </div>
            </div>
            <div className='p-4 flex flex-col gap-4'>
                <button className='rounded-lg bg-[#407C44] text-white w-full text-2xl py-4'>DOAR</button>
                <button className='rounded-lg bg-[#407C44] p-6 flex w-full gap-4 text-white'><Plus size={24} /> Adicionar ao carrinho</button>
            </div>
        </div>
    )
}

export default CardProduto