export default function Modo({troca, mensagem, reset1, modo, estiloM}){

    return(
        <>
            <div className={estiloM}>
                <h2>Modo</h2>
                <p>{modo}</p>
                <button className={reset1} onClick={troca} disabled={!mensagem}>
                    Trocar
                </button>
            </div>
        </>
    )
}