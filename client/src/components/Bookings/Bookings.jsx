import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import housesService from "../../services/houses.service"
import bookingsService from "../../services/bookings.service"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates'
import Moment, { localeData } from 'moment';
import { extendMoment } from 'moment-range'

const moment = extendMoment(Moment)

const Bookings = ({ houseId, bookings }) => {

    const { user } = useContext(AuthContext)

    const [subscriptionId, setSubscriptionId] = useState()

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [focusedInput, setFocusedInput] = useState()

    const [isLoaded, setIsLoaded] = useState(false)

    const [bookingState, setBookingState] = useState({
        subscription: '',
        entryDate: '',
        exitDate: ''
    })

    useEffect(() => {

        housesService
            .getSubscriptionOfOneUserForThisHouse(houseId)
            .then(({ data }) => setSubscriptionId(data[0]._id))
            .catch(err => console.log(err))

    }, [user])

    const navigate = useNavigate()

    const isBlocked = (date) => {

        let bookedRanges = []
        let blocked

        bookings.map(eachBooking => {
            bookedRanges = [...bookedRanges,
            moment.range(eachBooking.startDate, eachBooking.endDate)]
        })

        blocked = bookedRanges.find(range => range.contains(date))
        return blocked
    }

    const handleInputChange = (startDate, endDate) => {
        setStartDate(startDate)
        setEndDate(endDate)
    }

    useEffect(() => {
        setBookingState({
            ...bookingState,
            subscription: subscriptionId,
            entryDate: startDate?._d,
            exitDate: endDate?._d
        })
    }, [startDate, endDate])

    function handleSubmit(e) {
        e.preventDefault()

        bookingsService
            .createBooking(bookingState)
            .then(() => {
                navigate('/perfil')
            })
            .catch(err => console.log(err))
    }


    return (
        <article>
            <h3>Haz una reserva</h3>
            <>
                <Form onSubmit={handleSubmit}>
                    <Button variant="dark" type="submit" style={{ width: '100%' }}>Crear reserva</Button>
                </Form>

                {
                    <DateRangePicker

                        startDate={startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => handleInputChange(startDate, endDate)}
                        // PropTypes.func.isRequired,
                        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
                        isDayBlocked={isBlocked}
                    />
                }
            </>
        </article>
    )
}

export default Bookings