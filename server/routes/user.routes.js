const router = require('express').Router()

const User = require('./../models/User.model')
const House = require('./../models/House.model')


// --- GET USER'S DETAILS ROUTE
router.get('/:user_id', (req, res) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .populate('followedVillages')
        .populate('favHouses')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// --- EDIT USER ROUTE
router.put('/:user_id/edit', (req, res) => {

    const { user_id } = req.params
    const { firstName, lastName, email, phoneNumber, birthDate, profileImg } = req.body

    User
        .findByIdAndUpdate(user_id, { firstName, lastName, email, phoneNumber, birthDate, profileImg })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// --- DELETE USER ROUTE
router.delete("/:user_id/delete", (req, res) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// --- GET ALL PROPERTIES
router.get("/:user_id/properties", (req, res) => {

    const { user_id } = req.params

    House
        .find({ owner: user_id })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router