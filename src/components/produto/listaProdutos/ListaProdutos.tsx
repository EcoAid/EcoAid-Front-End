import React, { useContext, useEffect, useState } from 'react'
import CardProduto from '../cardProduto/CardProduto'
import Produto from '../../../models/Produto';
import { buscarSemHeader } from '../../../services/Service';
import { AuthContext } from '../../../context/AuthContext';
import { toastAlerta } from '../../../util/toastAlerta';

let filter = "";

function ListaProdutos(props: any) {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    filter = props.inputText;

    const { handleLogout } = useContext(AuthContext);

    async function buscarProdutos() {
        try {
            await buscarSemHeader('/produto', setProdutos);
        } catch (error: any) {
            toastAlerta("Os produtos não foram localizados",'erro')
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);

    const filteredList = produtos.filter((element) => {
        if (props.inputText === '') {
            return element
        } else {
            return element.nome.toLowerCase().includes(filter.toLowerCase());
        }
    });

    return (
        <>

            <div className='container mx-auto my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
                {produtos.length === 0 && (<>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <CardProduto key={index} produto={{} as Produto} carregando={true} />
                    ))}
                </>)}
                {filteredList.map((produto) => (
                    <CardProduto key={produto.id} produto={produto} carregando={false} />
                ))}
            </div>
        </>
    );
}


export default ListaProdutos