import React, { useContext, useEffect, useState } from 'react'
import './Home.css';
import BarraDeBusca from '../../components/barraDeBusca/BarraDeBusca';
import { AuthContext } from '../../context/AuthContext';
import 'swiper/css';
import { buscarSemHeader } from '../../services/Service';
import Produto from '../../models/Produto';
import CardProduto from '../../components/produto/cardProduto/CardProduto';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

function Home() {

    const { usuario, } = useContext(AuthContext);

    const [produtos, setProdutos] = useState<Produto[]>([]);

    const { handleLogout } = useContext(AuthContext);

    async function buscarProdutos() {
        try {
            await buscarSemHeader('/produto', setProdutos);
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);

    return (
        <>
            <main>
                <div className='w-full p-20 text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#333333] bg-white'>
                    <h1 className='w-2/5'><span className='text-[#407C44]'>Bom dia {usuario.nome}, <br/></span> gostaria de receber ou enviar doações?</h1>
                </div>

                <BarraDeBusca setInputText={() => { }} tipo={"produto"} />

                <section className='text-[#407C44] part-white p-20 gap-8 overflow-visible'>
                    <div className="flex flex-col gap-8 mb-16">
                        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Doações recomendadas</h1>
                        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#3D4DA6]'>Novas doações</h2>
                    </div>
                    <Swiper
                        navigation={true} 
                        modules={[Navigation]}
                        slidesPerView={4}
                        spaceBetween={50}
                        className='overflow-visible mySwiper'
                    >
                        {produtos.map((produto) => (
                            <SwiperSlide key={produto.id}>
                                <CardProduto key={produto.id} produto={produto} carregando={false} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>


                <section className='part-white text-[#407C44] p-20 gap-8 overflow-visible'>
                    <div className='flex flex-row items-center gap-8 mb-16'>
                        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Minhas doações</h1>
                        <button className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#3D4DA6]'>Mais populares</button>
                        <button className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#3D4DA6]'>Top doações</button>
                    </div>

                    <Swiper
                        navigation={true} 
                        modules={[Navigation]}
                        pagination={{ clickable: true }}
                        slidesPerView={4}
                        spaceBetween={50}
                        className='overflow-visible'
                    >
                        {produtos.map((produto) => (
                            <SwiperSlide key={produto.id}>
                                <CardProduto key={produto.id} produto={produto} carregando={false} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </main>
        </>
    )
}

export default Home
