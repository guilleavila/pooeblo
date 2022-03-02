const router = require('express').Router()

const Subscription = require('../models/Subscription.model')
const House = require('../models/House.model')

// GET - GET USER'S SUBSCRIPTIONS
router.get('/', (req, res) => {
    // no es un formulario --> mirar contexto
    const { user_id } = req.body

    Subscription
        .find({ coRenter: user_id })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// POST --- CREATE SUBSCRIPTION
router.post('/create', (req, res) => {

    // el corenter y la house no salen de ahí
    const { coRenter, house, totalDays } = req.body

    House
        .findById(house)
        .select('priceDay')
        .then(({ priceDay }) => {
            const totalPrice = priceDay * totalDays
            return Subscription.create({ coRenter, house, totalDays, totalPrice, daysLeftToBook: totalDays })
        })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// DELETE --- CANCEL SUBSCRIPTION
router.delete('/:subscription_id/delete', (req, res) => {

    const { subscription_id } = req.params

    Subscription
        .findByIdAndRemove(subscription_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router