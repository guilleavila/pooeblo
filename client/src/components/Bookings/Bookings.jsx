import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import housesService from "../../services/houses.service"
import bookingsService from "../../services/bookings.service"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
// import Calendar from 'react-calendar'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates'
import Moment from 'moment';
import { extendMoment } from 'moment-range'

const moment = extendMoment(Moment)

const Bookings = ({ houseId }) => {

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
            .getSubscriptionOfOneUserForThisHouse(houseId, user?._id)
            .then(({ data }) => setSubscriptionId(data[0]._id))
            .catch(err => console.log(err))

    }, [user])

    const navigate = useNavigate()

    const handleInputChange = () => {

        setBookingState({
            ...bookingState,
            subscription: subscriptionId,
            entryDate: startDate._d,
            exitDate: endDate._d
        })
        console.log(bookingState)
    }

    // DAYS BLOCKED
    const bookings = [{ startDate: '2022-04-25T22:00:00.000Z', endDate: '2022-04-27T22:00:00.000Z' }, { startDate: '2022-04-01T22:00:00.000Z', endDate: '2022-04-05T22:00:00.000Z' }]

    // useEffect(() => {
    //     housesService
    //         .getAllBookingsOfOneHose(houseId)
    //         .then(({ data }) => {
    //             data.forEach(eachBooking => {
    //                 bookings.push({ startDate: eachBooking.entryDate, endDate: eachBooking.exitDate })
    //             })
    //             console.log(bookings)
    //             setIsLoaded(true)
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    const isBlocked = (date) => {

        let bookedRanges = []
        let blocked

        bookings.map(eachBooking => {
            bookedRanges = [...bookedRanges,
            moment.range(eachBooking.startDate, eachBooking.endDate)]
            console.log('holaaaaa', bookedRanges)
        })

        blocked = bookedRanges.find(range => range.contains(date))
        console.log('estas son las blocked', blocked)

        // setIsLoaded(true)
        return blocked
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
            <h3>Haz una reserva</h3>
            <>
                <Form onSubmit={handleSubmit}>
                    <Button variant="dark" type="submit" style={{ width: '100%' }}>Crear reserva</Button>
                    {/* <Form.Control type="text" name="entryDate" value={startDate?._d} onChange={handleInputChange} />
                    <Form.Control type="text" name="exitDate" value={endDate?._d} onChange={handleInputChange} /> */}
                    <Form.Control type="text" name="entryDate" value={bookingState.entryDate} onChange={handleInputChange} />
                    <Form.Control type="text" name="exitDate" value={bookingState.exitDate} onChange={handleInputChange} />
                </Form>

                {
                    // isLoaded && <DateRangePicker
                    <DateRangePicker

                        startDate={startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => {
                            setStartDate(startDate)
                            setEndDate(endDate)
                        }} // PropTypes.func.isRequired,
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