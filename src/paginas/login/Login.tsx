/* eslint-disable @typescript-eslint/no-unused-vars */
import "tailwindcss/tailwind.css";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { TfiApple } from "react-icons/tfi";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../models/UsuarioLogin";
import { AuthContext } from "../../context/AuthContext";
import { RotatingLines } from 'react-loader-spinner';

function Login() {
    const [mostraSenha, setMostraSenha] = useState(false);

    const navigate = useNavigate();

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    );

    const { usuario, handleLogin } = useContext(AuthContext);

    const { isLoading } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen">
            <div className="px-24 py-36 bg-white rounded-lg border border-gray-100 shadow-xl">
                <form onSubmit={login} className="w-96 flex flex-col items-center justify-center h-full text-center">
                    <h1 className="font-bold text-5xl mb-8 text-ferngreen">Bem vindo de volta!</h1>
                    <input id="usuario" name="usuario" type="text" placeholder="E-mail" className="rounded-md bg-gray-200 border-none p-3 mb-4 w-full" value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>

                    <div className="relative w-full">
                        <input id="senha" name="senha"
                            placeholder="Senha"
                            className="rounded-md bg-gray-200 border-none p-3 w-full pr-10"
                            type={mostraSenha ? "text" : "password"}
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                        <span
                            onClick={() => setMostraSenha(prev => !prev)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer h-full"
                        >
                            {mostraSenha ? <FaRegEyeSlash /> : <FaRegEye />}
                        </span>
                    </div>


                    <a href="#" className="text-sm my-2 self-end text-violetblue" >
                        Esqueceu sua senha?
                    </a>

                    <button className="flex justify-center rounded-md border-2 border-ferngreen bg-ferngreen text-isabelline text-xs font-bold py-3 w-full uppercase mt-4 transform transition-transform duration-80 active:scale-95">
                    {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Entrar</span>}
                    </button>
                    <div className="my-8 text-onyx flex gap-1.5">
                        <p>Não tem uma conta?</p>
                        <Link to="/cadastro" className="text-violetblue font-bold ">Cadastre-se</Link>
                    </div>
                    <p className="mb-4">Ou entre com </p>
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

export default Login