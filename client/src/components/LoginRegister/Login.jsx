import { useState } from "react";
import { Link } from "react-router-dom";

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
                <p>You do not have an account? You can register here:</p>
                <Link to='/register'>Register</Link>
            </form>
        </div>
    )
}

export default Login;