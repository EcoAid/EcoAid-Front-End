import { useContext, useEffect, useState } from 'react';
import Mensagem from '../mensagem/Mensagem'
import { ChatContext } from '../../../context/ChatContext';
import { database } from '../../../services/Firebase';
import { arrayUnion, doc, onSnapshot, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { AuthContext } from '../../../context/AuthContext';
import { v4 as uuid } from "uuid";

function ListaMensagens() {

    const [mensagens, setMensagens] = useState([]);
    const { data } = useContext(ChatContext);
    const [texto, setTexto] = useState("");
    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        const unSub = onSnapshot(doc(database, "chats", (data.chatId).toString()), (doc) => {
            doc.exists() && setMensagens(doc.data().mensagens);
        });

        return () => {
            unSub();
        };
    }, [data.chatId]);

    const handleSend = async () => {
            await updateDoc(doc(database, "chats", data.chatId), {
                mensagens: arrayUnion({
                    id: uuid(),
                    texto,
                    remetenteId: usuario.id,
                    date: Timestamp.now(),
                }),
            });

            await updateDoc(doc(database, "userChats", (usuario.id).toString()), {
                [data.chatId + ".ultimaMensagem"]: {
                    texto,
                },
                [data.chatId + ".data"]: serverTimestamp(),
            });

            await updateDoc(doc(database, "userChats", (data.usuario.id).toString()), {
                [data.chatId + ".ultimaMensagem"]: {
                    texto,
                },
                [data.chatId + ".data"]: serverTimestamp(),
            });

        setTexto("");
    }


    return (
        <>
            <div className='h-[550px] flex flex-col p-4 gap-4 pb-12 bg-isabelline overflow-scroll overflow-x-hidden'>
                {mensagens.map((mensagem) => (
                    <Mensagem key={mensagem.id} mensagem={mensagem} />
                ))}
            </div>
            <div className='flex'>
                <input value={texto} onKeyDown={(e) => { if (e.code === 'Enter') handleSend(); }} className='h-12 px-4 w-full border border-gray-200' type="text" onChange={(e) => setTexto(e.target.value)} />
                <button className='bg-violetblue text-white px-4' onClick={handleSend}> Enviar </button>
            </div>
        </>
    )
}

export default ListaMensagens