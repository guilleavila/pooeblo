import axios from 'axios'

class BookingsService {

    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/bookings` })
    }

    createBooking = booking => {
        return this.api.post(`/create`, booking)
    }

    getOneBooking = id => {
        return this.api.get(`/${id}`)
    }

    editBooking = (id, bookingInfo) => {
        return this.api.put(`/${id}/edit`, bookingInfo)
    }

    deleteBooking = id => {
        return this.api.delete(`/${id}/delete`)
    }

}

const bookingsService = new BookingsService()

export default bookingsService