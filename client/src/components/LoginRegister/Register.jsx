import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleError } from "../../context/ErrorHandler";
import ErrorHandlerComponent from "../ErrorHandlerComponent/ErrorHandlerComponent";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const {error, setError, errorMessage, setErrorMessage} = handleError();

    const submitRegisterHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        console.log({username, email, password})
        try {
            const response = await fetch('http://localhost:5050/user/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username, email, password})
            })
            if (response.ok) {
                const newUser = await response.json();
                console.log({newUser})
                navigate('/login');
            } else {
                const errorMessage = await response.text();
                setErrorMessage(errorMessage);
                setError(true);
                throw new Error(errorMessage);
            }
        } catch(err) {
            console.log(err.message);
            return;
           
        }
        
    }
    return (
        <div className="register-page">
            {error && <ErrorHandlerComponent errorMessage={errorMessage} error={error} setError={setError}/>}
            <form className="register-form" onSubmit={submitRegisterHandler}>
                <h1>Register</h1>
                <input name="username" type="text" placeholder="username" onChange={(e) => setUsername(e.currentTarget.value)}/>
                <input name="email" type="email" placeholder="email" onChange={(e) => setEmail(e.currentTarget.value)}/>
                <input name="password" type="text" placeholder="password" onChange={(e) => setPassword(e.currentTarget.value)}/>
                <button type="submit">Register</button>
                <p>You already have an account? You can register here:</p>
                <Link to='/login'>Login</Link>
            </form>
        </div>
    )
}

export default Register;