const ListaCategorias = (props) => {
    return <ul className="list-group">
        <li className={ "list-group-item " + ( props.categoriaIdSeleccionada == 0 ? "active" : "" ) }
            onClick={ () => {
                props.onSeleccionarCategoria(0)
            } }>Todas</li>
        <li className={ "list-group-item " + ( props.categoriaIdSeleccionada == 1 ? "active" : "" ) }
             onClick={ () => {
                props.onSeleccionarCategoria(1)
            } }>Acción</li>
        <li className={ "list-group-item " + ( props.categoriaIdSeleccionada == 2 ? "active" : "" ) }
             onClick={ () => {
                props.onSeleccionarCategoria(2)
            } }>Comedia</li>
        <li className={ "list-group-item " + ( props.categoriaIdSeleccionada == 3 ? "active" : "" ) }
             onClick={ () => {
                props.onSeleccionarCategoria(3)
            } }>Infantil</li>
    </ul>
}

export default ListaCategorias