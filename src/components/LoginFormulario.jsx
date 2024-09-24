import EntradaDatos from "./EntradaDatos"

const LoginFormulario = () => {
    return <>
        <h1>Login</h1> 
        <form>
            <EntradaDatos label="Usuario:" tipo="entrada"/>
            <EntradaDatos label="Password:" tipo="password"/>
            <div>
                <button type="button" className="btn btn-success">Login</button>
            </div>
        </form>
    </>
}

export default LoginFormulario