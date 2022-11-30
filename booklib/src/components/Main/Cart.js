import {Main} from "./Main"

export function Cart (props){

    // onChangeCart = (e) =>{
    //     props.setCart
    // }
    
    let itensCart = 0

    const addItem = () => {
        for (let i = 0; i <props.carrinho.lenght; i++){
            itensCart += props.carrinho[i].valorTotal
        }
        return
    }

    const deleteItem = () => {

    }

    return (
        <>
        <div>
            <h2>Carrinho:</h2>
        </div>
        </>
    )
}