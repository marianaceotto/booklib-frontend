import {Header} from './Header/Header'
import {Home} from "./Main/Home"
import {Container} from "./Main/styledGeral"
import {ScreenCarrinho} from "./Main/ScreenCarrinho"
import {ScreenCompraConcluida} from "./Main/ScreenCompraConcluida"
import { useState } from "react";


export function ScreenPag (){
    const [tela, setTela] = useState(1)
    const [carrinho, setCarrinho] = useState([])

    
    function mudarTela(valor){
        setTela(valor)
    }

    function renderizaTela (){
        switch(tela){
          case 1:
            return <Home carrinho={carrinho} setCarrinho={setCarrinho} mudarTela={mudarTela}/>;
          case 2:
            return <ScreenCarrinho carrinho={carrinho} setCarrinho={setCarrinho} mudarTela={mudarTela}/>;
          case 3:
            return <ScreenCompraConcluida carrinho={carrinho} setCarrinho={setCarrinho} mudarTela={mudarTela}/>
          default:
            return <Home mudarTela={mudarTela}/>
        }
      }
    
    return (
        <>
        <Header
        mudarTela={renderizaTela()}/>
        <Container>
        {renderizaTela()}
        </Container> 
        </>
    )
}

