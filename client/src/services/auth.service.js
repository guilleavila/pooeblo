import axios from 'axios'

class AuthService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/auth` })
    }

    userSignup(credentials) {
        return this.api.post('/user-signup', credentials)
    }

    villageSignup(credentials, latitude, longitude) {
        return this.api.post('/village-signup', credentials, latitude, longitude)
    }

    login(credentials) {
        return this.api.post('/login', credentials)
    }

    verify(token) {
        return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }
}

const authService = new AuthService()

export default authService