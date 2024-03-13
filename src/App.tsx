// Importação da tag
import MyInput from './Components/MyInput';
// import './App.css'

// Função para rodar em princípio o site, para abri-lo pelo VScode usa-se o comando npm run dev
// no terminal.
function App() {
  return (
    // Mini-tags, não conheço todas as utilidades, mas permite colocar mais de uma mesma tag.
    <>
      <MyInput type='text' 
      placeholder='Olá mundo!' 
      />

      <MyInput type='submit'/>
    </>
  )
}

// Exportando para a main
export default App
