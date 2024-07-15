/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import CardProduto from '../cardProduto/CardProduto'
import Produto from '../../../models/Produto';
import { buscarSemHeader } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';

function ListaProdutos(props: any) {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);

    const cardsDisplay = 12;

    const [next, setNext] = useState(cardsDisplay);

    const handleMoreCards = () => {
        setNext(next + cardsDisplay);
    };

    async function buscarProdutos() {
        try {
            await buscarSemHeader('/produto', setProdutos, setCarregando);
        } catch (error: any) {
            toastAlerta("Os produtos não foram localizados", 'erro')
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);

    const filteredList = produtos.filter((element) => {
        if (props?.inputText === '') {
            return element
        } else {
            return element.nome.toLowerCase().includes(props?.inputText.toLowerCase());
        }
    });

    return (
        <>

            <div className='container mx-auto my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
                {carregando !== false && (<>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <CardProduto key={index} produto={{} as Produto} carregando={true} />
                    ))}
                </>)}
                {filteredList?.slice(0, next)?.map((produto) => (
                    <CardProduto key={produto.id} produto={produto} carregando={false} />
                ))}
            </div>
            {next < filteredList?.length && (
                <div className='flex justify-center'>
                    <button
                        className="bg-ferngreen p-4 rounded-md my-16 text-white"
                        onClick={handleMoreCards}
                    >
                        Carregar Mais
                    </button>
                </div>
            )}
        </>
    );
}


export default ListaProdutos