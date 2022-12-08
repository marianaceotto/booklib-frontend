import {BoxOrdenacao, BoxProdutos, Produtos} from "./styledGeral"
import {Carrinho} from "./Carrinho"
import {Filtro} from "./Filtro"
import {useState, useEffect} from 'react'

export function Home (props){

  const produtos = [
    {
        id: 1,
        nome: "É Assim que Acaba - Vol. 1",
        preco: 34.50,
        imagem: "https://m.media-amazon.com/images/I/513NSXK2nLL._SY346_.jpg"
    }, 

    {
        id: 2,
        nome: "Box - Os Bridgertons",
        preco: 278.45,
        imagem: "https://m.media-amazon.com/images/I/51sS72KcvyS._SY346_.jpg"
    }, 

    {
        id: 3,
        nome: "A Garota do Lago",
        preco: 15.00,
        imagem: "https://m.media-amazon.com/images/I/516VOgxwg2L._SY344_BO1,204,203,200_QL70_ML2_.jpg"
    }, 

    {
        id: 4,
        nome: "A Jóia: Cidade Solitária - Vol. 1",
        preco: 23.00,
        imagem: "https://m.media-amazon.com/images/I/51YHz7P-FRL.jpg"
    }, 

 
    {
        id: 5,
        nome: "De Sangue e Cinzas - Vol. 1",
        preco: 33.20,
        imagem:"https://m.media-amazon.com/images/I/51HS0iOFxvL.jpg"
    }, 

  
    {
        id: 6,
        nome: "Os Sete Maridos de Evelyn Hugo",
        preco: 31.40,
        imagem: "https://m.media-amazon.com/images/I/41bWJGOl9oL.jpg"
    }, 

    {
        id: 7,
        nome: "Box - Harry Potter",
        preco: 189.90,
        imagem: "https://m.media-amazon.com/images/I/51MCEo6xgyL._SY346_.jpg"
    },  

    {
        id: 8,
        nome: "Raio de Sol",
        preco: 42.90,
        imagem: "https://m.media-amazon.com/images/I/518Bgs4gE+L._SY344_BO1,204,203,200_.jpg"
    },

    {
        id: 9,
        nome: "A Paciente Silenciosa",
        preco: 35.90,
        imagem: "https://m.media-amazon.com/images/I/413th2NQc8L._SX338_BO1,204,203,200_.jpg"
  }
]

// -------------------- FILTRO
 
const [ordem, setOrdem] = useState("") 
const [pesquisa, setPesquisa] = useState("")
const [valorMin, setValorMin] = useState("")
const [valorMax, setValorMax] = useState("")


const livrosFiltrados = produtos
.filter((produto) => produto.nome.toLocaleLowerCase().includes(pesquisa))
.filter((produto) => produto.preco >= valorMin)
.filter((produto) => {
  return valorMax ? produto.preco <= valorMax:produto
  })

.sort((a,b) =>{
  switch(ordem){
    case "Maior":
      if (a.preco < b.preco){
        return 1
      }else{
        return -1
      }
    case "Menor":
      if(a.preco<b.preco){
        return -1
      }else{
        return 1
      }
  }
})

  const onChangeCarrinho = (event)=>{
    props.setCarrinho(event.target.value)
  }

  const onChangeOrdem =(event)=>{
    setOrdem(event.target.value)
  }

  // -------------------- CARRINHO
  const compraProduto = (produto) =>{

    const novoCarrinho = [...props.carrinho]
    const addLivro = produto
    const livrosAtuais = novoCarrinho.find((produto)=>{
        return produto.id === addLivro.id 
    })
        if (livrosAtuais){
          livrosAtuais.quantidade++
          livrosAtuais.precototal = livrosAtuais.quantidade * livrosAtuais.preco
        }else{
          novoCarrinho.push({...addLivro, quantidade: 1, precototal: addLivro.preco})
        } 
      props.setCarrinho(novoCarrinho)
  }

  useEffect(() => {
        if(props.carrinho.length>0){
        const listaStringCarrinho = JSON.stringify(props.carrinho)
        localStorage.setItem("carrinho",listaStringCarrinho)
      }
      },[props.carrinho])

 
  useEffect(() => {
      const novoCarrinho = JSON.parse(localStorage.getItem("carrinho"))
        if(novoCarrinho !== null){
          props.setCarrinho(novoCarrinho)
        }   
  },[])
 

  return(
      <>
      <Filtro
      pesquisa={pesquisa}
      setPesquisa={setPesquisa}
      minimo={valorMin}
      setValorMin={setValorMin}
      maximo={valorMax}
      setValorMax={setValorMax}
      />

      <BoxOrdenacao>

        <div>
          <p>
            {livrosFiltrados.length} produtos 
          </p>
        </div>

        <div className="BoxOrdenacao-topo">

          <div>
            <select value={ordem} onChange={onChangeOrdem} className="BoxOrdenacao-topo-select">
              <option value="">Ordenar por</option>
              <option value="Maior">Crescente</option>
              <option value="Menor">Decrescente</option>
            </select>
          </div>

        </div>

      <BoxProdutos>

        {livrosFiltrados
        .map((produto, index)=>{
          return(

          <Produtos key={index}>
            <div>
              <img src={produto.imagem} alt="Produto-Loja"/>
            </div>

            <div>
              <span>{produto.nome}</span><br/>
              <h3>R$ {produto.preco.toFixed(2)}</h3><br/>
              <button onClick={()=>compraProduto(produto)} onChange={onChangeCarrinho}>Comprar</button>             
            </div>        
          </Produtos>
          )
        })}

      </BoxProdutos>

      </BoxOrdenacao>

      <Carrinho
      cart={props.carrinho}
      setCart={props.setCarrinho}
      carrinhoCompleto={props.mudarTela}
      />

      </>
  )
}

