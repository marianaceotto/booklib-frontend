import {BoxFiltroMain} from "./styledGeral"

export function Filtro (props){

    const handleNomeSearch = (event)=>{
        props.setPesquisa(event.target.value)
    }

    const handleValorMinSearch = (event)=>{
        props.setValorMin(event.target.value)
    }

    const handleValorMaxSearch = (event)=>{
        props.setValorMax(event.target.value)
    }

    return (
        <>
    <BoxFiltroMain>

        <h2>Filtrar por:</h2>

        <p>Nome:</p>
        <input type="text" value={props.pesquisa} onChange={handleNomeSearch}/>

        <p>Menor Preço:</p>
        <input type="text" value={props.minimo} onChange={handleValorMinSearch }/>

        <p>Maior Preço:</p>
        <input type="text" value={props.maximo} onChange={handleValorMaxSearch}/>

    </BoxFiltroMain>

        </>
    )
}

