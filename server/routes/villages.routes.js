const router = require('express').Router()

const Village = require('../models/Village.model')
const User = require('../models/User.model')


// GET --- GET ALL VILLAGES

router.get('/', (req, res) => {

    Village
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// GET --- GET ONE VILLAGE

router.get('/:village_id', (req, res) => {

    const { village_id } = req.params

    Village
        .findById(village_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// PUT --- EDIT VILLAGE INFO

router.put('/:village_id/edit-info', (req, res) => {

    const { village_id } = req.params
    const { name, phoneNumber, CCAA, province, profileImg, description, website, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Village
        .findByIdAndUpdate(village_id, { name, phoneNumber, CCAA, province, profileImg, description, website, location }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// PUT --- EDIT VILLAGE FEATURES

router.put('/:village_id/edit-features', (req, res) => {

    const { village_id } = req.params
    const { distanceToCity, residents, averageRentingPrice, averagePurchasePrice, healthService, sportsFacilities, otherServices } = req.body

    Village
        .findByIdAndUpdate(village_id, { features: { distanceToCity, residents, averageRentingPrice, averagePurchasePrice, healthService, sportsFacilities, otherServices } }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



// DELETE --- DELETE VILLAGE
// debe estar protegida solo para ADMIN

router.delete('/:village_id/delete', (req, res) => {
    const { village_id } = req.params

    Village
        .findByIdAndRemove(village_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// PUT --- FOLLOW VILLAGE
router.put('/:village_id/follow', (req, res) => {
    const { village_id } = req.params
    const { user_id } = req.body

    User
        .findByIdAndUpdate(user_id, { $addToSet: { followedVillages: village_id } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// PUT --- UNFOLLOW VILLAGE
router.put('/:village_id/unfollow', (req, res) => {
    const { village_id } = req.params
    const { user_id } = req.body

    User
        .findByIdAndUpdate(user_id, { $pull: { followedVillages: village_id } })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router