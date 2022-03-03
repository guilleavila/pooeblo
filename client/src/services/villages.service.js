import axios from 'axios'

class VillagesService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/villages` })
    }

    getAllVillages = () => {
        return this.api.get('/')
    }

    getOneVillage = id => {
        return this.api.get(`/${id}`)
    }

    editVillageInfo = (id, villageInfo) => {
        return this.api.put(`/${id}/edit-info`, villageInfo)
    }

    editVillageFeatures = (id, villageFeatures) => {
        return this.api.put(`/${id}/edit-features`, villageFeatures)
    }

    deleteVillage = id => {
        return this.api.delete(`/${id}/delete`)
    }

    followVillage = id => {
        return this.api.put(`/${id}/follow`)
    }

    unfollowVillage = id => {
        return this.api.put(`/${id}/unfollow`)
    }

    getAllHousesOfOneVillage = id => {
        return this.api.get(`/${id}/houses`)
    }

    getAllSubscriptioinsOfOneVillage = id => {
        return this.api.get(`/${id}/subscriptions`)
    }

    getVillagesByName = input => {
        return this.api.get(`/search-village/${input}`)
    }

}

const villagesService = new VillagesService()

export default villagesService