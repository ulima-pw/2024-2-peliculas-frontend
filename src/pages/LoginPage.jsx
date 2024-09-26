import { useNavigate } from "react-router-dom"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

import LoginFormulario from "../components/LoginFormulario"

const LoginPage = () => {
    const navigate = useNavigate()

    const loginHandler = (username, password, paisId) => {
        if (username === "pw" && password === "2024") {
            console.log("Pais:" + paisId )
            navigate("/main")
        }else {
            console.log("ERROR LOGIN")
        }
    }

    return <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <LoginFormulario 
                loginOnClick={ loginHandler }/>
        </div>
        <div className="col-md-4"></div>
    </div> 
}

export default LoginPage