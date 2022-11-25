import {HeaderContainer} from "./StyledComponents"
import carrinho from "../assets/carrinho.png"


export function Header (){
    return (
        <HeaderContainer>

        <div>
            <a>
                BooksLib    
            </a>

            <button>
            <img src = {carrinho} alt ="Logo-Carrinho"></img>
            </button>
            
        </div>


        </HeaderContainer>
        
    )
}