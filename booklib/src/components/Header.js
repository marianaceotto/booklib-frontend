import {HeaderContainer} from "./StyledComponents"
import {Carrinho} from "./Carrinho"

export function Header (){
    return (
        <HeaderContainer>

        <div>
            <a>
                BooksLib    
            </a>
            
        </div>
            
        <Carrinho/>

        </HeaderContainer>
        
    )
}