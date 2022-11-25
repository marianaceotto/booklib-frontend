import { useState } from "react"
import search from "../assets/search.png"
import produtos from "../assets/produtos.json"


export function Filtro () {


    // const livros = 

    // const [pesquisa, setPesquisa] = useState("")
    // const [valorMin, setValorMin] = useState("")
    // const [valorMax, setValorMax] = useState("")
    // const [ordem, setOrdem] = useState("")

    // const filtroDeLivros = livros
    // .filter((livro) => livro.nome.includes(pesquisa))
    // .filter((livro) => livro.preco (valorMin))
    // .filter((livro) => livro.preco (valorMax))
    // .filter((livro) => livro.ordem (ordem))
    
    

    return (
        <span>
            
        <input placeholder="Buscar" />
        <img src = {search} alt="Logo-Search"></img>

        </span>
    )
}