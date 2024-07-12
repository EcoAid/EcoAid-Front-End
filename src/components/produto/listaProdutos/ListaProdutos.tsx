import React, { useContext, useEffect, useState } from 'react'
import CardProduto from '../cardProduto/CardProduto'
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

let filter = "";

function ListaProdutos(props: any) {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    filter = props.inputText;
    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/login');
        }
    }, [token]);

    async function buscarProdutos() {
        try {
            await buscar('/produto', setProdutos, {
                headers: {
                    Authorization: token,
                },
            });
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