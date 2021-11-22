import { REGISTER, LOGIN } from "../types";

export const registerUser = (email, firstname, lastname, password) => {
    return {
        type: REGISTER,
        payload: {
            email,
            firstname,
            lastname,
            password
        }
    }
}

export const login = (email, password) => {
    return {
        type: LOGIN,
        payload: {
            email,
            password
        }
    }
}