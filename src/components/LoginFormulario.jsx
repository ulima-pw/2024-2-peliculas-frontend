const LoginFormulario = () => {
    return <>
        <h1>Login</h1> 
        <form>
            <div>
                <label htmlFor="txt_usuario">Usuario:</label>
            </div>
            <div>
                <input id="txt_usuario" type="text" />
            </div>
            <div>
                <label htmlFor="txt_password">Password:</label>
            </div>
            <div>
                <input id="txt_password" type="password" />
            </div>
            <div>
                <button type="button">Login</button>
            </div>
        </form>
    </>
}

export default LoginFormulario