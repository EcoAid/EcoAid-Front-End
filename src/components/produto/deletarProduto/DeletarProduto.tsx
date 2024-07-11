import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import Produto from '../../../models/Produto'
import { buscar, deletar } from '../../../services/Service'
import { ArrowSquareOut } from '@phosphor-icons/react'
import Skeleton from 'react-loading-skeleton'

function DeletarProduto() {
    const [produto, setProduto] = useState<Produto>({} as Produto)

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
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/produto")
    }

    async function deletarProduto() {
        try {
            await deletar(`/produto/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Produto apagada com sucesso')

        } catch (error) {
            alert('Erro ao apagar a Produto')
        }

        retornar()
    }
    return (
        <div className='w-fit mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar produto</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a produto a seguir?</p>

                <div className='w-fit shadow-2xl box-border rounded-3xl bg-[#FFFFFF]'>
                    <div className="w-fit flex flex-col gap-4">
                        <div className="h-40 rounded-t-3xl overflow-hidden">
                            <img className='object-contain' src={produto.foto} alt="PlaceHolder" />
                        </div>
                        <h1 className='text-[#414141] w-fit text-md mx-8 px-4 border-2 border-solid border-violetblue text-white bg-violetblue bg-opacity-75 rounded-full'>{produto.categoria?.tipo}</h1>
                        <h1 className='text-[#414141] text-3xl px-8 font-bold'>{produto.nome || <Skeleton style={{ borderRadius: 10 }} />}</h1>
                        <div className='flex gap-4 items-center px-8'>
                            <img className="rounded-full w-12 h-12" src={produto.usuario?.foto} alt="" />
                            <h1 className='text-[#414141] text-md'>{produto.usuario?.nome || <Skeleton width={150} style={{ borderRadius: 10 }} />}</h1>
                        </div>
                        <h1 className='text-[#414141] text-md px-8 h-12 line-clamp-2'>{produto.descricao || <Skeleton count={2} style={{ borderRadius: 10 }} />}</h1>
                    </div>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-teal-400 hover:bg-teal-600 flex items-center justify-center' onClick={deletarProduto}>
                        Sim
                    </button>
                </div>
                </div>
            </div>
    )
}

export default DeletarProduto