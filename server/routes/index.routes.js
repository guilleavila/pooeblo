const router = require("express").Router();

router.use("/auth", require('./auth.routes'))
router.use('/villages', require('./villages.routes'))
router.use('/subscriptions', require('./subscriptions.routes'))


module.exports = router;
