
import Home from './paginas/home/Home'
import Sobre from './paginas/sobre/Sobre'
import Navbar from './components/navbar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './paginas/login/Login'
import Footer from './components/footer/Footer'
import Cadastro from './paginas/cadastro/Cadastro'
import { AuthProvider } from './context/AuthContext'
import ListaCategorias from './components/categoria/listaCategorias/ListaCategorias'
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria'
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'
import Perfil from './paginas/perfil/Perfil'
import AtualizarUsuario from './components/atualizarUsuario/AtualizarUsuario'
import DeletarProduto from './components/produto/deletarProduto/DeletarProduto'
import FormularioProduto from './components/produto/formularioProduto/FormularioProduto'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import DetalhesProduto from './components/produto/detalhesProduto/DetalhesProduto'
import { CarrinhoProvider } from './context/CarrinhoContext'
import Doacoes from './paginas/doacoes/Doacoes'
import { ChatContextProvider } from './context/ChatContext';
import ContainerChat from './components/chat/containerChat/ContainerChat'
// import { ChatBotContextProvider } from './context/ChatBotContext'


function App() {

  return (
    <>
      <AuthProvider>
        <ChatContextProvider>
        <ToastContainer />
        <CarrinhoProvider>
          <BrowserRouter>
            <ContainerChat />
            <Navbar />
            <div className='min-h-[80vh]'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/doacoes" element={<Doacoes />} />
                <Route path="/cadastroDoacao" element={<FormularioProduto />} />
                <Route path="/editarDoacao/:id" element={<FormularioProduto />} />
                <Route path="/deletarDoacao/:id" element={<DeletarProduto />} />
                <Route path="/categorias" element={<ListaCategorias />} />
                <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
                <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/atualizarusuario" element={<AtualizarUsuario />} />
                <Route path="/detalhesProduto/:id" element={<DetalhesProduto />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </CarrinhoProvider>
        </ChatContextProvider>
      </AuthProvider>
    </>
  )
}

export default App