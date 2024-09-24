const EntradaDatos = (props) => {
    const valueOnChange = (evt) => {
        props.setValor(evt.target.value)
    }

    return <div class="mb-3">
        <label htmlFor="txt_value" className="form-label">
            { props.label }
        </label>
        <input id="txt_value" 
            type={ props.tipo === "entrada" ? "text" : "password" } 
            className="form-control"
            onChange={ valueOnChange }
            value={ props.valor }/>
    </div>
}

export default EntradaDatos