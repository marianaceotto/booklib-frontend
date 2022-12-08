import styled from "styled-components"

export const Produtos = styled.div`
    border: 1px solid #EAEAEA;
    border-radius: 8px;
    height: 400px;
    width: 250px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    div:first-child{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60%;
        border-radius: 8px 8px 0 0;
        img{
            height: 200px;
            width: auto;
            max-width: 100%;
        }
    }
    div:last-child{
        height: 40%;
        border-radius: 0 0 8px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        span{
            font-size: 0.95rem;
            width: 90%;
            text-align: center;
            font-weight: bold; 
        }
        h3{
            font-size: 1rem;
            color: #e79828;
            font-weight: bold; 
        }
        button{
            background-color: #e79828;
            border-radius: 16px;
            color: white;
            width: 150px;
            height: 35px;
            border: none;
            font-weight: bold;
            transition: transform .3s;
        }
        button:hover{
            cursor: pointer;
            background-color: #fbbc61;
            font-weight: light;
            transform: scale(1.1)
        }
    }
  
`
export const BoxProdutos = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: white;
    flex-wrap: wrap;
    `
export const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: white;
    margin-bottom: 30px;
    justify-content: center;
    margin-top: 20px;
`
export const BoxFiltroMain = styled.div`
    width: 15%;
    padding-left: 10px;
    h2{
        color: #e79828;
    }
    input{
        border: 1px gray solid;
        border-radius: 4px;
        height: 20px;
        padding-left: 8px;
        background-color: white;
    }
    input:active{
        border: 1px #e79828 solid; 
    }
`

export const BoxCarrinhoMain = styled.div`
    width: 20%;
    padding-right: 10px;
    
    h2{
        color: #e79828;
        margin-bottom: 20px;
    }
    button{
        background-color: #e79828;
        border-radius: 16px;
        font-size: 16px;
        margin-top: 25px;
        color: white;
        width: 100%;
        height: 40px;
        border: none;
        transition: transform .3s;
    }
    button:hover{
        cursor: pointer;
        background-color: #fbbc61;
        transform: scale(1.1);
    }
    div:hover{
        cursor: pointer;
        color: black;
    }
    span{
        font-size: 12px;
        margin-bottom: 20px;
    }
`

export const BoxOrdenacao = styled.div`
    width: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    .BoxOrdenacao-topo{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .BoxOrdenacao-topo-select{
        border-radius: 8px;
    }
`