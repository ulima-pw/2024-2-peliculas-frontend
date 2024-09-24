import { useState } from "react"
import EntradaDatos from "./EntradaDatos"

const LoginFormulario = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

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
            <div>
                <button type="button" className="btn btn-success"
                    onClick={ () => {
                        if (username === "pw" && password === "2024") {
                            console.log("LOGIN CORRECTO!")
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