const ListaCategorias = (props) => {
    return <ul className="list-group">
        <li className={ "list-group-item " + ( props.categoriaIdSeleccionada == 0 ? "active" : "" ) }
            onClick={ 
                () => {
                    props.onSeleccionarCategoria(0)
                } 
            }>
            Todas
        </li>
        {
            props.categorias.map((categoria) => {
                return <li className={ 
                                "list-group-item " + 
                                ( props.categoriaIdSeleccionada == categoria.id ? "active" : "" ) 
                            }
                            onClick={ 
                                () => {
                                    props.onSeleccionarCategoria(categoria.id)
                                }
                            }>
                    { categoria.nombre }
                </li>
            })
        }
    </ul>
}

export default ListaCategorias