const router = require('express').Router()
const { login, register, findById, findAll } = require('../controllers/user')
const auth = require('../middleware/auth')

//register the user
router.post('/register', register)

//login the user
router.post('/login', login)

//find user by id
router.get('/user/:id', auth, findById)

//fid all user 
router.get('/user', auth, findAll)


module.exports = router
