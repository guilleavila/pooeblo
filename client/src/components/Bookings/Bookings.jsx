import { useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context"

const Bookings = ({ house }) => {

    const { user } = useContext(AuthContext)

    const [bookingState, setBookingState] = useState({
        subscription: '',
        entryDate: '',
        exitDate: ''
    })

    return (
        <article>
            <h1>YA ESTOY SUSCRITO</h1>
        </article>
    )
}

export default Bookings