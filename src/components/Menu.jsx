export default function Menu({ setModo, titulo, reset2, menu }){
    return (
        <>
            <div className={menu}> 
                <h2 className={titulo}>Modo de Jogo</h2> 
                <button className={reset2} onClick={() => setModo('normal')}>Normal</button> 
                <button className={reset2} onClick={() => setModo('limitado')}>Limitado</button> 
            </div>
        
        </>

    );
}
