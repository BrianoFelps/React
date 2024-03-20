// Importação da tag
// import { ChangeEvent, useState } from 'react';
// import Button from './Components/Button';
// import MyInput from './Components/MyInput';
import CriadorListas from './Pages/CriadorDeListas';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPg from './Pages/LoginPg';

// Função para rodar em princípio o site, para abri-lo pelo VScode usa-se o comando npm run dev
// no terminal.
function App() {
  return (
    // Mini-tags, não conheço todas as utilidades, mas permite colocar mais de uma mesma tag.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPg/>}/>
        <Route path='/CriadorDeListas' element={<CriadorListas/>}/>
      </Routes>
    </BrowserRouter>
  )
}

// Exportando para a main
export default App;