import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { database } from '../../../services/Firebase';
import { ChatContext } from '../../../context/ChatContext';

function UsuarioCard(props: any) {

    const { usuario } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    const handleSelect = async () => {
        const fetchUserChats = async () => {
            if (usuario.id !== 0) {
                const docRef = doc(database, "userChats", (props.usuarioCard.id).toString());
                const res = await getDoc(docRef);
                if (!res.exists()) {
                    await setDoc(docRef, {});
                }
            }
        };

        fetchUserChats();

        const idCombinado = (usuario.id > props.usuarioCard.id ? (usuario.id).toString() + (props.usuarioCard.id).toString()
            : (props.usuarioCard.id).toString() + (usuario.id).toString())

        const res = await getDoc(doc(database, "chats", idCombinado))

        if (!res.exists()) {
            await setDoc(doc(database, "chats", idCombinado), { mensagens: [] })

            await updateDoc(doc(database, "userChats", (usuario.id).toString()), {
                [idCombinado + ".dadosUsuario"]: {
                    id: (props.usuarioCard.id).toString(),
                    nome: props.usuarioCard.nome,
                    foto: props.usuarioCard.foto
                },
                [idCombinado + ".data"]: serverTimestamp()
            });

            await updateDoc(doc(database, "userChats", (props.usuarioCard.id).toString()), {
                [idCombinado + ".dadosUsuario"]: {
                    id: (usuario.id).toString(),
                    nome: usuario.nome,
                    foto: usuario.foto
                },
                [idCombinado + ".data"]: serverTimestamp()
            });
        }
    }

    const changeUser = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u });
    };

    return (
        <>
            <button
                onClick={() => {
                    props.setMenuChat(false);
                    handleSelect();
                    changeUser(props.usuarioCard);
                }}
                className='flex border-t-2 border-gray-200 p-4 items-center gap-4'
            >
                <img
                    className='w-8 h-8 object-cover rounded-full'
                    src={props.usuarioCard.foto}
                    alt=""
                />
                <div className='flex flex-col'>
                    <h1>{props.usuarioCard.nome}</h1>
                    <p className='text-sm text-gray-400 text-left'>
                        {props.ultimaMensagem?.texto}
                    </p>
                </div>
            </button>
        </>
    )
}

export default UsuarioCard