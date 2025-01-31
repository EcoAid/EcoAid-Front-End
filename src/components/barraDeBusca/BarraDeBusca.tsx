/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRight, SlidersHorizontal } from '@phosphor-icons/react'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { buscar, buscarSemHeader } from '../../services/Service';
import { Link, useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import Popup from 'reactjs-popup';
import ecoaidEmBreve from '../../assets/EM BREVE.png';


function BarraDeBusca(props: any) {

    const { usuario, handleLogout } = useContext(AuthContext)
    const [inputTextIntern, setInputTextIntern] = useState<string>("");
    const [carregando, setCarregando] = useState<boolean>(false)
    const [buscas, setBuscas] = useState<any[]>([]);
    const token = usuario.token;
    const [invisivel, setInvisivel] = useState<boolean>(true);
    const navigate = useNavigate();

    async function buscarBuscas() {
        try {
        if(props.tipo === "produto") {
            await buscarSemHeader("/produto", setBuscas, setCarregando);
        } else {
            await buscar("/categoria", setBuscas, {
                headers: { Authorization: token }
            }, setCarregando, );
        }
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '' && props.tipo === "categoria") {
            alert('Você precisa estar logado');
            navigate('/login');
        }
    }, [token]);

    const filteredList = props.tipo === "produto" ? (buscas.filter((element) => {
        if (inputTextIntern === '') {
            return element
        } else {
            return element.nome.toLowerCase().includes(inputTextIntern.toLowerCase());
        }
    })) : (buscas.filter((element) => {
        if (inputTextIntern === '') {
            return element
        } else {
            return element.tipo.toLowerCase().includes(inputTextIntern.toLowerCase());
        }
    }))

    function buscaFocada(confirm: boolean) {
        if (confirm === true) {
            buscarBuscas();
            setCarregando(true);
            setInvisivel(false)
        } else {
            setInvisivel(true)
        }
    }

    return (
        <div className='w-3/5 mx-auto p-12'>
            <div className='flex flex-row justify-center gap-8'>
                <form className="w-full" onSubmit={(event) => { event.preventDefault() }}>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                            {carregando ? <TailSpin height="24" width="24" color="#414141"/> : <svg className="w-6 h-6 text-[#414141] dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>}
                        </div>

                        <input
                            value={inputTextIntern}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                props.setInputText(event.target.value);
                                setInputTextIntern(event.target.value);
                                console.log(buscas);
                                event.target.value.length >= 3 ? buscaFocada(true) : buscaFocada(false);
                            }}
                            type="search"
                            id="default-search"
                            className=" outline-none border focus:outline-1 border-gray-300 focus:border-violetblue blue block w-full p-4 ps-24 text-2xl sm:text-xl text-[#414141] rounded-3xl bg-white placeholder-[#414141]"
                            placeholder="Procure por doações"
                            autoComplete="off"
                        />

                    </div>
                </form>
                <Popup
                    trigger={
                        <button><SlidersHorizontal size={64} color='#407C44' /></button>
                    } modal>
                    <div className='flex flex-col items-center gap-8 p-11'>
                        <h1 className='text-4xl text-ferngreen text-center'>Eita! Está funcionalidade está sendo desenvolvida, obrigado por acompanhar nosso progresso!</h1>
                        <img src={ecoaidEmBreve} alt="" />
                    </div>
                </Popup>
            </div>
            <div className='w-full mx-auto flex justify-start'>
                <div onMouseEnter={() => buscaFocada(true)} className={`z-10 w-3/6 flex flex-col gap-2 absolute ${invisivel ? 'invisible' : 'visible'}`}>
                    {filteredList.slice(0, 6).map((produto) => (
                        <div className='flex h-14 justify-between bg-white text-[#414141] bg-opacity-95 border border-solid border-gray-200 px-24 py-4 rounded-lg'>
                            <button onClick={() => { props.setInputText(props.tipo === "produto" ? produto.nome : produto.tipo); setInputTextIntern(props.tipo === "produto" ? produto.nome : produto.tipo); buscaFocada(false) }}>
                                <p className="font-medium">{props.tipo === "produto" ? produto.nome : produto.tipo}</p>
                            </button>
                            <div className="flex gap-8 items-center">
                                {props.tipo === "produto" && <p className="font-light">{produto.usuario?.nome}</p>}
                                {props.tipo === "produto" && <Link to={`/detalhesProduto/${produto.id}`}>
                                <ArrowRight className="text-ferngreen hover:text-green-400" size={28} />
                                </Link>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default BarraDeBusca