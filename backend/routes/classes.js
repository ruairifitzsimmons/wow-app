const express = require('express')
const router = express.Router()
const Class = require('../models/class')

// Getting all
router.get('/', async (req, res) => {
    try {
        const classes = await Class.find()
        res.json(classes)
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})


module.exports = router