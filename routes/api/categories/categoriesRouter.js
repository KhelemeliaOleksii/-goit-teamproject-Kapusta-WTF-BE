const express = require('express')
const categoriesController = require('../../../controllers/categories')

const router = express.Router()

router.get('/categories', (req, res, next) => {
  req.user = { _id: '62e571247f3faf7ed194473e' }; next()
}, categoriesController)

module.exports = router
