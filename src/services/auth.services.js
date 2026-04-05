import axios from 'axios'

class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/auth`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    signup(userData) {
        return this.api.post('/signup', userData)
    }

    login(userData) {
        console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);
        console.log("LOGIN URL:", `${import.meta.env.VITE_API_URL}/api/auth/login`);

        return this.api.post('/login', userData)
        
    }

    verify(authToken) {
        return this.api.get('/verify',
            { headers: { Authorization: `Bearer ${authToken}` } }
        )
    }

}

const authService = new AuthService()

export default authService
