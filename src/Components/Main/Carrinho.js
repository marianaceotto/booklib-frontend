import {BoxCarrinhoMain} from "./styledGeral"



export function Carrinho (props){

    let totalCarrinho = 0

    const somarCarrinho = ()=>{
        for (let i = 0;i<props.cart.length;i++){
            totalCarrinho += props.cart[i].precototal
        }
        return
    }

    const removerItem = (produto)=>{
        const buscarItem = props.cart.filter((item) => item !== produto)
        
        props.setCart(buscarItem)
    }

    somarCarrinho()

    return(
        <BoxCarrinhoMain>
        <h2>Carrinho:</h2>
        
            {props.cart.map((produto,index)=>{
            return(
                <div key={index} onDoubleClick={()=>removerItem(produto)}>
                <p><span>X{produto.quantidade} </span><span>{produto.nome} </span><span> <b>{produto.precototal.toFixed(2)}</b></span></p>
                </div>
            )    
        })}
        
        <p><b>Valor total: R$ {totalCarrinho.toFixed(2)}</b></p>
        <button onClick={()=>props.carrinhoCompleto(2)}>Acessar Carrinho</button>
        </BoxCarrinhoMain>
    )
}

