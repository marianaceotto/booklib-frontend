import livros from "../assets/produtos.json"
// import {Filtro} from ".Filtro"

// import {Carrinho} from "./Carrinho"

export function Main () {

    const filtroDosProdutos = () => {

        return []
    }

    return (

        <>
         {
            filtroDosProdutos().map((livro) => (
                <div>                   
                    <img src = {livro.imagem} alt = "Imagem" />
                    

                    <ul>
                        <li>{livro.nome}</li> 
                        <li>R$ {livro.preco}</li>
                    </ul>
                </div>
            ))
        }
        </>

        // <>
        // <Filtro/>   
        // <Produtos/>
        // <Carrinho/>
        // </>
    )
}