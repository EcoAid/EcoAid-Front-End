/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import Usuario from '../../models/Usuario';
import { buscar } from '../../services/Service';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { PlusCircle, UserCircleGear, UserSwitch } from '@phosphor-icons/react';
import { toastAlerta } from '../../util/toastAlerta';

function Perfil() {

  const [usuarios, setUsuario] = useState<Usuario[]>([]);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarUsuario() {
    try {
      await buscar(`/usuario/${usuario.id}`, setUsuario, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente','info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado','info');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarUsuario();
  }, []);

  return (
    <>

      <div className="w-full h-screen bg-isabelline px-10 pt-10">
        <div className="relative mb-32 max-w-3xl mx-auto mt-24">
          <div className="w-full mx-auto">
            <img
              src="https://htmlcolorcodes.com/assets/images/colors/fern-green-color-solid-background-1920x1080.png"
              className="w-full h-40 object-cover rounded-t-xl"
            />
          </div>
          <div className="overflow-hidden shadow-md bg-white bg-opacity-75 rounded-xl">
            <div className="absolute -mt-20 w-full flex justify-center">
              <div className="h-32 w-32">
                <img key={usuario.id}
                  src={usuario.foto !== '' ? usuario.foto : 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'}
                  className="rounded-full object-cover h-full w-full shadow-md"
                  alt="User Avatar"
                />
              </div>
            </div>
            <div className="px-6 mt-16 mb-6">
              <h1 className="font-bold text-5xl text-center text-ferngreen" key={usuario.id}>{usuario.nome}</h1>
              <p className="text-gray-700 text-md text-center" key={usuario.id}>{usuario.usuario}</p>
            </div>

            <div className='flex justify-center mb-6'>
              <div className='flex items-center gap-2 bg-ferngreen p-4 rounded-md mb-4'>
                <UserCircleGear size={32} color="#f7f7f7" />
                <Link to='/atualizarusuario' className='text-white'>Atualizar dados</Link>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}

export default Perfil;
