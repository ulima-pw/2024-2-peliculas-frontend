import { useState } from "react"
import SeleccionVariasOpciones from "./SeleccionVariasOpciones"
import EntradaDatos from "./EntradaDatos"
import SeleccionMultiple from "./SeleccionMultiple"

const RegistroPeliculaModal = (props) => {
    const [peliculaNombre , setPeliculaNombre] = useState("")
    const [peliculaURL, setPeliculaURL] = useState("")
    const [peliculaCategoriaId, setPeliculaCategoriaId] = useState(0)

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
                        <EntradaDatos
                            label={ "Nombre:" }
                            tipo={ "entrada" }
                            valor={ peliculaNombre }
                            setValor={ setPeliculaNombre }/>
                        <EntradaDatos
                            label={ "URL:" }
                            tipo={ "entrada" }
                            valor={ peliculaURL }
                            setValor={ setPeliculaURL }/>
                        <SeleccionMultiple 
                            label={ "Categoria:" }
                            data={ props.categorias }
                            valor={ peliculaCategoriaId }
                            setValor={ setPeliculaCategoriaId }/>
                        <SeleccionVariasOpciones 
                            labelSeleccionado={ "Cines seleccionados:" }
                            labelDisponible={ "Cines disponibles:" }
                            dataSeleccionada={ [] }
                            dataDisponible={ props.cinesDisponibles }/>
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