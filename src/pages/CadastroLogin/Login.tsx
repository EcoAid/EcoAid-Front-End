import "tailwindcss/tailwind.css";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { TfiApple } from "react-icons/tfi";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function Login() {
    const [senha, setSenha] = useState("");
    const [mostraSenha, setMostraSenha] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-isabelline">
            <div className="absolute top-0 h-full w-96">
                <form className="flex flex-col items-center justify-center h-full text-center">
                    <h1 className="font-bold text-5xl mb-8 text-ferngreen">Bem vindo de volta!</h1>
                    <input type="email" placeholder="E-mail" className="rounded-md bg-gray-200 border-none p-3 mb-4 w-full" />

                    <div className="relative w-full">
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


                    <a href="#" className="text-sm my-2 self-end text-violetblue" >
                        Esqueceu sua senha?
                    </a>

                    <button className="rounded-md border-2 border-ferngreen bg-ferngreen text-isabelline text-xs font-bold py-3 w-full uppercase mt-4 transform transition-transform duration-80 active:scale-95">
                        Entrar
                    </button>
                    <div className="my-8 text-onyx flex gap-1.5">
                        <p>Não tem uma conta?</p>
                        <a href="" className="text-violetblue font-bold ">Cadastre-se</a> {/* SERÁ MUDADO PARA LINK TO DEPOIS */}
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