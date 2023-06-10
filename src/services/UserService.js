import axios from "axios";
import {BACKEND_URL} from "./Config";

const AUTH_URL = BACKEND_URL("api/auth")

class UserService {
    login(username, password) {
        const LOGIN_URL = AUTH_URL + '/signin'
        const data = {username: username, password: password}

        return axios.post(LOGIN_URL, data)
    }

    refreshToken(refreshToken) {
        const REFRESH_TOKEN_URL = AUTH_URL + '/refresh-token'
        const data = {refresh: refreshToken}

        return axios.post(REFRESH_TOKEN_URL, data)
    }

    logout(username) {
        const LOGOUT_TOKEN_URL = AUTH_URL + '/signout'
        const data = {
            username: username
        }
        return axios.post(LOGOUT_TOKEN_URL, data)
    }

}

export default new UserService();