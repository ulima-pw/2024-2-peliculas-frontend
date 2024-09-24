const LoginFormulario = () => {
    return <>
        <h1>Login</h1> 
        <form>
            <div class="mb-3">
                <label htmlFor="txt_usuario" className="form-label">Usuario:</label>
                <input id="txt_usuario" type="text" className="form-control"/>
            </div>
            <div class="mb-3">
                <label htmlFor="txt_password" className="form-label">Password:</label>
                <input id="txt_password" type="password" className="form-control" />
            </div>
            <div>
                <button type="button" className="btn btn-success">Login</button>
            </div>
        </form>
    </>
}

export default LoginFormulario