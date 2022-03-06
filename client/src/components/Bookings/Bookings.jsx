import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import housesService from "../../services/houses.service"
import bookingsService from "../../services/bookings.service"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


const Bookings = ({ houseId }) => {

    const { user } = useContext(AuthContext)

    const [subscriptionId, setSubscriptionId] = useState()

    useEffect(() => {

        housesService
            .getSubscriptionOfOneUserForThisHouse(houseId, user?._id)
            .then(({ data }) => setSubscriptionId(data[0]._id))
            .catch(err => console.log(err))

    }, [user])


    const [bookingState, setBookingState] = useState({
        subscription: '',
        entryDate: '',
        exitDate: ''
    })

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setBookingState({
            ...bookingState,
            subscription: subscriptionId,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        bookingsService
            .createBooking(bookingState)
            .then(() => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }


    return (
        <article>
            <h1>YA ESTOY SUSCRITO</h1>
            <h3>Haz una reserva</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Fecha de entrada</Form.Label>
                <Form.Control type="date" name="entryDate" value={bookingState.entryDate} onChange={handleInputChange} />

                <Form.Label>Fecha de salida</Form.Label>
                <Form.Control type="date" name="exitDate" value={bookingState.exitDate} onChange={handleInputChange} />

                <Button variant="dark" type="submit" style={{ width: '100%' }}>Crear subscripción</Button>
            </Form>
        </article>
    )
}

export default Bookings