import axios from 'axios'

class SubscriptionsService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/subscriptions` })
    }

    getAllSubscriptionsOfOneUser = (id) => {  // tengo que pasarle el usuario o lo cojo del contexto?
        return this.api.get(`/mySubscription/${id}`)
    }

    createSubscription = subscription => {
        return this.api.post(`/create`, subscription)
    }

    deleteSubscription = id => {
        return this.api.delete(`/${id}/delete`)
    }

}

const subscriptionsService = new SubscriptionsService()

export default subscriptionsService