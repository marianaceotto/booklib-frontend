import styled from "styled-components";

export const ContainerCarrinho = styled.div`
    width: 96%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
`
export const BoxCompra = styled.div`
    width: 70%;
    padding-top: 30px;
    h2{
        margin-bottom: 20px;
        font-size: 1.8rem;
        padding-left: 20px;
    }
    input{
        border-radius: 8px;
        width: 300px;
        height: 40px;
        padding-left: 10px;
        margin-bottom: 20px;
        margin-top: 10px;
    }
   
    button{
        margin-top: 30px;
        background-color: #e79828;
        border-radius: 16px;
        color: white;
        width: 300px;
        height: 40px;
        border: none;
        font-weight: bold;
        font-size: 14px;
        transition: transform .3s;
        box-shadow: 1px 1px 4px rgb(191, 191, 191);
    }
    button:hover{
        cursor: pointer;
        background-color: #fbbc61;
        font-weight: light;
        transform: scale(1.05)
    }
`

export const BoxPedidoItens = styled.p`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    span{
        width: 25%;
        font-size: 14px; 
        
        :nth-child(4){
            display: flex;
            gap: 8px;
            h4{
                border-radius: 50%;
                background-color: #fbbc61;
                color: white;
                width: 16px;
                text-align: center;
            }
            h4:hover{
                cursor: pointer;
            }
        }
    }
`

export const BoxItemNoCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    width: 100%;
    margin-bottom: 20px;
    img{
        width: 80px;
        padding-left: 20px;
    }
    :hover{
        cursor: pointer;
    }
`

export const BoxTituloNoCarrinho = styled.div`
    display: flex;
    justify-content: space-evenly;
`


export const ResumoCompra = styled.div`
    width: 30%;
    border: 2px solid #e79828;
    border-radius: 8px;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    
    div:first-child{
        width: 90%;
        :first-child{
            margin-bottom: 30px;
        }
        div{
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
        }
        
        select{
        height: 40px;
        width: 200px;
        border-radius: 8px;
        font-size: 0.8rem;
        }

        button{
            margin-top: 08px;
            background-color: #e79828;
            border-radius: 16px;
            color: white;
            width: 100%;
            height: 50px;
            border: none;
            font-weight: bold;
            font-size: 18px;
            transition: transform .3s;
            box-shadow: 1px 1px 4px rgb(191, 191, 191);
        }
        button:hover{
            cursor: pointer;
            background-color: #fbbc61;
            font-weight: light;
            transform: scale(1.05)
        }
    }
    
    `