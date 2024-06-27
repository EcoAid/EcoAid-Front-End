import React from 'react';

function Sobre() {
    return (
    <div className="d-flex justify-content-center">

    <div className="d-flex justify-content-center">
        <div className="saibaMais">
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl">sobre o <span className="text-green-700">EcoAid</span>
            </h2>
            <p className="text-xl text-gray-700">
                Somos um projeto que tem como pilar promover a colaboração social na troca de produtos que promovem a sustentabilidade e ajudam na mitigação das mudanças climáticas, desde roupas, utensílios, objetos para dia a dia, produtos orgânicos e reutilizáveis, como grande doadores que podem focar em painéis solares, sistemas de captação de água da chuva, bicicletas elétricas, produtos orgânicos e reutilizáveis, entre outros. 
                Indivíduos que possuem utensílios para doação,  disponibilizarão os itens de forma gratuita para quem quiser recebê-los
            </p>
        </div>

        <div className="">
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">nossos <span className="text-green-700">membros</span>
            </h2>

            <div className="nomeMembros">
                <h3 className="text-xl text-gray-500 border-indigo-600 uppercase">Daniel</h3>
                <a className="" href="https://GitHub.com/danielthx23">GitHub</a> 
                <h3 className="text-xl text-gray-500 border-indigo-600 uppercase">Desyrre</h3>
                <a className="" href="https://github.com/ddesyrre">GitHub</a> 
                <h3 className="text-xl text-gray-500 border-indigo-600 uppercase">Gabriela</h3>
                <a className="" href="https://GitHub.com/gabyrsas">GitHub</a> 
                <h3 className="text-xl text-gray-500 border-indigo-600 uppercase">Giulia</h3>
                <a className="" href="https://GitHub.com/GiuDestro">GitHub</a> 
                <h3 className="text-xl text-gray-500 border-indigo-600 uppercase">Hellmat</h3>
                <a className="" href="https://GitHub.com/HellmatGa">GitHub</a> 
                <h3 className="text-xl text-gray-500 border-indigo-600 uppercase">Laura</h3>
                <a className="" href="https://GitHub.com/laumariano">GitHub</a> 
                <h3 className="text-xl text-gray-500 border-indigo-600 uppercase">Sayuri</h3>
                <a className="" href="https://GitHub.com/SayuriCristina">GitHub</a> 
            </div>
        </div>

        <div className="d-flex justify-content-center">
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">o repositório do <span className="text-green-700">projeto</span>
            </h2>
            <a className="text-lg" href="https://GitHub.com/EcoAid">link do repositório no GitHub</a> 
        </div>
    </div>
</div>
    )
}

export default Sobre