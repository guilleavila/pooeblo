import axios from 'axios'

class HousesService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/houses` })
    }

    getAllHouses = () => {
        return this.api.get('/')
    }

    createHouse = house => {
        return this.api.post(`/create`, house)
    }

    getOneHouse = id => {
        return this.api.get(`/${id}`)
    }

    editHouse = (id, houseInfo) => {
        return this.api.put(`/${id}/edit`, houseInfo)
    }

    deleteHouse = id => {
        return this.api.delete(`/${id}/delete`)
    }

    addHouseToFavs = (id, user) => {
        return this.api.put(`/${id}/add-to-fav`, user)
    }

    substractHouseFromFavs = (id, user) => {
        return this.api.put(`/${id}/subtract-from-fav`, user)
    }

    getAllBookingsOfOneHose = id => {
        return this.api.get(`/${id}/get-bookings`)
    }

}

const housesService = new HousesService()

export default housesService