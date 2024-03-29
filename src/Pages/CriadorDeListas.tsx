// Importação da tag
import { ChangeEvent, useState } from 'react';
// import Button from './Components/Button';
// import MyInput from './Components/MyInput';
import Title from '../Components/Title'
import PreForm from '../Components/preForm';
import Switch from '../Components/switch';
import Counter from '../Components/Counter';
import './CriadorDeListas.css';

// Função para rodar em princípio o site, para abri-lo pelo VScode usa-se o comando npm run dev
// no terminal.
function CriadorListas() {
  // Hook é usado para facilitar a renderização, ele é o usestate nesse caso,
  // que é usado para alternar estados de uma página, por exemplo. 
  //  Que nem a questão da tabuada: a página sem ela é o primeiro
  // estado, com o click no btão e ele o estado se torna o segundo.
  // Os items e setItems (esse é uma função) vão receber valores em array
  // O useState com a string vazia define que no estado inicial não há nada
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  // manipular onChange do input, recebe o que está entre parenteses, o evento.
  // O e: é o nome de variável que pode ser alterado
  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Alterada através apenas da função, define o valor da newItem 
    setNewItem(e.target.value);
  }

  // A função deve ser implementada em caso de propriedade criada para recebê-la
  const handleOnClick = () => {
    // Spread syntax, atribuir valor na ultima posição da lista (...)
    // Após a virgula, o valor
    if(newItem.length >0){
      // Atualiza valor do newItem
      setItems([...items, newItem]);
      setNewItem("");
    }else{
      alert("Não é possível adicionar um novo item sem nome!")
    }

  }

  return (
    // Mini-tags, não conheço todas as utilidades, mas permite colocar mais de uma mesma tag.
    <>
      <Title>
        <h1>Contador de itens</h1>
      </Title>

      <Switch/>
          <br /><br />
          
      <Title id='TituloLista'>
        <h2>Lista de itens</h2>
        </Title>    
        
      <PreForm 
        onSubmit={handleOnClick}
        onInputChange={handleOnInputChange}
        // Ternário. O primeiro é teste condicional, o ? é um if, e o : é um else, 
        // esse que serve para deixar o input vazio.
        inputValue ={newItem.length > 0 ? newItem : ""}
      />

          {/* Aqui a propriedade é chamada */}
          {/* <Button onClick={handleOnClick}><h2>Adicionar item</h2></Button> */}

          {/*Estrutura de repetição, já que no React não tem. O que vem depois do && pode ou não ser executado com base no primeiro aspecto ser veradeiro ou falso  */}
          {/* {items.length > 0 && ( */}
            {/* Se o valor da lista for maior que zero, mostrá-la */}
            <div id='listaItens'>
              {/* Mapeia os itens e guarda */}
              {items.map((item, index) => (
                // Key é uma propriedade do react, que especifica o número do item
                <p key={index}>{item}</p>
              ))}
            </div>
          {/* )} */}

        <Counter countValue={items.length}></Counter>
    </>
  )
}

// Exportando para a main
export default CriadorListas;