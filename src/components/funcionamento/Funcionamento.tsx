import React from 'react'
import { Bs1SquareFill } from "react-icons/bs";
import { Bs2SquareFill } from "react-icons/bs";
import { MdAccountBox } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import ecoaidDiscussion from'../../assets/1720975931102.png';

function Funcionamento() {
    return (
        <>
            <div className="px-20 mx-auto text-left">
                <h1 className='text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-ferngreen pb-8'>Como funciona?</h1>
                <div className="grid grid-cols-5 gap-4 items-center">
                    <div className="grid gap-6 grid-cols-2 col-span-3">
                        <div className="flex flex-col justify-center rounded-xl h-52 p-5 hover:bg-white border-2 border-transparent hover:border-ferngreen">
                            <div className="flex items-center mb-1 font-bold gap-2">
                                <Bs1SquareFill className='text-ferngreen' size={18} />
                                <p className="text-lg">Cadastre algo para a doação</p>
                            </div>
                            <p className="text-sm text-gray-900">
                                Registre um item para doação, detalhando seu estado de conservação, categoria e qualquer informação relevante.
                                Defina também um valor estimado para o produto.</p>
                        </div>
                        <div className="flex flex-col justify-center rounded-xl h-52 p-5 hover:bg-white border-2 border-transparent hover:border-ferngreen">
                            <div className="flex items-center mb-1 font-bold gap-2">
                            <Bs2SquareFill className='text-ferngreen' size={18}/>
                                <p className="text-lg">Receba uma doação</p>
                            </div>
                            <p className="text-sm text-gray-900">
                                Depois de doar, utilize os créditos acumulados para receber doações de outros usuários, conforme o valor estimado dos itens.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center rounded-xl h-52 p-5 hover:bg-white border-2 border-transparent hover:border-ferngreen">
                            <div className="flex items-center mb-1 font-bold gap-2">
                            <MdAccountBox className='text-ferngreen' size={22}/>
                                <p className="text-lg">Crie uma conta</p>
                            </div>
                            <p className="text-sm text-gray-900">
                                Para doar e receber produtos, é necessário criar uma conta no site. Após o cadastro, você poderá editar suas informações em seu perfil.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center rounded-xl h-52 p-5 hover:bg-white border-2 border-transparent hover:border-ferngreen">
                            <div className="flex items-center mb-1 font-bold gap-2">
                            <BiSolidCategory className='text-ferngreen' size={22}/>
                                <p className="text-lg">Cadastre uma categoria</p>
                            </div>
                            <p className="text-sm text-gray-900">
                                Se a categoria do seu item ainda não existir no site, você pode criar uma nova, informando o nome e uma breve descrição.
                            </p>
                        </div>
                    </div>
                    <div className="relative md:col-span-2 lg:col-span-2">
                        <img
                            className="inset-0 object-fill object-bottom w-full h-auto bg-gradient-to-t from-ferngreen/65  to-ferngreen/15 rounded-3xl p-4 pl-0"
                            src={ecoaidDiscussion}
                            alt=""
                        />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Funcionamento