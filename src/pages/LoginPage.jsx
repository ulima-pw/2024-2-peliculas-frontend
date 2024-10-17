import { useNavigate } from "react-router-dom"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

import LoginFormulario from "../components/LoginFormulario"
import { useState } from "react"


const LoginPage = () => {
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const loginHandler = async (username, password, paisId) => {
        const data = {
            usuario : username,
            password : password
        }
        const resp = await fetch("http://localhost:3000/login", {
            method : "POST",
            body : JSON.stringify(data),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        const dataResp = await resp.json()

        if (dataResp.error === "")
        {
            // Login correcto
            setError("")
            navigate("/main")
        }else
        {
            // Login incorrecto
            setError(dataResp.error)
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