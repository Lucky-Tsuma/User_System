import { REGISTER, LOGIN } from "../types";
import axios from "axios";

const initialState = [];

const userReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case REGISTER:
            axios.post('http://localhost:3001/usersystem/auth/register', payload)
            .then(response => { return [...state, response.data]})
            .catch();
            break;

        case LOGIN:
            axios.post('http://localhost:3001/usersystem/auth/login', payload)
            .then(response => { return [...state, response.data]})
            .catch();
            break;

        default:
            return state;
    }
}

export default userReducer;