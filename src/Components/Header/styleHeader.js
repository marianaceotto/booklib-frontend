import styled from "styled-components"

export const DivHeader = styled.div`
    height: 18vh;
    width: 100%;
    background-color: #e79828;
    display: flex;
    justify-content: space-between;    
    color: white;

    div:first-child{
        width: 80%; 
        font-size: 2rem;    
        font-weight: bold;  
        display: flex;  
        align-items: center;
        justify-content: center;
        padding: 50px;        
    }
    
    div:last-child{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 50px;
        width: 20%;
        gap: 40px;      
        
        img{
            height: 36px;
            transition: transform .3s;
        }
        img:hover{
            cursor: pointer;
            transform: scale(1.2)
        }
    }
` 

