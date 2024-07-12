import { PlusCircle } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import BarraDeBusca from "../../components/barraDeBusca/BarraDeBusca"
import ListaProdutos from "../../components/produto/listaProdutos/ListaProdutos"
import { useState } from "react";

function Doacoes() {  
    
    const [inputText, setInputText] = useState<string>("");

    return (
        <>
        <BarraDeBusca setInputText={setInputText} tipo={"produto"}/>
        
            <div className='flex justify-center items-center'>
                <div className='flex items-center gap-2 bg-ferngreen p-4 rounded-md mb-12'>
                    <PlusCircle size={32} color="#f5f4f4" />
                    <Link to='/cadastroDoacao' className='text-white'>Doar um Produto</Link>
                </div>
            </div>
            <ListaProdutos inputText={inputText}/>
        </>
    )
}

export default Doacoes