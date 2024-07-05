import { Heart, Plus } from '@phosphor-icons/react'
import React from 'react'

function CardProduto() {
    return (
        <div className='shadow-2xl flex flex-col items-center gap-4 box-border p-12 rounded-3xl text-center bg-[#FFFFFF]'>
            <Heart className='ml-auto' size={34} color="#407C44" />
            <img className='rounded-full w-8/12' src="https://cdn.betterttv.net/emote/658f28f95e7e78960777148d/3x.webp" alt="PlaceHolder" />
            <h1 className='text-[#414141] text-3xl'><span>Cesta básica</span></h1>
            <div className='flex w-full align-middle gap-8'>
                <button className='rounded-full bg-[#F7F3ED] w-full text-2xl py-4'>DOAR</button>
                <button className='rounded-full bg-[#F7F3ED] p-6'><Plus size={24} color="#407C44" /></button>
            </div>
        </div>
    )
}

export default CardProduto