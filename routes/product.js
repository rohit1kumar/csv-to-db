const router = require('express').Router()
const { addProduct, getProduct } = require('../controllers/product')
const auth = require('../middleware/auth')

router.post('/product', auth, addProduct)
router.get('/product', auth, getProduct)

module.exports = router