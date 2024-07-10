import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../services/Service';
import CardCategorias from '../cardCategoria/CardCategoria';
import BarraDeBusca from '../../barraDeBusca/BarraDeBusca';
// import { alert } from '../../../utils/alert';

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [filtro, setFiltro] = useState<string>("")

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarCategorias() {
        try {
            await buscar('/categoria', setCategorias, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/login');
        }
    }, [token]);

    const filteredList = categorias.filter((element) => {
        if (filtro === '') {
            return element
        } else {
            return element.tipo.toLowerCase().includes(filtro.toLowerCase());
        }
    });

    useEffect(() => {
        buscarCategorias();
    }, []);
    return (
        <>
            <BarraDeBusca/>

            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center content-center">
                        {filteredList.map((categoria) => (
                            <>
                                <CardCategorias key={categoria.id} categoria={categoria} />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCategorias;