const SeleccionVariasOpciones = (props) => {
    return <div className="row">
        <div className="col-md-5">
            <ul class="list-group">
                <li class="list-group-item active" aria-current="true">An active item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
            </ul>
        </div>
        <div className="col-md-2">
            <div style={ { height : "100%", alignItems : "center", justifyContent : "center", display : "flex"} }>
                <button className="btn btn-success">
                    -
                </button>
                <button className="btn btn-success">
                    -
                    { /* <i class="bi bi-arrow-left-short"></i> */ }
                </button>
            </div>
        </div>
        <div className="col-md-5">
            <ul class="list-group">
                <li class="list-group-item active" aria-current="true">An active item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
                <li class="list-group-item">A fourth item</li>
                <li class="list-group-item">And a fifth one</li>
            </ul>
        </div>
    </div>
}

export default SeleccionVariasOpciones