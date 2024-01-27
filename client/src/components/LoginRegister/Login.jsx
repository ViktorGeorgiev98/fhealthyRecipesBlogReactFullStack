const Login = () => {
    return (
        <div className="login-page">
            <form className="login-form">
                <h1>Login</h1>
                <input type="text" placeholder="email"/>
                <input type="text" placeholder="password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;