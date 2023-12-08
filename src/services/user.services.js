import axios from 'axios'

class UserService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/user`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }




    getUsers() {
        return this.api.get('/AllUsers')
    }

    getMyUser() {
        return this.api.get('/profile')
    }


    getUserDetails(user_id) {
        return this.api.get(`/details/${user_id}`)
    }


    SaveUser(userData) {
        return this.api.post('/newUserCreated', userData)
    }

    editUser(user_id, userData) {
        console.log("desde servicio cliente id y data", user_id, userData)
        return this.api.put(`/edit/${user_id}`, userData)

    }


    editMyUser(user_id, userData) {
        console.log("desde servicio cliente id y data", user_id, userData)
        return this.api.put(`/editMyProfile`, userData)

    }
    deleteUser(user_id) {
        return this.api.delete(`delete/${user_id}`, user_id)
    }

    searchByCity(searchcity) {
        console.log("servicio cliente----", searchcity)
        return this.api.get(`/findByCity?city=${searchcity}`)

    }

    SortPrice(price) {
        return this.api.get('/sortprice', price)
    }



}







const userService = new UserService()

export default userService





