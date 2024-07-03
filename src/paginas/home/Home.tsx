import React from 'react'
import './Home.css';
import { SlidersHorizontal, Heart, Plus } from '@phosphor-icons/react'

function home() {
    return (
        <>
            <main>
                <div className='w-full p-20 text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#333333] bg-white'>
                    <h1 className='w-2/5'><span className='text-[#407C44]'>Bom dia pessoa x,</span> gostaria de receber ou enviar doações</h1>
                </div>
                <div className='w-full p-12 flex flex-row justify-center gap-8'>
                    <form className="w-3/5">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                                <svg className="w-8 h-8 text-[#414141] dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-8 ps-24 text-2xl sm:text-xl text-[#414141] rounded-3xl bg-white placeholder-[#414141]" placeholder="Procure por doações" required />
                        </div>
                    </form>
                    <button><SlidersHorizontal size={64} color='#407C44' /></button>
                </div>

                <section className='w-full part-white text-[#407C44] p-20 flex flex-col gap-8 overflow-visible'>
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Doações recomendadas</h1>
                    <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#3D4DA6]'>Novas doações</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-11'>
                        <div className='shadow-2xl flex flex-col items-center gap-4 box-border p-12 rounded-3xl text-center bg-[#FFFFFF]'>
                            <Heart className='ml-auto' size={34} color="#407C44" />
                            <img className='rounded-full w-8/12' src="https://cdn.betterttv.net/emote/658f28f95e7e78960777148d/3x.webp" alt="PlaceHolder" />
                            <h1 className='text-[#414141] text-3xl'><span>Cesta básica</span></h1>
                            <div className='flex w-full align-middle gap-8'>
                                <button className='rounded-full bg-[#F7F3ED] w-full text-2xl py-4'>DOAR</button>
                                <button className='rounded-full bg-[#F7F3ED] p-6'><Plus size={24} color="#407C44" /></button>
                            </div>
                        </div>
                        <div className='shadow-2xl flex flex-col items-center gap-4 box-border p-12 rounded-3xl text-center bg-[#FFFFFF]'>
                            <Heart className='ml-auto' size={34} color="#407C44" />
                            <img className='rounded-full w-8/12' src="https://cdn.betterttv.net/emote/658f28f95e7e78960777148d/3x.webp" alt="PlaceHolder" />
                            <h1 className='text-[#414141] text-3xl'><span>Cesta básica</span></h1>
                            <div className='flex w-full align-middle gap-8'>
                                <button className='rounded-full bg-[#F7F3ED] w-full text-2xl py-4'>DOAR</button>
                                <button className='rounded-full bg-[#F7F3ED] p-6'><Plus size={24} color="#407C44" /></button>
                            </div>
                        </div>
                        <div className='shadow-2xl flex flex-col items-center gap-4 box-border p-12 rounded-3xl text-center bg-[#FFFFFF]'>
                            <Heart className='ml-auto' size={34} color="#407C44" />
                            <img className='rounded-full w-8/12' src="https://cdn.betterttv.net/emote/658f28f95e7e78960777148d/3x.webp" alt="PlaceHolder" />
                            <h1 className='text-[#414141] text-3xl'><span>Cesta básica</span></h1>
                            <div className='flex w-full align-middle gap-8'>
                                <button className='rounded-full bg-[#F7F3ED] w-full text-2xl py-4'>DOAR</button>
                                <button className='rounded-full bg-[#F7F3ED] p-6'><Plus size={24} color="#407C44" /></button>
                            </div>
                        </div>
                        <div className='shadow-2xl flex flex-col items-center gap-4 box-border p-12 rounded-3xl text-center bg-[#FFFFFF]'>
                            <Heart className='ml-auto' size={34} color="#407C44" />
                            <img className='rounded-full w-8/12' src="https://cdn.betterttv.net/emote/658f28f95e7e78960777148d/3x.webp" alt="PlaceHolder" />
                            <h1 className='text-[#414141] text-3xl'><span>Cesta básica</span></h1>
                            <div className='flex w-full align-middle gap-8'>
                                <button className='rounded-full bg-[#F7F3ED] w-full text-2xl py-4'>DOAR</button>
                                <button className='rounded-full bg-[#F7F3ED] p-6'><Plus size={24} color="#407C44" /></button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='w-full part-white text-[#407C44] p-20 flex flex-col gap-16 overflow-visible'>
                    <div className='flex flex-row items-center gap-16'>
                        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Minhas doações</h1>
                        <button className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#3D4DA6]'>Mais populares</button>
                        <button className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#3D4DA6]'>Top doações</button>
                    </div>
                    <div className='grid grid-cols-4 gap-11'>
                        <div className='shadow-2xl flex flex-col items-center gap-4 box-border p-12 rounded-3xl text-center bg-[#FFFFFF]'>
                            <Heart className='ml-auto' size={34} color="#407C44" />
                            <img className='rounded-full w-8/12' src="https://cdn.betterttv.net/emote/658f28f95e7e78960777148d/3x.webp" alt="PlaceHolder" />
                            <h1 className='text-[#414141] text-3xl'><span>Cesta básica</span></h1>
                            <div className='flex w-full align-middle gap-8'>
                                <button className='rounded-full bg-[#F7F3ED] w-full text-2xl py-4'>DOAR</button>
                                <button className='rounded-full bg-[#F7F3ED] p-6'><Plus size={24} color="#407C44" /></button>
                            </div>
                        </div>
                        <div className='shadow-2xl flex flex-col items-center gap-4 box-border p-12 rounded-3xl text-center bg-[#FFFFFF]'>
                            <Heart className='ml-auto' size={34} color="#407C44" />
                            <img className='rounded-full w-8/12' src="https://cdn.betterttv.net/emote/658f28f95e7e78960777148d/3x.webp" alt="PlaceHolder" />
                            <h1 className='text-[#414141] text-3xl'><span>Cesta básica</span></h1>
                            <div className='flex w-full align-middle gap-8'>
                                <button className='rounded-full bg-[#F7F3ED] w-full text-2xl py-4'>DOAR</button>
                                <button className='rounded-full bg-[#F7F3ED] p-6'><Plus size={24} color="#407C44" /></button>
                            </div>
                        </div>
                        <div className='shadow-2xl flex flex-col items-center gap-4 box-border p-12 rounded-3xl text-center bg-[#FFFFFF]'>
                            <Heart className='ml-auto' size={34} color="#407C44" />
                            <img className='rounded-full w-8/12' src="https://cdn.betterttv.net/emote/658f28f95e7e78960777148d/3x.webp" alt="PlaceHolder" />
                            <h1 className='text-[#414141] text-3xl'><span>Cesta básica</span></h1>
                            <div className='flex w-full align-middle gap-8'>
                                <button className='rounded-full bg-[#F7F3ED] w-full text-2xl py-4'>DOAR</button>
                                <button className='rounded-full bg-[#F7F3ED] p-6'><Plus size={24} color="#407C44" /></button>
                            </div>
                        </div>
                        <div className='shadow-2xl flex flex-col items-center gap-4 box-border p-12 rounded-3xl text-center bg-[#FFFFFF]'>
                            <Heart className='ml-auto' size={34} color="#407C44" />
                            <img className='rounded-full w-8/12' src="https://cdn.betterttv.net/emote/658f28f95e7e78960777148d/3x.webp" alt="PlaceHolder" />
                            <h1 className='text-[#414141] text-3xl'><span>Cesta básica</span></h1>
                            <div className='flex w-full align-middle gap-8'>
                                <button className='rounded-full bg-[#F7F3ED] w-full text-2xl py-4'>DOAR</button>
                                <button className='rounded-full bg-[#F7F3ED] p-6'><Plus size={24} color="#407C44" /></button>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </main>
        </>
    )
}

export default home
