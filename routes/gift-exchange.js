const express = require("express")

const router = express.Router()

const voting = {
    pizza: 0,
    cheese: 0,
    chicken: 0
}


router.get("/traditional", async(req, res, next) => {
    res.status(200).json(voting)
})

router.get("/pairs", async(req, res, next) => {
    res.status(200).json.voting
})

module.exports = router