import React from 'react'
import Home from './paginas/home/Home'
import Sobre from './paginas/sobre/Sobre'
import Navbar from './components/navbar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './paginas/login/Login'
import Footer from './components/footer/Footer'
import Cadastro from './paginas/cadastro/Cadastro'

function App() {
  return (
    <>
    <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App