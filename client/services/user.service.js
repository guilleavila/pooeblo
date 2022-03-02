import axios from 'axios'

class UserService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/user` })
    }

    getUserDetails = id => {
        return this.api.get(`/${id}`)
    }

    editUser = (id, userInfo) => {
        return this.api.put(`/${id}/edit`, userInfo)
    }

    deleteUser = id => {
        return this.api.delete(`/${id}/delete`)
    }

    getAllPropertiesOfOneUser = id => {
        return this.api.get(`/${id}/properties`)
    }

}

const userService = new UserService()

export default userService