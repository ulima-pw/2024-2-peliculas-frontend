import { useState } from "react"
import EntradaDatos from "./EntradaDatos"
import SeleccionMultiple from "./SeleccionMultiple"

const LoginFormulario = () => {
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
        <h1>Login</h1> 
        <form>
            <EntradaDatos 
                label="Usuario:" 
                tipo="entrada"
                valor={ username }
                setValor={ setUsername }/>
            <EntradaDatos 
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
                        if (username === "pw" && password === "2024") {
                            console.log("LOGIN CORRECTO!")
                            console.log("Pais:" + paisId )
                        }else {
                            console.log("ERROR LOGIN")
                        }
                    } }>
                    Login
                </button>
            </div>
        </form>
    </>
}

export default LoginFormulario