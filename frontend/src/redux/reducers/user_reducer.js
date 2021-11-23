import { REGISTER, LOGIN } from "../types";
import axios from "axios";

const initialState = [];

const userReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case REGISTER:
            axios.post('http://localhost:3001/usersystem/auth/register', payload)
            .then([...state, Response.data])
            .catch();
            console.log(state);
            return state;

        case LOGIN:
            axios.post('http://localhost:3001/usersystem/auth/login', payload)
            .then([...state, Response.data])
            .catch();
            console.log(state);
            return state;

        default:
            return state;
    }
}

export default userReducer;