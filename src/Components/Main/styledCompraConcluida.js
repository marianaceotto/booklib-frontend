import styled from "styled-components"

export const ContainerCompraConcluida = styled.div`
    width: 60%;
    min-height: 400px;
    border-radius: 8px;
    box-shadow: 1px 1px 4px rgb(191,191,191);
    display: flex;
    flex-direction: column;
    color: black;
    justify-content: space-around;
  
    h1,h2,h3{
    text-align: center;
    }
    div:last-child{
        display: flex;
        justify-content: center;
    }
    button{
        background-color:  #e79828;
        border-radius: 20px;
        font-size: 16px;
        color: white;
        width: 80%;
        height: 40px;
        border: none;
    }
    button:hover{
        cursor: pointer;
        background-color: #fbbc61;
    }
`