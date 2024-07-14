/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import Produto from '../../../models/Produto'
import { buscar, deletar } from '../../../services/Service'
import Skeleton from 'react-loading-skeleton'
import { toastAlerta } from '../../../util/toastAlerta'

function DeletarProduto() {
    const [produto, setProduto] = useState<Produto>({id: 0} as Produto)

    const navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produto/${id}`, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente','info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/doacoes")
    }

    async function deletarProduto() {
        try {
            await deletar(`/produto/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Produto apagado com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar o produto', 'erro')
        }

        retornar()
    }

    return (
        <div className='w-fit mx-auto flex flex-col items-center gap-4 mt-4 leading-none'>
            <h1 className='text-4xl text-center my-4'>Deletar produto</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a produto a seguir?</p>

                <div className='w-96 shadow-2xl box-border rounded-3xl overflow-hidden bg-[#FFFFFF]'>
                    <div className=" flex flex-col gap-4">
                        <div className="h-40 rounded-t-3xl overflow-hidden">
                            {produto.id == 0 ? <Skeleton height={160}/> : <img className='w-full object-cover' src={produto.foto } /> }
                        </div>
                        {produto.id == 0 ? <Skeleton style={{ borderRadius: 10 }} className="mx-8 py-1" width={150}/> : <h1 className='text-[#414141] py-1 w-fit text-md mx-8 px-4 border-2 border-solid border-violetblue text-white bg-violetblue bg-opacity-75 rounded-full'>{produto.categoria?.tipo}</h1>}
                        <h1 className='text-[#414141] text-3xl px-8 font-bold'>{produto.nome || <Skeleton style={{ borderRadius: 10 }} />}</h1>
                        <div className='flex gap-4 items-center px-8'>
                        {produto.id == 0 ? <Skeleton circle={true} height={48} width={48}/> : <img className="rounded-full w-12 h-12" src={produto.usuario?.foto} alt="" />}
                            <h1 className='text-[#414141] text-md'>{produto.usuario?.nome || <Skeleton width={150} style={{ borderRadius: 10 }} />}</h1>
                        </div>
                        <h1 className='text-[#414141] text-md px-8 h-20 line-clamp-2 leading-9'>{produto.descricao || <Skeleton count={2} style={{ borderRadius: 10 }} />}</h1>
                    </div>
                <div className="flex flex-1">
                {produto.id == 0 ? <Skeleton containerClassName="flex-1" className="py-2"/> : <button className='text-slate-100 bg-ferngreen hover:bg-green-900 w-full py-2' onClick={retornar}>Não</button>}
                {produto.id == 0 ? <Skeleton containerClassName="flex-1" className="py-2"/> : <button className='w-full text-slate-100 bg-red-400 hover:bg-red-600 flex items-center justify-center' onClick={deletarProduto}>
                        Sim
                    </button>}
                </div>
                </div>
            </div>
    )
}

export default DeletarProduto