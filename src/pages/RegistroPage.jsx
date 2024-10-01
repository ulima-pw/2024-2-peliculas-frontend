import { useState } from "react"
import LoginFormulario from "../components/LoginFormulario"

const RegistroPage = () => {
    const [error, setError] = useState("")

    const registrarUsuarioHandler = (username, password, paisId) => {
        console.log("Se deberia registrar un usuario")
    }
    return <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <LoginFormulario 
                loginOnClick={ registrarUsuarioHandler }/>
            {
                (() => {
                    if (error !== "") {
                        return <div className="mt-4 alert alert-danger">Error Login</div>
                    }
                })(error)
            }
        </div>
        <div className="col-md-4"></div>
    </div> 
}

export default RegistroPage