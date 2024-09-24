const EntradaDatos = (props) => {
    return <div class="mb-3">
        <label htmlFor="txt_value" className="form-label">
            { props.label }
        </label>
        <input id="txt_value" 
            type={ props.tipo === "entrada" ? "text" : "password" } 
            className="form-control"/>
    </div>
}

export default EntradaDatos