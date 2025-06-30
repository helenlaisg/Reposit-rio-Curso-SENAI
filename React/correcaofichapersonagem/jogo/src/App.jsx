import { useState } from "react";
import "./App.css";

function App() {
  //Variáveis para o Personagem
  const [vida, setVida] = useState(10);
  const [ataque, setAtaque] = useState(1);
  const [defesa, setDefesa] = useState(3);
  const [inteligencia, setInteligencia] = useState(1);

  //Funções para alterar atributos do personagem
  const aumentarPontos = (atributo, valor) => () => atributo(valor + 1);
  const DiminuirPontos = (atributo, valor) => () => atributo(valor - 1);
  const resetar = (atributo, valor) => () => atributo(valor);

  return (
    <>
      <h1>Ficha do personagem</h1>
      <div id="infoPersonagem" className="card">
        <h2>Nome: Nome Personagem</h2>
        <p>Classe: Guerreira</p>
        <p>Nível: 1</p>
      </div>

      <div id="statusPersonagem" className="Card">
        <div className="cadaStatus">
          {/* {VIDA} */}
          <div>
            <button
              className="diminuirBtn"
              onClick={DiminuirPontos(setVida, vida)}
            >
              -1
            </button>
            <h4>Vida: {vida}</h4>
            <button
              className="aumentarBtn"
              onClick={aumentarPontos(setVida, vida)}
            >
              +1
            </button>
          </div>
          <button onClick={resetar(setVida, vida)}>Resetar</button>
        </div>

        <div className="cadaStatus">
          {/* {ATAQUE} */}
          <div>
            <button
              className="diminuirBtn"
              onClick={DiminuirPontos(setAtaque, ataque)}
            >
              -1
            </button>
            <h4>Ataque: {ataque}</h4>
            <button
              className="aumentarBtn"
              onClick={aumentarPontos(setAtaque, ataque)}
            >
              +1
            </button>
          </div>
          <button onClick={resetar(setAtaque, vida)}>Resetar</button>
        </div>

        <div className="cadaStatus">
          {/* {DEFESA} */}
          <div>
            <button
              className="diminuirBtn"
              onClick={DiminuirPontos(setDefesa, defesa)}
            >
              -1
            </button>
            <h4>Defesa: {defesa}</h4>
            <button
              className="aumentarBtn"
              onClick={aumentarPontos(setDefesa, defesa)}
            >
              +1
            </button>
          </div>
          <button onClick={resetar(setDefesa, defesa)}>Resetar</button>
        </div>

        <div className="cadaStatus">
          {/* {INTELIGÊNCIA} */}
          <div>
            <button
              className="diminuirBtn"
              onClick={DiminuirPontos(setInteligencia, inteligencia)}
            >
              -1
            </button>
            <h4>Inteligência: {inteligencia}</h4>
            <button
              className="aumentarBtn"
              onClick={aumentarPontos(setInteligencia, inteligencia)}
            >
              +1
            </button>
          </div>
          <button onClick={resetar(setInteligencia, inteligencia)}>
            Resetar
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
