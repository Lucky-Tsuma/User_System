import '../App.css';
import { Link } from "react-router-dom";

const Signup = () => {

    return (
        <div className = "signup">
            <input className = "textArea" type = "text" placeholder = "Email" />
            <input className = "textArea" type = "text" placeholder = "Firstname" />
            <input className = "textArea" type = "text" placeholder = "Lastname" />
            <input className = "textArea" type = "password" placeholder = "Password" />
            <input className = "textArea" type = "password" placeholder = "Confirm Password" />
            <button className = "loginButton">Sign up</button>
            <Link to = "/login">
                <p>Login</p>
            </Link>
            <input className = "responseArea" type = "text" placeholder = "Response..." />
        </div>
    );
}

export default Signup;