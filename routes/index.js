const express = require('express')
const router = express.Router()

const users = require('./users.js')


router.get("/", users.theUsers);
router.get("/:userid", users.params);

router.post("/", users.postUsers);

module.exports = router