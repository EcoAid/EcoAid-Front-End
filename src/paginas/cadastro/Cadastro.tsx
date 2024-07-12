/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import "tailwindcss/tailwind.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { ChangeEvent, useEffect, useState } from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { TfiApple } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { toastAlerta } from "../../util/toastAlerta";

function Cadastro() {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        foto: 'https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png'
    } as Usuario)

    const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
        id: 0,
        foto: 'https://voxnews.com.br/wp-content/uploads/2017/04/unnamed.png'
    } as Usuario);

    const [mostraSenha, setMostraSenha] = useState(false);


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (usuario.senha.length >= 8) {
            try {
                await cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuarioResposta)
                toastAlerta('Usuário cadastrado com sucesso','sucesso')

            } catch (error) {
                toastAlerta('Erro ao cadastrar o Usuário','erro')
            }
        } else {
            toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.','info')
            setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
        }
    }

    function back() {
        navigate('/login')
    }

    useEffect(() => {
        if (usuarioResposta.id !== 0) {
            back()
        }
    }, [usuarioResposta])

    return (
        <div className="flex flex-col items-center justify-center w-screen bg-isabelline">
            <div className="m-8 px-24 py-36 bg-white rounded-lg border border-gray-100 shadow-xl h-3/6">
                <form className="w-96 flex flex-col items-center h-full text-center" onSubmit={cadastrarNovoUsuario}>
                    <h1 className="font-bold text-5xl mb-8 text-ferngreen">Crie sua conta!</h1>

                    <input id="nome" name="nome" type="text" placeholder="Nome Completo" className="rounded-md bg-gray-200 border-none p-3 mb-4 w-full"
                        value={usuario.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                    <input id="usuario" name="usuario" type="text" placeholder="E-mail" className="rounded-md bg-gray-200 border-none p-3 mb-4 w-full"
                        value={usuario.usuario}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

                    <div className="relative w-full mb-4">
                        <input
                            id="senha" name="senha"
                            placeholder="Senha"
                            className="rounded-md bg-gray-200 border-none p-3 w-full pr-10"

                            type={mostraSenha ? "text" : "password"}
                            value={usuario.senha}

                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                atualizarEstado(e)}

                        />
                        <span
                            onClick={() => setMostraSenha(prev => !prev)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer h-full"
                        >
                            {mostraSenha ? <FaRegEyeSlash /> : <FaRegEye />}
                        </span>
                    </div>

                    <div className="flex gap-4 w-full items-baseline text-onyx">
                        <p className="whitespace-nowrap">Data de nascimento:</p>
                        <input type="date" placeholder="Nascimento" className="rounded-md bg-gray-200 border-none p-3 mb-4 w-full" />
                    </div>

                    <button type="submit" className="rounded-md border-2 border-ferngreen bg-ferngreen text-isabelline text-xs font-bold py-3 w-full uppercase mt-4 transform transition-transform duration-80 active:scale-95">
                        Cadastrar
                    </button>
                    <div className="my-8 text-onyx flex gap-1.5">
                        <p>Já tem uma conta?</p>
                        <Link to="/login" className="text-violetblue font-bold ">Faça Login</Link>
                    </div>

                    <p className="mb-4">Ou cadastre-se com </p>
                    <div className="flex w-full justify-around items-center">
                        <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full">
                            <SlSocialLinkedin size={24} />
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full">
                            <SlSocialGoogle size={24} />
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full">
                            <TfiApple size={24} />
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full">
                            <SlSocialFacebook size={24} />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Cadastro