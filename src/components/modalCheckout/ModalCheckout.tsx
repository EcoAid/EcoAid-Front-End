import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import './ModalCheckout.css'
import { useContext } from 'react';
import { CarrinhoContext } from '../../context/CarrinhoContext';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Produto from '../../models/Produto';

interface ModalCheckoutProps {
    disabled: boolean;
}


function ModalCheckout({ disabled }: ModalCheckoutProps) {

    const { finalizarCompra, listaCarrinho } = useContext(CarrinhoContext);
    const listaCompra = listaCarrinho;

    return (
        <>
            <Popup
                trigger={
                    <button
                        className={
                            disabled ? 'bg-silver text-onyx cursor-not-allowed p-2 rounded' : 'p-2 rounded hover:text-ferngreen hover:bg-isabelline border border-green-800 text-white bg-ferngreen'
                        }
                        disabled={disabled}
                    >Finalizar
                    </button>
                } modal
                nested>
                    <div className="flex flex-col gap-4 p-4 bg-isabelline text-center">
                        <img src='https://i.imgur.com/FteiExS.png' alt='logo do ecoaid' className='w-1/6 self-center' />
                        <p className="text-5xl font-extrabold uppercase text-ferngreen">Obrigado!</p>
                        <p className="text-onyx">
                            Sua solicitação de doação foi concluída com sucesso. Agradecemos por confiar no ECOAID para receber os itens que você precisa. Juntos, fazemos a diferença!
                        </p>
                        {listaCompra.map((produto: Produto) => (
                            <div onClick={(e) => { e.preventDefault() }} className="text-sm py-2 px-4 text-nowrap flex gap-8 block">
                                <p className="w-52 text-wrap line-clamp-1 break-words"> {produto.nome} </p>
                                <p>Quantidade: {produto.qtd}</p>
                            </div>)
                        )}
                        <div className="flex gap-4 w-full items-center" >
                            <Link to='/doacoes'
                                className="gap-2 w-full rounded-full border border-green-200 py-2 px-4 bg-ferngreen text-white hover:bg-green-900 flex items-center justify-center"
                            >
                                Ver mais produtos
                                <HiOutlineShoppingBag size={20} />
                            </Link>
                            <button
                                onClick={() => finalizarCompra()}
                                className="gap-2 rounded-full w-full border border-onyx py-2 px-4 bg-silver text-onyx hover:bg-neutral-500 flex items-center justify-center"
                            >
                                Fechar
                                <IoIosCloseCircleOutline size={24} />
                            </button>
                        </div>
                    </div>
            </Popup>
        </>
    );
}

export default ModalCheckout;