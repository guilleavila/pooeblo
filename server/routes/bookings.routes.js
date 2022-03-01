const router = require('express').Router()

const Booking = require('../models/Booking.model')
const Subscription = require('../models/Subscription.model')


// --- GET ALL BOOKINGS ROUTE
router.get("/", (req, res) => {

    Booking
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// --- CREATE BOOKING ROUTE 
router.post("/create", (req, res) => {

    const { subscription, entryDate, exitDate } = req.body

    const entry = new Date(entryDate)
    const exit = new Date(exitDate)

    const totalDays = (exit - entry) / (1000 * 3600 * 24)

    console.log(entry, exit, totalDays)

    const promise1 = Booking.create({ subscription, entryDate, exitDate })
    const promise2 = Subscription.findByIdAndUpdate(subscription, { daysLeftToBook: totalDays }, { new: true })

    Promise
        .all([promise1, promise2])
        .then(response => {
            console.log(response)
            res.json(response)
        })
        .catch(err => res.status(500).json(err))
})


// --- BOOKING DETAILS ROUTE
router.get("/:booking_id", (req, res) => {

    const { booking_id } = req.params

})

module.exports = router