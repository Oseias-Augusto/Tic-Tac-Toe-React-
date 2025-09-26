

function botao({value, onClick, estilo}){
    return(
        <>
            <button onClick={onClick} className={estilo} disabled={value}>{value}</button>
        </>
    )
}

export default botao