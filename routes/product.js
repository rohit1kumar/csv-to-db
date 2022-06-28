const router = require('express').Router()
const { addProduct, getProduct } = require('../controllers/product')
const auth = require('../middleware/auth')
const upload = require('../utils/upload')

//upload the product
router.post('/product', auth, upload, addProduct)

//get all project
router.get('/product', auth, getProduct)

module.exports = router