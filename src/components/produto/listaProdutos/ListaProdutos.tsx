import React, { useContext, useEffect, useState } from 'react'
import CardProduto from '../cardProduto/CardProduto'
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import { DNA } from 'react-loader-spinner';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toastAlerta } from '../../../util/toastAlerta';

function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado','info');
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
            toastAlerta("Os produtos não foram localizados",'erro')
            }
        }

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);

    return (
        <>
            <div className='container mx-auto my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
            {produtos.length === 0 && (<>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <CardProduto key={index} produto={{} as Produto} carregando={true} />
                            ))}
                        </>)}
                {produtos.map((produto) => (
                    <CardProduto key={produto.id} produto={produto} carregando={false}/>
                ))}
            </div>
        </>
    );
}


export default ListaProdutos