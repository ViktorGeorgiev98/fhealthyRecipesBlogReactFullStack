import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    return (
        <div className="register-page">
            <form className="register-form">
                <h1>Register</h1>
                <input type="text" placeholder="username" onChange={(e) => setUsername(e.currentTarget.value)}/>
                <input type="text" placeholder="email" onChange={(e) => setUsername(e.currentTarget.value)}/>
                <input type="text" placeholder="password" onChange={(e) => setPassword(e.currentTarget.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Register;