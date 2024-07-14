/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { toastAlerta } from '../../util/toastAlerta';
import { Link } from 'react-router-dom';
import { LiaHandsHelpingSolid } from 'react-icons/lia';
import { BsInfoCircle } from 'react-icons/bs';
import Funcionamento from '../../components/funcionamento/Funcionamento';

function Home() {

    const { usuario, } = useContext(AuthContext);

    const [produtos, setProdutos] = useState<Produto[]>([]);

    const { handleLogout } = useContext(AuthContext);

    async function buscarProdutos() {
        try {
            await buscarSemHeader('/produto', setProdutos);
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', "info")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);

    return (
        <>

            <main className='overflow-hidden'>

                <div className=" px-16 py-8 ">
                    <div className="rounded-xl justify-left p-16 flex max-sm:flex-col bg-ferngreen bg-opacity-30 gap-8 items-center">
                        <div className="flex-col space-y-4 md:w-4/6">
                            <h1 className="text-5xl text-onyx font-bold md:mt-2">
                                Olá, seja bem vindo ao EcoAid, <span className='text-ferngreen'>{usuario.nome}</span><br />
                                Gostaria de receber ou enviar doações?
                            </h1>

                            <p className="line-clamp-4 text-lg text-onyx">
                                Alinhado com o Objetivo de Desenvolvimento Sustentável (ODS) 13 da ONU (Ação Contra a Mudança Global do Clima),
                                o ECOAID busca mitigar esses impactos, promovendo a colaboração social e o consumo consciente através da
                                <span className='font-semibold'> doação de produtos em bom estado para quem precisa, </span>
                                criando uma rede de apoio e solidariedade em tempos de crise.
                            </p>

                            <div className="flex gap-4">
                                <Link to='/doacoes'
                                    className="gap-2 rounded-full border border-green-200 py-2 px-4 bg-ferngreen text-white hover:bg-green-900 mt-4 flex items-center justify-center"
                                >
                                    Doar ou receber produtos
                                    <LiaHandsHelpingSolid size={24} />
                                </Link>
                                <Link to='/sobre'
                                    className="gap-2 rounded-full border border-green-200 py-2 px-4 bg-ferngreen text-white hover:bg-green-900 mt-4 flex items-center justify-center"
                                >
                                    Saber mais
                                    <BsInfoCircle size={24} />
                                </Link>
                            </div>

                        </div>

                        <img src='src\assets\1720976241254.png' alt='' className="rounded-lg object-cover h-96 w-auto" />
                    </div>
                </div>

                <BarraDeBusca setInputText={() => { }} tipo={"produto"} />

                <section className='text-[#407C44] part-white p-20 gap-8 overflow-visible'>
                    <div className="flex flex-col gap-8 mb-16">
                        <h1 className='text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Doações recomendadas</h1>
                        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#3D4DA6]'>Novas doações</h2>
                    </div>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        slidesPerView={4}
                        spaceBetween={50}
                        className='overflow-visible'
                    >
                        {produtos.length === 0 && (<>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <SwiperSlide key={index}>
                                    <CardProduto key={index} produto={{} as Produto} carregando={true} />
                                </SwiperSlide>
                            ))}
                        </>)}

                        {produtos.map((produto) => (
                            <SwiperSlide key={produto.id}>
                                <CardProduto key={produto.id} produto={produto} carregando={false} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>


                <section className='part-white text-[#407C44] p-20 gap-8 overflow-visible'>
                    <div className='flex flex-row items-center gap-8 mb-16'>
                        <h1 className='text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Minhas doações</h1>
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
                        {produtos.length === 0 && (<>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <SwiperSlide key={index}>
                                    <CardProduto key={index} produto={{} as Produto} carregando={true} />
                                </SwiperSlide>
                            ))}
                        </>)}
                        {produtos.map((produto) => (
                            <SwiperSlide key={produto.id}>
                                <CardProduto key={produto.id} produto={produto} carregando={false} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
                <Funcionamento />
            </main>
        </>
    )
}

export default Home