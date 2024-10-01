import { useNavigate } from "react-router-dom"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

import LoginFormulario from "../components/LoginFormulario"
import { useState } from "react"

const LoginPage = () => {
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const loginHandler = (username, password, paisId) => {

        const usuarioToLogin = JSON.parse(sessionStorage.getItem("USUARIO"))

        if (username === usuarioToLogin.usuario && password === usuarioToLogin.password) {
            console.log("Pais:" + paisId )
            navigate("/main")
        }else {
            console.log("ERROR LOGIN")
            setError("ERROR LOGIN")
        }
    }

    /*const showMessage = (error) => {
        if (error !== "") {
            return <div className="mt-4 alert alert-danger">Error Login</div>
        }
    }*/

    return <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <LoginFormulario 
                loginOnClick={ loginHandler }
                modo={"login"}/>
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

export default LoginPage