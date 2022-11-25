import { useState } from "react";
import {PagHome} from "./pag/PagHome"
import {PagCarrinho} from "./pag/PagCarrinho"
import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`


function App() {

    const [telas, setTelas] = useState("")

    const goToPagHome = setTelas("PagHome")
    const goToPagCarrinho = setTelas("PagCarrinho")

    const mudarPag = () => {
      switch(setTelas) {
        case "PagHome":
          return <PagHome
            goToPagCarrinho = {goToPagCarrinho}
          />
        case "PagCarrinho":
          return <PagCarrinho
            goToPagHome = {goToPagHome}
          />
        default:
          return <>Página não encontrada</>
      }
    }   

  return (
    <>
    <PagHome/>
    {mudarPag()}
    </>
  );
}

export default App


