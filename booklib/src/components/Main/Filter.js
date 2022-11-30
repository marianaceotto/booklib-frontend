import {Main} from "./Main"

export function Filter (props) {

    const handlePesquisaNome = (e) => {
        props.setPesquisa(e.target.value)
    }

    const handleValorMin = (e) => {
        props.setValorMin(e.target.value)
    }
    
    const handleValorMax = (e) => {
        props.setValorMax(e.target.value)
    }

    const handleOrdem =(e) => {
        props.setOrdem(e.target.value)
    }

    

    return (
        <>
        <h2>Filtrar buscar por:</h2>

        <p>Nome:</p>
        <input type="text" className="InputFiltro" value={props.pesquisa} onChange={handlePesquisaNome}/>

        <p>Valor mínimo:</p>
        <input type="text" className="InputFiltro" value={props.minimo} onChange={handleValorMin}/>

        <p>Valor máximo:</p>
        <input type="text" className="InputFiltro" value={props.maximo} onChange={handleValorMax}/>


        <select value={props.ordem} onChange={handleOrdem} className="telaDePesquisa">
              <option value="">Ordenar por</option>
              <option value="Maior">Crescente</option>
              <option value="Menor">Decrescente</option>
        </select>

        </>
    )
    
}