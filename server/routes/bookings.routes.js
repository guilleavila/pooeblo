const router = require('express').Router()

const Booking = require('../models/Booking.model')


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

    Booking
        .create({ subscription, entryDate, exitDate })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// --- BOOKING DETAILS ROUTE
router.get("/:booking_id", (req, res) => {

    const { booking_id } = req.params

})

module.exports = router