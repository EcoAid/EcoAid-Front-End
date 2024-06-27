import "tailwindcss/tailwind.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { TfiApple } from "react-icons/tfi";
import { Link } from "react-router-dom";

function Cadastro() {

    const [senha, setSenha] = useState("");
    const [mostraSenha, setMostraSenha] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-isabelline">
            <div className="absolute top-0 h-full w-96">
                <form className="flex flex-col items-center justify-center h-full text-center">
                    <h1 className="font-bold text-5xl mb-8 text-ferngreen">Crie sua conta!</h1>

                    <input type="text" placeholder="Nome Completo" className="rounded-md bg-gray-200 border-none p-3 mb-4 w-full" />
                    <input type="email" placeholder="E-mail" className="rounded-md bg-gray-200 border-none p-3 mb-4 w-full" />
                    
                    <div className="relative w-full mb-4">
                        <input 
                            placeholder="Senha"
                            className="rounded-md bg-gray-200 border-none p-3 w-full pr-10"
                            id="pass"
                            type={mostraSenha ? "text" : "password"}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
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

                    <button className="rounded-md border-2 border-ferngreen bg-ferngreen text-isabelline text-xs font-bold py-3 w-full uppercase mt-4 transform transition-transform duration-80 active:scale-95">
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