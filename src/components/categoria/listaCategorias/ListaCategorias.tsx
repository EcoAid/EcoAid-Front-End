/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import CardCategorias from '../cardCategoria/CardCategoria';
import BarraDeBusca from '../../barraDeBusca/BarraDeBusca';
import { PlusCircle } from '@phosphor-icons/react'
import { toastAlerta } from '../../../util/toastAlerta';

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [inputText, setInputText] = useState<string>("");
    const [carregando, setCarregando] = useState<boolean>(true);
    const cardsDisplay = 12;

    const [next, setNext] = useState(cardsDisplay);

    const handleMoreCards = () => {
        setNext(next + cardsDisplay);
    };

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarCategorias() {
        try {
            await buscar('/categoria', setCategorias, {
                headers: { Authorization: token }
            }, setCarregando);
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente','info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado','info');
            navigate('/login');
        }
    }, [token]);

    const filteredList = categorias.filter((element) => {
        if (inputText === '') {
            return element
        } else {
            return element.tipo.toLowerCase().includes(inputText.toLowerCase());
        }
    });

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    
    return (
        <>
            <BarraDeBusca setInputText={setInputText} tipo={"categoria"}/>

            <div className='flex justify-center items-center'>
                <div className='flex items-center gap-2 bg-ferngreen p-4 rounded-md mb-4'>
                    <PlusCircle size={32} color="#f5f4f4" />
                    <Link to='/cadastroCategoria' className='text-white'>Cadastrar Categoria</Link>
                </div>
            </div>

            <div className="flex justify-center w-full my-16">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center content-center">
                        {carregando === true && (<>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <CardCategorias key={index} categoria={{} as Categoria} carregando={true} />
                            ))}
                        </>)}

                        {filteredList.slice(0, next).map((categoria) => (
                                <CardCategorias key={categoria.id} categoria={categoria} carregando={false} />
                        ))}
                    </div>
                </div>
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

export default ListaCategorias;