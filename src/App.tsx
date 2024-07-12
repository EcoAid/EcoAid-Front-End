
import Home from './paginas/home/Home'
import Sobre from './paginas/sobre/Sobre'
import Navbar from './components/navbar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './paginas/login/Login'
import Footer from './components/footer/Footer'
import Cadastro from './paginas/cadastro/Cadastro'
import { AuthProvider } from './context/AuthContext'
import ListaProdutos from './components/produto/listaProdutos/ListaProdutos'
import ListaCategorias from './components/categoria/listaCategorias/ListaCategorias'
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria'
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'
import Perfil from './paginas/perfil/Perfil'
import AtualizarUsuario from './components/atualizarUsuario/AtualizarUsuario'
import DeletarProduto from './components/produto/deletarProduto/DeletarProduto'
import FormularioProduto from './components/produto/formularioProduto/FormularioProduto'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/doacoes" element={<ListaProdutos />} />
              <Route path="/cadastroDoacao" element={<FormularioProduto />} />
              <Route path="/editarDoacao/:id" element={<FormularioProduto />} />
              <Route path="/deletarDoacao/:id" element={<DeletarProduto />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/perfil" element={<Perfil/>} />
              <Route path="/atualizarusuario" element={<AtualizarUsuario/>} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App