/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaInfoCircle, FaTags } from "react-icons/fa";
import { TiShoppingCart } from 'react-icons/ti';
import { LuHelpingHand } from "react-icons/lu";
import Produto from "../../models/Produto";
import { buscarSemHeader } from "../../services/Service";
import { AuthContext } from "../../context/AuthContext";
import ListaProdutos from "../produto/listaProdutos/ListaProdutos";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardProduto from "../produto/cardProduto/CardProduto";

function DetalhesProduto() {

    const [produto, setProduto] = useState<Produto>({} as Produto);
    const [produtos, setProdutos] = useState<Produto[]>([]);

    const { id } = useParams<{ id: string }>()

    async function buscarProdutoPorId(id: string) {
        try {
            await buscarSemHeader(`/produto/${id}`, setProduto,);
        } catch (error: any) {
            alert('Algo de errado ocorreu, tente novamente');
        }
    }

    async function buscarProdutos() {
        try {
            await buscarSemHeader(`/produto`, setProdutos,);
        } catch (error: any) {
            alert('Algo de errado ocorreu, tente novamente');
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarProdutoPorId(id)
            buscarProdutos()
        }
    }, [id])

    return (
        <div className="px-16 pt-8 overflow-hidden">
            <div className="justify-left p-16 flex max-sm:flex-col bg-isabelline gap-8">
                <img src={produto.foto} alt={produto.nome} className="rounded-lg object-cover w-96 h-96" />


                <div className="flex-col space-y-4 md:w-4/6">
                    <h1 className="text-5xl text-ferngreen font-semibold md:mt-2">
                        {produto.nome}
                    </h1>
                    <p className="text-gray-600">
                        Data de cadastro: {new Date(produto.dataCadastro).toLocaleDateString()}
                    </p>
                    <div className="flex space-x-3">
                        <div className="items-center flex rounded-full py-1 px-4 font-medium border text-ferngreen bg-green-200 border-ferngreen gap-x-2">
                            <FaTags size={18} />
                            {produto.categoria?.tipo}
                        </div>
                        <div className="items-center flex rounded-full py-1 px-4 font-medium border text-green-200 bg-ferngreen border-green-200 gap-x-2">
                            <FaInfoCircle size={18} />
                            {produto.condicao}
                        </div>
                    </div>
                    <p className="line-clamp-4 text-lg">
                        {produto.descricao}
                    </p>
                    <p className="text-xl font-semibold">
                        Crédito ganho pela doação: {produto.valor}
                    </p>
                    <div className="flex gap-4">
                        <button
                            className="gap-2 rounded-full border border-green-200 py-2 px-4 bg-ferngreen text-white hover:bg-green-900 mt-4 flex items-center justify-center"
                        >
                            Adicionar ao carrinho
                            <TiShoppingCart size={24} />
                        </button>
                        <button
                            className="gap-2 rounded-full border border-green-200 py-2 px-4 bg-ferngreen text-white hover:bg-green-900 mt-4 flex items-center justify-center"
                        >
                            Doar
                            <LuHelpingHand size={24} />
                        </button>
                    </div>

                </div>
            </div>

            <div className="p-24">
                <h2 className="text-5xl text-ferngreen mb-16 font-semibold md:mt-2 text-center">
                    Doações recomendadas
                </h2>
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
            </div>

        </div>
    );
}

export default DetalhesProduto;
