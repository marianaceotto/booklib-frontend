import { useState } from "react"
import {Filter} from "./Filter"
import {Cart} from "./Cart"

export function Main (props) {


    const produtos = [
        {
            "id": 1,
            "name": "É Assim que Acaba - Vol. 1",
            "price": 34.50,
            "image": "https://m.media-amazon.com/images/I/513NSXK2nLL._SY346_.jpg"
        }, 
    
        {
            "id": 2,
            "name": "Box - Os Bridgertons",
            "price": 278.45,
            "image": "https://m.media-amazon.com/images/I/51sS72KcvyS._SY346_.jpg"
        }, 
    
        {
            "id": 3,
            "name": "A Garota do Lago",
            "price": 15.00,
            "image": "https://m.media-amazon.com/images/I/516VOgxwg2L._SY344_BO1,204,203,200_QL70_ML2_.jpg"
        }, 
    
        {
            "id": 4,
            "name": "A Jóia: Cidade Solitária - Vol. 1",
            "price": 23.00,
            "image": "https://m.media-amazon.com/images/I/51YHz7P-FRL.jpg"
        }, 
    
     
        {
            "id": 5,
            "name": "De Sangue e Cinzas - Vol. 1",
            "price": 33.20,
            "image":"https://m.media-amazon.com/images/I/51HS0iOFxvL.jpg"
        }, 
    
      
        {
            "id": 6,
            "name": "Os Sete Maridos de Evelyn Hugo",
            "price": 31.40,
            "image": "https://m.media-amazon.com/images/I/41bWJGOl9oL.jpg"
        }, 
    
        {
            "id": 7,
            "name": "Box - Harry Potter",
            "price": 189.90,
            "image": "https://m.media-amazon.com/images/I/51MCEo6xgyL._SY346_.jpg"
        },  
    
        {
            "id": 8,
            "name": "Raio de Sol",
            "price": 42.90,
            "image": "https://m.media-amazon.com/images/I/518Bgs4gE+L._SY344_BO1,204,203,200_.jpg"
        }
    ]


  // --------------------- FILTRO

    const [pesquisaNome, setPesquisaNome] = useState("")
    const [valorMin, setValorMin] = useState("")
    const [valorMax, setValorMax] = useState("")
    const [ordem, setOrdem] = useState("")


    const produtosFiltrados = produtos
  .filter((livro) => livro.name.includes(pesquisaNome))
  .filter((livro) => livro.price >= valorMin)
  .filter((livro) => {
    return valorMax ? livro.price <= valorMax:livro})

  .sort((a,b) =>{
    switch(ordem){
      case "Maior":
        if (a.price < b.price){
          return 1
        }else{
          return -1
        }
      case "Menor":
        if(a.price<b.price){
          return -1
        }else{
          return 1
        }
    }})

    // --------------------- CARRINHO

    return (
        <>
        <Filter>
        pesquisa={pesquisaNome}
        setPesquisaNome={setPesquisaNome}
        minimo={valorMin}
        setMin={setValorMin}
        maximo={valorMax}
        setMax={setValorMax}
        ordem= {ordem}
        setOrdem={setOrdem}
        </Filter>
        <div>
        {produtosFiltrados
        .map((livro, i) => {
            return (
                <card key ={i}>
                    <div> 
                        <img src={livro.image} alt="livro-Loja"/>
                    </div>
            <div>
                <span>{livro.name}</span><br/>
                <h3>R$ {livro.price.toFixed(2)}</h3><br/>
                {/* <button onClick={()=>compralivro(livro)} onChange={onChangeCarrinho}>Comprar</button> */}
            </div>
           </card>
            )
         })}

        </div>

        <Cart/>        
        
        </>
    )

}