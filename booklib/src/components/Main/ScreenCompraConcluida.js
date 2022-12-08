import {ContainerCompraConcluida} from "./styledCompraConcluida"

export function ScreenCompraConcluida(props){

    return (
        
        <ContainerCompraConcluida>
            <div>
                <h1>Parabéns!</h1>
                <h2>Seu pedido foi concluido e chegará em 10 dias úteis.</h2>
            </div>
            
            <div>
                <button onClick={()=>props.mudarTela(1)}>Novo Pedido</button>
            </div>
        </ContainerCompraConcluida>
        
    )
}

