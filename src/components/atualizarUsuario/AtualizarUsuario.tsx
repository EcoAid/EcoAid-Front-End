/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { atualizar, buscarSemHeader } from "../../services/Service";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { toastAlerta } from "../../util/toastAlerta";
import Produto from "../../models/Produto";

function AtualizarUsuario() {
    const [mostraSenha, setMostraSenha] = useState(false);
    const [mostraConfirmaSenha, setConfirmaSenha] = useState(false);

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);

    const [usuarioPerfil, setUsuario] = useState<Usuario>({
        id: usuario.id,
        nome: usuario.nome,
        usuario: usuario.usuario,
        foto: usuario.foto
    } as Usuario);

    const token = usuario?.token || "";

    const [confirmaSenha, setConfirmaSenhaTexto] = useState("");

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuarioPerfil,
            [e.target.name]: e.target.value,
        });
    }

    async function attUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (token === "") {
            toastAlerta("Token não encontrado, favor logar novamente", "info");
            handleLogout();
            return;
        }

        if (usuarioPerfil.senha !== confirmaSenha) {
            toastAlerta("As senhas não coincidem. Por favor, verifique e tente novamente.", "info");
            return;
        }

        try {
            if (usuarioPerfil.senha.length >= 8) {
                await atualizar(`/usuarios/atualizar`, usuarioPerfil, setUsuario, {
                    headers: {
                        Authorization: token,
                    },
                });
            }

            toastAlerta("Dados atualizados com sucesso", "sucesso");
            handleLogout();
            login();
        } catch (error: any) {
            if (error.toString().includes("403")) {
                toastAlerta("O token expirou, favor logar novamente", "info");
                handleLogout();
            } else {
                toastAlerta("Erro ao atualizar dados!", "erro");
            }
        }
    }

    function retornar() {
        navigate("/usuarios");
    }

    function login() {
        navigate('/login')
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen w-screen bg-isabelline">
                <div className="px-24 py-36 bg-white rounded-lg border border-gray-100 shadow-xl">
                    <form className="w-96 flex flex-col items-center justify-center h-full text-center" onSubmit={attUsuario}>
                        <h1 className="font-bold text-5xl mb-8 text-ferngreen">Atualize seus dados!</h1>

                        <input id="nome" name="nome" type="text" placeholder="Nome Completo" className="rounded-md bg-gray-200 border-none p-3 mb-4 w-full"
                            value={usuarioPerfil.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                        <input id="usuario" name="usuario" type="text" placeholder="E-mail" className="rounded-md bg-gray-200 border-none p-3 mb-4 w-full"
                            value={usuarioPerfil.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
                        <input id="foto" name="foto" type="text" placeholder="Foto" className="rounded-md bg-gray-200 border-none p-3 mb-4 w-full"
                            value={usuarioPerfil.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />

                        <div className="relative w-full mb-4">
                            <input
                                id="senha" name="senha"
                                placeholder="Senha"
                                className="rounded-md bg-gray-200 border-none p-3 w-full pr-10"

                                type={mostraSenha ? "text" : "password"}
                                value={usuarioPerfil.senha}

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

                        <div className="relative w-full mb-4">
                            <input
                                id="confirmaSenha" name="confirmaSenha"
                                placeholder="Confirme a senha"
                                className="rounded-md bg-gray-200 border-none p-3 w-full pr-10"
                                type={mostraConfirmaSenha ? "text" : "password"}
                                value={confirmaSenha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmaSenhaTexto(e.target.value)}
                            />
                            <span
                                onClick={() => setConfirmaSenha(prev => !prev)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer h-full"
                            >
                                {mostraConfirmaSenha ? <FaRegEyeSlash /> : <FaRegEye />}
                            </span>
                        </div>


                        <button type="submit" className="rounded-md border-2 border-ferngreen bg-ferngreen text-isabelline text-xs font-bold py-3 w-full uppercase mt-4 transform transition-transform duration-80 active:scale-95">
                            Atualizar
                        </button>
                    </form>
                </div>
            </div>
        </div>


    );
}

export default AtualizarUsuario