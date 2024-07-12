import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Service';


function FormularioProduto() {
    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const [produto, setProduto] = useState<Produto>({} as Produto);

    async function buscarProdutoPorId(id: string) {
        await buscar(`/produto/${id}`, setProduto, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function buscarCategoriaPorId(id: string) {
        await buscar(`/categoria/${id}`, setCategoria, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function buscarCategorias() {
        await buscar('/categoria', setCategorias, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        buscarCategorias();
        if (id !== undefined) {
            buscarProdutoPorId(id);
            console.log(categoria);

        }
    }, [id]);

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        });
    }, [categoria]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/doacoes');
    }

    async function gerarNovaProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log({ produto });

        if (id != undefined) {
            try {
                await atualizar(`/produto`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                });
                alert('Produto atualizada com sucesso');
                retornar();
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()
                } else {
                    alert('Erro ao atualizar a Produto');
                }
            }
        } else {
            try {
                await cadastrar(`/produto`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                });

                alert('Produto cadastrada com sucesso');
                retornar();
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()
                } else {
                    alert('Erro ao cadastrar a Produto');
                }
            }
        }
    }

    const carregandoCategoria = categoria.descricao === '';

    return (
        <div className="container flex flex-col mx-auto justify-center items-center">
            <h1 className="text-5xl text-center my-8 font-semibold text-ferngreen">
                {id !== undefined ? 'Editar produto' : 'Cadastrar produto'}
            </h1>

            <form onSubmit={gerarNovaProduto} className="flex flex-col w-1/3 max-sm:w-2/3 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do produto:</label>
                    <input
                        value={produto.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Nome do produto"
                        name="nome"
                        required
                        className="border-2 border-black rounded p-2"
                    />
                    <label htmlFor="titulo" className='mt-2'>Foto do produto:</label>
                    <input
                        value={produto.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Foto do produto"
                        name="foto"
                        required
                        className="border-2 border-black rounded p-2"
                    />
                    <label htmlFor="titulo" className='mt-2'>Descrição do produto:</label>
                    <input
                        value={produto.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Descrição do produto"
                        name="descricao"
                        required
                        className="border-2 border-black rounded p-2"
                    />
                    <label htmlFor="titulo" className='mt-2'>Condição do produto:</label>
                    <input
                        value={produto.condicao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Condição do produto"
                        name="condicao"
                        required
                        className="border-2 border-black rounded p-2"
                    />
                    <label htmlFor="titulo" className='mt-2'>Valor do produto:</label>
                    <input
                        value={produto.valor}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="number"
                        placeholder="Valor do produto"
                        name="valor"
                        required
                        className="border-2 border-black rounded p-2"
                    />

                    <label htmlFor="titulo" className='mt-2'>Categoria do produto:</label>
                    <select name="categoria" id="categoria" className='border-2 border-black rounded p-2' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
                        <option value="" selected disabled>Selecione uma categoria</option>
                        {categorias.map((categoria) => (
                            <>
                                <option value={categoria.id} >{categoria.descricao}</option>
                            </>
                        ))}
                    </select>
                </div>
                <button disabled={carregandoCategoria} type='submit' className='rounded disabled:bg-slate-200 bg-ferngreen hover:bg-green-900 text-slate-100 font-semibold w-full mx-auto block py-2 mb-12'>
                    {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
}

export default FormularioProduto;