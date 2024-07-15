import React from 'react';
import { FaGithub } from "react-icons/fa";
import Funcionamento from '../../components/funcionamento/Funcionamento';

function Sobre() {
    return (
    <div className=" mx-auto justify-center text-center text-[#414141] bg-white p-32">

    <div className="flex flex-col gap-24 justify-center">
        <div>
            <h2 className="mb-16 font-bold text-4xl sm:text-5xl">Sobre o <span className="text-green-700 bg-isabelline">EcoAid</span>
            </h2>
            <p className="text-xl text-gray-700">
                Somos um projeto que tem como pilar promover a colaboração social na troca de produtos que promovem a sustentabilidade e ajudam na mitigação das mudanças climáticas, desde roupas, utensílios, objetos para dia a dia, produtos orgânicos e reutilizáveis, como grande doadores que podem focar em painéis solares, sistemas de captação de água da chuva, bicicletas elétricas, produtos orgânicos e reutilizáveis, entre outros. 
                Indivíduos que possuem utensílios para doação,  disponibilizarão os itens de forma gratuita para quem quiser recebê-los
            </p>
        </div>

        <div>
            <h2 className="mb-16 font-bold text-4xl sm:text-5xl ">Nossos <span className="text-green-700 bg-isabelline">membros</span>
            </h2>

            <div className="grid grid-cols-7 justify-center  gap-16">
                <div className="flex flex-col gap-4">
                <img className="rounded-full object-contain hover:opacity-50 " src="https://avatars.githubusercontent.com/u/125198871?v=4"/>
                <h3 className="text-2xl text-gray-500 border-indigo-600 uppercase">Daniel</h3>
                <a className=" hover:text-[#407C44] hover:underline hover:opacity-50 transition ease-in-out delay-50" href="https://GitHub.com/danielthx23" target="_blank">GitHub</a> 
                </div>
                <div className="flex flex-col gap-4">
                <img className="rounded-full object-contain hover:opacity-50 " src="https://avatars.githubusercontent.com/u/86036550?v=4"/>
                <h3 className="text-2xl text-gray-500 border-indigo-600 uppercase">Desyrre</h3>
                <a className=" hover:text-[#407C44] hover:underline hover:opacity-50 transition ease-in-out delay-50" href="https://github.com/ddesyrre" target="_blank">GitHub</a> 
                </div>
                <div className="flex flex-col gap-4">
                <img className="rounded-full object-contain hover:opacity-50 " src="https://avatars.githubusercontent.com/u/165588697?v=4"/>
                <h3 className="text-2xl text-gray-500 border-indigo-600 uppercase">Gabriela</h3>
                <a className=" hover:text-[#407C44] hover:underline hover:opacity-50 transition ease-in-out delay-50" href="https://GitHub.com/gabyrsas" target="_blank">GitHub</a> 
                </div>
                <div className="flex flex-col gap-4">
                <img className="rounded-full object-contain hover:opacity-50 " src="https://avatars.githubusercontent.com/u/165532742?v=4"/>
                <h3 className="text-2xl text-gray-500 border-indigo-600 uppercase">Giulia</h3>
                <a className=" hover:text-[#407C44] hover:underline hover:opacity-50 transition ease-in-out delay-50" href="https://GitHub.com/GiuDestro" target="_blank">GitHub</a> 
                </div>
                <div className="flex flex-col gap-4">
                <img className="rounded-full object-contain hover:opacity-50 " src="https://avatars.githubusercontent.com/u/126731122?v=4"/>
                <h3 className="text-2xl text-gray-500 border-indigo-600 uppercase">Hellmat</h3>
                <a className=" hover:text-[#407C44] hover:underline hover:opacity-50 transition ease-in-out delay-50" href="https://GitHub.com/HellmatGa" target="_blank">GitHub</a> 
                </div>
                <div className="flex flex-col gap-4">
                <img className="rounded-full object-contain hover:opacity-50 " src="https://avatars.githubusercontent.com/u/156537929?v=4"/>
                <h3 className="text-2xl text-gray-500 border-indigo-600 uppercase">Laura</h3>
                <a className=" hover:text-[#407C44] hover:underline hover:opacity-50 transition ease-in-out delay-50" href="https://GitHub.com/laumariano" target="_blank">GitHub</a> 
                </div>
                <div className="flex flex-col gap-4">
                <img className="rounded-full object-contain hover:opacity-50 " src="https://avatars.githubusercontent.com/u/139519050?v=4"/>
                <h3 className="text-2xl text-gray-500 border-indigo-600 uppercase">Sayuri</h3>
                <a className=" hover:text-[#407C44] hover:underline hover:opacity-50 transition ease-in-out delay-50" href="https://GitHub.com/SayuriCristina" target="_blank">GitHub</a> 
                </div>
            </div>
        </div>
<Funcionamento/>
                <div className="d-flex justify-content-center">
                    <h2 className="my-4 font-bold text-4xl sm:text-5xl mb-16 bg-white">Acesse o repositório do <span className="bg-clip-content bg-isabelline text-green-700">projeto</span>
                    </h2>
                    <a className="text-lg hover:text-[#407C44] hover:opacity-50 transition ease-in-out delay-50" href="https://github.com/EcoAid" target="_blank">
                        <div className="flex items-center justify-center  ">
                            <FaGithub size={120} />
                        </div>
                    </a>

                </div>
            </div>
        </div >
    )
}

export default Sobre