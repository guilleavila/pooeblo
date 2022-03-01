const router = require('express').Router()

const Booking = require('../models/Booking.model')


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

    Booking
        .findById(booking_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// --- BOOKING DELETE ROUTE
router.delete("/:booking_id/delete", (req, res) => {

    const { booking_id } = req.params

    Booking
        .findByIdAndDelete(booking_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router