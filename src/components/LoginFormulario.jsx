import { useState } from "react"
import EntradaDatos from "./EntradaDatos"
import SeleccionMultiple from "./SeleccionMultiple"

const LoginFormulario = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [paisId, setPaisId] = useState(1)

    const listaPaises = [
        { id : 1, nombre : "Peru"},
        { id : 2, nombre : "Argentina"},
        { id : 3, nombre : "Brasil"},
        { id : 4, nombre : "Bolivia"}
    ]

    return <>
        <h1>
            {
                props.modo === "login"? "Login" : "Registro Usuario"
            }
        </h1> 
        <form>
            <EntradaDatos 
                key={ "input_username" }
                label="Usuario: " 
                tipo="entrada"
                valor={ username }
                setValor={ setUsername }/>
            <EntradaDatos 
                key={ "input_password" }
                label="Password:" 
                tipo="password"
                valor={ password }
                setValor={ setPassword }/>
            <SeleccionMultiple 
                label="Pais:"
                data={ listaPaises }
                valor={ paisId }
                setValor={ setPaisId } />
            <div>
                <button type="button" className="btn btn-success"
                    onClick={ () => {
                        props.loginOnClick(username, password, paisId)
                    } }>
                    {
                        props.modo === "login"? "Login" : "Guardar"
                    }
                </button>
            </div>
        </form>
    </>
}

export default LoginFormulario