import { useNavigate } from "react-router-dom"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"

import LoginFormulario from "../components/LoginFormulario"
import { useState } from "react"

const httpObtenerPeliculas = async () => {
    const url = "https://script.google.com/macros/s/AKfycbx94l1jH8sNlYXGnAV9ImAbzv4mJ13F8lFkYVd61s95dmmwB92Z_uKDpbFH3zFr-KzD/exec?entity=peliculas"

    try {
        const resp = await fetch(url)
        const data = await resp.json()
        console.log(data)
    }catch(error){
        console.error(error)
    }

    /* fetch(url).then((resp) => {
        resp.json().then((data) => {
            console.log(data)
        }).catch((error) => {
            console.error(error)
        })
    }).catch((error) => {
        console.error(error)
    }) */

    /* const promesa = fetch(url)
    promesa.then((resp) => {
        const promesa2 = resp.json()
        promesa2.then((data) => {
            console.log(data)
        })
        promesa2.catch((error) => {
            console.error(error)
        })
    })
    promesa.catch((error) => {
        console.error(error)
    }) */
}

const LoginPage = () => {
    const [error, setError] = useState("")

    httpObtenerPeliculas();

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