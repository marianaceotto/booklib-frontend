import {ContainerCarrinho, BoxCompra, BoxPedidoItens, BoxItemNoCarrinho, BoxTituloNoCarrinho, ResumoCompra} from "./styledScreenCarrinho"


export function ScreenCarrinho(props){

    let totalCarrinho = 0
    let qtdTotalCarrinho = 0
   
   const somaCarrinho = ()=>{
        for (let i = 0;i<props.carrinho.length;i++){
            totalCarrinho += props.carrinho[i].precototal
            qtdTotalCarrinho += props.carrinho[i].quantidade
        }
        return
    }

    somaCarrinho()

    const addItem =(produto) =>{
        const dadosDoCarrinho = [...props.carrinho]
        for(let i=0;i<dadosDoCarrinho.length;i++){
            if(dadosDoCarrinho[i].id === produto.id){
            dadosDoCarrinho[i].quantidade = dadosDoCarrinho[i].quantidade + 1
            dadosDoCarrinho[i].precototal = dadosDoCarrinho[i].precototal + dadosDoCarrinho[i].preco
            }  
        }
        props.setCarrinho(dadosDoCarrinho)
    }

    const diminuiItem =(produto) =>{
        const dadosDoCarrinho = [...props.carrinho]
        console.log("Produto", produto)
        console.log("dadosDoCarrinho", dadosDoCarrinho)
        for(let i=0;i<dadosDoCarrinho.length;i++){
            if(dadosDoCarrinho[i].id === produto.id){
            dadosDoCarrinho[i].quantidade = dadosDoCarrinho[i].quantidade - 1
            dadosDoCarrinho[i].precototal = dadosDoCarrinho[i].precototal - dadosDoCarrinho[i].preco
            }       
        }
        const buscaItem = dadosDoCarrinho.filter((item) => item.quantidade > 0)
        props.setCarrinho(buscaItem)   
    }


  
    const valor = totalCarrinho < 0 ? 50 :  0
    let totalCompra = (totalCarrinho + valor)  

    function finalizaPedido(){
        localStorage.clear()
        props.setCarrinho([]) 
        props.mudarTela(3)
    }

    return (
        <>
        <ContainerCarrinho>

            <BoxCompra>

                <div>
                    <div><h2>Meu pedido</h2>
                </div>

                    <BoxTituloNoCarrinho>
                        <span>Produto</span><span></span><span>Quantidade</span><span>Preço</span>
                    </BoxTituloNoCarrinho>

                    <div>
                        {props.carrinho.map((produto,index)=>{
                            return(
                    
                    <BoxItemNoCarrinho key={index}>
                            
                        <BoxPedidoItens><span><img src={produto.imagem} alt="produto-carrinho"/></span><span>

                            {produto.nome}</span><span></span><span><h4 onClick={()=>diminuiItem(produto)}>-</h4> {produto.quantidade} <h4 onClick={()=>addItem(produto)}>+</h4></span><span><h4>R$ {produto.precototal.toFixed(2)}</h4></span>
                            
                        </BoxPedidoItens>

                    </BoxItemNoCarrinho>)        
                        })}
                    </div>
                    
                <div>
                    <button onClick={()=>props.mudarTela(1)}>Adicionar mais produtos</button>
                </div>

                </div>

            </BoxCompra>

            <ResumoCompra>
                <div>
                    <div><h2>Resumo do pedido</h2></div>
                    <div><span>x{qtdTotalCarrinho} produto</span><span>R$ {totalCarrinho.toFixed(2)}</span></div>
                    <div><span><h3>Total</h3></span><span><h3>R$ {totalCompra.toFixed(2)}</h3></span>
                </div>

                <div>
                    <div>
                            <select>
                            <option value="">Forma de Pagamento</option>
                            <option value="Credito">Cartão de Crédito</option>
                            <option value="Pix">Pix</option>
                            </select>
                    </div>
                </div>

                <div>
                    <button onClick={()=>finalizaPedido()}>Continuar</button>
                </div>
                
                </div>
            </ResumoCompra>

        </ContainerCarrinho>   

        </>
    )
}

