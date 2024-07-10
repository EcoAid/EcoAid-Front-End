import React, { useContext, useEffect, useState } from 'react'
import CardProduto from '../cardProduto/CardProduto'
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import { DNA } from 'react-loader-spinner';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

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
            alert("deu popo")
            }
        }

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);

    return (
        <>
            {produtos.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className='container mx-auto my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {produtos.map((produto) => (
                    <CardProduto key={produto.id} produto={produto} />
                ))}
            </div>
        </>
    );
  }


export default ListaProdutos