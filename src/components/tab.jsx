import { useState } from "react";
import Bot from './botao';
import Styles from '../stylesComp/styles.module.css';
import { vitoria, empate } from '../assets/func.js';
import Placar from "./placar.jsx";
import Trocar from "./Trocar.jsx";
import Menu from "./Menu.jsx";

export default function Tabuleiro() {
  const [modo, setModo] = useState(null);
  const [jogadas, setJogadas] = useState(Array(9).fill(null));
  const [jogadorX, setJogadorX] = useState(true);
  const [mensagem, setMensagem] = useState(null);
  const [placarX, setPlacarX] = useState(0)
  const [placarO, setPlacarO] = useState(0)

  const [historicoX, setHistoricoX] = useState([]);
  const [historicoO, setHistoricoO] = useState([]);

  function coloca(i) {
    if (jogadas[i] || mensagem) return;

    const novaJogada = [...jogadas];
    const simbolo = jogadorX ? 'x' : 'o';
    novaJogada[i] = simbolo;

    if (modo === 'limitado') {
      if (jogadorX) {
        const novoHist = [...historicoX, i];
        if (novoHist.length > 3) {
          const removida = novoHist.shift();
          novaJogada[removida] = null;
        }
        setHistoricoX(novoHist);
      } else {
        const novoHist = [...historicoO, i];
        if (novoHist.length > 3) {
          const removida = novoHist.shift();
          novaJogada[removida] = null;
        }
        setHistoricoO(novoHist);
      }
    }

    if (vitoria(novaJogada, simbolo)) {
      setJogadas(novaJogada);
      setMensagem(`Jogador ${jogadorX ? 'X' : 'O'} venceu!`);
      if (simbolo == "x"){
        setPlacarX(placarX + 1)
      }else{
        setPlacarO(placarO + 1)
      }
      return;
    }

    if (empate(novaJogada)) {
      setJogadas(novaJogada);
      setMensagem("Empate!");
      return;
    }

    setJogadas(novaJogada);
    setJogadorX(!jogadorX);
  }

  function zerar(){
    setPlacarX(0)
    setPlacarO(0)
  }

  function reiniciar() {
    setJogadas(Array(9).fill(null));
    setJogadorX(true);
    setMensagem(null);
    setHistoricoX([]);
    setHistoricoO([]);
  }

  if (!modo) {
    return <Menu setModo={setModo} menu={Styles.menu} titulo={Styles.titulo} resetNo={Styles.resetNo} resetLi={Styles.resetLi}/>;
  }

  return (
    <div className={Styles.cont}>

      <div className={Styles.layout}>

        <Placar 
          xis={placarX} 
          bol={placarO} 
          estilo={Styles.placar} 
          zerar={()=> zerar()} 
          reset={Styles.reset}
          tb = {jogadorX}
        ></Placar>

        <div className={Styles.tabuleiro}>
          <h1>{mensagem ? mensagem : `Jogador ${jogadorX ? "X" : "O"}`}</h1>
          <div className={Styles.grid}>
            {jogadas.map((jogada, idx) => (
                <Bot
                key={idx}
                value={jogada}
                onClick={() => coloca(idx)}
                estilo={Styles.botao}
              />
            ))}
          </div>


          <div className={Styles.butts}>
            <button className={Styles.reset} onClick={reiniciar}>
              Reiniciar
            </button >

            <button className={Styles.but} onClick={() => {setModo(null); reiniciar()}}>
              Voltar ao menu
            </button>
          </div>
        </div>
        
        <Trocar
          estiloM={Styles.modo} 
          modo={modo} 
          reset1={Styles.reset1}
          mensagem={mensagem}
          troca = {()=> setModo(modo == "limitado"? "normal": "limitado")}
        />

      </div>

      
    </div>
  );
}







