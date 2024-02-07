import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleError } from "../../context/ErrorHandler";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { error, setError, errorMessage, setErrorMessage } = handleError();

    const onLoginHandler = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        try {
            const response = await fetch('http://localhost:5050/user/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email,password})
            })

            if (response.ok) {
                const user = await response.json();
                console.log({user});
                navigate('/');
            } else {
                const errorMessage = await response.text();
                setErrorMessage(errorMessage);
                setError(true);
                throw new Error(errorMessage);
            }
        } catch(e) {
            console.log(e.message);
            return;
        }
    }
    return (
        <div className="login-page">
            <form className="login-form" onSubmit={onLoginHandler}>
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