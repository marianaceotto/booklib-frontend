import styled from "styled-components"
import { createGlobalStyle } from "styled-components"


export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`


export const HeaderContainer = styled.header `
display: flex;
justify-content: space-between;
`

export const ProdutosContainer = styled.header`
    display: flex;
    justify-content: space-between;
    
    img {
        width: 250px;
        height: 350px;
    }
    
    `





