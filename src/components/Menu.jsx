export default function Menu({ setModo, titulo, resetNo, menu, resetLi }){
    return (
        <>
            <div className={menu}> 
                <h2 className={titulo}>Modo de Jogo</h2> 
                <button className={resetNo} onClick={() => setModo('normal')}>Normal</button> 
                <button className={resetLi} onClick={() => setModo('limitado')}>Limitado</button> 
            </div>
        
        </>

    );
}
