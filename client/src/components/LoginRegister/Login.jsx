import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="login-page">
            <form className="login-form">
                <h1>Login</h1>
                <input type="text" placeholder="email" onChange={(e) => setEmail(e.currentTarget.value)}/>
                <input type="text" placeholder="password" onChange={(e) => setPassword(e.currentTarget.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;