import '../App.css';
import { registerUser } from '../redux/actions/user_actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onFirstnameChange = (e) => {
        setFirstname(e.target.value);
    }

    const onLastnameChange = (e) => {
        setLastname(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className = "signup">
            <input className = "textArea" type = "text" placeholder = "Email" value={email} onChange = {onEmailChange}/>
            <input className = "textArea" type = "text" placeholder = "Firstname" value={firstname} onChange = {onFirstnameChange}/>
            <input className = "textArea" type = "text" placeholder = "Lastname" value={lastname} onChange = {onLastnameChange}/>
            <input className = "textArea" type = "password" placeholder = "Password" value={password} onChange = {onPasswordChange}/>
            <input className = "textArea" type = "password" placeholder = "Confirm Password" />
            <button className = "signupButton" onClick = {() => dispatch(registerUser(email, firstname, lastname, password))}>Sign up</button>
            <Link to = "/">
                <p>Login</p>
            </Link>
            <input className = "responseArea" type = "text" placeholder = "Response..." />
        </div>
    );
}

export default Signup;