const router = require("express").Router();

router.use("/auth", require('./auth.routes'))
router.use("/houses", require('./houses.routes'))
router.use("/bookings", require('./bookings.routes'))

module.exports = router;
