import '../App.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../redux/actions/user_actions';
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className = "login">
            <input className = "textArea" type = "text" placeholder = "Email" value = {email} onChange = {onEmailChange}/>
            <input className = "textArea" type = "password" placeholder = "Password" value = {password} onChange ={onPasswordChange}/>
            <button className = "loginButton" onClick = {() => dispatch(login(email, password))}>login</button>
            <Link to = "/signup">
                <p>Sign up</p>
            </Link>
            <input className = "responseArea" type = "text" placeholder = "Response..." />
        </div>
    );
}

export default Login;