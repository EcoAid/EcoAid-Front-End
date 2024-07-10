import React from 'react'
import './Home.css';
import { SlidersHorizontal, Heart, Plus } from '@phosphor-icons/react'
import ListaProdutos from '../../components/produto/listaProdutos/ListaProdutos';
import BarraDeBusca from '../../components/barraDeBusca/BarraDeBusca';

function home() {
    return (
        <>
            <main>
                <div className='w-full p-20 text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#333333] bg-white'>
                    <h1 className='w-2/5'><span className='text-[#407C44]'>Bom dia pessoa x,</span> gostaria de receber ou enviar doações</h1>
                </div>

                <BarraDeBusca/>

                <section className='w-full part-white text-[#407C44] p-20 flex flex-col gap-8 overflow-visible'>
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Doações recomendadas</h1>
                    <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#3D4DA6]'>Novas doações</h2>

                    <ListaProdutos/>
                    
                </section>

                <section className='w-full part-white text-[#407C44] p-20 flex flex-col gap-16 overflow-visible'>
                    <div className='flex flex-row items-center gap-16'>
                        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Minhas doações</h1>
                        <button className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#3D4DA6]'>Mais populares</button>
                        <button className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#3D4DA6]'>Top doações</button>
                    </div>
                    
                    <ListaProdutos/>
                    
                </section>
            </main>
        </>
    )
}

export default home
