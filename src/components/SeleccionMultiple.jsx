const SeleccionMultiple = (props) => {
    const valueOnChange = (evt) => {
        props.setValor(evt.target.value)
    }

    return <div className="mb-3">
        <label htmlFor="txt_value" className="form-label">
            { props.label }
        </label>
        <select value={ props.valor } 
            className="form-select"
            onChange={ valueOnChange }>
            { 
                props.data.map((elem) => {
                    return <option value={ elem.id }>{ elem.nombre }</option>
                }) 
            }
        </select>
    </div>
}

export default SeleccionMultiple