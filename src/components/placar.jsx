export default function Placar({xis, bol, estilo, zerar, reset}){

    return(
        <>
            <div className={estilo}>
                <h1>
                    Placar
                </h1>
                <p> Jogador X: {xis} </p>
                <p> Jogador O: {bol}</p>
                <button onClick={zerar} className={reset}>
                    Zerar Placar
                </button>
            </div>

        </>
        
    )

}