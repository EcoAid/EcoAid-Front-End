import { SlidersHorizontal } from '@phosphor-icons/react'
import React, { ChangeEvent } from 'react'

function BarraDeBusca() {

    return (
        <div className='w-full p-12 flex flex-row justify-center gap-8'>
            <form className="w-3/5">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                        <svg className="w-6 h-6 text-[#414141] dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input onChange={(event: ChangeEvent<HTMLInputElement>) => { setFiltro(event.target.value) }} type="search" id="default-search" className="block w-full p-4 ps-24 text-2xl sm:text-xl text-[#414141] rounded-3xl bg-white placeholder-[#414141]" placeholder="Procure por doações" required />
                </div>
            </form>
            <button><SlidersHorizontal size={64} color='#407C44' /></button>
        </div>
    )
}

export default BarraDeBusca