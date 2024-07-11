import React from 'react'
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
import DeletarProduto from './components/produto/deletarProduto/DeletarProduto'
import FormularioProduto from './components/produto/formularioProduto/FormularioProduto'

function App() {
  return (
    <>
      <AuthProvider>
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
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App