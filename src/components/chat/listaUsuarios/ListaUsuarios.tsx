import React, { useContext, useEffect, useState } from 'react'
import { toastAlerta } from '../../../util/toastAlerta';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../../models/Usuario';
import { AuthContext } from '../../../context/AuthContext';
import { buscar } from '../../../services/Service';
import UsuarioCard from '../usuarioReal/UsuarioReal';
import { doc, onSnapshot } from 'firebase/firestore';
import { database } from '../../../services/Firebase';

function ListaUsuarios(props: any) {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);
    const [chats, setChats] = useState([])
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchVisivel, setSearchVisivel] = useState<boolean>(false);
    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarUsuarios() {
        try {
            await buscar('/usuarios/all', setUsuarios, {
                headers: { Authorization: token }
            }, setCarregando);
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info');
            navigate('/login');
        }
    }, [token]);


    useEffect(() => {
        buscarUsuarios();
    }, [usuarios.length]);

    const filteredUsers = usuarios.filter(usuario =>
        usuario.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(database, "userChats", (usuario.id).toString()), (doc) => {
                setChats(doc.data());
            });

            return () => {
                unsub();
            };
        };

        usuario.id && getChats()
    }, [usuario.id]);

    return (
        <div className='h-[592px] flex flex-col overflow-y-scroll'>
            <input
                type="text"
                className='w-full p-4'
                placeholder='Procure por um usuário'
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    if (e.target.value.length >= 3) {
                        setSearchVisivel(true);
                    } else {
                        setSearchVisivel(false);
                    }
                }}
            />
            {searchVisivel ? (
                filteredUsers.map((usuario) => (
                    <UsuarioCard
                        key={usuario.id}
                        setMenuChat={props.setMenuChat}
                        usuarioCard={usuario}
                        ultimaMensagem={{ texto: "" }} 
                    />
                ))
            ) : (
                Object?.entries(chats)
                    .sort((a, b) => b[1].data - a[1].data)
                    .map(([chatId, chatData]) => (
                        <UsuarioCard
                            key={chatId}
                            setMenuChat={props.setMenuChat}
                            usuarioCard={chatData.dadosUsuario} 
                            ultimaMensagem={chatData.ultimaMensagem} 
                        />
                    ))
            )}
        </div>
    )
}

export default ListaUsuarios