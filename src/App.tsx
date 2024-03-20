// Importação da tag
// import { ChangeEvent, useState } from 'react';
// import Button from './Components/Button';
// import MyInput from './Components/MyInput';
import CriadorListas from './Components/CriadorDeListas';
import './App.css';

// Função para rodar em princípio o site, para abri-lo pelo VScode usa-se o comando npm run dev
// no terminal.
function App() {
  return (
    // Mini-tags, não conheço todas as utilidades, mas permite colocar mais de uma mesma tag.
    <>
      <CriadorListas/>
    </>
  )
}

// Exportando para a main
export default App;