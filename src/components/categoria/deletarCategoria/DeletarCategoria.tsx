/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../context/AuthContext'
import Categoria from '../../../models/Categoria'
import { buscar, deletar } from '../../../services/Service'
import { Tag } from '@phosphor-icons/react'
import Skeleton from 'react-loading-skeleton'
import { toastAlerta } from '../../../util/toastAlerta'
// import { toastAlerta } from '../../../utils/toastAlerta'

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [carregando, setCarregando] = useState<boolean>(false);

    const navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            }, setCarregando)
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', "info")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', "info")
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categoria/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Categoria apagada com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar a Categoria', 'erro')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja deletar a categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between '>
                <div className='bg-white bg-opacity-75 flex items-center p-4'>
                    <div
                        className="bg-isabelline border-solid border-2 border-ferngreen rounded-full w-16 h-16 flex justify-center items-center text-ferngreen shadow-2xl"
                    >
                        <Tag size={32} />
                    </div>
                    <div className='h-auto ml-4'>
                        <h2 className="uppercase text-ferngreen font-medium mb-2">
                            {categoria.tipo || <Skeleton width={250} style={{ borderRadius: 10 }} />}
                        </h2>
                        <p className="font-light text-sm text-gray-800 line-clamp-3">
                            {categoria.descricao || <Skeleton width={250} style={{ borderRadius: 10 }} />}
                        </p>
                    </div>

                </div>


                <div className="flex">
                    <button className='text-slate-100 bg-ferngreen hover:bg-green-900 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-red-500 hover:bg-red-700 flex items-center justify-center' onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria