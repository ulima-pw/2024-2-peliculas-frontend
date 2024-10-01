import { useState } from "react"
import LoginFormulario from "../components/LoginFormulario"

const RegistroPage = () => {
    const [error, setError] = useState("")

    const registrarUsuarioHandler = (username, password, paisId) => {
        const usuario = {
            usuario : username,
            password : password,
            paisId : paisId
        }
        sessionStorage.setItem("USUARIO", JSON.stringify(usuario))
    }

    return <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <LoginFormulario 
                loginOnClick={ registrarUsuarioHandler }
                modo={"registro"}/>
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