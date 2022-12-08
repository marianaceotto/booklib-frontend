import {DivHeader} from "./styleHeader"
import cart from "../../assets/cart.svg"
import favorite from "../../assets/favorite.svg"




export function Header(){



    return(
        <DivHeader>
        <>
            <div>
                <a>BookLib</a>
            </div>
        
            <div>
                <img src={favorite} alt="favoritos"/>
                <img src={cart} alt="carrinho"/>
            </div>
            </>
        </DivHeader>
    )
}

