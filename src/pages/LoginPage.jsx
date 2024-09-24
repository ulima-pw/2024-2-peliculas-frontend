import "../../node_modules/bootstrap/dist/css/bootstrap.css"

import LoginFormulario from "../components/LoginFormulario"

const LoginPage = () => {
    return <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            <LoginFormulario />
        </div>
        <div className="col-md-4"></div>
    </div> 
}

export default LoginPage