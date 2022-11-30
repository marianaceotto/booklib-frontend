import user from "../../assets/user.svg"
import favorite from "../../assets/favorite.svg"
import cart from "../../assets/cart.svg"

export function Header () {



    return (
        <>
        <a>BookLib</a>


        <div>
            <img src={user} alt="user"/>
        <p>Olá, <br/>
        Faça seu login</p>
        </div>

        <div>
            <img src= {favorite} alt ="favoritos"/>
            <img src = {cart} alt ="carrinho"/>
        </div>

        </>
    )
}