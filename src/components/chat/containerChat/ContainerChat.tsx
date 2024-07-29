import { CaretLeft, X } from '@phosphor-icons/react'
import React, { useContext, useEffect, useState } from 'react'
import ListaMensagens from '../listaMensagens/ListaMensagens';
import ListaUsuarios from '../listaUsuarios/ListaUsuarios';
import { AuthContext } from '../../../context/AuthContext';
import { ChatContext } from '../../../context/ChatContext';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { database } from '../../../services/Firebase';

function ContainerChat() {
    const [menuChat, setMenuChat] = useState<boolean>(true);
    const [isChatOpen, setIsChatOpen] = useState<boolean>(true);
    const { usuario } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    const [fakeCurrentDate, setFakeCurrentDate] = useState(new Date())

    useEffect(() => {
        setTimeout(() => setFakeCurrentDate(new Date()), 70000)
    }, [fakeCurrentDate])

    useEffect(() => {
        const fetchUserChats = async () => {
            if (usuario.id !== 0) {
                const docRef = doc(database, "userChats", (usuario.id).toString());
                const res = await getDoc(docRef);
                if (!res.exists()) {
                    await setDoc(docRef, {});
                }
            }
        };
        fetchUserChats();
    }, [usuario.id]);

    return (
        <>
            {(usuario.token !== '') && (<section className='z-10 fixed bottom-0 right-16 w-[400px] bg-white rounded-t-xl shadow-lg overflow-hidden'>
                <div className={`flex justify-between p-4 ${isChatOpen === false && 'hover:bg-blue-900 ease-in-out cursor-pointer'} bg-violetblue text-white`} onClick={() => {if(isChatOpen === false) {setIsChatOpen(true); }}}>
                    <div className='items-center gap-4 flex'>
                        {menuChat !== true && <button onClick={() => {setMenuChat(true);}}>
                            <CaretLeft size={24} />
                        </button>}
                        <img className='w-8 h-8 object-cover rounded-full' src={menuChat ? usuario.foto : data.usuario?.foto} alt="" />
                        <h1>{menuChat ? usuario.nome : data.usuario?.nome}</h1>
                    </div>
                    <div>
                    {isChatOpen && <button className="z-20 flex justify-center items-center h-full" onClick={() => {setMenuChat(true); setIsChatOpen(false); console.log(isChatOpen)}}>
                            <X size={24} />
                        </button>}
                    </div>
                </div>
                {isChatOpen && (menuChat ? <ListaUsuarios setMenuChat={setMenuChat} /> : <ListaMensagens />)}
            </section>)}
        </>
    )
}

export default ContainerChat