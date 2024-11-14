import SeleccionVariasOpciones from "./SeleccionVariasOpciones"

const RegistroPeliculaModal = (props) => {
    if (props.show){
        return <div className="modal fade show d-block" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" >
                            Registro Película
                        </h1>
                        <button type="button" 
                            className="btn-close"
                            onClick={ () => {
                                props.onClose()
                            } }>

                        </button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <label className="form-label">Nombre: </label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div>
                            <label className="form-label">URL: </label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div>
                            <label className="form-label">Categoría: </label>
                            <select className="form-select">
                                <option>Acción</option>
                                <option>Comedia</option>
                                <option>Infantil</option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary"
                            onClick={ () => {
                                props.onClose()
                            } }>
                            Cerrar
                        </button>
                        <button type="button" className="btn btn-primary">Guardar changes</button>
                    </div>
                </div>
            </div>
        </div>
    }else {
        <></>
    }
    
}

export default RegistroPeliculaModal