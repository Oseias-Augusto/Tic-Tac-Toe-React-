export default function Placar({xis, bol, estilo, zerar, reset, mensagem}){

    return(
        <>
            <div className={estilo}>
                <h1>
                    Placar
                </h1>
                <p> Jogador X: {xis} </p>
                <p> Jogador O: {bol}</p>
                <button onClick={zerar} className={reset} disabled={!mensagem}>
                    Zerar Placar
                </button>
            </div>

        </>
        
    )

}