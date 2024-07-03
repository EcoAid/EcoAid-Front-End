import React from 'react';

function Sobre() {
    return (
    <div className=" mx-auto justify-center text-center text-[#414141] bg-white p-32">

    <div className="flex flex-col gap-24 justify-center">
        <div>
            <h2 className="mb-16 font-bold text-4xl sm:text-5xl">Sobre o <span className="text-green-700">EcoAid</span>
            </h2>
            <p className="text-xl text-gray-700">
                Somos um projeto que tem como pilar promover a colaboração social na troca de produtos que promovem a sustentabilidade e ajudam na mitigação das mudanças climáticas, desde roupas, utensílios, objetos para dia a dia, produtos orgânicos e reutilizáveis, como grande doadores que podem focar em painéis solares, sistemas de captação de água da chuva, bicicletas elétricas, produtos orgânicos e reutilizáveis, entre outros. 
                Indivíduos que possuem utensílios para doação,  disponibilizarão os itens de forma gratuita para quem quiser recebê-los
            </p>
        </div>

        <div>
            <h2 className="mb-16 font-bold text-4xl sm:text-5xl ">Nossos <span className="text-green-700">membros</span>
            </h2>

            <div className="grid grid-cols-7 justify-center gap-16">
                <div className="flex flex-col gap-4">
                <img className="rounded-full object-contain" src="https://avatars.githubusercontent.com/u/125198871?v=4"/>
                <h3 className="text-2xl text-gray-500 border-indigo-600 uppercase">Daniel</h3>
                <a className="" href="https://GitHub.com/danielthx23">GitHub</a> 
                </div>
                <div className="flex flex-col gap-4">
                <img className="rounded-full object-contain" src="https://avatars.githubusercontent.com/u/86036550?v=4"/>
                <h3 className="text-2xl text-gray-500 border-indigo-600 uppercase">Desyrre</h3>
                <a className="" href="https://github.com/ddesyrre">GitHub</a> 
                </div>
                <div className="flex flex-col gap-4">
                <img className="rounded-full object-contain" src="https://avatars.githubusercontent.com/u/165588697?v=4"/>
                <h3 className="text-2xl text-gray-500 border-indigo-600 uppercase">Gabriela</h3>
                <a className="" href="https://GitHub.com/gabyrsas">GitHub</a> 
                </div>
                <div className="flex flex-col gap-4">
                <img className="rounded-full object-contain" src="https://avatars.githubusercontent.com/u/165532742?v=4"/>
                <h3 className="text-2xl text-gray-500 border-indigo-600 uppercase">Giulia</h3>
                <a className="" href="https://GitHub.com/GiuDestro">GitHub</a> 
                </div>
                <div className="flex flex-col gap-4">
                <img className="rounded-full object-contain" src="https://avatars.githubusercontent.com/u/126731122?v=4"/>
                <h3 className="text-2xl text-gray-500 border-indigo-600 uppercase">Hellmat</h3>
                <a className="" href="https://GitHub.com/HellmatGa">GitHub</a> 
                </div>
                <div className="flex flex-col gap-4">
                <img className="rounded-full object-contain" src="https://avatars.githubusercontent.com/u/156537929?v=4"/>
                <h3 className="text-2xl text-gray-500 border-indigo-600 uppercase">Laura</h3>
                <a className="" href="https://GitHub.com/laumariano">GitHub</a> 
                </div>
                <div className="flex flex-col gap-4">
                <img className="rounded-full object-contain" src="https://avatars.githubusercontent.com/u/139519050?v=4"/>
                <h3 className="text-2xl text-gray-500 border-indigo-600 uppercase">Sayuri</h3>
                <a className="" href="https://GitHub.com/SayuriCristina">GitHub</a> 
                </div>
            </div>
        </div>

        <div className="d-flex justify-content-center">
            <h2 className="my-4 font-bold text-4xl sm:text-5xl mb-16">O repositório do <span className="text-green-700">projeto</span>
            </h2>
            <a className="text-lg hover:text-[#407C44] transition ease-in-out" href="https://github.com/EcoAid">Link do repositório no GitHub</a> 
        </div>
    </div>
</div>
    )
}

export default Sobre