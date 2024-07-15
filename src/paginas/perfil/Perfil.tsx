/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import {  UserCircleGear } from '@phosphor-icons/react';
import { toastAlerta } from '../../util/toastAlerta';
import Produto from '../../models/Produto';
import { buscarSemHeader } from '../../services/Service';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardProduto from '../../components/produto/cardProduto/CardProduto';
import { Navigation } from 'swiper/modules';

function Perfil() {

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);

  async function buscarProdutos() {
      try {
          await buscarSemHeader('/produto', setProdutos, setCarregando);
      } catch (error: any) {
          if (error.toString().includes('403')) {
              toastAlerta('O token expirou, favor logar novamente', "info")
              handleLogout()
          }
      }
  }

  useEffect(() => {
      buscarProdutos();
  }, [produtos.length]);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado','info');
      navigate('/login');
    }
  }, [token]);

  return (
    <>

      <div className="w-full h-fit bg-isabelline px-10 pt-10">
        <div className="relative max-w-3xl mx-auto mt-24">
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

      {token !== '' &&
                    <div className='px-32 pt-12 mt-12 part-white'> <div className='flex flex-row items-center gap-8 mb-16 text-[#407C44] overflow-visible'>
                        <h1 className='text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Minhas doações</h1>
                    </div>

                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        pagination={{ clickable: true }}
                        slidesPerView={4}
                        spaceBetween={50}
                        className='overflow-visible'
                    >
                        {(carregando === true) && (<>
                            {Array.from({ length: 12 }).map((_, index) => (
                                <SwiperSlide key={index}>
                                    <CardProduto key={index} produto={{} as Produto} carregando={true} />
                                </SwiperSlide>
                            ))}
                        </>)}
                        {(produtos.filter((produto) => produto.usuario.usuario === usuario.usuario).length === 0 && carregando === false) && (
                            <h1 className='text-3xl p-16 rounded-3xl bg-white text-onyx'>Você não cadastrou nenhum produto ainda.</h1>
                        )}
                        {produtos.filter((produto) => produto.usuario.usuario === usuario.usuario).slice(0, 12).map((produto) => (
                            <SwiperSlide key={produto.id}>
                                <CardProduto key={produto.id} produto={produto} carregando={false} />
                            </SwiperSlide>
                        ))}
                    </Swiper> </div>}

    </>
  );
}

export default Perfil;
