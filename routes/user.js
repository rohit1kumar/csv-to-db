const router = require('express').Router()
const { login, register, findById, findAll } = require('../controllers/user')
const auth = require('../middleware/auth')

router.post('/register', register)

router.post('/login', login)

router.get('/user/:id', auth, findById)

router.get('/user', auth, findAll)


module.exports = router
