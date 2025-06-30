import React, { useState } from 'react';
import './App.css';
import imagemPersonagem from './assets/personagem1.png';

function App() {
  // Aqui criamos o nosso "estado" com o valor inicial 10.
  // 'contador' é a variável que guarda o número.
  // 'setContador' é a função que usamos para ATUALIZAR o número.
  const [contador, setContador] = useState(10);

  // Função que será chamada quando o botão de '+' for clicado
  const incrementar = () => {
    // Usamos a função 'setContador' para aumentar o valor em 1
    setContador(contadorAnterior => contadorAnterior + 1);
  };

  // Função que será chamada quando o botão de '-' for clicado
  const decrementar = () => {
    // Usamos a função 'setContador' para diminuir o valor em 1
    setContador(contadorAnterior => contadorAnterior - 1);
  };

  // Função para reiniciar o contador para o valor inicial
  const resetar = () => {
    setContador(10);
  };

  // Isso é o que será renderizado (desenhado) na tela.
  return (
    <div className="App">
      <header className="App-header">


        {/* 
          Usar a variável 'imagemPersonagem' dentro de uma tag <img>
        */}
        <img src={imagemPersonagem} className="character-portrait" alt="Retrato do personagem" />


        <h1>Ficha de Personagem</h1>
        <div className="ficha-personagem">
          <h2>Pontos de Vida</h2>
          {/* Exibimos o valor atual do contador aqui */}
          <p className="contador">{contador}</p>
          <div className="botoes-container">
            {/* Cada botão, ao ser clicado (onClick), chama uma das nossas funções */}
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
            <button onClick={resetar}>Resetar</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
