const SeleccionVariasOpciones = (props) => {
    return <div className="row">
        <div className="col-md-5">
            { props.labelSeleccionado }
            <ul class="list-group">
                {
                    props.dataSeleccionada.map((item) => {
                        return <li class="list-group-item">
                            { item.nombre } 
                        </li>
                    })
                }
            </ul>
        </div>
        <div className="col-md-2">
            <div style={ { height : "100%", alignItems : "center", justifyContent : "center", display : "flex"} }>
                <button className="btn btn-success" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </button>
                <button className="btn btn-success d-block" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </button>
            </div>
        </div>
        <div className="col-md-5">
            { props.labelDisponible }
            <ul class="list-group">
                {
                    props.dataDisponible.map((item) => {
                        return <li class="list-group-item">
                            { item.nombre } 
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
}

export default SeleccionVariasOpciones