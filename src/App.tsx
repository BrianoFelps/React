// Importação da tag
import { useState } from 'react';
import Button from './Components/Button';
import MyInput from './Components/MyInput';
import './App.css'

// Função para rodar em princípio o site, para abri-lo pelo VScode usa-se o comando npm run dev
// no terminal.
function App() {

  // Hook é usado para facilitar a renderização, o usestate é usado para alternar estados
  // de uma página, por exemplo. Que nem a questão da tabuada: a página sem ela é o primeiro
  // estado, com o click no btão e ela o estado se torna o segundo.
  // Os items e setItems (esse é uma função) vão receber valores em array
  // O useState com a string vazia define que no estado inicial não há nada
  const [items, setItems] = useState(['']);

  // A função deve ser implementada em caso de propriedade criada para recebê-la
  const handleOnClick = () => {
    // Spread syntax, atribuir valor na ultima posição da lista (...)
    // Após a virgula, o valor
    setItems([...items, "Item " + items.length]);
  }
 
  return (
    // Mini-tags, não conheço todas as utilidades, mas permite colocar mais de uma mesma tag.
    <>
      <MyInput type='text' 
      placeholder='Olá mundo!' 
      />

      <MyInput type='password' 
      placeholder='Senha' 
      />
      
    {/* Aqui a propriedade é chamada */}
      <Button onClick={handleOnClick}><h2>Adicionar item</h2></Button>

      {/*Estrutura de repetição, já que no React não tem. O que vem depois do && pode ou não ser executado com base no primeiro aspecto ser veradeiro ou falso  */}
      {items.length > 0 && (
        // Se o valor da lista for maior que zero, mostrá-la
        <div id='listaItens'>
          {/* Mapeia os itens e guarda */}
          {items.map((item, index) => (
            // Key é uma propriedade do react, que especifica o número do item
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </>
  )
}

// Exportando para a main
export default App
